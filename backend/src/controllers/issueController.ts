import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Issue, User, Location, StatusLog, Flag } from '../models';
import { Op } from 'sequelize';
import { successResponse, errorResponse, badRequestResponse, notFoundResponse } from '../utils/response';
import { calculateBoundingBox, calculateDistance } from '../utils/geospatial';
import { IssueStatus, IssueCategory } from '../types/enums';
import sequelize from '../config/database';
// Redis and Socket services disabled to resolve connection issues
// import { cacheUtils, cacheKeys, cacheTTL } from '../services/redisService';
// import { emitNewIssue, emitIssueUpdate, emitIssueDelete } from '../services/socketService';
import { getFileUrl } from '../utils/upload';

// Create a new issue
export const createIssue = async (req: Request, res: Response): Promise<Response> => {
  try {
    console.log('createIssue: Request body:', req.body);
    console.log('createIssue: Request files:', req.files);

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error('createIssue: Validation errors:', errors.array());
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const user = (req as any).user;
    const { title, description, category, latitude, longitude, address } = req.body;
    
    // Create location first
    const location = await Location.create({
      latitude,
      longitude,
      address
    });

    // Build photo URLs from uploaded files (preferred) or body (fallback)
    const uploadedFiles = (req.files as Express.Multer.File[]) || [];
    const origin = `${req.protocol}://${req.get('host')}`;
    const filePhotoUrls = uploadedFiles.length > 0
      ? uploadedFiles.map(f => `${origin}${getFileUrl(f.filename)}`)
      : [];

    let bodyPhotoUrls: string[] = [];
    if (req.body.photos) {
      if (Array.isArray(req.body.photos)) {
        bodyPhotoUrls = req.body.photos as string[];
      } else {
        try {
          const parsed = JSON.parse(req.body.photos);
          if (Array.isArray(parsed)) bodyPhotoUrls = parsed;
        } catch {
          if (typeof req.body.photos === 'string') bodyPhotoUrls = [req.body.photos as string];
        }
      }
    }
    const photoUrls = filePhotoUrls.length > 0 ? filePhotoUrls : bodyPhotoUrls;

    // Create issue with the location
    const issue = await Issue.create({
      title,
      description,
      category: category || IssueCategory.OTHER,
      status: IssueStatus.REPORTED,
      reportedBy: user.id,
      locationId: location.id,
      photos: photoUrls
    });

    // Create initial status log
    await StatusLog.create({
      issueId: issue.id,
      userId: user.id,
      oldStatus: null,
      newStatus: IssueStatus.REPORTED,
      comment: 'Issue reported'
    });

    // Fetch the created issue with associations
    const createdIssue = await Issue.findByPk(issue.id, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'username', 'name'] },
        { model: Location, as: 'location' }
      ]
    });
    
    // Socket and Redis operations disabled to resolve connection issues
    // emitNewIssue(createdIssue);
    
    // Clear nearby issues cache
    // await cacheUtils.clearByPattern(cacheKeys.NEARBY_ISSUES_PATTERN);

    return successResponse(res, createdIssue, 'Issue created successfully', 201);
  } catch (error) {
    console.error('Create issue error:', error);
    return errorResponse(res, 'Error creating issue');
  }
};

// Get all issues with pagination and filtering
export const getIssues = async (req: Request, res: Response): Promise<Response> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
    
    // Build filter conditions
    const whereConditions: any = {};
    
    // Filter by status if provided
    if (req.query.status) {
      whereConditions.status = req.query.status;
    }
    
    // Filter by category if provided
    if (req.query.category) {
      whereConditions.category = req.query.category;
    }
    
    // Filter by user if provided
    if (req.query.userId) {
      whereConditions.reportedBy = req.query.userId;
    }
    
    // Search by title or description
    if (req.query.search) {
      whereConditions[Op.or] = [
        { title: { [Op.iLike]: `%${req.query.search}%` } },
        { description: { [Op.iLike]: `%${req.query.search}%` } }
      ];
    }
    
    // Get issues with pagination
    const { count, rows: issues } = await Issue.findAndCountAll({
      where: whereConditions,
      include: [
        { model: User, as: 'user', attributes: ['id', 'username', 'name'] },
        { model: Location, as: 'location' },
        {
          model: Flag,
          as: 'flags',
          include: [{ model: User, as: 'user', attributes: ['id', 'username', 'name'] }]
        }
      ],
      order: [['reportedAt', 'DESC']],
      limit,
      offset
    });
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(count / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return successResponse(res, {
      issues,
      pagination: {
        total: count,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    }, 'Issues retrieved successfully');
  } catch (error) {
    console.error('Get issues error:', error);
    return errorResponse(res, 'Error retrieving issues');
  }
};

// Get issues near a location
export const getNearbyIssues = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { latitude, longitude, radius = 5, page = 1, limit = 20 } = req.query; // radius in km, default 5km
    
    if (!latitude || !longitude) {
      return badRequestResponse(res, 'Latitude and longitude are required');
    }
    
    const lat = parseFloat(latitude as string);
    const lng = parseFloat(longitude as string);
    const radiusKm = parseFloat(radius as string);
    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    
    // Redis caching disabled to resolve connection issues
    // const cacheKey = cacheKeys.nearbyIssues(lat, lng, radiusKm, pageNum, limitNum);
    
    // Direct database query without Redis caching
    const result = async () => {
        const offset = (pageNum - 1) * limitNum;
        
        // Use a single optimized spatial query with ST_DWithin
        // Get total count for pagination
        const { count } = await Issue.findAndCountAll({
          include: [{ 
            model: Location, 
            as: 'location',
            where: sequelize.literal(`ST_DWithin(
              "location"."geom"::geography,
              ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography,
              ${radiusKm * 1000}
            )`)
          }]
        });
        
        // Get paginated issues
        const issues = await Issue.findAll({
          include: [
            { model: User, as: 'user', attributes: ['id', 'username', 'name'] },
            { 
              model: Location, 
              as: 'location',
              where: sequelize.literal(`ST_DWithin(
                "location"."geom"::geography,
                ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography,
                ${radiusKm * 1000}
              )`)
            }
          ],
          order: [['reportedAt', 'DESC']],
          limit: limitNum,
          offset: offset
        });
        
        // Calculate pagination metadata
        const totalPages = Math.ceil(count / limitNum);
        const hasNextPage = pageNum < totalPages;
        const hasPrevPage = pageNum > 1;
        
        return {
          issues,
          pagination: {
            total: count,
            page: pageNum,
            limit: limitNum,
            totalPages,
            hasNextPage,
            hasPrevPage
          }
        }
    };

    // Execute the function directly instead of using Redis
    const resultData = await result();

    return successResponse(res, resultData, 'Nearby issues retrieved successfully');
  } catch (error) {
    console.error('Get nearby issues error:', error);
    return errorResponse(res, 'Error retrieving nearby issues');
  }
};

// Get a single issue by ID
export const getIssueById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    
    const issue = await Issue.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: ['id', 'username', 'name'] },
        { model: Location, as: 'location' },
        { 
          model: StatusLog, 
          as: 'statusLogs',
          include: [{ model: User, as: 'user', attributes: ['id', 'username', 'name'] }],
          order: [['createdAt', 'DESC']]
        },
        {
          model: Flag,
          as: 'flags',
          include: [{ model: User, as: 'user', attributes: ['id', 'username', 'name'] }]
        }
      ]
    });
    
    if (!issue) {
      return notFoundResponse(res, 'Issue not found');
    }
    
    return successResponse(res, issue, 'Issue retrieved successfully');
  } catch (error) {
    console.error('Get issue by ID error:', error);
    return errorResponse(res, 'Error retrieving issue');
  }
};

// Update an issue
export const updateIssue = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }
    
    const { id } = req.params;
    const user = (req as any).user;
    const { title, description, category, status, latitude, longitude, address } = req.body;
    
    // Start a transaction
    const transaction = await sequelize.transaction();
    
    try {
      // Find the issue
      const issue = await Issue.findByPk(id, { transaction });
      
      if (!issue) {
        await transaction.rollback();
        return notFoundResponse(res, 'Issue not found');
      }
      
      // Check if user is authorized to update this issue
      // Only the issue creator or an admin can update it
      if (issue.reportedBy !== user.id && user.role !== 'admin') {
        await transaction.rollback();
        return badRequestResponse(res, 'You are not authorized to update this issue');
      }

      // Update issue
      await issue.update({
        title: title || issue.title,
        description: description || issue.description,
        category: category || issue.category,
        status: status || issue.status,
        // If new images are uploaded, append them to existing ones (as absolute URLs)
        photos: req.files 
          ? [
              ...issue.photos,
              ...(req.files as Express.Multer.File[]).map(file => `${req.protocol}://${req.get('host')}${getFileUrl(file.filename)}`)
            ] 
          : issue.photos
      }, { transaction });
      
      // If status is being updated, create a status log
      if (status && status !== issue.status) {
        await StatusLog.create({
          issueId: issue.id,
          userId: user.id,
          oldStatus: issue.status,
          newStatus: status,
          comment: req.body.statusComment || `Status updated from ${issue.status} to ${status}`
        }, { transaction });
      }
      
      // Update location if provided
      if (latitude && longitude) {
        const location = await Location.findByPk(issue.locationId, { transaction });
        
        if (location) {
          await location.update({
            latitude: latitude || location.latitude,
            longitude: longitude || location.longitude,
            address: address || location.address
          }, { transaction });
        }
      }
      
      // Commit transaction
      await transaction.commit();
      
      // Fetch the updated issue with associations
      const updatedIssue = await Issue.findByPk(id, {
        include: [
          { model: User, as: 'user', attributes: ['id', 'username', 'name'] },
          { model: Location, as: 'location' },
          { 
            model: StatusLog, 
            as: 'statusLogs',
            include: [{ model: User, as: 'user', attributes: ['id', 'username', 'name'] }],
            order: [['createdAt', 'DESC']]
          }
        ]
      });
      
      // Socket and Redis operations disabled to resolve connection issues
      // emitIssueUpdate(updatedIssue);
      
      // Clear nearby issues cache
      // await cacheUtils.clearByPattern(cacheKeys.NEARBY_ISSUES_PATTERN);
      
      return successResponse(res, updatedIssue, 'Issue updated successfully');
    } catch (error) {
      // Rollback transaction on error
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error('Update issue error:', error);
    return errorResponse(res, 'Error updating issue');
  }
};

// Delete an issue
export const deleteIssue = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = (req as any).user;
    
    // Find the issue
    const issue = await Issue.findByPk(id);
    
    if (!issue) {
      return notFoundResponse(res, 'Issue not found');
    }
    
    // Check if user is authorized to delete this issue
    // Only the issue creator or an admin can delete it
    if (issue.reportedBy !== user.id && user.role !== 'admin') {
      return badRequestResponse(res, 'You are not authorized to delete this issue');
    }
    
    // Start a transaction
    const transaction = await sequelize.transaction();
    
    try {
      // Delete related status logs
      await StatusLog.destroy({
        where: { issueId: id },
        transaction
      });
      
      // Delete related flags
      await Flag.destroy({
        where: { issueId: id },
        transaction
      });
      
      // Get location ID before deleting issue
      const locationId = issue.locationId;
      
      // Delete the issue
      await issue.destroy({ transaction });
      
      // Delete the location
      await Location.destroy({
        where: { id: locationId },
        transaction
      });
      
      // Commit transaction
      await transaction.commit();
      
      // Socket and Redis operations disabled to resolve connection issues
      // emitIssueDelete(id);
      
      // Clear nearby issues cache
      // await cacheUtils.clearByPattern(cacheKeys.NEARBY_ISSUES_PATTERN);
      
      return successResponse(res, null, 'Issue deleted successfully');
    } catch (error) {
      // Rollback transaction on error
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error('Delete issue error:', error);
    return errorResponse(res, 'Error deleting issue');
  }
};

// Flag an issue
export const flagIssue = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }
    
    const { id } = req.params;
    const user = (req as any).user;
    const { reason } = req.body;
    
    // Check if issue exists
    const issue = await Issue.findByPk(id);
    
    if (!issue) {
      return notFoundResponse(res, 'Issue not found');
    }
    
    // Check if user has already flagged this issue
    const existingFlag = await Flag.findOne({
      where: {
        issueId: id,
        userId: user.id
      }
    });
    
    if (existingFlag) {
      return badRequestResponse(res, 'You have already flagged this issue');
    }
    
    // Create flag
    const flag = await Flag.create({
      issueId: id,
      userId: user.id,
      reason
    });
    
    return successResponse(res, flag, 'Issue flagged successfully');
  } catch (error) {
    console.error('Flag issue error:', error);
    return errorResponse(res, 'Error flagging issue');
  }
};

// Get user's issues
export const getUserIssues = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = (req as any).user;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
    
    // Get user's issues with pagination
    const { count, rows: issues } = await Issue.findAndCountAll({
      where: { reportedBy: user.id },
      include: [
        { model: Location, as: 'location' }
      ],
      order: [['reportedAt', 'DESC']],
      limit,
      offset
    });
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(count / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return successResponse(res, {
      issues,
      pagination: {
        total: count,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    }, 'User issues retrieved successfully');
  } catch (error) {
    console.error('Get user issues error:', error);
    return errorResponse(res, 'Error retrieving user issues');
  }
};

// Get issue statistics
export const getIssueStatistics = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Count issues by status
    const statusCounts = await Issue.findAll({
      attributes: [
        'status',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count']
      ],
      group: ['status']
    });
    
    // Count issues by category
    const categoryCounts = await Issue.findAll({
      attributes: [
        'category',
        [sequelize.fn('COUNT', sequelize.col('id')), 'count']
      ],
      group: ['category']
    });
    
    // Get recent activity (last 10 status changes)
    const recentActivity = await StatusLog.findAll({
      include: [
        { 
          model: Issue, 
          as: 'issue',
          attributes: ['id', 'title']
        },
        { 
          model: User, 
          as: 'user',
          attributes: ['id', 'username', 'name']
        }
      ],
      order: [['reportedAt', 'DESC']],
      limit: 10
    });
    
    // Format the statistics
    const statistics = {
      byStatus: statusCounts.reduce((acc, curr: any) => {
        acc[curr.status] = parseInt(curr.get('count').toString());
        return acc;
      }, {} as Record<string, number>),
      byCategory: categoryCounts.reduce((acc, curr: any) => {
        acc[curr.category] = parseInt(curr.get('count').toString());
        return acc;
      }, {} as Record<string, number>),
      recentActivity
    };
    
    return successResponse(res, statistics, 'Issue statistics retrieved successfully');
  } catch (error) {
    console.error('Get issue statistics error:', error);
    return errorResponse(res, 'Error retrieving issue statistics');
  }
};

// Resolve a flag
export const resolveFlag = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { flagId } = req.params;
    const user = (req as any).user;
    
    // Check if flag exists
    const flag = await Flag.findByPk(flagId);
    
    if (!flag) {
      return notFoundResponse(res, 'Flag not found');
    }
    
    // Check if flag is already resolved
    if (flag.resolved) {
      return badRequestResponse(res, 'Flag is already resolved');
    }
    
    // Update flag to resolved
    await flag.update({
      resolved: true,
      resolvedAt: new Date()
    });
    
    return successResponse(res, flag, 'Flag resolved successfully');
  } catch (error) {
    console.error('Resolve flag error:', error);
    return errorResponse(res, 'Error resolving flag');
  }
};

// Get saved issues (placeholder: currently returns user's own issues)
export const getSavedIssues = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = (req as any).user;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const { count, rows: issues } = await Issue.findAndCountAll({
      where: { reportedBy: user.id }, // Placeholder: assuming "saved" means "reported by user"
      include: [
        { model: Location, as: 'location' }
      ],
      order: [['reportedAt', 'DESC']],
      limit,
      offset
    });

    const totalPages = Math.ceil(count / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return successResponse(res, {
      issues,
      pagination: {
        total: count,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    }, 'Saved issues retrieved successfully');
  } catch (error) {
    console.error('Get saved issues error:', error);
    return errorResponse(res, 'Error retrieving saved issues');
  }
};
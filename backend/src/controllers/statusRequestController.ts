import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { StatusRequest, Issue, User, StatusLog } from '../models';
import { successResponse, errorResponse, badRequestResponse, notFoundResponse } from '../utils/response';
import { IssueStatus } from '../types/enums';
import sequelize from '../config/database';

// Create a new status change request (for non-admin users)
export const createStatusRequest = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const user = (req as any).user;
    const { id: issueId } = req.params; // Route param is :id, not :issueId
    const { requestedStatus, reason } = req.body;

    // Log request details for debugging
    console.debug('Status request details:', {
      issueId,
      userId: user.id,
      requestedStatus,
      reasonProvided: !!reason,
      reasonLength: reason?.length
    });

    // Additional validation for reason
    if (reason !== undefined && (reason === null || reason === '')) {
      return badRequestResponse(res, 'Validation error', ['reason: Reason cannot be empty if provided']);
    }

    // Check if issue exists
    const issue = await Issue.findByPk(issueId);
    if (!issue) {
      return notFoundResponse(res, 'Issue not found');
    }

    // Prevent requesting the same status
    if (issue.status === requestedStatus) {
      return badRequestResponse(res, 'Requested status is the same as current status');
    }

    // Check if there's already a pending request for this issue by this user
    const existingRequest = await StatusRequest.findOne({
      where: {
        issueId,
        requestedBy: user.id,
        status: 'pending'
      }
    });

    if (existingRequest) {
      return badRequestResponse(res, 'You already have a pending status change request for this issue');
    }

    // Create status request
    const statusRequest = await StatusRequest.create({
      issueId,
      requestedBy: user.id,
      currentStatus: issue.status,
      requestedStatus,
      reason: reason || null, // Ensure null is stored if reason is not provided
      status: 'pending'
    });

    // Fetch created request with associations
    const createdRequest = await StatusRequest.findByPk(statusRequest.id, {
      include: [
        { model: Issue, as: 'issue', attributes: ['id', 'title', 'status'] },
        { model: User, as: 'requester', attributes: ['id', 'username', 'name'] }
      ]
    });

    return successResponse(res, createdRequest, 'Status change request created successfully', 201);
  } catch (error) {
    console.error('Create status request error:', error);
    return errorResponse(res, 'Error creating status request');
  }
};

// Get all status requests (admin only)
export const getStatusRequests = async (req: Request, res: Response): Promise<Response> => {
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
    
    // Get status requests with pagination
    const { count, rows: statusRequests } = await StatusRequest.findAndCountAll({
      where: whereConditions,
      include: [
        { 
          model: Issue, 
          as: 'issue', 
          attributes: ['id', 'title', 'status'],
          include: [{
            model: User,
            as: 'user',
            attributes: ['id', 'username', 'name']
          }]
        },
        { model: User, as: 'requester', attributes: ['id', 'username', 'name'] },
        { model: User, as: 'reviewer', attributes: ['id', 'username', 'name'] }
      ],
      order: [['createdAt', 'DESC']],
      limit,
      offset
    });
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(count / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return successResponse(res, {
      statusRequests,
      pagination: {
        total: count,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    }, 'Status requests retrieved successfully');
  } catch (error) {
    console.error('Get status requests error:', error);
    return errorResponse(res, 'Error retrieving status requests');
  }
};

// Get status requests for a specific issue
export const getIssueStatusRequests = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { issueId } = req.params as any;

    // Check if issue exists
    const issue = await Issue.findByPk(issueId);
    if (!issue) {
      return notFoundResponse(res, 'Issue not found');
    }

    const statusRequests = await StatusRequest.findAll({
      where: { issueId },
      include: [
        { model: User, as: 'requester', attributes: ['id', 'username', 'name'] },
        { model: User, as: 'reviewer', attributes: ['id', 'username', 'name'] }
      ],
      order: [['createdAt', 'DESC']]
    });

    return successResponse(res, statusRequests, 'Issue status requests retrieved successfully');
  } catch (error) {
    console.error('Get issue status requests error:', error);
    return errorResponse(res, 'Error retrieving issue status requests');
  }
};

// Review a status change request (admin only)
export const reviewStatusRequest = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const user = (req as any).user;
    const { id } = req.params;
    const { action, reviewComment } = req.body; // action: 'approve' | 'reject'

    // Start a transaction
    const transaction = await sequelize.transaction();

    try {
      // Find the status request
      const statusRequest = await StatusRequest.findByPk(id, {
        include: [{ model: Issue, as: 'issue' }],
        transaction
      });

      if (!statusRequest) {
        await transaction.rollback();
        return notFoundResponse(res, 'Status request not found');
      }

      if (statusRequest.status !== 'pending') {
        await transaction.rollback();
        return badRequestResponse(res, 'Status request has already been reviewed');
      }

      // Update status request
      await statusRequest.update({
        status: action === 'approve' ? 'approved' : 'rejected',
        reviewedBy: user.id,
        reviewedAt: new Date(),
        reviewComment: reviewComment || null
      }, { transaction });

      // If approved, update the issue status
      const issueInstance = (statusRequest as any).issue as Issue | undefined;
      if (action === 'approve' && issueInstance) {
        await issueInstance.update({
          status: statusRequest.requestedStatus
        }, { transaction });

        // Create status log entry
        await StatusLog.create({
          issueId: statusRequest.issueId,
          userId: user.id,
          oldStatus: statusRequest.currentStatus,
          newStatus: statusRequest.requestedStatus,
          comment: `Status updated via admin approval of request: ${reviewComment || 'No comment'}`
        }, { transaction });
      }

      // Commit transaction
      await transaction.commit();

      // Fetch updated request with associations
      const updatedRequest = await StatusRequest.findByPk(id, {
        include: [
          { 
            model: Issue, 
            as: 'issue', 
            attributes: ['id', 'title', 'status'] 
          },
          { model: User, as: 'requester', attributes: ['id', 'username', 'name'] },
          { model: User, as: 'reviewer', attributes: ['id', 'username', 'name'] }
        ]
      });

      return successResponse(res, updatedRequest, `Status request ${action}d successfully`);
    } catch (error) {
      // Rollback transaction on error
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error('Review status request error:', error);
    return errorResponse(res, 'Error reviewing status request');
  }
};

// Get user's own status requests
export const getUserStatusRequests = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = (req as any).user;

    const statusRequests = await StatusRequest.findAll({
      where: { requestedBy: user.id },
      include: [
        { 
          model: Issue, 
          as: 'issue', 
          attributes: ['id', 'title', 'status'] 
        },
        { model: User, as: 'reviewer', attributes: ['id', 'username', 'name'] }
      ],
      order: [['createdAt', 'DESC']]
    });

    return successResponse(res, statusRequests, 'User status requests retrieved successfully');
  } catch (error) {
    console.error('Get user status requests error:', error);
    return errorResponse(res, 'Error retrieving user status requests');
  }
};
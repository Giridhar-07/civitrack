import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { User } from '../models';
import sequelize from '../config/database';
import { Op } from 'sequelize';
import { generateToken } from '../utils/auth';
import { successResponse, errorResponse, badRequestResponse, unauthorizedResponse } from '../utils/response';
import { getFileUrl } from '../utils/upload';

// Register a new user
export const register = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const { username, name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      return badRequestResponse(res, 'User already exists with this email or username');
    }

    // Create new user
    const user = await User.create({
      username,
      name,
      email,
      password,
      role: 'user',
    });

    // Generate JWT token
    const token = generateToken(user);

    // Return user data (excluding password) and token
    const userData = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };

    return successResponse(res, { user: userData, token }, 'User registered successfully', 201);
  } catch (error) {
    console.error('Registration error:', error);
    return errorResponse(res, 'Error registering user');
  }
};

// Login user
export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      // Consistent 401 response for invalid credentials
      return unauthorizedResponse(res, 'Invalid credentials');
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      // Consistent 401 response for invalid credentials
      return unauthorizedResponse(res, 'Invalid credentials');
    }

    // Generate JWT token
    const token = generateToken(user);

    // Return user data (excluding password) and token
    const userData = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    };

    return successResponse(res, { user: userData, token }, 'Login successful');
  } catch (error) {
    console.error('Login error:', error);
    
    // Enhanced error handling with more specific error messages
    if (error instanceof Error) {
      if (error.name === 'SequelizeConnectionError' || error.name === 'SequelizeConnectionRefusedError') {
        return errorResponse(res, 'Database connection error. Please try again later.', 503);
      }
      
      if (error.name === 'SequelizeTimeoutError') {
        return errorResponse(res, 'Database timeout. Please try again later.', 504);
      }
    }
    
    return errorResponse(res, 'Error during login. Please try again later.', 500);
  }
};

// Get current user profile
export const getCurrentUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = (req as any).user;

    // Return user data (excluding password)
    const userData = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      isAdmin: user.isAdmin,
      profileImage: user.profileImage,
      createdAt: user.createdAt,
    };

    return successResponse(res, userData, 'User profile retrieved successfully');
  } catch (error) {
    console.error('Get current user error:', error);
    return errorResponse(res, 'Error retrieving user profile');
  }
};

// Upload profile image
export const uploadProfileImage = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = (req as any).user.id;
    
    if (!req.file) {
      return badRequestResponse(res, 'No image file provided');
    }
    
    const user = await User.findByPk(userId);
    if (!user) {
      return unauthorizedResponse(res, 'User not found');
    }
    
    // Get the file URL
    const profileImage = getFileUrl(req.file.filename);
    
    // Update user with profile image URL
    await user.update({ profileImage });
    
    return successResponse(res, { profileImage }, 'Profile image updated successfully');
  } catch (error) {
    console.error('Profile image upload error:', error);
    return errorResponse(res, 'Error uploading profile image');
  }
};

// Update user profile
export const updateProfile = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const user = (req as any).user;
    const { name, email, username } = req.body;

    // Check if email or username is already taken (if changing)
    if (email !== user.email || username !== user.username) {
      const existingUser = await User.findOne({
        where: {
          [Op.and]: [
            { id: { [Op.ne]: user.id } },
            {
              [Op.or]: [
                { email: email || '' },
                { username: username || '' }
              ]
            }
          ]
        }
      });

      if (existingUser) {
        return badRequestResponse(res, 'Email or username is already taken');
      }
    }

    // Update user
    await user.update({
      name: name || user.name,
      email: email || user.email,
      username: username || user.username,
    });

    // Return updated user data
    const userData = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    };

    return successResponse(res, userData, 'Profile updated successfully');
  } catch (error) {
    console.error('Update profile error:', error);
    return errorResponse(res, 'Error updating profile');
  }
};

// Change password
export const changePassword = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const user = (req as any).user;
    const { currentPassword, newPassword } = req.body;

    // Verify current password
    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return badRequestResponse(res, 'Current password is incorrect');
    }

    // Update password
    await user.update({ password: newPassword });

    return successResponse(res, null, 'Password changed successfully');
  } catch (error) {
    console.error('Change password error:', error);
    return errorResponse(res, 'Error changing password');
  }
};

// Get all users (admin only)
export const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const offset = (page - 1) * limit;
    
    // Build filter conditions
    const whereConditions: any = {};
    
    // Filter by role if provided
    if (req.query.role) {
      whereConditions.role = req.query.role;
    }
    
    // Search by username, name, or email
    if (req.query.search) {
      whereConditions[Op.or] = [
        { username: { [Op.iLike]: `%${req.query.search}%` } },
        { name: { [Op.iLike]: `%${req.query.search}%` } },
        { email: { [Op.iLike]: `%${req.query.search}%` } }
      ];
    }
    
    // Get users with pagination
    const { count, rows: users } = await User.findAndCountAll({
      where: whereConditions,
      attributes: ['id', 'username', 'name', 'email', 'role', 'isAdmin', 'createdAt'],
      order: [['createdAt', 'DESC']],
      limit,
      offset
    });
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(count / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    return successResponse(res, {
      users,
      pagination: {
        total: count,
        page,
        limit,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    }, 'Users retrieved successfully');
  } catch (error) {
    console.error('Get all users error:', error);
    return errorResponse(res, 'Error retrieving users');
  }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params as { id: string };
    const user = await User.findByPk(id, {
      attributes: ['id', 'username', 'name', 'email', 'role', 'isAdmin', 'createdAt']
    });

    if (!user) {
      return errorResponse(res, 'User not found', 404);
    }

    return successResponse(res, user, 'User retrieved successfully');
  } catch (error) {
    console.error('Get user by ID error:', error);
    return errorResponse(res, 'Error retrieving user');
  }
};

export const updateUserByAdmin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const { id } = req.params as { id: string };
    const { name, email, username, role } = req.body as { name?: string; email?: string; username?: string; role?: string };

    const user = await User.findByPk(id);
    if (!user) {
      return errorResponse(res, 'User not found', 404);
    }

    if ((email && email !== user.email) || (username && username !== user.username)) {
      const existingUser = await User.findOne({
        where: {
          [Op.and]: [
            { id: { [Op.ne]: id } },
            {
              [Op.or]: [
                { email: email || '' },
                { username: username || '' }
              ]
            }
          ]
        }
      });

      if (existingUser) {
        return badRequestResponse(res, 'Email or username is already taken');
      }
    }

    await user.update({
      name: name ?? user.name,
      email: email ?? user.email,
      username: username ?? user.username,
      role: role ?? user.role,
      isAdmin: role ? role === 'admin' : user.isAdmin
    });

    const userData = {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
      isAdmin: user.isAdmin,
      createdAt: user.createdAt,
    };

    return successResponse(res, userData, 'User updated successfully');
  } catch (error) {
    console.error('Admin update user error:', error);
    return errorResponse(res, 'Error updating user');
  }
};

export const deleteUserByAdmin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return badRequestResponse(res, 'Validation error', errors.array().map(err => err.msg));
    }

    const { id } = req.params as { id: string };

    const user = await User.findByPk(id);
    if (!user) {
      return errorResponse(res, 'User not found', 404);
    }

    // Optional: prevent deleting self
    const currentUser = (req as any).user;
    if (currentUser && currentUser.id === id) {
      return badRequestResponse(res, 'You cannot delete your own account');
    }

    await user.destroy();
    return successResponse(res, null, 'User deleted successfully');
  } catch (error) {
    console.error('Admin delete user error:', error);
    return errorResponse(res, 'Error deleting user');
  }
};
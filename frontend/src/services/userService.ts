import api from './api';
import { User } from '../types';

export interface AdminGetUsersParams {
  page?: number;
  limit?: number;
  role?: string;
  search?: string;
}

export interface AdminGetUsersResponse {
  users: User[];
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
  };
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  role?: string;
  status?: string;
}

const userService = {
  // Admin: get all users with pagination and optional filters
  adminGetUsers: async (params?: AdminGetUsersParams): Promise<AdminGetUsersResponse> => {
    try {
      const response = await api.get<AdminGetUsersResponse>('/auth/admin/users', { 
        params,
        // Ensure request doesn't timeout too quickly for potentially large user lists
        timeout: 15000
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      // Return empty response with default pagination to prevent UI breakage
      return {
        users: [],
        pagination: {
          totalItems: 0,
          totalPages: 0,
          currentPage: params?.page || 1,
          itemsPerPage: params?.limit || 20
        }
      };
    }
  },

  // Update user (admin only)
  updateUser: async (userId: string, userData: UpdateUserData): Promise<User> => {
    try {
      if (!userId) throw new Error('User ID is required');
      const response = await api.put<User>(`/auth/admin/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user ${userId}:`, error);
      throw new Error(`Failed to update user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },

  // Delete user (admin only)
  deleteUser: async (userId: string): Promise<void> => {
    try {
      if (!userId) throw new Error('User ID is required');
      await api.delete(`/auth/admin/users/${userId}`);
    } catch (error) {
      console.error(`Error deleting user ${userId}:`, error);
      throw new Error(`Failed to delete user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  },
  
  // Get single user by ID (admin only)
  getUserById: async (userId: string): Promise<User> => {
    try {
      if (!userId) throw new Error('User ID is required');
      const response = await api.get<User>(`/auth/admin/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user ${userId}:`, error);
      throw new Error(`Failed to fetch user: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
};

export default userService;
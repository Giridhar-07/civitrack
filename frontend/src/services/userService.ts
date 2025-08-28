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
  pagination: any;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
  role?: string;
}

const userService = {
  // Admin: get all users with pagination and optional filters
  adminGetUsers: async (params?: AdminGetUsersParams): Promise<AdminGetUsersResponse> => {
    const response = await api.get<AdminGetUsersResponse>('/users/admin', { params });
    return response.data as unknown as AdminGetUsersResponse;
  },

  // Update user (admin only)
  updateUser: async (userId: string, userData: UpdateUserData): Promise<User> => {
    const response = await api.put<User>(`/users/${userId}`, userData);
    return response.data;
  },

  // Delete user (admin only)
  deleteUser: async (userId: string): Promise<void> => {
    await api.delete(`/users/${userId}`);
  }
};

export default userService;
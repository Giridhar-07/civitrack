import api from './api';
import { Issue, Location, IssueStatus, IssueCategory } from '../types';

export interface IssueFormData {
  title: string;
  description: string;
  category: IssueCategory;
  location: Location;
  photos?: File[];
}

export interface IssueFilterParams {
  category?: IssueCategory;
  status?: IssueStatus;
  distance?: number;
  latitude?: number;
  longitude?: number;
  // Additional backend-supported filters
  search?: string;
  page?: number;
  limit?: number;
  userId?: string;
}

// Function for infinite scroll with pagination
export const getIssuesNearby = async (
  latitude: number, 
  longitude: number, 
  radius: number = 5, 
  page: number = 1, 
  limit: number = 20
): Promise<{
  data: Issue[];
  pagination: {
    total: number;
    hasNextPage: boolean;
  }
}> => {
  try {
    const response = await api.get('/issues/nearby', {
      params: { latitude, longitude, radius, page, limit }
    });
    return {
      data: (response.data as { issues: Issue[] }).issues,
      pagination: (response.data as { pagination: { total: number; hasNextPage: boolean } }).pagination
    };
  } catch (error) {
    throw error;
  }
};

const issueService = {
  getAllIssues: async (filters?: IssueFilterParams): Promise<Issue[]> => {
    try {
      const response = await api.get<{ issues: Issue[]; pagination: any }>('\/issues', { 
        params: filters,
        timeout: 15000 // Increase timeout for potentially slow queries
      });
      
      // Validate response data structure
      if (!response.data || !Array.isArray(response.data.issues)) {
        console.error('Invalid response format from issues endpoint:', response.data);
        return []; // Return empty array instead of throwing to prevent UI breakage
      }
      
      return response.data.issues;
    } catch (error) {
      console.error('Error fetching issues:', error);
      // Return empty array instead of throwing to prevent UI breakage
      return [];
    }
  },

  // New: fetch issues with pagination metadata (does not break existing getAllIssues callers)
  getIssuesWithMeta: async (
    filters?: IssueFilterParams
  ): Promise<{ issues: Issue[]; pagination: any }> => {
    try {
      const response = await api.get<{ issues: Issue[]; pagination: any }>('\/issues', { 
        params: filters,
        timeout: 15000 // Increase timeout for potentially slow queries
      });
      
      // Validate response data structure
      if (!response.data || !Array.isArray(response.data.issues)) {
        console.error('Invalid response format from issues endpoint:', response.data);
        // Return valid empty structure instead of throwing
        return { 
          issues: [], 
          pagination: { total: 0, page: 1, limit: filters?.limit || 20, pages: 0 } 
        };
      }
      
      return response.data;
    } catch (error) {
      console.error('Error fetching issues with metadata:', error);
      // Return valid empty structure instead of throwing
      return { 
        issues: [], 
        pagination: { total: 0, page: 1, limit: filters?.limit || 20, pages: 0 } 
      };
    }
  },

  getIssueById: async (id: string): Promise<Issue> => {
    try {
      const response = await api.get<Issue>(`\/issues\/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createIssue: async (issueData: IssueFormData): Promise<Issue> => {
    try {
      // Create FormData for file uploads
      const formData = new FormData();
      formData.append('title', issueData.title);
      formData.append('description', issueData.description);
      formData.append('category', issueData.category);
      // Append location fields individually to match backend validation
      const { latitude, longitude, address } = issueData.location;
      formData.append('latitude', String(latitude));
      formData.append('longitude', String(longitude));
      // Ensure address is provided (fallback to lat,lng string if missing)
      const safeAddress = address && address.trim().length >= 5 
        ? address 
        : `${Number(latitude).toFixed(6)}, ${Number(longitude).toFixed(6)}`;
      formData.append('address', safeAddress);
      
      // Append photos if any
      if (issueData.photos && issueData.photos.length > 0) {
        issueData.photos.forEach((photo) => {
          formData.append(`photos`, photo);
        });
      }

      const response = await api.post<Issue>('\/issues', formData, {
        headers: {
          'Content-Type': 'multipart\/form-data'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateIssueStatus: async (id: string, status: IssueStatus, comment?: string): Promise<Issue> => {
    try {
      const response = await api.put<Issue>(`\/issues\/${id}`, { 
        status, 
        statusComment: comment 
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  flagIssue: async (id: string, reason: string): Promise<Issue> => {
    try {
      // Validate input before making API call
      if (!reason || reason.trim() === '') {
        throw {
          response: {
            data: {
              message: 'Validation error',
              statusCode: 400,
              errors: ['Reason is required']
            }
          }
        };
      }
      
      const response = await api.post<Issue>(`/issues/${id}/flag`, { reason });
      return response.data;
    } catch (error: any) {
      // Handle validation errors specifically
      if (error.response?.data?.statusCode === 400) {
        console.error('Validation error when flagging issue:', error.response.data);
        throw {
          ...error,
          isValidationError: true,
          validationErrors: error.response?.data?.errors || ['Invalid input provided']
        };
      }
      throw error;
    }
  },

  resolveFlag: async (flagId: string): Promise<any> => {
    try {
      const response = await api.put(`/issues/flags/${flagId}/resolve`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getIssuesByUser: async (): Promise<Issue[]> => {
    try {
      // Check if we're online before making the request
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        console.warn('Device is offline, returning empty user issues array');
        return [];
      }
      
      const response = await api.get<{ issues: Issue[]; pagination: any }>('\/issues\/user\/me');
      return response.data.issues || [];
    } catch (error: any) {
      // Log the error with more details
      console.error('Error fetching user issues:', error);
      
      // Return empty array for network errors instead of throwing
      if (error.message?.includes('Network') || error.code === 'ECONNABORTED' || !navigator.onLine || error.isNetworkError) {
        console.warn('Network error when fetching user issues, returning empty array');
        return [];
      }
      throw error;
    }
  },
  
  getSavedIssues: async (): Promise<Issue[]> => {
    try {
      // Check if we're online before making the request
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        console.warn('Device is offline, returning empty saved issues array');
        return [];
      }
      
      const response = await api.get<{ issues: Issue[]; pagination: any }>('\/issues\/saved');
      return response.data.issues || [];
    } catch (error: any) {
      // Log the error with more details
      console.error('Error fetching saved issues:', error);
      
      // Return empty array for network errors instead of throwing
      if (error.message?.includes('Network') || error.code === 'ECONNABORTED' || !navigator.onLine || error.isNetworkError) {
        console.warn('Network error when fetching saved issues, returning empty array');
        return [];
      }
      
      // For other errors, return empty array to prevent UI breakage
      return [];
    }
  },
  
  saveIssue: async (issueId: string): Promise<any> => {
    try {
      const response = await api.post(`/issues/${issueId}/save`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  unsaveIssue: async (issueId: string): Promise<any> => {
    try {
      const response = await api.delete(`/issues/${issueId}/save`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getNearbyIssues: async (latitude: number, longitude: number, radius: number = 5): Promise<Issue[]> => {
    try {
      const response = await api.get<{ issues: Issue[]; pagination: any }>('\/issues\/nearby', {
        params: { latitude, longitude, radius }
      });
      return response.data.issues;
    } catch (error) {
      throw error;
    }
  },

  // New method with pagination support for infinite scroll
  getIssuesNearby: async (
    latitude: number, 
    longitude: number, 
    radius: number = 5, 
    page: number = 1, 
    limit: number = 20
  ): Promise<{
    data: Issue[];
    pagination: {
      total: number;
      hasNextPage: boolean;
    };
  }> => {
    try {
      const response = await api.get<{
        issues: Issue[];
        pagination: {
          total: number;
          page: number;
          limit: number;
          pages: number;
        };
      }>('\/issues\/nearby', {
        params: { latitude, longitude, radius, page, limit }
      });
      
      return {
        data: response.data.issues,
        pagination: {
          total: response.data.pagination.total,
          hasNextPage: page < response.data.pagination.pages
        }
      };
    } catch (error) {
      throw error;
    }
  }
};

export default issueService;
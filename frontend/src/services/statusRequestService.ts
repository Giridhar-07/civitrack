import api from './api';
import { IssueStatus } from '../types';

// Helper function to log API errors with context
const logApiError = (endpoint: string, error: any) => {
  console.error(`Status Request API Error (${endpoint}):`, error);
  console.debug('API Base URL:', api.defaults?.baseURL);
  return error;
};

export type StatusRequestAction = 'approve' | 'reject';
export type StatusRequestState = 'pending' | 'approved' | 'rejected';

export interface StatusRequest {
  id: string;
  issueId: string;
  requestedBy: string;
  currentStatus: IssueStatus | string;
  requestedStatus: IssueStatus | string;
  reason?: string;
  status: StatusRequestState;
  reviewedBy?: string | null;
  reviewedAt?: string | Date | null;
  reviewComment?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  // Optional expanded relations
  issue?: any;
  requester?: any;
  reviewer?: any;
}

const statusRequestService = {
  // Create a status change request for a specific issue
  requestStatusChange: async (
    issueId: string,
    requestedStatus: IssueStatus,
    reason?: string
  ): Promise<StatusRequest> => {
    try {
      console.debug('Requesting status change:', { issueId, requestedStatus, reason });
      const response = await api.post<StatusRequest>(`/status-requests/issue/${issueId}`, {
        requestedStatus,
        reason
      });
      return response.data as unknown as StatusRequest;
    } catch (error) {
      throw logApiError('requestStatusChange', error);
    }
  },

  // Get status requests for a specific issue (public)
  getIssueStatusRequests: async (issueId: string): Promise<StatusRequest[]> => {
    try {
      const response = await api.get<StatusRequest[]>(`/status-requests/issue/${issueId}`);
      return response.data as unknown as StatusRequest[];
    } catch (error) {
      throw logApiError('getIssueStatusRequests', error);
    }
  },

  // Get current user's status requests
  getMyStatusRequests: async (): Promise<StatusRequest[]> => {
    try {
      const response = await api.get<StatusRequest[]>(`/status-requests/user/me`);
      return response.data as unknown as StatusRequest[];
    } catch (error) {
      throw logApiError('getMyStatusRequests', error);
    }
  },

  // Admin: list all status requests
  adminGetStatusRequests: async (params?: { page?: number; limit?: number; status?: StatusRequestState }): Promise<{ statusRequests: StatusRequest[]; pagination: any; }> => {
    try {
      const response = await api.get<{ statusRequests: StatusRequest[]; pagination: any }>(`/status-requests`, { params });
      return response.data;
    } catch (error) {
      throw logApiError('adminGetStatusRequests', error);
    }
  },

  // Admin: review a status request
  adminReviewStatusRequest: async (
    id: string,
    action: StatusRequestAction,
    reviewComment?: string
  ): Promise<StatusRequest> => {
    try {
      const response = await api.put<StatusRequest>(`/status-requests/${id}/review`, {
        action,
        reviewComment
      });
      return response.data as unknown as StatusRequest;
    } catch (error) {
      throw logApiError('adminReviewStatusRequest', error);
    }
  }
};

export default statusRequestService;
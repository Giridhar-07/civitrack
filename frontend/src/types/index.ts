// Define types for the application

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  isAdmin?: boolean;
  profileImage?: string;
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: string;
  status: IssueStatus;
  location: Location;
  photos: string[];
  reportedBy: string;
  reportedAt: Date;
  updatedAt: Date;
  flags?: Flag[];
  statusLogs?: StatusLog[];
  user?: User; // reporter user (included by backend)
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  locationName?: string;
}

export interface Flag {
  id: string;
  reason: string;
  resolved: boolean;
  resolvedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  user?: User; // The user who flagged this issue
}

export interface StatusLog {
  id: string;
  status: IssueStatus;
  changedBy: string;
  changedAt: Date;
  comment?: string;
}

export enum IssueStatus {
  REPORTED = 'reported',
  UNDER_REVIEW = 'under_review',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed'
}

export enum IssueCategory {
  ROAD = 'road',
  WATER = 'water',
  ELECTRICITY = 'electricity',
  WASTE = 'waste',
  SAFETY = 'safety',
  OTHER = 'other'
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface IssueState {
  issues: Issue[];
  currentIssue: Issue | null;
  loading: boolean;
  error: string | null;
}

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
// Import necessary modules and types
import { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import mockService from './mockService';
import { extractErrorMessage } from '../utils/apiErrorHandler';
import { createRetryableAxiosInstance } from '../utils/apiRetry';

// Check if we should use mock service
export const USE_MOCK_SERVICE: boolean = false; // Set to false to use real backend
console.log('Using mock service:', USE_MOCK_SERVICE);

// Resolve API base URL securely across environments
const resolveApiBaseUrl = (): string => {
  const envUrl = process.env.REACT_APP_API_URL?.trim();
  if (envUrl) {
    return envUrl;
  }
  // In local dev, frontend runs on :3000 and backend on :5000 by default
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    const isLocal3000 = origin.includes('localhost:3000') || origin.includes('127.0.0.1:3000');
    if (isLocal3000) {
      return 'http://localhost:5000/api';
    }
    // Same-origin fallback (use reverse proxy or server-side /api)
    return `${origin.replace(/\/$/, '')}/api`;
  }
  // SSR or unknown environment fallback
  return 'http://localhost:5000/api';
};

export const BASE_URL = resolveApiBaseUrl();
console.log('API base URL resolved to:', BASE_URL);

// Create a retryable axios instance with improved retry configuration
const axiosInstance: AxiosInstance = createRetryableAxiosInstance({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  timeout: 15000, // 15 seconds timeout
  timeoutErrorMessage: 'Request timed out. Please try again.'
}, {
  // Custom retry configuration
  maxRetries: 3,
  initialDelayMs: 1000,
  backoffFactor: 1.5,
  maxDelayMs: 10000,
  retryStatusCodes: [408, 429, 500, 502, 503, 504],
  retryNetworkErrors: true
});

// Helper to normalize API responses (unwrap backend { success, message, data })
const unwrap = <T>(response: AxiosResponse<any, any>): T => {
  const resData = response?.data;
  // If backend wraps payload as { success, message, data }, return inner data
  if (resData && typeof resData === 'object' && 'success' in resData && resData.success && 'data' in resData) {
    return (resData.data as T);
  }
  // Otherwise, return as-is
  return (resData as T);
};

// Create a mock API adapter with proper type handling
const mockApi = {
  get: async <T>(url: string, config?: any): Promise<{ data: T }> => {
    console.log(`Mock GET request to ${url}`);
    if (url === '/auth/me') {
      const user = await mockService.getCurrentUser();
      return { data: user as T };
    }
    if (url === '/issues/nearby') {
      const { latitude, longitude, radius } = (config?.params || {});
      const latNum = typeof latitude === 'string' ? parseFloat(latitude) : latitude;
      const lonNum = typeof longitude === 'string' ? parseFloat(longitude) : longitude;
      const radNum = radius !== undefined ? (typeof radius === 'string' ? parseFloat(radius) : radius) : 5;
      const issues = await mockService.getNearbyIssues(latNum, lonNum, radNum);
      return { data: issues as any as T };
    }
    throw new Error(`Unhandled mock GET request to ${url}`);
  },
  post: async <T>(url: string, data?: any, config?: any): Promise<{ data: T }> => {
    console.log(`Mock POST request to ${url}`);
    if (url === '/auth/login') {
      const response = await mockService.login(data.email, data.password);
      // mockService returns { token, user }
      return { data: (response as any) as T };
    }
    if (url.startsWith('/issues/') && url.endsWith('/flag')) {
      const id = url.split('/')[2];
      const response = await mockService.flagIssue(id, data.reason);
      return { data: response as T };
    }
    throw new Error(`Unhandled mock POST request to ${url}`);
  },
  put: async <T>(url: string, data?: any, config?: any): Promise<{ data: T }> => {
    console.log(`Mock PUT request to ${url}`);
    throw new Error(`Unhandled mock PUT request to ${url}`);
  },
  patch: async <T>(url: string, data?: any, config?: any): Promise<{ data: T }> => {
    console.log(`Mock PATCH request to ${url}`);
    throw new Error(`Unhandled mock PATCH request to ${url}`);
  },
  delete: async <T>(url: string, config?: any): Promise<{ data: T }> => {
    console.log(`Mock DELETE request to ${url}`);
    throw new Error(`Unhandled mock DELETE request to ${url}`);
  }
};

// Define the API interface
interface ApiInterface {
  get: <T>(url: string, config?: any) => Promise<{ data: T }>;
  post: <T>(url: string, data?: any, config?: any) => Promise<{ data: T }>;
  put: <T>(url: string, data?: any, config?: any) => Promise<{ data: T }>;
  patch: <T>(url: string, data?: any, config?: any) => Promise<{ data: T }>;
  delete: <T>(url: string, config?: any) => Promise<{ data: T }>;
}

// Create the API instance with performance optimizations
// API endpoint validation map to prevent 404 errors
const VALID_API_ENDPOINTS = {
  // Auth endpoints
  '/auth/login': ['POST'],
  '/auth/register': ['POST'],
  '/auth/logout': ['POST'],
  '/auth/me': ['GET'],
  '/auth/refresh': ['POST'],
  // Removed deprecated '/auth/password' in favor of '/auth/change-password'
   '/auth/change-password': ['PUT'],
   '/auth/profile': ['GET' , 'PUT'],
   '/auth/profile/image': ['POST'],
   '/auth/admin/users': ['GET'],
   '/auth/admin/roles': ['GET'],
   '/auth/admin/users/:id': ['GET', 'PUT', 'DELETE'],
   '/auth/admin/roles/:id': ['PUT', 'DELETE'],
   '/auth/admin/users/:id/roles': ['POST'],
   '/auth/admin/users/:id/roles/:roleId': ['DELETE'],
   '/auth/admin/roles/:id/users/:userId': ['DELETE'],
   '/auth/admin/users/status-requests': ['GET'],
   
  // User endpoints
  //'/users': ['GET'],
  //'/users/:id': ['GET', 'PUT', 'DELETE'],
  // Deprecated direct /users endpoints; use /auth/admin/users instead
  // User endpoints handled under /auth/admin/users
   
  // Issue endpoints
  '/issues': ['GET', 'POST'],
  '/issues/nearby': ['GET'],
  '/issues/user/me': ['GET'],
  '/issues/:id': ['GET', 'PUT', 'DELETE'],
  '/issues/:id/flag': ['POST'],
  '/issues/flags/:flagId/resolve': ['PUT'],
  '/issues/:id/comments': ['GET', 'POST'],
  '/issues/:id/photos': ['GET','POST'],
  
 // Status Request endpoints
 '/status-requests': ['GET'],
 '/status-requests/issue/:id': ['GET', 'POST'],
 '/status-requests/user/me': ['GET'],
 '/status-requests/:id/review': ['PUT'],
 
  // Map endpoints
  '/map/layers': ['GET'],
  '/map/markers': ['GET'],
  
  // AI endpoints
  '/ai/chat': ['POST'],
  '/ai/analyze': ['POST'],
  '/ai/health': ['GET'],
  '/ai/quick-help': ['GET']
};

// Validate if an endpoint exists in our API
const validateEndpoint = (url: string, method: string): boolean => {
  // Extract the base path without query parameters
  const basePath = url.split('?')[0];
  
  // Check exact matches first
  if (basePath in VALID_API_ENDPOINTS && (VALID_API_ENDPOINTS as Record<string, string[]>)[basePath].includes(method.toUpperCase())) {
    return true;
  }
  
  // Check for parameterized routes (e.g., /auth/admin/users/:id)
  const urlParts = basePath.split('/').filter(Boolean);
  
  for (const endpoint in VALID_API_ENDPOINTS) {
    const endpointParts = endpoint.split('/').filter(Boolean);
    
    // Skip if parts length doesn't match
    if (urlParts.length !== endpointParts.length) continue;
    
    let isMatch = true;
    for (let i = 0; i < endpointParts.length; i++) {
      // If part starts with :, it's a parameter, so it matches anything
      if (endpointParts[i].startsWith(':')) continue;
      
      // Otherwise, parts must match exactly
      if (endpointParts[i] !== urlParts[i]) {
        isMatch = false;
        break;
      }
    }
    
    if (isMatch && (VALID_API_ENDPOINTS as Record<string, string[]>)[endpoint].includes(method.toUpperCase())) {
      return true;
    }
  }
  
  return false;
};

const api: ApiInterface = USE_MOCK_SERVICE ? mockApi : {
  get: async <T>(url: string, config?: any) => {
    // Validate endpoint before making request
    if (!validateEndpoint(url, 'GET')) {
      console.error(`Invalid API endpoint: GET ${url}`);
      throw new Error(`Invalid API endpoint: GET ${url}. This endpoint does not exist or is not accessible.`);
    }
    
    try {
      const response = await axiosInstance.get<T>(url, config);
      return { data: unwrap<T>(response) };
    } catch (error: any) {
      if (error.statusCode === 404) {
        console.error(`API endpoint not found: GET ${url}`);
        throw new Error(`The requested resource was not found: ${url}`);
      }
      throw error;
    }
  },
  
  post: async <T>(url: string, data?: any, config?: any) => {
    // Validate endpoint before making request
    if (!validateEndpoint(url, 'POST')) {
      console.error(`Invalid API endpoint: POST ${url}`);
      throw new Error(`Invalid API endpoint: POST ${url}. This endpoint does not exist or is not accessible.`);
    }
    
    try {
      const response = await axiosInstance.post<T>(url, data, config);
      return { data: unwrap<T>(response) };
    } catch (error: any) {
      if (error.statusCode === 404) {
        console.error(`API endpoint not found: POST ${url}`);
        throw new Error(`The requested resource was not found: ${url}`);
      }
      throw error;
    }
  },
  
  put: async <T>(url: string, data?: any, config?: any) => {
    // Validate endpoint before making request
    if (!validateEndpoint(url, 'PUT')) {
      console.error(`Invalid API endpoint: PUT ${url}`);
      throw new Error(`Invalid API endpoint: PUT ${url}. This endpoint does not exist or is not accessible.`);
    }
    
    try {
      const response = await axiosInstance.put<T>(url, data, config);
      return { data: unwrap<T>(response) };
    } catch (error: any) {
      if (error.statusCode === 404) {
        console.error(`API endpoint not found: PUT ${url}`);
        throw new Error(`The requested resource was not found: ${url}`);
      }
      throw error;
    }
  },
  
  patch: async <T>(url: string, data?: any, config?: any) => {
    // Validate endpoint before making request
    if (!validateEndpoint(url, 'PATCH')) {
      console.error(`Invalid API endpoint: PATCH ${url}`);
      throw new Error(`Invalid API endpoint: PATCH ${url}. This endpoint does not exist or is not accessible.`);
    }
    
    try {
      const response = await axiosInstance.patch<T>(url, data, config);
      return { data: unwrap<T>(response) };
    } catch (error: any) {
      if (error.statusCode === 404) {
        console.error(`API endpoint not found: PATCH ${url}`);
        throw new Error(`The requested resource was not found: ${url}`);
      }
      throw error;
    }
  },
  
  delete: async <T>(url: string, config?: any) => {
    // Validate endpoint before making request
    if (!validateEndpoint(url, 'DELETE')) {
      console.error(`Invalid API endpoint: DELETE ${url}`);
      throw new Error(`Invalid API endpoint: DELETE ${url}. This endpoint does not exist or is not accessible.`);
    }
    
    try {
      const response = await axiosInstance.delete<T>(url, config);
      return { data: unwrap<T>(response) };
    } catch (error: any) {
      if (error.statusCode === 404) {
        console.error(`API endpoint not found: DELETE ${url}`);
        throw new Error(`The requested resource was not found: ${url}`);
      }
      throw error;
    }
  }
};

// Add request interceptors for authentication and logging
if (!USE_MOCK_SERVICE) {
  // Request interceptor for adding auth token
  axiosInstance.interceptors.request.use(
    (config: any): any => {
      // Add authentication token to headers
      const token = localStorage.getItem('token');
      if (token) {
        if (!config.headers) {
          config.headers = {};
        }
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      // Log outgoing requests in development environment
      if (process.env.NODE_ENV === 'development') {
        console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`, config);
      }
      
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      console.error('Request interceptor error:', error);
      return Promise.reject(error);
    }
  );

  // Response interceptor for handling common response scenarios
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      // Log successful responses in development environment
      if (process.env.NODE_ENV === 'development') {
        console.log(`API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, response);
      }
      return response;
    },
    (error: any): Promise<never> => {
      // Use our error handler utility to extract a standardized error message
      const errorResponse = extractErrorMessage(error);
      
      // Enhanced network error detection with better handling
      const isNetworkError = !error.response || 
        (error as any).code === 'ECONNABORTED' || 
        errorResponse.errorCode === 'NETWORK_ERROR' || 
        errorResponse.errorCode === 'TIMEOUT_ERROR' ||
        errorResponse.errorCode === 'OFFLINE_ERROR' ||
        error.message?.includes('Network Error') ||
        error.message?.includes('Failed to fetch') ||
        error.message?.includes('connection') ||
        error.message?.includes('timeout') ||
        error.message?.includes('abort') ||
        (typeof navigator !== 'undefined' && !navigator.onLine);
        
      // Provide more specific error messages for network issues
      if (isNetworkError) {
        errorResponse.message = 'Network connection issue. Please check your internet connection and try again.';
        errorResponse.errorCode = 'NETWORK_ERROR';
      }
      
      // Handle authentication errors (401) specially
      if (errorResponse.statusCode === 401) {
        // Identify request type
        const url = error.config?.url || '';
        const isAuthMeRequest = url.includes('/auth/me');
        const isLoginRequest = url.includes('/auth/login');
        const isRegisterRequest = url.includes('/auth/register');
        const isAiRequest = url.includes('/ai/');
        
        // Clear token and redirect to login only for relevant endpoints
        // Do not logout for /auth/me, AI endpoints, network errors, or login/register requests
        if (!isAuthMeRequest && !isAiRequest && !isNetworkError && !isLoginRequest && !isRegisterRequest) {
          console.log('API: Authentication error on protected endpoint, clearing token and redirecting to login');
          localStorage.removeItem('token');
          
          // Dispatch a storage event to notify other components about the token change
          if (typeof window !== 'undefined') {
            // Create and dispatch a storage event to notify other components
            window.dispatchEvent(new StorageEvent('storage', {
              key: 'token',
              newValue: null,
              oldValue: 'removed-token',
              storageArea: localStorage
            }));
            
            // Redirect to login page after a short delay to allow the event to be processed
            setTimeout(() => {
              window.location.href = '/login';
            }, 100);
          }
        }
      }
      
      // Improve error messages for better user experience
      if (errorResponse.message === 'An unexpected error occurred. Please try again.') {
        // Check for specific error types and provide more helpful messages
        if (error.response?.status === 500) {
          errorResponse.message = 'The server encountered an error. Our team has been notified.';
        } else if (error.response?.status === 404) {
          errorResponse.message = 'The requested resource could not be found.';
        } else if (error.response?.status === 403) {
          errorResponse.message = 'You do not have permission to access this resource.';
        }
      }
      
      // Enhanced network error detection
      if (!error.response || error.code === 'ECONNABORTED' || error.message?.includes('Network') || !navigator.onLine) {
        errorResponse.message = 'Network connection issue. Please check your internet connection and try again.';
        errorResponse.errorCode = 'NETWORK_ERROR';
        errorResponse.isNetworkError = true;
      }
      
      // Log all errors in development environment with readable message
      if (process.env.NODE_ENV === 'development') {
        console.error('API Error:', errorResponse.message, {
          processedError: errorResponse,
          originalError: error
        });
      }
      
      // Return a rejected promise with our standardized error
      return Promise.reject(errorResponse);
    }
  );
}

// Export the appropriate API based on the USE_MOCK_SERVICE flag
export default api;

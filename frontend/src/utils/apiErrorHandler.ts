import { AxiosError } from 'axios';
import { isNetworkError } from './networkUtils';

/**
 * Interface for standardized API error response
 */
export interface ApiErrorResponse {
  message: string;
  statusCode?: number;
  errorCode?: string;
  fieldErrors?: Record<string, string[]>;
  isNetworkError?: boolean;
  // New: explicit flag to indicate unverified email case (403)
  isUnverifiedEmail?: boolean;
}

/**
 * Extracts a user-friendly error message from an Axios error
 * @param error - The error object from an API request
 * @returns A standardized error response object
 */
export const extractErrorMessage = (error: unknown): ApiErrorResponse => {
  // Default error message
  const defaultError: ApiErrorResponse = {
    message: 'An unexpected error occurred. Please try again.',
  };

  // If not an error object, return default
  if (!error) {
    return defaultError;
  }

  // Handle Axios errors
  if (isAxiosError(error)) {
    // Get response data if available
    const responseData = error.response?.data;
    const status = error.response?.status;

    // If response has data with error information
    if (responseData) {
      // Handle different error response formats
      if (typeof responseData === 'string') {
        const msg = responseData;
        const isUnverified = status === 403 && typeof msg === 'string' && (msg.toLowerCase().includes('not verified') || msg.toLowerCase().includes('verify'));
        return { 
          message: msg, 
          statusCode: status, 
          ...(isUnverified ? { isUnverifiedEmail: true, errorCode: 'EMAIL_NOT_VERIFIED' } : {})
        };
      }
      
      // Handle structured error responses
      if ((responseData as any)?.message || (responseData as any)?.error) {
        const rawMessage = (responseData as any).message || (responseData as any).error;
        const msg = typeof rawMessage === 'string' ? rawMessage : 'An error occurred.';
        const code = (responseData as any).code || (responseData as any).errorCode;
        const isUnverified = status === 403 && msg && (msg.toLowerCase().includes('not verified') || msg.toLowerCase().includes('verify'));
        return {
          message: msg,
          statusCode: status,
          errorCode: isUnverified ? 'EMAIL_NOT_VERIFIED' : code,
          fieldErrors: (responseData as any).fieldErrors || (responseData as any).errors,
          ...(isUnverified ? { isUnverifiedEmail: true } : {})
        };
      }
    }

    // Check for offline status first
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      return {
        message: 'You are currently offline. Please check your internet connection and try again.',
        errorCode: 'OFFLINE_ERROR'
      };
    }
    
    // Handle network errors using our utility function
    if (isNetworkError(error)) {
      // Differentiate between timeout and other network errors
      if (error.code === 'ECONNABORTED') {
        return { 
          message: 'Request timed out. The server is taking too long to respond. Please try again later.', 
          errorCode: 'TIMEOUT_ERROR' 
        };
      }
      
      // Check for specific network error messages
      if (error.message) {
        if (error.message.includes('Failed to fetch')) {
          return {
            message: 'Failed to connect to the server. Please check your internet connection and try again.',
            errorCode: 'NETWORK_ERROR'
          };
        }
        
        if (error.message.includes('Network Error')) {
          return {
            message: 'Network connection issue. Please check your internet connection and try again.',
            errorCode: 'NETWORK_ERROR'
          };
        }
      }
      
      return {
        message: 'Network connection issue. Please check your internet connection and try again.',
        errorCode: 'NETWORK_ERROR'
      };
    }

    if (!error.response) {
      return { 
        message: 'Unable to connect to the server. Please check your connection and try again.', 
        errorCode: 'NETWORK_ERROR' 
      };
    }

    // Handle specific HTTP status codes (fallback)
    if (status === 401) {
      // Check if this is a login request
      const isLoginRequest = error.config?.url?.includes('/auth/login');
      if (isLoginRequest) {
        return { message: 'Invalid email or password.', statusCode: status };
      } else {
        return { message: 'Authentication required. Please log in again.', statusCode: status };
      }
    }
    if (status === 403) {
      const msg = responseData && typeof (responseData as any).message === 'string' ? (responseData as any).message : 'You do not have permission to perform this action.';
      const isUnverified = typeof msg === 'string' && (msg.toLowerCase().includes('not verified') || msg.toLowerCase().includes('verify'));
      return { 
        message: msg, 
        statusCode: status,
        ...(isUnverified ? { isUnverifiedEmail: true, errorCode: 'EMAIL_NOT_VERIFIED' } : {})
      };
    }
    if (status === 404) {
      return { message: 'The requested resource was not found.', statusCode: status };
    }
    if (status === 422) {
      return { 
        message: 'Validation error. Please check your input.', 
        statusCode: status,
        fieldErrors: (responseData as any)?.errors || {}
      };
    }
    if (status && status >= 500) {
      return { message: 'A server error occurred. Please try again later.', statusCode: status };
    }

    return { 
      message: 'An error occurred with your request.', 
      statusCode: status 
    };
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    return { message: error.message };
  }

  // Handle string errors
  if (typeof error === 'string') {
    return { message: error };
  }

  return defaultError;
};

/**
 * Type guard to check if an error is an Axios error
 */
export const isAxiosError = (error: any): error is AxiosError => {
  return error && error.isAxiosError === true;
};

/**
 * Formats field errors into a user-friendly format
 * @param fieldErrors - Object containing field validation errors
 * @returns An object with field names as keys and error messages as values
 */
export const formatFieldErrors = (fieldErrors?: Record<string, string[] | string>): Record<string, string> => {
  if (!fieldErrors) return {};
  
  return Object.entries(fieldErrors).reduce((acc, [field, errors]) => {
    if (Array.isArray(errors)) {
      acc[field] = errors[0];
    } else if (typeof errors === 'string') {
      acc[field] = errors;
    } else {
      acc[field] = 'Invalid input';
    }
    return acc;
  }, {} as Record<string, string>);
};

/**
 * Logs API errors with additional context for debugging
 * @param functionName - The name of the function where the error occurred
 * @param error - The error object
 * @returns The original error for chaining
 */
export const logApiError = (functionName: string, error: unknown): Error => {
  const errorDetails = extractErrorMessage(error);
  
  console.error(`API Error in ${functionName}:`, {
    message: errorDetails.message,
    statusCode: errorDetails.statusCode,
    errorCode: errorDetails.errorCode,
    fieldErrors: errorDetails.fieldErrors,
    originalError: error
  });
  
  // Convert to a proper Error object with validation details if needed
  if (errorDetails.fieldErrors) {
    const validationError = new Error(errorDetails.message);
    (validationError as any).fieldErrors = errorDetails.fieldErrors;
    (validationError as any).statusCode = errorDetails.statusCode;
    (validationError as any).isValidationError = true;
    return validationError;
  }
  
  // If it's already an Error, add the extracted details
  if (error instanceof Error) {
    (error as any).statusCode = errorDetails.statusCode;
    (error as any).errorCode = errorDetails.errorCode;
    if (typeof errorDetails.isUnverifiedEmail === 'boolean') {
      (error as any).isUnverifiedEmail = errorDetails.isUnverifiedEmail;
    }
    return error;
  }
  
  // Create a new Error with the extracted message
  const generic = new Error(errorDetails.message);
  (generic as any).statusCode = errorDetails.statusCode;
  (generic as any).errorCode = errorDetails.errorCode;
  if (typeof errorDetails.isUnverifiedEmail === 'boolean') {
    (generic as any).isUnverifiedEmail = errorDetails.isUnverifiedEmail;
  }
  return generic;
};
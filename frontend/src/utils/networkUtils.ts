/**
 * Utility functions for handling network connectivity
 */

/**
 * Check if the browser is currently online
 * @returns boolean indicating online status
 */
export const isOnline = (): boolean => {
  return typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true; // Default to true if we can't determine
};

/**
 * Check if an error is a network-related error
 * @param error - The error to check
 * @returns boolean indicating if it's a network error
 */
export const isNetworkError = (error: any): boolean => {
  // Check browser online status first
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return true;
  }
  
  return (
    !error.response || // No response typically means network error
    error.code === 'ECONNABORTED' || // Timeout
    error.message?.includes('Network Error') ||
    error.message?.includes('network error') ||
    error.message?.includes('timeout') ||
    error.message?.includes('Failed to fetch') ||
    error.message?.includes('connection') ||
    error.errorCode === 'NETWORK_ERROR' ||
    error.errorCode === 'TIMEOUT_ERROR' ||
    error.errorCode === 'OFFLINE_ERROR'
  );
};

/**
 * Retry a function with exponential backoff
 * @param fn - The async function to retry
 * @param maxRetries - Maximum number of retries
 * @param delay - Initial delay in milliseconds
 * @param backoffFactor - Factor to increase delay by each retry
 * @returns Promise with the function result
 */
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000,
  backoffFactor: number = 1.5
): Promise<T> => {
  let retries = 0;
  let lastError: any;

  while (retries <= maxRetries) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      
      // Only retry on network errors
      if (!isNetworkError(error)) {
        throw error;
      }
      
      // If this was the last retry, throw the error
      if (retries >= maxRetries) {
        break;
      }
      
      // Calculate delay with exponential backoff
      const retryDelay = delay * Math.pow(backoffFactor, retries);
      
      // Log retry attempt in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Retry attempt ${retries + 1}/${maxRetries} after ${retryDelay}ms`);
      }
      
      // Wait before next attempt
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      
      retries++;
    }
  }
  
  throw lastError;
};
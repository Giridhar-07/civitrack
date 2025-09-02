import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

/**
 * Extended request config with retry properties
 */
export interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  __retryCount?: number;
}

/**
 * Configuration options for the retry mechanism
 */
export interface RetryConfig {
  /** Maximum number of retry attempts */
  maxRetries: number;
  
  /** Initial delay in milliseconds before the first retry */
  initialDelayMs: number;
  
  /** Factor by which to increase the delay with each retry attempt */
  backoffFactor: number;
  
  /** Maximum delay in milliseconds between retries */
  maxDelayMs: number;
  
  /** HTTP status codes that should trigger a retry */
  retryStatusCodes: number[];
  
  /** Whether to retry on network errors */
  retryNetworkErrors: boolean;
  
  /** Custom retry condition function */
  retryCondition?: (error: AxiosError) => boolean;
}

/**
 * Default retry configuration
 */
export const defaultRetryConfig: RetryConfig = {
  maxRetries: 8, // Increased from 5 to 8
  initialDelayMs: 500, // Reduced from 1000ms to 500ms for faster initial retry
  backoffFactor: 1.3, // Reduced from 1.5 to 1.3 for more gradual backoff
  maxDelayMs: 15000, // Reduced from 30s to 15s to prevent long waits
  retryStatusCodes: [401, 408, 429, 500, 502, 503, 504, 520, 521, 522, 523, 524], // Added 401 for auth retries
  retryNetworkErrors: true
};

/**
 * Creates an axios instance with retry capability
 * @param config - Axios request configuration
 * @param retryConfig - Retry mechanism configuration
 * @returns Axios instance with retry capability
 */
export function createRetryableAxiosInstance(
  config: AxiosRequestConfig = {},
  retryConfig: Partial<RetryConfig> = {}
): ReturnType<typeof axios.create> {
  // Merge with default retry configuration
  const finalRetryConfig = { ...defaultRetryConfig, ...retryConfig };
  
  // Create axios instance with provided config
  const instance = axios.create(config);
  
  // Add response interceptor for retry logic
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (!error.config) {
        return Promise.reject(error);
      }
      
      // Cast to our extended config type
      const retryableConfig = error.config as RetryableRequestConfig;
      
      // Skip retry if explicitly disabled
      if (retryableConfig.headers?.['x-no-retry']) {
        return Promise.reject(error);
      }
      
      // Initialize retry count
      retryableConfig.__retryCount = retryableConfig.__retryCount || 0;
      
      // Check if we should retry based on custom condition or default logic
      const shouldRetry = (
        retryableConfig.__retryCount < finalRetryConfig.maxRetries &&
        (
          (finalRetryConfig.retryCondition && finalRetryConfig.retryCondition(error)) ||
          (finalRetryConfig.retryNetworkErrors && !error.response) ||
          (error.response && finalRetryConfig.retryStatusCodes.includes(error.response.status))
        )
      );
      
      if (!shouldRetry) {
        return Promise.reject(error);
      }
      
      // Increment retry count
      retryableConfig.__retryCount += 1;
      
      // Calculate delay with exponential backoff
      let delay = finalRetryConfig.initialDelayMs * 
        Math.pow(finalRetryConfig.backoffFactor, retryableConfig.__retryCount - 1);
      
      // Cap the maximum delay
      if (finalRetryConfig.maxDelayMs) {
        delay = Math.min(delay, finalRetryConfig.maxDelayMs);
      }
      
      // Log retry attempt in development
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Retrying request (${retryableConfig.__retryCount}/${finalRetryConfig.maxRetries}) after ${delay}ms`);
      }
      
      // Wait for the delay
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // Check online status before retry
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        const networkError = new Error('Network connection unavailable');
        networkError.name = 'NetworkError';
        return Promise.reject(networkError);
      }
      
      // Retry the request
      return instance(retryableConfig);
    }
  );
  
  return instance;
}

/**
 * Executes a function with retry capability
 * @param fn - Async function to execute with retry capability
 * @param retryConfig - Retry configuration
 * @returns Promise that resolves with the function result or rejects after all retries fail
 */
export const withRetry = async <T>(
  fn: () => Promise<T>,
  retryConfig: Partial<RetryConfig> = {}
): Promise<T> => {
  const config: RetryConfig = {
    ...defaultRetryConfig,
    ...retryConfig
  };
  
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt < config.maxRetries + 1; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      // If this was the last attempt, don't delay, just throw
      if (attempt >= config.maxRetries) {
        break;
      }
      
      // Calculate delay with exponential backoff
      const delay = Math.min(
        config.initialDelayMs * Math.pow(config.backoffFactor, attempt),
        config.maxDelayMs
      );
      
      // Log retry attempt in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`Retry attempt ${attempt + 1}/${config.maxRetries} after ${delay}ms`);
      }
      
      // Wait before next attempt
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  // If we get here, all retries failed
  throw lastError;
};
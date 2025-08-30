import Redis from 'ioredis';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';

dotenv.config();

// Check if we're in a serverless environment
const isServerless = process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME;

// Redis configuration
const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: 1,
  // Disable retries in serverless environment
  retryStrategy: isServerless ? () => null : (times: number) => {
    if (times > 3) {
      // Stop retrying after 3 attempts
      return null;
    }
    return Math.min(times * 1000, 3000);
  }
};

// TTL values in seconds
export const cacheTTL = {
  NEARBY_ISSUES: 60 * 5, // 5 minutes
  ISSUE_DETAIL: 60 * 10, // 10 minutes
  USER_ISSUES: 60 * 5, // 5 minutes
  ALL_ISSUES: 60 * 2, // 2 minutes
};

// Cache key generators
export const cacheKeys = {
  nearbyIssues: (lat: number, lng: number, radius: number, page: number, limit: number) => 
    `nearby:${lat.toFixed(4)}:${lng.toFixed(4)}:${radius}:${page}:${limit}`,
  issueDetail: (id: string) => `issue:${id}`,
  userIssues: (userId: string, page: number, limit: number) => 
    `user:${userId}:issues:${page}:${limit}`,
  allIssues: (page: number, limit: number, filters: string) => 
    `all:issues:${page}:${limit}:${filters}`,
  NEARBY_ISSUES_PATTERN: 'nearby:*',
  ISSUE_DETAIL_PATTERN: 'issue:*',
  USER_ISSUES_PATTERN: 'user:*:issues:*',
  ALL_ISSUES_PATTERN: 'all:issues:*',
};

// Create Redis client
let redisClient: Redis | null = null;
let redisEnabled = true;

// Circuit breaker state
let circuitState: 'closed' | 'open' | 'half-open' = 'closed';
let failureCount = 0;
let lastFailureTime = 0;
const FAILURE_THRESHOLD = 5;
const RECOVERY_TIMEOUT = 30000; // 30 seconds

// Initialize Redis client with circuit breaker pattern
export const initRedis = (): Redis | null => {
  // Skip Redis initialization in serverless environments unless explicitly configured
  if (isServerless && !process.env.REDIS_HOST) {
    logger.info('Skipping Redis initialization in serverless environment');
    return null;
  }

  // If circuit is open and recovery timeout hasn't elapsed, return null
  if (circuitState === 'open') {
    const now = Date.now();
    if (now - lastFailureTime < RECOVERY_TIMEOUT) {
      logger.debug('Circuit breaker open, skipping Redis initialization');
      return null;
    } else {
      // Move to half-open state to test connection
      circuitState = 'half-open';
      logger.info('Circuit breaker moving to half-open state, attempting Redis reconnection');
    }
  }
  
  if (!redisClient && (redisEnabled || circuitState === 'half-open')) {
    try {
      redisClient = new Redis(redisConfig);
      
      redisClient.on('error', (err) => {
        logger.warn(`Redis connection error: ${err.message}`);
        
        // Increment failure count
        failureCount++;
        lastFailureTime = Date.now();
        
        if (failureCount >= FAILURE_THRESHOLD || (err as any).code === 'ECONNREFUSED') {
          // Open circuit breaker
          circuitState = 'open';
          redisEnabled = false;
          redisClient = null;
          logger.warn(`Redis circuit breaker opened after ${failureCount} failures`);
        }
      });
      
      redisClient.on('connect', () => {
        logger.info('Connected to Redis');
        // Reset circuit breaker on successful connection
        circuitState = 'closed';
        failureCount = 0;
        redisEnabled = true;
      });
      
      // Add health check ping
      redisClient.on('ready', async () => {
        try {
          await redisClient?.ping();
          logger.info('Redis health check passed');
        } catch (error) {
          logger.warn('Redis health check failed');
        }
      });
    } catch (error) {
      logger.error(`Failed to initialize Redis: ${error instanceof Error ? error.message : 'Unknown error'}`);
      failureCount++;
      lastFailureTime = Date.now();
      
      if (failureCount >= FAILURE_THRESHOLD) {
        circuitState = 'open';
      }
      
      redisEnabled = false;
      return null;
    }
  }
  
  return redisClient;
};

// Get Redis client
export const getRedisClient = (): Redis => {
  if (!redisClient) {
    const client = initRedis();
    if (!client) {
      throw new Error('Redis client initialization failed');
    }
    return client;
  }
  return redisClient;
};

// Cache utilities
export const cacheUtils = {
  // Get data from cache
  async get<T>(key: string): Promise<T | null> {
    try {
      const client = getRedisClient();
      if (!client) return null; // Redis is disabled
      
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      logger.warn(`Redis get error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return null;
    }
  },
  
  // Set data in cache with TTL
  async set<T>(key: string, data: T, ttl: number): Promise<boolean> {
    try {
      const client = getRedisClient();
      if (!client) return false; // Redis is disabled
      
      await client.set(key, JSON.stringify(data), 'EX', ttl);
      return true;
    } catch (error) {
      logger.warn(`Redis set error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  },
  
  // Delete cache entry
  async del(key: string): Promise<boolean> {
    try {
      const client = getRedisClient();
      if (!client) return false; // Redis is disabled
      
      await client.del(key);
      return true;
    } catch (error) {
      logger.warn(`Redis del error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  },
  
  // Get or set cache (with callback for fetching data)
  async getOrSet<T>(key: string, callback: () => Promise<T>, ttl: number): Promise<T> {
    try {
      const client = getRedisClient();
      if (!client) return await callback(); // Redis is disabled, fetch directly
      
      const cachedData = await this.get<T>(key);
      if (cachedData) {
        return cachedData;
      }
      
      const freshData = await callback();
      await this.set(key, freshData, ttl);
      return freshData;
    } catch (error) {
      logger.warn(`Redis getOrSet error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return await callback(); // Fallback to direct data fetch
    }
  },
  
  // Clear cache by pattern
  async clearByPattern(pattern: string): Promise<boolean> {
    try {
      const client = getRedisClient();
      if (!client) return false; // Redis is disabled
      
      const keys = await client.keys(pattern);
      
      if (keys.length > 0) {
        await client.del(...keys);
      }
      return true;
    } catch (error) {
      logger.warn(`Redis clearByPattern error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  }
};

// Initialize Redis on module load
initRedis();
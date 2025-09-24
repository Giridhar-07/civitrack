import Redis from 'ioredis';

// Cache TTL constants
export const cacheTTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
};

// Cache key patterns
export const cacheKeys = {
  NEARBY_ISSUES: 'nearby_issues:',
  NEARBY_ISSUES_PATTERN: 'nearby_issues:*',
  USER_ISSUES: 'user_issues:',
  USER_ISSUES_PATTERN: 'user_issues:*',
  ISSUE_DETAILS: 'issue:',
  ISSUE_DETAILS_PATTERN: 'issue:*',
};

// Redis client instance
let redisClient: Redis | null = null;

// Initialize Redis client with fallback to dummy implementation
export const initRedis = () => {
  try {
    // Check if Redis is disabled via environment variable
    if (process.env.DISABLE_REDIS === 'true') {
      console.log('Redis is explicitly disabled via DISABLE_REDIS environment variable');
      return null;
    }

    // Create Redis client
    redisClient = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      password: process.env.REDIS_PASSWORD || undefined,
      retryStrategy: (times) => {
        // Only retry 2 times with exponential backoff, then give up
        if (times > 2) {
          console.log('Redis connection failed after multiple retries, falling back to no-cache mode');
          return null;
        }
        return Math.min(times * 100, 3000);
      },
      connectTimeout: 5000, // 5 seconds
    });

    // Handle connection events
    redisClient.on('connect', () => {
      console.log('Redis client connected');
    });

    redisClient.on('error', (err) => {
      console.log('Redis client error, falling back to no-cache mode:', err.message);
      redisClient = null;
    });

    return redisClient;
  } catch (error) {
    console.log('Redis initialization failed, falling back to no-cache mode:', error);
    redisClient = null;
    return null;
  }
};

// Get Redis client (may be null if Redis is not available)
export const getRedisClient = () => redisClient;

// Set cache with TTL
export const setCache = async (key: string, value: any, ttl: number) => {
  if (!redisClient) return;
  try {
    await redisClient.set(key, JSON.stringify(value), 'EX', ttl);
  } catch (error) {
    console.log('Redis setCache error:', error);
  }
};

// Get cache
export const getCache = async (key: string) => {
  if (!redisClient) return null;
  try {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log('Redis getCache error:', error);
    return null;
  }
};

// Invalidate cache
export const invalidateCache = async (key: string) => {
  if (!redisClient) return;
  try {
    await redisClient.del(key);
  } catch (error) {
    console.log('Redis invalidateCache error:', error);
  }
};

// Invalidate cache by pattern
export const invalidateCachePattern = async (pattern: string) => {
  if (!redisClient) return;
  try {
    const keys = await redisClient.keys(pattern);
    if (keys.length > 0) {
      await redisClient.del(...keys);
    }
  } catch (error) {
    console.log('Redis invalidateCachePattern error:', error);
  }
};

// Clear all cache
export const clearAllCache = async () => {
  if (!redisClient) return;
  try {
    await redisClient.flushdb();
  } catch (error) {
    console.log('Redis clearAllCache error:', error);
  }
};

// Cache utilities for easier usage
export const cacheUtils = {
  get: async (key: string) => getCache(key),
  set: async (key: string, value: any, ttl: number = cacheTTL.MEDIUM) => {
    await setCache(key, value, ttl);
    return true;
  },
  del: async (key: string) => {
    await invalidateCache(key);
    return true;
  },
  getOrSet: async (key: string, callback: () => Promise<any>, ttl: number = cacheTTL.MEDIUM) => {
    // If Redis is not available, just execute the callback
    if (!redisClient) return await callback();
    
    try {
      // Try to get from cache first
      const cachedData = await getCache(key);
      if (cachedData !== null) {
        return cachedData;
      }
      
      // If not in cache, execute callback and cache the result
      const result = await callback();
      await setCache(key, result, ttl);
      return result;
    } catch (error) {
      console.log('Redis getOrSet error:', error);
      // On error, fall back to direct execution
      return await callback();
    }
  },
  clearByPattern: async (pattern: string) => {
    await invalidateCachePattern(pattern);
    return true;
  },
};
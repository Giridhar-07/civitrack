import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

// Redis configuration
const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  password: process.env.REDIS_PASSWORD,
  retryStrategy: (times: number) => {
    return Math.min(times * 50, 2000); // Exponential backoff
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
};

// Create Redis client
let redisClient: Redis | null = null;

// Initialize Redis client
export const initRedis = (): Redis => {
  if (!redisClient) {
    redisClient = new Redis(redisConfig);
    
    redisClient.on('error', (err) => {
      console.error('Redis connection error:', err);
    });
    
    redisClient.on('connect', () => {
      console.log('Connected to Redis');
    });
  }
  
  return redisClient;
};

// Get Redis client
export const getRedisClient = (): Redis => {
  if (!redisClient) {
    return initRedis();
  }
  return redisClient;
};

// Cache utilities
export const cacheUtils = {
  // Get data from cache
  async get<T>(key: string): Promise<T | null> {
    try {
      const client = getRedisClient();
      const data = await client.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Redis get error:', error);
      return null;
    }
  },
  
  // Set data in cache with TTL
  async set<T>(key: string, data: T, ttl: number): Promise<boolean> {
    try {
      const client = getRedisClient();
      await client.set(key, JSON.stringify(data), 'EX', ttl);
      return true;
    } catch (error) {
      console.error('Redis set error:', error);
      return false;
    }
  },
  
  // Delete cache entry
  async del(key: string): Promise<boolean> {
    try {
      const client = getRedisClient();
      await client.del(key);
      return true;
    } catch (error) {
      console.error('Redis del error:', error);
      return false;
    }
  },
  
  // Get or set cache (with callback for fetching data)
  async getOrSet<T>(key: string, callback: () => Promise<T>, ttl: number): Promise<T> {
    try {
      const cachedData = await this.get<T>(key);
      if (cachedData) {
        return cachedData;
      }
      
      const freshData = await callback();
      await this.set(key, freshData, ttl);
      return freshData;
    } catch (error) {
      console.error('Redis getOrSet error:', error);
      return await callback(); // Fallback to direct data fetch
    }
  },
  
  // Clear cache by pattern
  async clearByPattern(pattern: string): Promise<boolean> {
    try {
      const client = getRedisClient();
      const keys = await client.keys(pattern);
      
      if (keys.length > 0) {
        await client.del(...keys);
      }
      
      return true;
    } catch (error) {
      console.error('Redis clearByPattern error:', error);
      return false;
    }
  }
};

// Initialize Redis on server start
initRedis();
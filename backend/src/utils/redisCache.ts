import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

// Redis configuration
const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
  password: process.env.REDIS_PASSWORD || undefined,
  keyPrefix: 'civitrack:',
  retryStrategy: (times: number) => {
    // Exponential backoff with max 30 seconds
    return Math.min(times * 100, 30000);
  }
};

// Create Redis client
const redisClient = new Redis(redisConfig);

// Log Redis connection events
redisClient.on('connect', () => {
  console.log('Redis client connected');
});

redisClient.on('error', (err: Error) => {
  console.error('Redis client error:', err);
});

// Cache TTL defaults (in seconds)
const DEFAULT_TTL = 300; // 5 minutes
const NEARBY_ISSUES_TTL = 60; // 1 minute for location-based data

// Cache utility functions
export const cacheUtils = {
  /**
   * Get data from cache
   * @param key Cache key
   * @returns Cached data or null if not found
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const data = await redisClient.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Redis get error:', error);
      return null;
    }
  },

  /**
   * Set data in cache with TTL
   * @param key Cache key
   * @param data Data to cache
   * @param ttl Time to live in seconds
   */
  async set(key: string, data: any, ttl: number = DEFAULT_TTL): Promise<void> {
    try {
      await redisClient.set(key, JSON.stringify(data), 'EX', ttl);
    } catch (error) {
      console.error('Redis set error:', error);
    }
  },

  /**
   * Delete data from cache
   * @param key Cache key
   */
  async del(key: string): Promise<void> {
    try {
      await redisClient.del(key);
    } catch (error) {
      console.error('Redis del error:', error);
    }
  },

  /**
   * Delete multiple keys matching a pattern
   * @param pattern Key pattern to match
   */
  async delByPattern(pattern: string): Promise<void> {
    try {
      const keys = await redisClient.keys(`${redisConfig.keyPrefix}${pattern}`);
      if (keys.length > 0) {
        await redisClient.del(keys.map((key: string) => key.replace(redisConfig.keyPrefix, '')));
      }
    } catch (error) {
      console.error('Redis delByPattern error:', error);
    }
  },

  /**
   * Get or set cache with callback function
   * @param key Cache key
   * @param callback Function to call if cache miss
   * @param ttl Time to live in seconds
   * @returns Cached or fetched data
   */
  async getOrSet<T>(key: string, callback: () => Promise<T>, ttl: number = DEFAULT_TTL): Promise<T> {
    try {
      const cachedData = await this.get<T>(key);
      if (cachedData !== null) {
        return cachedData;
      }

      const freshData = await callback();
      await this.set(key, freshData, ttl);
      return freshData;
    } catch (error) {
      console.error('Redis getOrSet error:', error);
      return await callback();
    }
  }
};

// Cache key generators
export const cacheKeys = {
  nearbyIssues: (lat: number, lng: number, radius: number, page: number, limit: number): string => 
    `nearby:${lat.toFixed(4)}:${lng.toFixed(4)}:${radius}:${page}:${limit}`,
  
  issue: (id: string): string => `issue:${id}`,
  
  userIssues: (userId: string): string => `user:${userId}:issues`,
  
  allIssues: (page: number, limit: number): string => `issues:${page}:${limit}`
};

// TTL constants
export const cacheTTL = {
  DEFAULT: DEFAULT_TTL,
  NEARBY_ISSUES: NEARBY_ISSUES_TTL,
  ISSUE: 600, // 10 minutes for individual issues
  USER_ISSUES: 300, // 5 minutes for user issues
  ALL_ISSUES: 180 // 3 minutes for all issues listing
};

export default redisClient;
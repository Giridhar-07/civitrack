import Redis from 'ioredis';
import { logger } from '../utils/logger';

// Redis client configuration
const redisConfig = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  retryStrategy: (times: number) => {
    if (times > 3) {
      // Stop retrying after 3 attempts
      return null;
    }
    return Math.min(times * 1000, 3000);
  },
  maxRetriesPerRequest: 3,
  connectTimeout: 10000, // 10 seconds timeout for initial connection
  enableOfflineQueue: true // Queue commands when disconnected
};

// Create Redis client
const redisClient = new Redis(redisConfig);

// Handle Redis connection events
redisClient.on('error', (error) => {
  logger.warn(`Redis connection error: ${error.message}`);
});

redisClient.on('connect', () => {
  logger.info('Redis client connected successfully');
});

redisClient.on('reconnecting', () => {
  logger.info('Redis client reconnecting...');
});

redisClient.on('ready', () => {
  logger.info('Redis client ready for operations');
});

// Graceful fallback for Redis operations
export const getCache = async (key: string): Promise<string | null> => {
  try {
    return await redisClient.get(key);
  } catch (error) {
    logger.warn(`Redis get operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return null;
  }
};

export const setCache = async (key: string, value: string, ttl?: number): Promise<boolean> => {
  try {
    if (ttl) {
      await redisClient.set(key, value, 'EX', ttl);
    } else {
      await redisClient.set(key, value);
    }
    return true;
  } catch (error) {
    logger.warn(`Redis set operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return false;
  }
};

export const deleteCache = async (key: string): Promise<boolean> => {
  try {
    await redisClient.del(key);
    return true;
  } catch (error) {
    logger.warn(`Redis delete operation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return false;
  }
};

export default redisClient;
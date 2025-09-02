import Redis from 'ioredis';
// Dummy Redis service to disable Redis functionality

export const cacheTTL = {};

export const cacheKeys = {};

export const initRedis = () => null;

export const getRedisClient = () => null;

export const setCache = async (key: string, value: any, ttl: number) => {};

export const getCache = async (key: string) => null;

export const invalidateCache = async (key: string) => {};

export const invalidateCachePattern = async (pattern: string) => {};

export const clearAllCache = async () => {};

export const cacheUtils = {
  get: async () => null,
  set: async () => false,
  del: async () => false,
  getOrSet: async (key: string, callback: () => Promise<any>) => await callback(),
  clearByPattern: async () => false,
};
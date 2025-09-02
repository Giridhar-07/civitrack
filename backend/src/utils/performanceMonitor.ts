import { Request, Response, NextFunction } from 'express';
import { createLogger, format, transports } from 'winston';
import fs from 'fs';
import path from 'path';

// Create logger transports based on environment
const loggerTransports = [
  new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  })
];

// Only add file transport in non-serverless environments
if (process.env.NODE_ENV !== 'production') {
  try {
    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir);
    }
    
    // Add file transport
    loggerTransports.push(
      new transports.File({ 
        filename: 'logs/performance.log' 
      }) as any // Type assertion to fix TypeScript error
    );
  } catch (error) {
    console.error('Failed to setup file logging:', error);
    // Continue without file logging
  }
}

// Create a performance logger
const performanceLogger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  defaultMeta: { service: 'performance-monitor' },
  transports: loggerTransports
});

// Performance thresholds in milliseconds
const THRESHOLDS = {
  NORMAL: 500,    // 0-500ms is normal
  WARNING: 1000,  // 500-1000ms is warning
  CRITICAL: 3000  // >3000ms is critical
};

// Middleware to monitor API performance
export const performanceMonitor = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const url = req.originalUrl;
  const method = req.method;

  // Add response listener to calculate duration when request completes
  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    
    // Determine severity level based on duration
    let level = 'info';
    if (duration > THRESHOLDS.CRITICAL) {
      level = 'error';
    } else if (duration > THRESHOLDS.WARNING) {
      level = 'warn';
    }

    // Log performance data
    performanceLogger.log(level, {
      url,
      method,
      status,
      duration,
      userAgent: req.headers['user-agent'],
      ip: req.ip
    });
  });

  next();
};

// Function to track performance of specific operations
export const trackPerformance = async <T>(
  operationName: string,
  operation: () => Promise<T>
): Promise<T> => {
  const start = Date.now();
  
  try {
    const result = await operation();
    const duration = Date.now() - start;
    
    // Determine severity level based on duration
    let level = 'info';
    if (duration > THRESHOLDS.CRITICAL) {
      level = 'error';
    } else if (duration > THRESHOLDS.WARNING) {
      level = 'warn';
    }
    
    // Log performance data
    performanceLogger.log(level, {
      operation: operationName,
      duration,
      success: true
    });
    
    return result;
  } catch (error) {
    const duration = Date.now() - start;
    
    // Log error with performance data
    performanceLogger.error({
      operation: operationName,
      duration,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    
    throw error;
  }
};

// Alert function for critical performance issues
export const alertOnPerformanceIssue = (
  operationName: string,
  duration: number,
  threshold: number = THRESHOLDS.CRITICAL
) => {
  if (duration > threshold) {
    performanceLogger.error({
      operation: operationName,
      duration,
      message: `Performance threshold exceeded: ${operationName} took ${duration}ms (threshold: ${threshold}ms)`
    });
    
    // Here you could add code to send alerts via email, SMS, or other channels
    // For example, integrating with a service like PagerDuty, Slack, etc.
  }
};

export default {
  performanceMonitor,
  trackPerformance,
  alertOnPerformanceIssue,
  THRESHOLDS
};
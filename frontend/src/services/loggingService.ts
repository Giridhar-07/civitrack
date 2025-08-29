import api from './api';

// Log levels
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  CRITICAL = 'critical'
}

// Log entry interface
export interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  timestamp?: string;
  userId?: string;
  sessionId?: string;
}

// Get current user ID from localStorage if available
const getCurrentUserId = (): string | undefined => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.id;
  } catch (e) {
    return undefined;
  }
};

// Generate a session ID if not already present
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('sessionId');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem('sessionId', sessionId);
  }
  return sessionId;
};

// Main logging service
const loggingService = {
  // Log to console and optionally to server
  log: async (level: LogLevel, message: string, context?: Record<string, any>, sendToServer: boolean = true): Promise<void> => {
    const timestamp = new Date().toISOString();
    const userId = getCurrentUserId();
    const sessionId = getSessionId();
    
    // Always log to console
    const consoleMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    switch (level) {
      case LogLevel.DEBUG:
        console.debug(consoleMessage, context);
        break;
      case LogLevel.INFO:
        console.info(consoleMessage, context);
        break;
      case LogLevel.WARN:
        console.warn(consoleMessage, context);
        break;
      case LogLevel.ERROR:
      case LogLevel.CRITICAL:
        console.error(consoleMessage, context);
        break;
      default:
        console.log(consoleMessage, context);
    }
    
    // Send to server if enabled and not in development mode for DEBUG level
    if (sendToServer && !(process.env.NODE_ENV === 'development' && level === LogLevel.DEBUG)) {
      try {
        const logEntry: LogEntry = {
          level,
          message,
          context,
          timestamp,
          userId,
          sessionId
        };
        
        // Use non-blocking call to avoid affecting user experience
        api.post('/logs', logEntry).catch(error => {
          // Log locally if server logging fails
          console.error('Failed to send log to server:', error);
        });
      } catch (error) {
        // Fail silently to avoid cascading errors
        console.error('Error in logging service:', error);
      }
    }
  },
  
  // Convenience methods for different log levels
  debug: (message: string, context?: Record<string, any>, sendToServer: boolean = false): void => {
    loggingService.log(LogLevel.DEBUG, message, context, sendToServer);
  },
  
  info: (message: string, context?: Record<string, any>, sendToServer: boolean = true): void => {
    loggingService.log(LogLevel.INFO, message, context, sendToServer);
  },
  
  warn: (message: string, context?: Record<string, any>, sendToServer: boolean = true): void => {
    loggingService.log(LogLevel.WARN, message, context, sendToServer);
  },
  
  error: (message: string, error?: any, context?: Record<string, any>, sendToServer: boolean = true): void => {
    // Extract useful information from error object
    const errorContext = {
      ...(context || {}),
      errorMessage: error?.message,
      errorName: error?.name,
      errorStack: error?.stack,
      errorCode: error?.code
    };
    
    loggingService.log(LogLevel.ERROR, message, errorContext, sendToServer);
  },
  
  critical: (message: string, error?: any, context?: Record<string, any>, sendToServer: boolean = true): void => {
    // Extract useful information from error object
    const errorContext = {
      ...(context || {}),
      errorMessage: error?.message,
      errorName: error?.name,
      errorStack: error?.stack,
      errorCode: error?.code
    };
    
    loggingService.log(LogLevel.CRITICAL, message, errorContext, sendToServer);
  }
};

export default loggingService;
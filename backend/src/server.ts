import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import http from 'http';
import routes from './routes';
import sequelize from './config/database';
import { syncModels } from './models';
import { errorResponse } from './utils/response';
import { initializeSocketIO } from './services/socketService';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Set up security middleware
// Enhanced Helmet configuration for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "blob:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  xssFilter: true,
  noSniff: true,
  referrerPolicy: { policy: 'same-origin' },
}));

// Rate limiting to prevent brute force attacks
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply rate limiting to all requests
app.use(apiLimiter);

// More restrictive rate limiter for authentication routes
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 login/register attempts per hour
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many authentication attempts, please try again after an hour'
});

// Apply stricter rate limiting to auth routes
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// Enhanced CORS configuration
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:3000').split(',');
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Add cookie parser for secure cookies
app.use(cookieParser());

// Add compression for better performance
app.use(compression());

// Add performance monitoring middleware
import { performanceMonitor } from './utils/performanceMonitor';
app.use(performanceMonitor);

// JSON body parser with size limits
app.use(express.json({ limit: '1mb' })); // Limit JSON body size
app.use(express.urlencoded({ extended: true, limit: '1mb' })); // Limit URL-encoded body size

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// API routes
app.use('/api', routes);

// 404 handler
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint not found',
    error: 'Not Found'
  });
});

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  return errorResponse(res, 'Internal server error', 500);
});

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
initializeSocketIO(server);

// Start server
const PORT = process.env.PORT || 5000;

// Import and run geospatial migration
import { migrateGeospatial } from './scripts/migrateGeospatial';

// Connect to database and start server
const startServer = async () => {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync models with database
    await syncModels();
    console.log('Database models synchronized successfully.');
    
    // Start server
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`WebSocket server initialized`);
  console.log(`Performance monitoring enabled`);
  
  // Run geospatial migration
  try {
    await migrateGeospatial();
    console.log('Geospatial migration completed successfully');
  } catch (error) {
    console.error('Geospatial migration failed:', error);
  }
});
  } catch (error) {
    console.error('Unable to connect to the database or start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
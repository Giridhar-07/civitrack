import { Router } from 'express';
import authRoutes from './authRoutes';
import issueRoutes from './issueRoutes';
import statusRequestRoutes from './statusRequestRoutes';
import aiRoutes from './aiRoutes';

const router = Router();

// API routes
router.use('/auth', authRoutes);
router.use('/issues', issueRoutes);
router.use('/status-requests', statusRequestRoutes);
router.use('/ai', aiRoutes);

// Health check endpoint - accessible both with and without /api prefix
router.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0'
  });
});

export default router;
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

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

export default router;
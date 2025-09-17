import { Router } from 'express';
import authRoutes from './authRoutes';
import issueRoutes from './issueRoutes';
import statusRequestRoutes from './statusRequestRoutes';
import aiRoutes from './aiRoutes';
import imagekitRoutes from './imagekitRoutes';

const router = Router();

// API routes
router.use('/auth', authRoutes);
router.use('/issues', issueRoutes);
router.use('/status-requests', statusRequestRoutes);
router.use('/ai', aiRoutes);
router.use('/imagekit', imagekitRoutes);


export default router;
import { Router } from 'express';
import { getStatus } from '../controllers/statusController';

const router = Router();

// Unified service status
router.get('/', getStatus);

export default router;
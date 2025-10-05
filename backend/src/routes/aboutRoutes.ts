import { Router } from 'express';
import { getAboutInfo } from '../controllers/aboutController';

const router = Router();

// Public About endpoint
router.get('/', getAboutInfo);

export default router;
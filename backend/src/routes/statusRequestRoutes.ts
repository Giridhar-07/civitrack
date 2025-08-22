import { Router } from 'express';
import {
  createStatusRequest,
  getStatusRequests,
  getIssueStatusRequests,
  reviewStatusRequest,
  getUserStatusRequests
} from '../controllers/statusRequestController';
import {
  createStatusRequestValidation,
  getStatusRequestsValidation,
  reviewStatusRequestValidation,
  getIssueStatusRequestsValidation
} from '../middleware/validation';
import { authenticate, authorizeAdmin } from '../utils/auth';

const router = Router();

// Public routes for specific issue status requests
router.get('/issue/:id', getIssueStatusRequestsValidation, getIssueStatusRequests);

// Protected routes for users
router.post('/issue/:id', authenticate, createStatusRequestValidation, createStatusRequest);
router.get('/user/me', authenticate, getUserStatusRequests);

// Admin routes
router.get('/', authenticate, authorizeAdmin, getStatusRequestsValidation, getStatusRequests);
router.put('/:id/review', authenticate, authorizeAdmin, reviewStatusRequestValidation, reviewStatusRequest);

export default router;
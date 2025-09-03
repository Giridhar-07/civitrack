import { Router } from 'express';
import {
  createIssue,
  getIssues,
  getIssueById,
  updateIssue,
  deleteIssue,
  flagIssue,
  getUserIssues,
  getNearbyIssues,
  getIssueStatistics,
  resolveFlag,
  getSavedIssues // Import getSavedIssues
} from '../controllers/issueController';
import {
  createIssueValidation,
  getIssueByIdValidation,
  updateIssueValidation,
  deleteIssueValidation,
  flagIssueValidation,
  getIssuesValidation,
  getNearbyIssuesValidation
} from '../middleware/validation';
import { authenticate, authorizeAdmin } from '../utils/auth';
import upload from '../utils/upload';

const router = Router();

// Public routes
router.get('/', getIssuesValidation, getIssues);
router.get('/nearby', getNearbyIssuesValidation, getNearbyIssues);

// Protected routes (specific routes before dynamic :id)
router.get('/user/me', authenticate, getUserIssues);
router.get('/saved', authenticate, getSavedIssues); // New route for saved issues
router.post('/', authenticate, upload.array('photos'), createIssueValidation, createIssue); // Re-added upload.array('photos') for multipart parsing
router.post('/:id/flag', authenticate, flagIssueValidation, flagIssue);
// Resolve a specific flag (admin only)
router.put('/flags/:flagId/resolve', authenticate, authorizeAdmin, resolveFlag);
router.put('/:id', authenticate, upload.array('photos'), updateIssueValidation, updateIssue);
router.delete('/:id', authenticate, deleteIssueValidation, deleteIssue);

// Public dynamic route placed after specific ones
router.get('/:id', getIssueByIdValidation, getIssueById);

// Admin routes
router.get('/admin/statistics', authenticate, authorizeAdmin, getIssueStatistics);

export default router;
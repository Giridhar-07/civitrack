import { Router } from 'express';
import { register, login, getCurrentUser, updateProfile, changePassword, getAllUsers } from '../controllers/authController';
import { registerValidation, loginValidation, updateProfileValidation, changePasswordValidation } from '../middleware/validation';
import { authenticate, authorizeAdmin } from '../utils/auth';

const router = Router();

// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/me', authenticate, getCurrentUser);
router.put('/profile', authenticate, updateProfileValidation, updateProfile);
router.put('/change-password', authenticate, changePasswordValidation, changePassword);

// Admin-only routes
router.get('/admin/users', authenticate, authorizeAdmin, getAllUsers);

export default router;
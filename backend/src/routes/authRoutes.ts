import { Router } from 'express';
import { register, login, getCurrentUser, updateProfile, changePassword, getAllUsers, updateUserByAdmin, deleteUserByAdmin, getUserById, uploadProfileImage } from '../controllers/authController';
import { registerValidation, loginValidation, updateProfileValidation, changePasswordValidation, adminUpdateUserValidation, adminDeleteUserValidation } from '../middleware/validation';
import { authenticate, authorizeAdmin } from '../utils/auth';
import upload from '../utils/upload';

const router = Router();

// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/me', authenticate, getCurrentUser);
router.put('/profile', authenticate, updateProfileValidation, updateProfile);
router.post('/profile/image', authenticate, upload.single('image'), uploadProfileImage);
router.put('/change-password', authenticate, changePasswordValidation, changePassword);

// Admin-only routes
router.get('/admin/users', authenticate, authorizeAdmin, getAllUsers);
router.get('/admin/users/:id', authenticate, authorizeAdmin, getUserById);
router.put('/admin/users/:id', authenticate, authorizeAdmin, adminUpdateUserValidation, updateUserByAdmin);
router.delete('/admin/users/:id', authenticate, authorizeAdmin, adminDeleteUserValidation, deleteUserByAdmin);

export default router;
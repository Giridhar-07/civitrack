import express from 'express';
import { User } from '../models';
import sequelize from '../config/database';
import { authenticateJWT } from '../middleware/auth';

const router = express.Router();

/**
 * Route to sync a user from Neon Auth to our database
 * This endpoint is called when a user authenticates with Neon Auth
 */
router.post('/sync', async (req, res) => {
  try {
    const { id, email, name, raw_json } = req.body;
    
    if (!id || !email) {
      return res.status(400).json({ message: 'Missing required user data' });
    }
    
    // Check if user already exists in our database
    let user = await User.findOne({ where: { email } });
    
    if (user) {
      // Update existing user with Neon Auth data
      user.neonAuthId = id;
      user.neonAuthData = raw_json;
      await user.save();
    } else {
      // Create new user from Neon Auth data
      user = await User.create({
        email,
        username: email.split('@')[0],
        name: name || email.split('@')[0],
        neonAuthId: id,
        neonAuthData: raw_json,
        role: 'user',
        isVerified: true, // Neon Auth users are pre-verified
      });
    }
    
    return res.status(200).json({ 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error syncing Neon Auth user:', error);
    return res.status(500).json({ message: 'Error syncing user data' });
  }
});

/**
 * Route to get current user's Neon Auth status
 */
router.get('/status', authenticateJWT, async (req, res) => {
  try {
    const userId = (req as any).user?.id;
    
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    return res.status(200).json({
      isNeonAuthLinked: !!user.neonAuthId,
      neonAuthId: user.neonAuthId || null
    });
  } catch (error) {
    console.error('Error getting Neon Auth status:', error);
    return res.status(500).json({ message: 'Error getting Neon Auth status' });
  }
});

export default router;
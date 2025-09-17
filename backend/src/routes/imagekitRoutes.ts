import express from 'express';
import { getAuthenticationParameters } from '../utils/imagekit';
// Define success response interface
interface SuccessResponse {
  success: boolean;
  data: any;
  message: string;
}

// Create success response function
const successResponse = (res: any, data: any, message: string): void => {
  const response: SuccessResponse = {
    success: true,
    data,
    message
  };
  res.status(200).json(response);
};

const router = express.Router();

// Get ImageKit authentication parameters for frontend
router.get('/auth', async (req, res) => {
  try {
    const authParams = getAuthenticationParameters();
    return successResponse(res, authParams, 'ImageKit authentication parameters retrieved successfully');
  } catch (error) {
    console.error('Error getting ImageKit auth parameters:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to get ImageKit authentication parameters' 
    });
  }
});

export default router;
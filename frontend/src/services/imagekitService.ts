import api from './api';
import { extractErrorMessage } from '../utils/apiErrorHandler';

/**
 * Service for handling ImageKit operations
 */
const imagekitService = {
  /**
   * Get authentication parameters for client-side uploads
   * @returns Authentication parameters for ImageKit
   */
  getAuthParams: async () => {
    try {
      const response = await api.get('/imagekit/auth');
      return response.data as {
        token: string;
        expire: number;
        signature: string;
        publicKey: string;
      };
    } catch (error: any) {
      // Provide clearer error messaging, especially when the server has ImageKit disabled
      const status = error?.response?.status;
      if (status === 503) {
        const err = new Error('Image uploads are temporarily unavailable. Please try again later.');
        (err as any).status = 503;
        throw err;
      }
      const message = extractErrorMessage(error) || 'Unable to get upload authorization. Please retry in a moment.';
      const err = new Error(message.toString());
      (err as any).original = error;
      throw err;
    }
  },

  /**
   * Upload an image to ImageKit
   * @param file The image file to upload
   * @returns The uploaded image data including URL
   */
  uploadImage: async (file: File) => {
    try {
      // Get ImageKit authentication parameters
      const authParams = await imagekitService.getAuthParams();
      
      // Create form data for upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('publicKey', authParams.publicKey);
      formData.append('signature', authParams.signature);
      formData.append('token', authParams.token);
      formData.append('expire', authParams.expire.toString());
      formData.append('fileName', `profile_${Date.now()}`);
      
      // Upload directly to ImageKit
      const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        let serverMessage = '';
        try {
          const data = await response.json();
          serverMessage = data?.message || data?.error || '';
        } catch (_) {
          try {
            serverMessage = await response.text();
          } catch { /* ignore */ }
        }

        // Map common failure scenarios to user-friendly messages
        let friendly = 'Failed to upload image to ImageKit.';
        if (response.status === 401 || response.status === 403) {
          friendly = 'Upload authorization failed. Please refresh the page and try again.';
        } else if (response.status === 413) {
          friendly = 'The selected file is too large. Please choose a smaller image.';
        } else if (response.status === 400 && serverMessage.toLowerCase().includes('signature')) {
          friendly = 'Upload authorization expired. Please try again.';
        }

        const err = new Error(serverMessage || friendly);
        (err as any).status = response.status;
        throw err;
      }
      
      return await response.json();
    } catch (error: any) {
      // Normalize network-type failures
      if (error?.name === 'TypeError' && (error?.message?.includes('NetworkError') || error?.message?.includes('Failed to fetch'))) {
        const err = new Error('Network connection issue. Please check your internet connection and try again.');
        (err as any).isNetworkError = true;
        throw err;
      }
      console.error('Error uploading image to ImageKit:', error);
      throw error;
    }
  }
};

export default imagekitService;
import api from './api';

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
    } catch (error) {
      console.error('Error getting ImageKit auth params:', error);
      throw error;
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
        throw new Error('Failed to upload image to ImageKit');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error uploading image to ImageKit:', error);
      throw error;
    }
  }
};

export default imagekitService;
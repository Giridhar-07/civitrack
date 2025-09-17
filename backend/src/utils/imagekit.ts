import ImageKit from 'imagekit';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize ImageKit with environment variables
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || '',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || '',
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || ''
});

/**
 * Upload an image to ImageKit
 * @param file The file buffer to upload
 * @param fileName The name of the file
 * @param folder The folder to upload to (optional)
 * @returns Promise with upload response
 */
export const uploadImage = async (
  file: Buffer,
  fileName: string,
  folder: string = 'profile-images'
): Promise<any> => {
  try {
    const response = await imagekit.upload({
      file,
      fileName,
      folder,
      useUniqueFileName: true
    });
    
    return response;
  } catch (error) {
    console.error('ImageKit upload error:', error);
    throw new Error('Failed to upload image to ImageKit');
  }
};

/**
 * Delete an image from ImageKit
 * @param fileId The ID of the file to delete
 * @returns Promise with deletion response
 */
export const deleteImage = async (fileId: string): Promise<any> => {
  try {
    const response = await imagekit.deleteFile(fileId);
    return response;
  } catch (error) {
    console.error('ImageKit delete error:', error);
    throw new Error('Failed to delete image from ImageKit');
  }
};

/**
 * Generate authentication parameters for client-side uploads
 * @returns Authentication parameters for ImageKit
 */
export const getAuthenticationParameters = (): any => {
  return imagekit.getAuthenticationParameters();
};

export default imagekit;
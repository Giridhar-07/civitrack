import ImageKit from 'imagekit';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Try to load environment variables from .env file
// This is primarily for local development
try {
  // Check if .env file exists before loading
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    console.log('[INFO] Loading environment variables from .env file');
    dotenv.config();
  } else {
    console.log('[INFO] No .env file found, using environment variables from system');
  }
} catch (error: any) {
  console.log('[INFO] Error loading .env file, using environment variables from system:', error.message || 'Unknown error');
}

// Add more detailed debug logs
console.log('[DEBUG] Current working directory:', process.cwd());
console.log('[DEBUG] NODE_ENV:', process.env.NODE_ENV);
console.log('[DEBUG] ImageKit URL Endpoint:', process.env.IMAGEKIT_URL_ENDPOINT);
console.log('[DEBUG] ImageKit Public Key exists:', !!process.env.IMAGEKIT_PUBLIC_KEY);
console.log('[DEBUG] ImageKit Private Key exists:', !!process.env.IMAGEKIT_PRIVATE_KEY);

// Ensure we have required values or throw meaningful errors
if (!process.env.IMAGEKIT_PUBLIC_KEY) {
  console.error('[ERROR] IMAGEKIT_PUBLIC_KEY is missing in environment variables');
  throw new Error('IMAGEKIT_PUBLIC_KEY is missing in environment variables');
}
if (!process.env.IMAGEKIT_PRIVATE_KEY) {
  console.error('[ERROR] IMAGEKIT_PRIVATE_KEY is missing in environment variables');
  throw new Error('IMAGEKIT_PRIVATE_KEY is missing in environment variables');
}
if (!process.env.IMAGEKIT_URL_ENDPOINT) {
  console.error('[ERROR] IMAGEKIT_URL_ENDPOINT is missing in environment variables');
  throw new Error('IMAGEKIT_URL_ENDPOINT is missing in environment variables');
}

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
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
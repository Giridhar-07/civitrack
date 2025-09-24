import ImageKit from 'imagekit';

// Lazy singleton instance; do not create at module load time to avoid crashes when env is missing
let imagekitInstance: ImageKit | null = null;

/**
 * Check whether ImageKit environment variables are configured.
 */
export const isImageKitConfigured = (): boolean => {
  return Boolean(
    process.env.IMAGEKIT_PUBLIC_KEY &&
    process.env.IMAGEKIT_PRIVATE_KEY &&
    process.env.IMAGEKIT_URL_ENDPOINT
  );
};

/**
 * Get (and lazily initialize) the ImageKit client.
 * Throws a descriptive error if ImageKit is not configured.
 */
const getImageKit = (): ImageKit => {
  if (!isImageKitConfigured()) {
    throw new Error('ImageKit is not configured');
  }
  if (!imagekitInstance) {
    imagekitInstance = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY as string,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY as string,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT as string,
    });
  }
  return imagekitInstance;
};

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
    const imagekit = getImageKit();
    const response = await imagekit.upload({
      file,
      fileName,
      folder,
      useUniqueFileName: true,
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
    const imagekit = getImageKit();
    const response = await imagekit.deleteFile(fileId);
    return response;
  } catch (error) {
    console.error('ImageKit delete error:', error);
    throw new Error('Failed to delete image from ImageKit');
  }
};

/**
 * Get file details from ImageKit by fileId
 * @param fileId The ID of the file
 * @returns File details including URL
 */
export const getFileDetails = async (fileId: string): Promise<any> => {
  try {
    const imagekit = getImageKit();
    const details = await imagekit.getFileDetails(fileId);
    return details;
  } catch (error) {
    console.error('ImageKit getFileDetails error:', error);
    throw new Error('Failed to get file details from ImageKit');
  }
};

/**
 * Generate authentication parameters for client-side uploads
 * @returns Authentication parameters for ImageKit
 */
export const getAuthenticationParameters = (): any => {
  const imagekit = getImageKit();
  return imagekit.getAuthenticationParameters();
};
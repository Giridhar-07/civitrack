import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

// Resolve a writable uploads directory and export it
let resolvedUploadsDir = process.env.UPLOADS_DIR || path.join(__dirname, '../../uploads');
let useMemoryStorage = false;

try {
  if (!fs.existsSync(resolvedUploadsDir)) {
    fs.mkdirSync(resolvedUploadsDir, { recursive: true });
  }
} catch (err) {
  try {
    // Fallback to serverless writable temp directory
    resolvedUploadsDir = path.join(process.env.TMPDIR || '/tmp', 'uploads');
    if (!fs.existsSync(resolvedUploadsDir)) {
      fs.mkdirSync(resolvedUploadsDir, { recursive: true });
    }
  } catch (e) {
    // Final fallback: use memory storage (no disk writes)
    useMemoryStorage = true;
  }
}

export const uploadsDir = resolvedUploadsDir;

// Configure storage for multer
const storage: multer.StorageEngine = useMemoryStorage
  ? multer.memoryStorage()
  : multer.diskStorage({
      destination: (_req, _file, cb) => {
        cb(null, uploadsDir);
      },
      filename: (_req, file, cb) => {
        // Generate unique filename with original extension
        const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, uniqueFilename);
      },
    });

// Allowed image MIME types for profile uploads
const ALLOWED_IMAGE_MIMES = new Set([
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'image/gif',
  'image/svg+xml'
]);

// File filter to allow only specific image formats
// - Sets a flag on req when invalid type is detected so controllers can respond with a clear error
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (ALLOWED_IMAGE_MIMES.has(file.mimetype)) {
    cb(null, true);
  } else if (file.mimetype.startsWith('image/')) {
    // Image but unsupported subtype
    (req as any).fileValidationError = 'INVALID_FILE_TYPE';
    (req as any).fileValidationMessage = 'Only image files (PNG, JPG, JPEG, WEBP, GIF, SVG) are allowed';
    cb(null, false);
  } else {
    // Not an image at all
    (req as any).fileValidationError = 'INVALID_FILE_TYPE';
    (req as any).fileValidationMessage = 'Only image files (PNG, JPG, JPEG, WEBP, GIF, SVG) are allowed';
    cb(null, false);
  }
};

// Configure multer upload
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max file size
  },
});

export default upload;

// Helper function to get public URL for uploaded file
export const getFileUrl = (filename: string): string => {
  return `/uploads/${filename}`;
};

// Helper function to delete file
export const deleteFile = (filename: string): void => {
  const filePath = path.join(uploadsDir, filename);
  if (!useMemoryStorage && fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
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

// File filter to allow only images
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Accept only image files
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'));
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
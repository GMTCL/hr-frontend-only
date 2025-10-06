// File upload utility functions and components

import { useState } from 'react';

export interface FileUploadProps {
  accept?: string;
  maxSize?: number; // in bytes
  onFileSelect?: (file: File) => void;
  onUploadComplete?: (url: string) => void;
  onError?: (error: string) => void;
  className?: string;
  children?: React.ReactNode;
}

// File upload hook
export function useFileUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const uploadFile = async (file: File, endpoint: string = '/api/upload') => {
    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      setProgress(100);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      setError(errorMessage);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return {
    uploading,
    progress,
    error,
    uploadFile,
  };
}

// File validation utilities
export const validateFile = (file: File, options: {
  maxSize?: number;
  allowedTypes?: string[];
}) => {
  const { maxSize = 5 * 1024 * 1024, allowedTypes = [] } = options; // Default 5MB

  if (file.size > maxSize) {
    throw new Error(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
  }

  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    throw new Error(`File type ${file.type} is not allowed`);
  }

  return true;
};

// Image preview component
export function ImagePreview({ src, alt, className = "" }: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
}

// File upload component
export default function FileUpload({
  accept = "*/*",
  maxSize = 5 * 1024 * 1024,
  onFileSelect,
  onUploadComplete,
  onError,
  className = "",
  children
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { uploading, progress, uploadFile } = useFileUpload();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      validateFile(file, {
        maxSize,
        allowedTypes: accept.split(',').map(type => type.trim())
      });

      setSelectedFile(file);
      onFileSelect?.(file);

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'File validation failed';
      onError?.(errorMessage);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const result = await uploadFile(selectedFile);
      onUploadComplete?.(result.url);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Upload failed';
      onError?.(errorMessage);
    }
  };

  return (
    <div className={`file-upload ${className}`}>
      <div className="upload-area border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-400 transition-colors">
        {preview && (
          <div className="mb-4">
            <ImagePreview src={preview} alt="Preview" className="w-32 h-32 mx-auto" />
          </div>
        )}
        
        {children || (
          <div>
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Click to upload file</p>
              <p className="text-xs text-gray-400">Max size: {maxSize / (1024 * 1024)}MB</p>
            </div>
          </div>
        )}

        <input
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {selectedFile && (
        <div className="mt-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">{(selectedFile.size / 1024).toFixed(1)} KB</p>
            </div>
            {!uploading && (
              <button
                onClick={handleUpload}
                className="ml-4 px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Upload
              </button>
            )}
          </div>

          {uploading && (
            <div className="mt-2">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Uploading... {progress}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
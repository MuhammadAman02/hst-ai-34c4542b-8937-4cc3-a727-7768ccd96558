import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { detectSkinTone } from '@/utils/colorUtils';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
  onSkinToneDetected: (skinTone: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, onSkinToneDetected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }

    setIsLoading(true);
    
    try {
      const imageUrl = URL.createObjectURL(file);
      onImageUpload(imageUrl);
      
      // Detect skin tone from the uploaded image
      const detectedTone = await detectSkinTone(imageUrl);
      onSkinToneDetected(detectedTone);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('There was an error processing your image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-6">
      <div 
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileInput}
          accept="image/*"
          className="hidden"
        />
        
        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
            <p>Analyzing image...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-12 w-12 text-gray-400 mb-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="text-lg mb-1">Drag and drop your image here</p>
            <p className="text-sm text-gray-500 mb-3">or click to browse</p>
            <Button variant="outline" size="sm">Select Image</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
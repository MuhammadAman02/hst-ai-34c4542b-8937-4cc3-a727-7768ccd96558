import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ImageUploader from '@/components/ImageUploader';
import SkinToneSelector from '@/components/SkinToneSelector';
import ColorPalette from '@/components/ColorPalette';
import SkinToneAdjuster from '@/components/SkinToneAdjuster';
import { SkinTone, ColorCategory } from '@/types';
import { getColorRecommendations } from '@/utils/colorUtils';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [skinTone, setSkinTone] = useState<SkinTone>('medium');
  const [colorRecommendations, setColorRecommendations] = useState<ColorCategory[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  // Update color recommendations when skin tone changes
  useEffect(() => {
    if (skinTone) {
      setColorRecommendations(getColorRecommendations(skinTone));
    }
  }, [skinTone]);

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setIsAnalyzing(true);
    
    toast({
      title: "Image uploaded successfully",
      description: "Analyzing your skin tone...",
    });
  };

  const handleSkinToneDetected = (detectedTone: string) => {
    setIsAnalyzing(false);
    setSkinTone(detectedTone as SkinTone);
    
    toast({
      title: "Analysis complete",
      description: `Detected skin tone: ${detectedTone}`,
    });
  };

  const handleSkinToneSelect = (tone: SkinTone) => {
    setSkinTone(tone);
  };

  const handleSkinToneAdjust = (newImageUrl: string, newTone: SkinTone) => {
    setUploadedImage(newImageUrl);
    setSkinTone(newTone);
    
    toast({
      title: "Skin tone adjusted",
      description: `Adjusted to: ${newTone}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold mb-6">Find Your Perfect Colors</h2>
            <p className="text-gray-600 mb-6">
              Upload your photo or select a skin tone to discover the most flattering colors for you.
              Our tool analyzes your skin tone and provides personalized color recommendations.
            </p>
            
            <ImageUploader 
              onImageUpload={handleImageUpload} 
              onSkinToneDetected={handleSkinToneDetected} 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <SkinToneSelector 
                  selectedTone={skinTone} 
                  onSelectTone={handleSkinToneSelect} 
                />
                
                {uploadedImage && (
                  <SkinToneAdjuster 
                    imageUrl={uploadedImage}
                    currentTone={skinTone}
                    onAdjust={handleSkinToneAdjust}
                  />
                )}
              </div>
              
              <div>
                {uploadedImage && (
                  <div className="image-preview-container">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded" 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                    {isAnalyzing && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                        <div className="text-white text-center">
                          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                          <p>Analyzing skin tone...</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {colorRecommendations.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-6 animate-fade-in">
              <ColorPalette colorCategories={colorRecommendations} />
            </div>
          )}
        </div>
      </main>
      
      <footer className="bg-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>Color Harmony - Find your perfect color palette based on your skin tone</p>
          <p className="mt-1">This is a demo application. In a real app, advanced image processing would be used.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
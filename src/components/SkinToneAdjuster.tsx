import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { SkinTone } from '@/types';
import { adjustImageSkinTone, skinTonePresets } from '@/utils/colorUtils';

interface SkinToneAdjusterProps {
  imageUrl: string | null;
  currentTone: SkinTone;
  onAdjust: (newImageUrl: string, newTone: SkinTone) => void;
}

const SkinToneAdjuster: React.FC<SkinToneAdjusterProps> = ({ 
  imageUrl, 
  currentTone, 
  onAdjust 
}) => {
  const [isAdjusting, setIsAdjusting] = useState(false);
  const [targetTone, setTargetTone] = useState<SkinTone>(currentTone);
  
  // Map skin tones to slider values
  const toneToValue: Record<SkinTone, number> = {
    'light': 0,
    'medium': 20,
    'tan': 40,
    'olive': 60,
    'brown': 80,
    'dark': 100
  };
  
  const valueToTone = (value: number): SkinTone => {
    if (value <= 10) return 'light';
    if (value <= 30) return 'medium';
    if (value <= 50) return 'tan';
    if (value <= 70) return 'olive';
    if (value <= 90) return 'brown';
    return 'dark';
  };
  
  const handleSliderChange = (value: number[]) => {
    const newTone = valueToTone(value[0]);
    setTargetTone(newTone);
  };
  
  const handleApplyAdjustment = async () => {
    if (!imageUrl) return;
    
    setIsAdjusting(true);
    try {
      const adjustedImageUrl = await adjustImageSkinTone(imageUrl, targetTone);
      onAdjust(adjustedImageUrl, targetTone);
    } catch (error) {
      console.error('Error adjusting skin tone:', error);
    } finally {
      setIsAdjusting(false);
    }
  };
  
  if (!imageUrl) return null;
  
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium mb-3">Adjust Skin Tone</h3>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm">Lighter</span>
          <span className="text-sm">Darker</span>
        </div>
        
        <Slider
          defaultValue={[toneToValue[currentTone]]}
          max={100}
          step={1}
          onValueChange={handleSliderChange}
          disabled={isAdjusting}
        />
        
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <div 
              className="w-4 h-4 rounded-full mr-1"
              style={{ backgroundColor: skinTonePresets.find(t => t.name === currentTone)?.color }}
            ></div>
            <span className="text-xs">Current</span>
          </div>
          
          <div className="flex items-center">
            <div 
              className="w-4 h-4 rounded-full mr-1"
              style={{ backgroundColor: skinTonePresets.find(t => t.name === targetTone)?.color }}
            ></div>
            <span className="text-xs">Target: {targetTone}</span>
          </div>
        </div>
      </div>
      
      <Button 
        onClick={handleApplyAdjustment} 
        disabled={isAdjusting || targetTone === currentTone}
        className="w-full"
      >
        {isAdjusting ? 'Adjusting...' : 'Apply Adjustment'}
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        Note: This is a simulation. In a real application, this would use advanced image processing to adjust the skin tone.
      </p>
    </div>
  );
};

export default SkinToneAdjuster;
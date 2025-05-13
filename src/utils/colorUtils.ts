import { SkinTone, ColorCategory } from '../types';

// Predefined skin tone options
export const skinTonePresets = [
  { name: 'light', color: '#FFE4C4' },
  { name: 'medium', color: '#D2B48C' },
  { name: 'tan', color: '#C19A6B' },
  { name: 'olive', color: '#8B7355' },
  { name: 'brown', color: '#6B4423' },
  { name: 'dark', color: '#3B2F2F' },
];

// Color recommendations based on skin tone
export const getColorRecommendations = (skinTone: SkinTone): ColorCategory[] => {
  // These are simplified recommendations - in a real app, these would be more nuanced
  const recommendations: Record<SkinTone, ColorCategory[]> = {
    light: [
      {
        name: 'Clothing Colors',
        description: 'Colors that complement light skin tones',
        colors: [
          { name: 'Navy Blue', hex: '#000080' },
          { name: 'Emerald Green', hex: '#50C878' },
          { name: 'Lavender', hex: '#E6E6FA' },
          { name: 'Soft Pink', hex: '#FFB6C1' },
          { name: 'Burgundy', hex: '#800020' },
        ],
      },
      {
        name: 'Makeup Colors',
        description: 'Makeup shades for light skin',
        colors: [
          { name: 'Peach Blush', hex: '#FFCBA4' },
          { name: 'Soft Rose', hex: '#E8ADAA' },
          { name: 'Taupe Eyeshadow', hex: '#483C32' },
          { name: 'Berry Lip', hex: '#8E4585' },
          { name: 'Champagne Highlight', hex: '#F7E7CE' },
        ],
      },
    ],
    medium: [
      {
        name: 'Clothing Colors',
        description: 'Colors that complement medium skin tones',
        colors: [
          { name: 'Coral', hex: '#FF7F50' },
          { name: 'Olive Green', hex: '#808000' },
          { name: 'Teal', hex: '#008080' },
          { name: 'Peach', hex: '#FFE5B4' },
          { name: 'Royal Blue', hex: '#4169E1' },
        ],
      },
      {
        name: 'Makeup Colors',
        description: 'Makeup shades for medium skin',
        colors: [
          { name: 'Coral Blush', hex: '#FF7F50' },
          { name: 'Bronze', hex: '#CD7F32' },
          { name: 'Copper Eyeshadow', hex: '#B87333' },
          { name: 'Terracotta Lip', hex: '#E2725B' },
          { name: 'Gold Highlight', hex: '#FFD700' },
        ],
      },
    ],
    tan: [
      {
        name: 'Clothing Colors',
        description: 'Colors that complement tan skin tones',
        colors: [
          { name: 'Turquoise', hex: '#40E0D0' },
          { name: 'Bright Red', hex: '#FF0000' },
          { name: 'Cobalt Blue', hex: '#0047AB' },
          { name: 'Mustard Yellow', hex: '#FFDB58' },
          { name: 'Emerald', hex: '#50C878' },
        ],
      },
      {
        name: 'Makeup Colors',
        description: 'Makeup shades for tan skin',
        colors: [
          { name: 'Apricot Blush', hex: '#FBCEB1' },
          { name: 'Bronze', hex: '#CD7F32' },
          { name: 'Gold Eyeshadow', hex: '#FFD700' },
          { name: 'Coral Lip', hex: '#FF7F50' },
          { name: 'Copper Highlight', hex: '#B87333' },
        ],
      },
    ],
    olive: [
      {
        name: 'Clothing Colors',
        description: 'Colors that complement olive skin tones',
        colors: [
          { name: 'Purple', hex: '#800080' },
          { name: 'Forest Green', hex: '#228B22' },
          { name: 'Burnt Orange', hex: '#CC5500' },
          { name: 'Cranberry', hex: '#9F000F' },
          { name: 'Teal', hex: '#008080' },
        ],
      },
      {
        name: 'Makeup Colors',
        description: 'Makeup shades for olive skin',
        colors: [
          { name: 'Terracotta Blush', hex: '#E2725B' },
          { name: 'Bronze', hex: '#CD7F32' },
          { name: 'Plum Eyeshadow', hex: '#8E4585' },
          { name: 'Brick Red Lip', hex: '#CB4154' },
          { name: 'Gold Highlight', hex: '#FFD700' },
        ],
      },
    ],
    brown: [
      {
        name: 'Clothing Colors',
        description: 'Colors that complement brown skin tones',
        colors: [
          { name: 'Bright Yellow', hex: '#FFFF00' },
          { name: 'Fuchsia', hex: '#FF00FF' },
          { name: 'Royal Blue', hex: '#4169E1' },
          { name: 'Emerald Green', hex: '#50C878' },
          { name: 'Orange', hex: '#FFA500' },
        ],
      },
      {
        name: 'Makeup Colors',
        description: 'Makeup shades for brown skin',
        colors: [
          { name: 'Brick Blush', hex: '#CB4154' },
          { name: 'Bronze', hex: '#CD7F32' },
          { name: 'Purple Eyeshadow', hex: '#800080' },
          { name: 'Berry Lip', hex: '#8E4585' },
          { name: 'Gold Highlight', hex: '#FFD700' },
        ],
      },
    ],
    dark: [
      {
        name: 'Clothing Colors',
        description: 'Colors that complement dark skin tones',
        colors: [
          { name: 'Bright White', hex: '#FFFFFF' },
          { name: 'Hot Pink', hex: '#FF69B4' },
          { name: 'Electric Blue', hex: '#7DF9FF' },
          { name: 'Bright Orange', hex: '#FF4500' },
          { name: 'Lime Green', hex: '#32CD32' },
        ],
      },
      {
        name: 'Makeup Colors',
        description: 'Makeup shades for dark skin',
        colors: [
          { name: 'Raisin Blush', hex: '#926F5B' },
          { name: 'Bronze', hex: '#CD7F32' },
          { name: 'Cobalt Eyeshadow', hex: '#0047AB' },
          { name: 'Plum Lip', hex: '#8E4585' },
          { name: 'Gold Highlight', hex: '#FFD700' },
        ],
      },
    ],
  };

  return recommendations[skinTone] || recommendations.medium;
};

// Function to simulate skin tone adjustment (in a real app, this would use image processing)
export const adjustImageSkinTone = (
  imageUrl: string, 
  targetTone: SkinTone
): Promise<string> => {
  // This is a placeholder - in a real app, this would use canvas or WebGL to adjust the image
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // In a real implementation, we would return a modified image
      // For now, we'll just return the original
      resolve(imageUrl);
    }, 500);
  });
};

// Function to detect skin tone from an image (simplified)
export const detectSkinTone = (imageUrl: string): Promise<SkinTone> => {
  // This is a placeholder - in a real app, this would use image processing or ML
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // For demo purposes, return a random skin tone
      const tones: SkinTone[] = ['light', 'medium', 'tan', 'olive', 'brown', 'dark'];
      const randomTone = tones[Math.floor(Math.random() * tones.length)];
      resolve(randomTone);
    }, 1000);
  });
};
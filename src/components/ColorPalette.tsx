import React from 'react';
import { ColorCategory } from '@/types';

interface ColorPaletteProps {
  colorCategories: ColorCategory[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ colorCategories }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recommended Color Palettes</h2>
      
      {colorCategories.map((category, index) => (
        <div key={index} className="palette-category">
          <h3>{category.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{category.description}</p>
          
          <div className="palette-container">
            {category.colors.map((color, colorIndex) => (
              <div key={colorIndex} className="flex flex-col items-center">
                <div 
                  className="color-swatch mb-2"
                  style={{ backgroundColor: color.hex }}
                  title={`${color.name}: ${color.hex}`}
                ></div>
                <span className="text-sm font-medium">{color.name}</span>
                <span className="text-xs text-gray-500">{color.hex}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium mb-2">How to use these colors</h4>
        <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
          <li>Clothing colors work well for your wardrobe choices</li>
          <li>Makeup colors are ideal for cosmetics that complement your skin tone</li>
          <li>Try combining colors from the same palette for a harmonious look</li>
          <li>Colors with higher contrast to your skin tone will create bold statements</li>
          <li>Colors closer to your skin tone create subtle, natural looks</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorPalette;
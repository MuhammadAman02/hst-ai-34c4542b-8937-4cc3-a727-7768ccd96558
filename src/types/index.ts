export type SkinTone = 'light' | 'medium' | 'tan' | 'olive' | 'brown' | 'dark';

export interface ColorRecommendation {
  name: string;
  hex: string;
}

export interface ColorCategory {
  name: string;
  description: string;
  colors: ColorRecommendation[];
}

export interface SkinTonePreset {
  name: SkinTone;
  color: string;
}
import React from 'react';
import { skinTonePresets } from '@/utils/colorUtils';
import { SkinTone } from '@/types';

interface SkinToneSelectorProps {
  selectedTone: SkinTone;
  onSelectTone: (tone: SkinTone) => void;
}

const SkinToneSelector: React.FC<SkinToneSelectorProps> = ({ selectedTone, onSelectTone }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">Select Skin Tone</h3>
      <div className="flex flex-wrap gap-3">
        {skinTonePresets.map((tone) => (
          <button
            key={tone.name}
            className={`skin-tone-option ${selectedTone === tone.name ? 'selected' : ''}`}
            style={{ backgroundColor: tone.color }}
            onClick={() => onSelectTone(tone.name as SkinTone)}
            aria-label={`Select ${tone.name} skin tone`}
            title={tone.name}
          />
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        {selectedTone === 'light' && "Fair skin with cool or warm undertones"}
        {selectedTone === 'medium' && "Medium skin with neutral undertones"}
        {selectedTone === 'tan' && "Golden or tanned skin with warm undertones"}
        {selectedTone === 'olive' && "Medium skin with greenish or olive undertones"}
        {selectedTone === 'brown' && "Deep skin with warm undertones"}
        {selectedTone === 'dark' && "Deep skin with cool or neutral undertones"}
      </p>
    </div>
  );
};

export default SkinToneSelector;
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-palette-warm to-palette-cool"></div>
            <h1 className="text-2xl font-bold text-gray-800">Color Harmony</h1>
          </div>
          <p className="text-sm text-gray-500">Find your perfect color palette</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
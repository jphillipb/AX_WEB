import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 border-b border-gray-800 bg-black backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-20 h-20 logo-container">
            <img src="/logo512.png" alt="Logo" className="w-full logo" />
          </div>
        </div>
        <div className="flex space-x-8">
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

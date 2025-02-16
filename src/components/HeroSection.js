import React from 'react';

const HeroSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-bold mb-6">
        Optimize Your Software for
        <span className="text-blue-400"> AI Agents</span>
      </h1>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Transform your digital products into AI-friendly interfaces that seamlessly integrate with automated systems
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import FeatureCard from './FeatureCard';
import { Terminal, Bot, Code } from 'lucide-react';

const FeaturesGrid = () => {
  return (
    <div className="bg-gray-900 py-24" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Terminal className="w-8 h-8" />}
            title="API Optimization"
            description="Restructure your APIs for better AI interaction and automated processing"
          />
          <FeatureCard 
            icon={<Bot className="w-8 h-8" />}
            title="AI Integration"
            description="Seamless integration with leading AI models and automation tools"
          />
          <FeatureCard 
            icon={<Code className="w-8 h-8" />}
            title="Smart Documentation"
            description="Auto-generate AI-friendly documentation and integration guides"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;

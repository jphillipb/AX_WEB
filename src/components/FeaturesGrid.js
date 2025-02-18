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
            title="AI Optimization Audit"
            description="Scan and evaluate your website or software for AI accessibility, providing an Agentic Experience Score with actionable insights."
          />
          <FeatureCard 
            icon={<Bot className="w-8 h-8" />}
            title="AI-Optimized Web & API Design"
            description="Optimize your website’s structure and APIs to ensure seamless interaction with AI agents and automation tools."
          />
          <FeatureCard 
            icon={<Code className="w-8 h-8" />}
            title="Intelligent Agent Interface Mapping"
            description="Generate structured, AI-friendly guidelines that help agents navigate and interact with your platform effortlessly."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;

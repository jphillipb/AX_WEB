import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24">
      <HeroSection />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </div>
    </div>
  );
};

export default App;

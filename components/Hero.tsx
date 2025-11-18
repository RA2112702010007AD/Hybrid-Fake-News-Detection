import React from 'react';
import InteractiveBackground from './InteractiveBackground';
import { NAV_ITEMS } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToDetector = () => {
    const detectorSection = document.getElementById(NAV_ITEMS[1].id);
    if (detectorSection) {
      detectorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <InteractiveBackground />
      <div className="relative z-10 p-4 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
            Hybrid RBM-CapsNet Framework
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          An advanced deep learning architecture for robust and accurate fake news detection. Combining Restricted Boltzmann Machines and Capsule Networks to understand context and structure.
        </p>
        <button
          onClick={handleScrollToDetector}
          className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        >
          Try the Detector
        </button>
      </div>
    </section>
  );
};

export default Hero;
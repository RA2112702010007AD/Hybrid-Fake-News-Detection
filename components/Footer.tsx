import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-24">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Hybrid Capsule Network and Restricted Boltzmann Machine Framework. Based on the research by Anurag Das.</p>
        <p className="text-sm mt-2">This is demonstration may not be 100% accurate.</p>
      </div>
    </footer>
  );
};

export default Footer;
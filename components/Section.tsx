
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 relative pb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">{title}</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-cyan-400 rounded-full"></span>
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Detector from './components/Detector';
import Footer from './components/Footer';
import EvaluationMetrics from './components/EvaluationMetrics';
import { NAV_ITEMS } from './constants';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
          <Section id={NAV_ITEMS[1].id} title="About the Framework">
            <About />
          </Section>

          <Section id="performance" title="Model Performance">
            <EvaluationMetrics />
          </Section>
          
          <Section id={NAV_ITEMS[2].id} title="Live Detector">
              <Detector />
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
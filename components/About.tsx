import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-gray-300 space-y-12">
      
      <div className="text-center">
        <p className="text-lg">
          This project introduces a novel deep learning framework that combines a Restricted Boltzmann Machine (RBM) and a Capsule Network (CapsNet) to create a more robust and context-aware system for detecting fake news.
        </p>
      </div>

      {/* The Problem */}
      <div>
        <h3 className="text-2xl font-bold text-pink-500 mb-4">The Problem with Traditional Models</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-xl mb-2 text-white">Loss of Hierarchy</h4>
            <p>Models like CNNs use pooling layers that, while effective for some tasks, often discard the spatial and structural relationships between words and phrases. This is like understanding the ingredients of a recipe without knowing the steps to combine them.</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-xl mb-2 text-white">Loss of Global Context</h4>
            <p>Methods like Bag-of-Words or TF-IDF are great at seeing which words are important, but they often miss the long-range dependencies and the overall narrative. They can be misled by texts that use legitimate words in a manipulative sequence.</p>
          </div>
        </div>
      </div>

      {/* The Solution */}
      <div>
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">The Hybrid Solution: RBM + CapsNet</h3>
        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-xl mb-2 text-white">Restricted Boltzmann Machine (RBM) for Global Context</h4>
              <p>The RBM excels at unsupervised feature learning. It processes the text to identify latent semantic features and understands the subtle, high-level relationships between topics and concepts across the entire document, effectively capturing the global context.</p>
          </div>
           <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <h4 className="font-semibold text-xl mb-2 text-white">Capsule Network (CapsNet) for Hierarchy</h4>
              <p>CapsNet is designed to recognize hierarchical relationships. It models the connections between words, phrases, and sentences through dynamic routing, preserving the crucial part-to-whole relationships that are vital for understanding nuanced or cleverly manipulated text.</p>
          </div>
        </div>
      </div>
      
      {/* The Dataset */}
      <div>
        <h3 className="text-2xl font-bold text-gray-400 mb-4">Training & Evaluation: The ISOT Dataset</h3>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex items-center justify-around flex-wrap gap-6">
            <div>
                <p className="text-lg font-semibold">A large-scale, balanced dataset is crucial for training a reliable model. This framework was evaluated on the ISOT Fake News Dataset, which contains:</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-bold text-green-400">21,417</p>
                <p className="text-gray-400">Real News Articles</p>
            </div>
            <div className="text-center">
                <p className="text-4xl font-bold text-red-400">23,481</p>
                <p className="text-gray-400">Fake News Articles</p>
            </div>
        </div>
         <p className="text-center mt-4 text-sm text-gray-500">The model's strong performance on this dataset, as shown in the "Model Performance" section below, validates the effectiveness of this hybrid approach.</p>
      </div>

    </div>
  );
};

export default About;

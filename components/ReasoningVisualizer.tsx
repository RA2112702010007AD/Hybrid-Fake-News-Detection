import React from 'react';

interface ReasoningVisualizerProps {
  inputText: string;
  rbmKeywords: string[];
  capsnetKeywords: string[];
}

const ReasoningVisualizer: React.FC<ReasoningVisualizerProps> = ({ inputText, rbmKeywords, capsnetKeywords }) => {
  
  const getHighlightedText = () => {
    const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Combine all unique keywords, filter out any empty ones, and sort by length descending
    // This ensures longer phrases are matched before shorter sub-phrases
    const allKeywords = [...new Set([...rbmKeywords, ...capsnetKeywords])]
      .filter(k => k && k.trim() !== '')
      .sort((a, b) => b.length - a.length);

    if (allKeywords.length === 0) {
      return <p className="text-gray-400 italic">No specific phrases were highlighted by the model.</p>;
    }

    const regex = new RegExp(`(${allKeywords.map(escapeRegex).join('|')})`, 'gi');
    const parts = inputText.split(regex);

    return (
      <p className="whitespace-pre-wrap leading-relaxed">
        {parts.map((part, index) => {
          if (!part) return null; // Handle empty strings from split
          
          const lowerPart = part.toLowerCase();
          
          // Check against lowercased keywords for case-insensitive matching
          const isRbm = rbmKeywords.some(k => k && k.toLowerCase() === lowerPart);
          const isCapsnet = capsnetKeywords.some(k => k && k.toLowerCase() === lowerPart);

          if (isRbm) {
            return (
              <span key={index} className="bg-pink-500/30 text-pink-300 px-1 py-0.5 rounded transition-all duration-300 hover:bg-pink-500/50">
                {part}
              </span>
            );
          }
          if (isCapsnet) {
            return (
              <span key={index} className="bg-cyan-500/30 text-cyan-300 px-1 py-0.5 rounded transition-all duration-300 hover:bg-cyan-500/50">
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </p>
    );
  };

  return (
    <div className="border-t border-slate-700 pt-6">
      <h4 className="text-xl font-bold mb-4 text-center text-gray-300">Reasoning Visualizer</h4>
      
      <div className="flex justify-center items-center space-x-6 mb-4 text-sm text-gray-400">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-pink-500/70 mr-2 border border-pink-400"></span>
          <span>RBM (Global Context)</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-cyan-500/70 mr-2 border border-cyan-400"></span>
          <span>CapsNet (Hierarchy)</span>
        </div>
      </div>
      
      <div className="bg-slate-800 p-4 rounded-lg text-gray-300 max-h-96 overflow-y-auto">
        {getHighlightedText()}
      </div>
    </div>
  );
};

export default ReasoningVisualizer;
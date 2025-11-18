
import React from 'react';

const Box: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`bg-slate-800 border border-slate-600 rounded-lg p-4 text-center flex items-center justify-center ${className}`}>
    {children}
  </div>
);

const Arrow: React.FC<{ right?: boolean; down?: boolean; className?: string }> = ({ right, down, className }) => (
    <div className={`relative ${className} flex items-center justify-center`}>
        {right && <div className="w-full h-0.5 bg-cyan-400"></div>}
        {down && <div className="h-full w-0.5 bg-cyan-400"></div>}
        <div className="absolute text-cyan-400" style={right ? {right: '-8px'} : {bottom: '-8px'}}>
            {right ? '▶' : '▼'}
        </div>
    </div>
);


const ArchitectureDiagram: React.FC = () => {
    return (
        <div className="p-4 md:p-8 bg-slate-900 rounded-xl border border-slate-700 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center font-semibold text-white">

                {/* Column 1: Input */}
                <Box className="md:col-span-2 h-20">Input Text</Box>
                
                {/* Column 2: Arrow */}
                <div className="md:col-span-1 flex justify-center"><Arrow right className="w-full"/></div>
                
                {/* Column 3: Processing Branches */}
                <div className="md:col-span-3 space-y-4">
                    <Box className="h-20">Word Embeddings</Box>
                    <div className="flex justify-center"><Arrow down className="h-8"/></div>
                    <Box className="h-20 bg-cyan-900/50 border-cyan-500">Primary Capsules</Box>
                    <div className="flex justify-center"><Arrow down className="h-8"/></div>
                    <Box className="h-20 bg-cyan-900/50 border-cyan-500">Class Capsules (Hierarchical)</Box>

                    <div className="h-16"></div>

                    <Box className="h-20">TF-IDF (Binarized)</Box>
                    <div className="flex justify-center"><Arrow down className="h-8"/></div>
                    <Box className="h-20 bg-pink-900/50 border-pink-500">RBM Embedding Layer (Latent)</Box>
                </div>

                {/* Column 4: Arrow */}
                <div className="md:col-span-1 flex justify-center items-center">
                    <div className="h-full w-0.5 bg-slate-600 relative">
                        <div className="absolute top-1/3 -right-2">▶</div>
                        <div className="absolute bottom-1/4 -right-2">▶</div>
                    </div>
                </div>

                {/* Column 5-7: Fusion */}
                <Box className="md:col-span-2 h-20 bg-purple-900/50 border-purple-500">Fusion Layer (RBM + CapsNet)</Box>
                
                {/* Column 8: Arrow */}
                <div className="md:col-span-1 flex justify-center"><Arrow right className="w-full"/></div>

                {/* Column 9-10: Classifier */}
                <Box className="md:col-span-2 h-20">Fully Connected Classifier</Box>

                 {/* Column 11: Arrow */}
                <div className="md:col-span-1 flex justify-center"><Arrow right className="w-full"/></div>

                {/* Column 12: Output */}
                <Box className="md:col-span-2 h-20 bg-green-900/50 border-green-500">Output (Fake/Real)</Box>

            </div>
        </div>
    );
};


export default ArchitectureDiagram;

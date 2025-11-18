
import React from 'react';
import { LiteratureItem } from '../types';

interface LiteratureSurveyTableProps {
  data: LiteratureItem[];
}

const LiteratureSurveyTable: React.FC<LiteratureSurveyTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-slate-800/50 rounded-lg p-4 border border-slate-700">
      <div className="hidden lg:grid grid-cols-[auto_1fr_1fr_1fr] gap-4 p-4 font-bold text-cyan-400 border-b border-slate-700">
        <div>S.No.</div>
        <div>Paper Details</div>
        <div>Inference (Methods Used)</div>
        <div>Cons</div>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.sno} className={`grid grid-cols-1 lg:grid-cols-[auto_1fr_1fr_1fr] gap-4 p-4 rounded-lg transition-colors duration-300 hover:bg-slate-700/50 ${index > 0 ? 'border-t border-slate-700/50 lg:border-t-0' : 'lg:border-t-0'}`}>
            {/* S.No */}
            <div className="flex items-start">
              <span className="lg:hidden font-bold text-cyan-400 w-20">S.No.:</span>
              <span className="text-lg font-bold text-center w-full lg:w-auto">{item.sno}</span>
            </div>

            {/* Paper Details */}
            <div className="text-gray-300">
                <div className="lg:hidden font-bold text-cyan-400 mb-2">Paper Details:</div>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm italic">{item.authors}</p>
                <p className="text-xs mt-1">{item.publisher} - {item.date}</p>
            </div>
            
            {/* Inference */}
            <div className="text-gray-300">
                <div className="lg:hidden font-bold text-cyan-400 mb-2">Inference:</div>
                <p>{item.inference}</p>
            </div>
            
            {/* Cons */}
            <div className="text-gray-300">
                <div className="lg:hidden font-bold text-cyan-400 mb-2">Cons:</div>
                <p>{item.cons}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiteratureSurveyTable;

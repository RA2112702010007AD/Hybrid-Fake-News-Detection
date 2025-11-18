import React from 'react';
import { EVALUATION_METRICS } from '../constants';

const EvaluationMetrics: React.FC = () => {
    return (
        <div>
            <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                The following metrics represent the model's performance, evaluated on the widely-used ISOT Fake News Dataset. They provide insight into the model's reliability and effectiveness in distinguishing between real and fabricated news.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {EVALUATION_METRICS.map((metric) => (
                    <div key={metric.name} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">
                        <h3 className="text-2xl font-bold text-cyan-400">{metric.name}</h3>
                        <p className="text-5xl font-extrabold my-4 text-white">{metric.value}</p>
                        <p className="text-gray-400 text-sm">{metric.description}</p>
                    </div>
                ))}
            </div>
             <p className="text-center text-gray-500 text-sm mt-8">
                Note: Mean Absolute Error (MAE) and Mean Squared Error (MSE) are not applicable as they are metrics for regression tasks, whereas fake news detection is a classification task.
            </p>
        </div>
    );
};

export default EvaluationMetrics;

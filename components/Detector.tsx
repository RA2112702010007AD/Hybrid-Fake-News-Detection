import React, { useState } from 'react';
import { analyzeText } from '../services/geminiService';
import { AnalysisResult } from '../types';
import ReasoningVisualizer from './ReasoningVisualizer';

const Detector: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [language, setLanguage] = useState<string>('auto');
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalyze = async () => {
        if (!inputText.trim()) {
            setError('Please enter some text to analyze.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setResult(null);

        try {
            const analysisResult: AnalysisResult = await analyzeText(inputText, language);
            setResult(analysisResult);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const getConfidenceColor = (confidence: number) => {
        const value = Math.round(confidence * 100);
        if (value > 75) return 'text-red-400';
        if (value > 50) return 'text-yellow-400';
        return 'text-green-400';
    }

    const languageOptions = [
        { value: 'auto', label: 'Auto-Detect' },
        { value: 'English', label: 'English' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'French', label: 'French' },
        { value: 'German', label: 'German' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Russian', label: 'Russian' },
        { value: 'Arabic', label: 'Arabic' },
    ];

    return (
        <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-700 text-white">
            <p className="text-gray-300 mb-6 text-center">
                Enter a news snippet or article text below. Our AI, based on the conceptual RBM-CapsNet framework, will analyze it for potential misinformation.
            </p>
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="sm:col-span-3">
                         <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Paste news text here..."
                            className="w-full h-48 p-4 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300 resize-y"
                            disabled={isLoading}
                        />
                    </div>
                     <div className="sm:col-span-1">
                        <label htmlFor="language-select" className="block text-sm font-medium text-gray-400 mb-2">Language</label>
                        <select
                            id="language-select"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="w-full p-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300"
                            disabled={isLoading}
                        >
                            {languageOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                        </select>
                    </div>
                </div>
                <button
                    onClick={handleAnalyze}
                    disabled={isLoading}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Analyzing...
                        </>
                    ) : 'Analyze Text'}
                </button>
            </div>

            {error && (
                <div className="mt-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-center">
                    {error}
                </div>
            )}
            
            {result && !isLoading && (
                 <div className="mt-8 p-6 bg-slate-900/70 rounded-lg border border-slate-700 space-y-6">
                    <h3 className="text-2xl font-bold text-center">Analysis Result</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                        <div className={`p-4 rounded-lg ${result.isFakeNews ? 'bg-red-900/50' : 'bg-green-900/50'}`}>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">Verdict</div>
                            <div className={`text-3xl font-bold ${result.isFakeNews ? 'text-red-400' : 'text-green-400'}`}>
                                {result.isFakeNews ? 'Likely Fake News' : 'Likely Real News'}
                            </div>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-lg">
                             <div className="text-sm text-gray-400 uppercase tracking-wider">Confidence Score</div>
                             <div className={`text-3xl font-bold ${getConfidenceColor(result.confidence)}`}>
                                 {(result.confidence * 100).toFixed(1)}%
                             </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-lg mb-2 text-cyan-400">Overall Explanation</h4>
                        <p className="text-gray-300 bg-slate-800 p-4 rounded-lg">{result.explanation}</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-2 text-pink-500">Key Indicators / Manipulated Phrases</h4>
                        <ul className="list-disc list-inside space-y-2 bg-slate-800 p-4 rounded-lg text-gray-300">
                           {result.keyPoints.map((point, index) => <li key={index}>{point}</li>)}
                        </ul>
                    </div>

                    <div className="border-t border-slate-700 pt-6">
                        <h4 className="text-xl font-bold mb-4 text-center text-gray-300">Framework-Specific Breakdown</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-800 p-4 rounded-lg">
                                <h5 className="font-bold text-lg mb-2 text-pink-400">RBM Analysis (Global Context)</h5>
                                <p className="text-gray-300 text-sm">{result.modelReasoning.rbmAnalysis}</p>
                            </div>
                            <div className="bg-slate-800 p-4 rounded-lg">
                                <h5 className="font-bold text-lg mb-2 text-cyan-400">CapsNet Analysis (Hierarchical Structure)</h5>
                                <p className="text-gray-300 text-sm">{result.modelReasoning.capsnetAnalysis}</p>
                            </div>
                        </div>
                    </div>

                    {(result.modelReasoning.rbmKeywords?.length > 0 || result.modelReasoning.capsnetKeywords?.length > 0) &&
                        <ReasoningVisualizer 
                            inputText={inputText}
                            rbmKeywords={result.modelReasoning.rbmKeywords}
                            capsnetKeywords={result.modelReasoning.capsnetKeywords}
                        />
                    }
                 </div>
            )}
        </div>
    );
};

export default Detector;
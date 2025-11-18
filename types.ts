// Fix: Define interfaces used across the application.
export interface LiteratureItem {
  sno: number;
  title: string;
  authors: string;
  publisher: string;
  date: string;
  inference: string;
  cons: string;
}

export interface AnalysisResult {
    isFakeNews: boolean;
    confidence: number;
    explanation: string;
    keyPoints: string[];
    modelReasoning: {
      rbmAnalysis: string;
      rbmKeywords: string[];
      capsnetAnalysis: string;
      capsnetKeywords: string[];
    }
}
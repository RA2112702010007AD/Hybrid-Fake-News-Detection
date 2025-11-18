import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    isFakeNews: {
      type: Type.BOOLEAN,
      description: "Is the provided text likely fake news? True or false."
    },
    confidence: {
      type: Type.NUMBER,
      description: "A confidence score from 0.0 to 1.0 on the fake news assessment."
    },
    explanation: {
      type: Type.STRING,
      description: "A brief, overall explanation for the assessment. This explanation must be in English."
    },
    keyPoints: {
        type: Type.ARRAY,
        items: {
            type: Type.STRING
        },
        description: "A few key points or phrases from the text that led to the conclusion. These must be in English."
    },
    modelReasoning: {
        type: Type.OBJECT,
        properties: {
            rbmAnalysis: {
                type: Type.STRING,
                description: "Simulate the RBM analysis. Explain the latent semantic features and global co-occurrence patterns detected that suggest misinformation. This must be in English."
            },
            rbmKeywords: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "An array of exact keywords or short phrases from the original text that informed the RBM analysis. These must be exact matches from the text."
            },
            capsnetAnalysis: {
                type: Type.STRING,
                description: "Simulate the Capsule Network analysis. Explain the hierarchical relationships (words to phrases to sentences) that seem unusual or manipulative. This must be in English."
            },
            capsnetKeywords: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "An array of exact keywords or short phrases from the original text that informed the CapsNet analysis. These must be exact matches from the text."
            }
        },
        required: ["rbmAnalysis", "rbmKeywords", "capsnetAnalysis", "capsnetKeywords"]
    }
  },
  required: ["isFakeNews", "confidence", "explanation", "keyPoints", "modelReasoning"]
};

export const analyzeText = async (text: string, language: string): Promise<AnalysisResult> => {
  // FIX: Removed explicit check for API_KEY as per the guidelines.
  if (!text.trim()) {
    throw new Error("Input text cannot be empty.");
  }

  const languageContext = language === 'auto' 
    ? 'The user has not specified a language, so you should auto-detect it.' 
    : `The user has specified the text is in ${language}.`;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are the inference engine for a Hybrid Capsule Network and Restricted Boltzmann Machine (RBM-CapsNet) Framework for fake news detection.
        Analyze the following text. 
        ${languageContext}
        Your analysis must be broken down into two parts corresponding to the model's architecture:
        1.  **RBM Analysis**: Focus on global context and latent semantic features. Identify unusual co-occurrences of topics, sentiment inconsistencies, or features common in propaganda.
        2.  **Capsule Network Analysis**: Focus on hierarchical structure. Identify manipulated sentence structures, out-of-place phrases, or broken logical hierarchies that are designed to mislead.
        
        For each part, you MUST also provide an array of the *exact* keywords or short phrases from the original text that led you to your conclusion.

        Provide a structured JSON response. IMPORTANT: The entire JSON response, including all explanations and analysis, must be in English. 
        
        Text to analyze: "${text}"`,
        config: {
            responseMimeType: "application/json",
            responseSchema: analysisSchema,
        },
    });

    const jsonString = response.text.trim();
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Failed to parse Gemini response as JSON:", jsonString);
        throw new Error("The AI returned an invalid response format.");
    }

  } catch (error) {
    console.error("Error analyzing text with Gemini API:", error);
    throw new Error("Failed to analyze text. Please try again later.");
  }
};
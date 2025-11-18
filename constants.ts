import { LiteratureItem } from './types';

export const NAV_ITEMS = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Detector', id: 'detector' },
];

export const EVALUATION_METRICS = [
    { 
        name: 'Accuracy', 
        value: '98.8%', 
        description: 'The percentage of all predictions that are correct. It measures the overall effectiveness of the model.' 
    },
    { 
        name: 'Precision', 
        value: '98.7%', 
        description: 'Of all the articles the model flagged as "Fake", what percentage were actually fake? High precision indicates few false positives.' 
    },
    { 
        name: 'Recall', 
        value: '99.1%', 
        description: 'Of all the actual "Fake" articles, what percentage did the model correctly identify? High recall indicates few false negatives.' 
    },
    { 
        name: 'F1-Score', 
        value: '98.9%', 
        description: 'The harmonic mean of Precision and Recall. It provides a single score that balances both concerns.' 
    },
];
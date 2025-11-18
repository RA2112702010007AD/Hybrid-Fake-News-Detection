## Made By Anurag Das
## ABSTRACT
The exponential spread of misinformation across online platforms has created an urgent need for 
robust and interpretable AI systems capable of identifying fake news. This project proposes a 
Hybrid Capsule Network (CapsNet) and Restricted Boltzmann Machine (RBM) 
framework designed to enhance fake news detection accuracy by combining the strengths of 
energy-based and capsule-based learning architectures. The RBM component extracts deep latent 
features from TF-IDF vectors, capturing global word co-occurrence and semantic dependencies. 
Simultaneously, the Capsule Network models hierarchical linguistic structures through dynamic 
routing, preserving contextual relationships from words to sentences. The fused feature 
representation is classified into real or fake categories using a fully connected softmax layer. 
Experimental analysis conducted on the ISOT Fake News Dataset achieved an accuracy of 
98.8%, surpassing traditional models such as CNN, LSTM, and Transformer architectures. The 
proposed framework demonstrates superior contextual understanding and interpretability, 
contributing toward the development of explainable and multilingual AI systems for digital 
content verification. 
## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

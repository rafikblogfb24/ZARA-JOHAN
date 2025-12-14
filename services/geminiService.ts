import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generatePostSummary = async (postContent: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please provide a valid API key to use the AI features.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert editor for a tech and gaming news website. 
      Summarize the following article content into 3 concise bullet points that capture the most exciting details.
      
      Article Content:
      ${postContent}`,
    });
    
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI assistant.";
  }
};

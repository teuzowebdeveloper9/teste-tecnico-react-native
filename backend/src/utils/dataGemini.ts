import { Enviriments } from "src/secret/Enviriments";

const apiKey = Enviriments.API_KEY; 
export const urlGemini = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

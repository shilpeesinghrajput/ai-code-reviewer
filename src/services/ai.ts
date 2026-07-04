import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function reviewCode(
  code: string,
  language: string
) {
const prompt = `
You are a senior software engineer.

Review this ${language} code.

Keep your response under 200 words.

Use this format:

## Bugs
- ...

## Improvements
- ...

## Security
- ...

## Rating
8/10

Code:
${code}
`;
  const result = await model.generateContent(prompt);

  return result.response.text();
}
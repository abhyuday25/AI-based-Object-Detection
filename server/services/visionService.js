import OpenAI from "openai";

export default async function analyzeImage(base64Image) {
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const prompt = `
You are a vision analysis assistant.

Return ONLY valid JSON:

{
  "object_name": "",
  "category": "",
  "estimated_freshness": "",
  "quality_assessment": "",
  "confidence_score": "",
  "interesting_fact": ""
}

Rules:
- estimated_freshness: Fresh / Moderately Fresh / Not Fresh / Not Applicable
- quality_assessment: High Quality / Average Quality / Poor Quality / Damaged / Not Applicable
- confidence_score: 0-100
- Keep interesting_fact under 25 words
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          {
            type: "image_url",
            image_url: {
              url: base64Image
            }
          }
        ]
      }
    ]
  });

  const content = response.choices[0].message.content;

  return JSON.parse(content);
}
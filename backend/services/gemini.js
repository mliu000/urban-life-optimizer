import OpenAI from 'openai';

let openai;

function getClient() {
    if (!openai) {
        openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: process.env.OPENROUTER_API_KEY,
            defaultHeaders: {
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "Urban Life Optimizer",
            }
        });
    }
    return openai;
}

export async function askGemini(prompt, jsonContext = null) {
    try {
        let userMessage = prompt;

        if (jsonContext) {
            const contextStr = JSON.stringify(jsonContext, null, 2);
            userMessage = `Context (JSON data):\n\`\`\`json\n${contextStr}\n\`\`\`\n\nQuestion: ${prompt}`;
        }

        console.log('Sending to Gemini:', prompt);

        const completion = await getClient().chat.completions.create({
            model: "google/gemini-2.0-flash-001",
            messages: [{ role: "user", content: userMessage }],
            temperature: 0.7,
        });

        const response = completion.choices[0].message.content;

        console.log('\n=== GEMINI RESPONSE ===');
        console.log(response);
        console.log('======================\n');

        return response;

    } catch (error) {
        console.error("❌ Gemini API error:", error.message);
        throw error;
    }
}
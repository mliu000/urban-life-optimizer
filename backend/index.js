import dotenv from 'dotenv';
dotenv.config({ path: '../.env.local' });

console.log('API Key loaded:', process.env.OPENROUTER_API_KEY ? 'yes' : 'no');

import express from 'express';
import { askGemini } from './services/gemini.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express Server!');
});

app.post('/ask', async (req, res) => {
  try {
    const { prompt, context } = req.body;
    const response = await askGemini(prompt, context);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
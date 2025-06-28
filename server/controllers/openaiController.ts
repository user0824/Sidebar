import express from 'express';
import type { Request, Response, NextFunction, RequestHandler } from 'express';
import axios from 'axios';
import { SYSTEM_PROMPT } from '../prompts.ts';

export const chatHandler: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  if (!message) {
    if (!message) {
      res.status(400).json({ error: 'Missing message in request body' });
      return;
    }
  }
  console.log('Received message:', message);
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error: any) {
    next(error);
  }
};

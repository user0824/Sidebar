import express from 'express';
import type { Request, Response, NextFunction, RequestHandler } from 'express';
import axios from 'axios';
import { SYSTEM_PROMPT } from '../prompts.ts';

export const chatHandler: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, messages, boardSummary, scratchPad } = req.body;
  if (!message) {
    res.status(400).json({ error: 'Missing message in request body' });
    return;
  }
  console.log('Received message:', message);
  try {
    // Build the messages array to send to OpenAI with system prompt and context
    const promptMessages = [{ role: 'system', content: SYSTEM_PROMPT }];
    if (boardSummary || scratchPad) {
      const contextPieces: string[] = [];
      if (boardSummary) contextPieces.push(`Board Context: ${boardSummary}`);
      if (scratchPad) contextPieces.push(`Notes: ${scratchPad}`);
      promptMessages.push({ role: 'user', content: contextPieces.join(' \n ') });
    }

    if (Array.isArray(messages) && messages.length > 0) {
      // Append all prior chat context
      promptMessages.push(...messages);
    } else {
      // Fallback to sending just the current message
      promptMessages.push({ role: 'user', content: message });
    }
    // Updated API call to use the full context
    console.log('Prompt messages:', promptMessages);
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4.1',
        messages: promptMessages,
        temperature: 0.3,
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

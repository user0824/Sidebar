import express from 'express';
import type { Request, Response, NextFunction, RequestHandler } from 'express';
import axios from 'axios';
import { SYSTEM_PROMPT } from '../prompts';

// Regular chat handler (keeping this existing one)
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

    // 1. Add prior chat context or fallback to the single incoming message
    if (Array.isArray(messages) && messages.length > 0) {
      promptMessages.push(...messages);
    } else {
      promptMessages.push({ role: 'user', content: message });
    }

    // 2. Append board context & notes *last* so that the LLM always sees the
    //    freshest architecture description right before generating a reply.
    if (boardSummary || scratchPad) {
      const contextPieces: string[] = [];
      if (boardSummary) contextPieces.push(`Board Context: ${boardSummary}`);
      if (scratchPad) contextPieces.push(`Notes: ${scratchPad}`);
      promptMessages.push({
        role: 'user',
        content: contextPieces.join(' \n '),
      });
    }

    // Updated API call to use the full context
    console.log('Prompt messages:', promptMessages);
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
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
// -------------------------------
// * STREAMING CHAT HANDLER
// -------------------------------
export const streamChatHandler: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, messages, boardSummary, scratchPad } = req.body;

  if (!message) {
    res.status(400).json({ error: 'Missing message in request body' });
    return;
  }

  console.log('Received streaming message:', message);

  try {
    // Set headers for Server-Sent Events
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Cache-Control');

    // Build the messages array to send to OpenAI with system prompt and context
    const promptMessages = [{ role: 'system', content: SYSTEM_PROMPT }];

    // 1. Prior chat context (or current message if none)
    if (Array.isArray(messages) && messages.length > 0) {
      promptMessages.push(...messages);
    } else {
      promptMessages.push({ role: 'user', content: message });
    }

    // 2. Board context & notes as the very last user message
    if (boardSummary || scratchPad) {
      const contextPieces: string[] = [];
      if (boardSummary) contextPieces.push(`Board Context: ${boardSummary}`);
      if (scratchPad) contextPieces.push(`Notes: ${scratchPad}`);
      promptMessages.push({
        role: 'user',
        content: contextPieces.join(' \n '),
      });
    }

    console.log('Streaming prompt messages:', promptMessages);

    // Make streaming request to OpenAI
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: promptMessages,
        temperature: 0.3,
        stream: true, // Enable streaming
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        responseType: 'stream',
      }
    );

    // Handle client disconnect
    req.on('close', () => {
      console.log('Client disconnected, ending stream');
      response.data.destroy();
    });

    // Process the streaming response
    response.data.on('data', (chunk: Buffer) => {
      const lines = chunk
        .toString()
        .split('\n')
        .filter((line) => line.trim() !== '');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);

          // Check for end of stream
          if (data === '[DONE]') {
            res.write('data: [DONE]\n\n');
            res.end();
            return;
          }

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;

            if (content) {
              // Send the content chunk to the client
              res.write(`data: ${JSON.stringify({ content })}\n\n`);
            }
          } catch (error) {
            console.error('Error parsing streaming data:', error);
          }
        }
      }
    });

    response.data.on('end', () => {
      console.log('OpenAI stream ended');
      res.write('data: [DONE]\n\n');
      res.end();
    });

    response.data.on('error', (error: Error) => {
      console.error('OpenAI stream error:', error);
      res.write(
        `data: ${JSON.stringify({ error: 'Stream error occurred' })}\n\n`
      );
      res.end();
    });
  } catch (error: any) {
    console.error('Streaming error:', error);
    res.status(500).json({ error: 'Failed to start streaming' });
  }
};

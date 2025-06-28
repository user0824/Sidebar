import React, { useEffect, useRef } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useChatContext, Message } from '../context/ChatContext';
import { useBoard } from '../context/BoardContext';
import { Node as FlowNode, Edge as FlowEdge } from '@xyflow/react';

const Chat: React.FC = () => {
  const { messages, setMessages, input, setInput, isLoading, setIsLoading } =
    useChatContext();

  // Ref for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // helper to strip html tags from the scratchpad html (very lightweight)
  const stripHtml = (html: string) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // create a plain-english summary of the board that is compact enough for LLM consumption
  const summariseBoard = (nodes: FlowNode[], edges: FlowEdge[]) => {
    if (!nodes.length) return 'The board is empty.';
    const nodeNames = nodes.map((n) => n?.data?.name).filter(Boolean);
    const componentsPart = `Components: ${nodeNames.join(', ')}.`;
    if (!edges.length) return `${componentsPart} No connections.`;
    const edgeStrings = edges.map((e) => {
      const sourceName =
        nodes.find((n) => n.id === e.source)?.data?.name || e.source;
      const targetName =
        nodes.find((n) => n.id === e.target)?.data?.name || e.target;
      return `${sourceName}→${targetName}`;
    });
    return `${componentsPart} Connections: ${edgeStrings.join(', ')}.`;
  };

  const { nodes, edges } = useBoard();

  // Refs that always hold the **latest** board state so the submit handler
  // can read fresh data even if it was created in a previous render.
  const nodesRef = useRef(nodes);
  const edgesRef = useRef(edges);

  // Keep the refs in sync with the context values
  useEffect(() => {
    nodesRef.current = nodes;
    edgesRef.current = edges;
  }, [nodes, edges]);

  // Streaming message handler
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    // Add user message immediately
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    // Create AI message placeholder
    const aiMessageId = (Date.now() + 1).toString();
    const aiMessage: Message = {
      id: aiMessageId,
      role: 'assistant',
      content: '',
    };

    // Add empty AI message to show it's thinking
    setMessages((prev) => [...prev, aiMessage]);

    const currentInput = input;
    setInput('');

    try {
      // Create abort controller for this request
      abortControllerRef.current = new AbortController();

      // Use the *latest* board state held in the refs, this avoids the stale
      // closure issue where `nodes`/`edges` could still be the previous value
      // if the user clicks "Send" before React has re-rendered the sidebar.
      const boardSummary = summariseBoard(nodesRef.current, edgesRef.current);
      const scratchPadHtml = localStorage.getItem('scratchpad-content') || '';
      const scratchPad = stripHtml(scratchPadHtml).slice(0, 1000);

      const response = await fetch('http://localhost:3001/api/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages,
          message: currentInput,
          boardSummary,
          scratchPad,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error('No reader available');
      }

      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);

            if (data === '[DONE]') {
              break;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                accumulatedContent += parsed.content;

                // Update the AI message with accumulated content
                setMessages((prev) =>
                  prev.map((msg) =>
                    msg.id === aiMessageId
                      ? { ...msg, content: accumulatedContent }
                      : msg
                  )
                );
              }
            } catch (e) {
              // Skip invalid JSON
              console.warn('Failed to parse streaming data:', data);
            }
          }
        }
      }
    } catch (error: any) {
      console.error('Error streaming AI response:', error);

      if (error.name === 'AbortError') {
        console.log('Request was aborted');
        return;
      }

      // Show error message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMessageId
            ? {
                ...msg,
                content: 'Sorry, I encountered an error. Please try again.',
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  // Stop streaming function
  const stopStreaming = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsLoading(false);
    }
  };

  return (
    <div className='h-full flex flex-col'>
      {/* CHAT FORM */}
      <form
        onSubmit={handleSendMessage}
        className='flex flex-col flex-1  overflow-hidden'
      >
        {/* MESSAGES AREA */}
        <div className='flex-1 p-4 overflow-y-auto space-y-3 min-h-0'>
          {messages.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full text-center'>
              <div className='w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4'>
                <Bot className='w-8 h-8 text-indigo-600/80' />
              </div>
              <h3 className='text-lg font-semibold text-slate-800/70 mb-2'>
                Start a conversation
              </h3>
              <p className='text-gray-600/70 text-sm max-w-xs leading-relaxed'>
                I can help you with system design questions, architecture
                decisions, and best practices.
              </p>
            </div>
          ) : (
            <>
              {messages.map((m, idx) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${
                    m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* AVATAR FOR USERS AND CHATBOTS*/}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      m.role === 'user'
                        ? 'bg-indigo-500/40 border border-indigo-400/50'
                        : 'bg-white/10 border border-white/20'
                    }`}
                  >
                    {m.role === 'user' ? (
                      <User className='w-4 h-4 text-indigo-300' />
                    ) : (
                      <Bot className='w-4 h-4 text-white/70' />
                    )}
                  </div>

                  {/* MESSAGE BUBBLE */}
                  <div
                    className={`max-w-[80%] ${
                      m.role === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-2.5 rounded-xl backdrop-blur-sm border ${
                        m.role === 'user'
                          ? 'bg-indigo-500/40 border-indigo-400/50 text-white'
                          : 'bg-white/10 border-white/20 text-white/90'
                      }`}
                    >
                      <p className='text-sm leading-relaxed break-words whitespace-pre-wrap'>
                        {m.content}
                        {/* Show cursor for streaming AI messages */}
                        {m.role === 'assistant' &&
                          isLoading &&
                          idx === messages.length - 1 && (
                            <span className='inline-block w-2 h-4 bg-white/70 ml-1 animate-pulse'></span>
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Invisible div to scroll to */}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* INPUT AREA */}
        <div className='p-4 border-t border-white/10 bg-white/5'>
          <div className='flex items-center gap-3'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='flex-1  hover:text-white hover:bg-white/10 border-2 border-white/20 rounded-xl px-4 py-2.5 focus:text-slate-900/80 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/30 transition-all duration-200'
              placeholder='Ask away...'
              disabled={isLoading}
            />
            {isLoading ? (
              <button
                type='button'
                onClick={stopStreaming}
                className='bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 hover:border-red-400/50 text-white p-2.5 rounded-xl transition-all duration-200 backdrop-blur-sm'
              >
                <span className='w-5 h-5 flex items-center justify-center'>
                  ⏹
                </span>
              </button>
            ) : (
              <button
                type='submit'
                className='bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/30 hover:border-indigo-400/50 text-white p-2.5 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm group'
                disabled={!input.trim()}
              >
                <Send className='w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200' />
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chat;

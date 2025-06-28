import React from 'react';
import { useChatContext } from '../context/ChatContext';
import { Send, Bot, User } from 'lucide-react';

// >> CHAT << //
const Chat: React.FC = () => {
  // import state from chat context
  const { messages, setMessages, input, setInput, isLoading, setIsLoading } =
    useChatContext();

  // send message handler
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // make sure we have something in the input box before sending
    if (!input.trim()) return;
    // create a message object to store to state with properties: id, role, and content
    setMessages([
      ...messages,
      { id: Date.now().toString(), role: 'user', content: input },
    ]);
    setInput('');
  };

  return (
    <div className='h-full flex flex-col'>
      {/* HEADER */}
      {/* <div className='px-6 pb-4'>
        <h2 className='text-xl font-semibold text-gray-700 mb-2'>
          AI Interviewer
        </h2>
        <p className='text-gray-700 text-sm'>
          Ask about your architecture design
        </p>
      </div> */}

      {/* CHAT FORM */}
      <form
        onSubmit={handleSend}
        className='flex flex-col flex-1 bg-white/10 border border-white/20 rounded-sm backdrop-blur-xl overflow-hidden'
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
            messages.map((m) => (
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
                    <p className='text-sm leading-relaxed break-words'>
                      {m.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* LOADING INDICATOR */}
          {isLoading && (
            <div className='flex items-start gap-3'>
              <div className='flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center'>
                <Bot className='w-4 h-4 text-white/70' />
              </div>
              <div className='bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 backdrop-blur-sm'>
                <div className='flex items-center space-x-1'>
                  <div className='w-2 h-2 bg-white/50 rounded-full animate-bounce'></div>
                  <div
                    className='w-2 h-2 bg-white/50 rounded-full animate-bounce'
                    style={{ animationDelay: '0.1s' }}
                  ></div>
                  <div
                    className='w-2 h-2 bg-white/50 rounded-full animate-bounce'
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* INPUT AREA */}
        <div className='p-4 border-t border-white/10 bg-white/5'>
          <div className='flex items-center gap-3'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='flex-1 bg-slate-400/10 hover:text-white hover:bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-slate-600/70 placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/30 transition-all duration-200 backdrop-blur-sm'
              placeholder='Ask away...'
              disabled={isLoading}
            />
            <button
              type='submit'
              className='bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/30 hover:border-indigo-400/50 text-white p-2.5 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm group'
              disabled={isLoading || !input.trim()}
            >
              <Send className='w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200' />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Chat;

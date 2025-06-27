import React from 'react';
import { useChatContext } from '../context/ChatContext';

// >> CHAT << //
const Chat: React.FC = () => {
  // import steate from chat context
  const { messages, setMessages, input, setInput, isLoading, setIsLoading } =
    useChatContext();
  // send message handler
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // make sure we have something in the input box before sending
    if (!input.trim()) return;
    // create a message object to store to state qwith properties: id, role, and content
    setMessages([
      ...messages,
      { id: Date.now().toString(), role: 'user', content: input },
    ]);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSend}
      className='flex flex-col h-full bg-gray-50 rounded-xl shadow-md border border-gray-200'
      style={{ minHeight: 350 }}
    >
      <h2 className='text-lg font-semibold mb-2 px-4 pt-4'>AI Chat</h2>
      <div className='flex-1 mb-2 px-4 overflow-y-auto bg-gray-100 rounded-lg'>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex mb-2 ${
              m.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <span
              className={`px-4 py-2 rounded-2xl max-w-xs break-words shadow-sm ${
                m.role === 'user'
                  ? 'bg-purple-400 text-white'
                  : 'bg-indigo-400 text-gray-800'
              }`}
            >
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-2 p-4 border-t border-gray-100 bg-gray-100 rounded-b-xl'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 transition'
          placeholder='Type your message...'
          disabled={isLoading}
        />
        <button
          type='submit'
          className='bg-purple-400 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition disabled:opacity-60'
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? '...' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default Chat;

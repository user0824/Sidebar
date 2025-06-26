import React from 'react';
// > Imported context from system board here
import { useBoard } from '../context/BoardContext';

const Chat: React.FC = () => {
  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>AI Chat</h2>
      <p className='text-gray-600'>
        This tab will contain the AI-powered chat interface.
      </p>
    </div>
  );
};

export default Chat;

// ----------------------------------------------------------------------
// >> SIDEBAR << //
// ----------------------------------------------------------------------

import React, { useState } from 'react';
import { Layout, MessageCircle, Circle } from 'lucide-react';
import ComponentList from './ComponentList';
import Chat from './Chat';

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ComponentList' | 'Chat'>(
    'ComponentList'
  );

  return (
    <div className='h-full flex flex-col'>
      {/* TAB NAVIGATION - Updated with glassmorphism toggle design */}
      <div className='p-6'>
        <div className='flex bg-white/10 border border-white/20 rounded-xl p-1 backdrop-blur-sm text-md font-medium'>
          <button
            onClick={() => setActiveTab('ComponentList')}
            className={`flex-1 py-2.5 px-4 rounded-lg  transition-all duration-200 ${
              activeTab === 'ComponentList'
                ? 'bg-white/20 text-indigo-600 shadow-sm backdrop-blur-sm font-semibold'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {/* COMPONENTS */}
            <div className='flex items-center justify-center space-x-2'>
              <Layout className='w-4 h-4' />
              <span>Components</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('Chat')}
            className={`flex-1 py-2.5 px-4 rounded-lg transition-all duration-200 ${
              activeTab === 'Chat'
                ? 'bg-white/20 text-indigo-600 shadow-sm backdrop-blur-sm font-semibold'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {/* AI CHATBOT */}
            <div className='flex items-center justify-center space-x-2'>
              <MessageCircle className='w-4 h-4' />
              <span>AI</span>
              <Circle className='w-2 h-2 text-green-500 fill-current animate-pulse' />
            </div>
          </button>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className='flex-1 overflow-hidden'>
        {activeTab === 'ComponentList' ? <ComponentList /> : <Chat />}
      </div>
    </div>
  );
};

export default Sidebar;

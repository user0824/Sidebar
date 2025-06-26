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
      {/* TAB NAVIGATION */}
      <div className='p-6'>
        <div className='flex bg-gray-100/60 rounded-xl p-1'>
          <button
            onClick={() => setActiveTab('ComponentList')}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'ComponentList'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-indigo-100/40'
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
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'Chat'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800 hover:bg-indigo-100/40'
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

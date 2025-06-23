import React, { useState } from 'react';
import ComponentList from './ComponentList';
import Chat from './Chat';

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ComponentList' | 'Chat'>(
    'ComponentList'
  );

  return (
    <div className='h-full flex flex-col sidebar-container'>
      <div className='border-b border-gray-200 sidebar-tabs-header'>
        <div className='flex w-full sidebar-tab-buttons'>
          <button
            className={`flex-1 py-2 px-4 text-center text-sm font-medium border-b-2 ${
              activeTab === 'ComponentList'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } sidebar-tab-button components-tab-button`}
            onClick={() => setActiveTab('ComponentList')}
          >
            Components
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center text-sm font-medium border-b-2 ${
              activeTab === 'Chat'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } sidebar-tab-button chat-tab-button`}
            onClick={() => setActiveTab('Chat')}
          >
            Chat
          </button>
        </div>
      </div>

      <div className='flex-1 overflow-y-auto sidebar-content-container'>
        {activeTab === 'ComponentList' ? <ComponentList /> : <Chat />}
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import SystemBoard from './SystemBoard';
import ScratchPad from './ScratchPad';

const Board: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SystemBoard' | 'ScratchPad'>(
    'SystemBoard'
  );

  return (
    <div className='h-full flex flex-col board-container'>
      {/* Board tabs header */}
      <div className='border-b border-gray-200 board-tabs-header'>
        <div className='flex w-full board-tab-buttons'>
          {/* SystemBoard tab button */}
          <button
            className={`flex-1 py-2 px-4 text-center text-sm font-medium border-b-2 ${
              activeTab === 'SystemBoard'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } board-tab-button system-board-tab-button`}
            onClick={() => setActiveTab('SystemBoard')}
          >
            System Board
          </button>

          {/* ScratchPad tab button */}
          <button
            className={`flex-1 py-2 px-4 text-center text-sm font-medium border-b-2 ${
              activeTab === 'ScratchPad'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } board-tab-button scratchpad-tab-button`}
            onClick={() => setActiveTab('ScratchPad')}
          >
            Scratch Pad
          </button>
        </div>
      </div>

      {/* Board content container */}
      <div className='flex-1 p-4 overflow-y-auto board-content-container'>
        {activeTab === 'SystemBoard' ? <SystemBoard /> : <ScratchPad />}
      </div>
    </div>
  );
};

export default Board;

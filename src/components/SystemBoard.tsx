import React from 'react';

const SystemBoard: React.FC = () => {
  return (
    <div className='h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center system-board-container'>
      <p className='text-gray-500 system-board-placeholder-text'>
        This is the system board area where components will be placed
      </p>
    </div>
  );
};

export default SystemBoard;

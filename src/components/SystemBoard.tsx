import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const SystemBoard: React.FC = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'system-board',
  });
  return (
    <div
      ref={setNodeRef}
      className={`
        h-full border-2 border-dashed rounded-lg 
        flex items-center justify-center system-board-container
        ${isOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
      `}
    >
      <p className='text-gray-500 system-board-placeholder-text'>
        {isOver
          ? 'Drop component here!'
          : 'This is the system board area where components will be placed'}
      </p>
    </div>
  );
};

export default SystemBoard;

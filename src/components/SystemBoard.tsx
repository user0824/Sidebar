import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface SystemBoardProps {
  placedComponents: any[];
}

const SystemBoard: React.FC<SystemBoardProps> = ({ placedComponents }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'system-board',
  });
  return (
    <div
      ref={setNodeRef}
      className={`
        h-full border-2 border-dashed rounded-lg 
        flex items-center justify-center system-board-container relative
        ${isOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
      `}
    >
      {placedComponents.length === 0 && (
        <p className='text-gray-500 system-board-placeholder-text'>
          {isOver
            ? 'Drop component here!'
            : 'This is the system board area where components will be placed'}
        </p>
      )}

      {placedComponents.map((component) => (
        <div
          key={component.uniqueId}
          className={`
            ${component.color} 
            border border-gray-400 rounded-lg p-2 absolute
            flex items-center space-x-1 shadow-md min-w-[120px]
            hover:shadow-lg transition-shadow cursor-move
          `}
          style={{
            left: `${component.x}px`,
            top: `${component.y}px`,
          }}
        >
          <span className='text-sm'>{component.icon}</span>
          <span className='text-xs font-medium text-gray-700'>
            {component.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SystemBoard;

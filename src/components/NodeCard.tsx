import type { FC } from 'react';

interface NodeCardProps {
  icon: string;
  name: string;
  color: string;
  onDelete?: () => void;
}

const NodeCard: FC<NodeCardProps> = ({ icon, name, color, onDelete }) => {
  return (
    <div
      className={`relative ${color} border border-gray-300 rounded-lg p-3 flex items-center space-x-2 min-w-[120px] shadow-md`}
    >
      {onDelete && (
        <button
          onClick={onDelete}
          className='absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-purple-600 text-white text-xs rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer z-20'
          title='Delete node'
        >
          ×
        </button>
      )}
      <span className='text-lg'>{icon}</span>
      <span className='text-sm font-medium text-gray-700'>{name}</span>
    </div>
  );
};

export default NodeCard;

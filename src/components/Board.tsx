import React from 'react';

const Board: React.FC = () => {
  return (
    <div className='h-full p-4 bg-gray-50'>
      <h2 className='text-xl font-bold mb-4'>Board</h2>
      <div className='border-2 border-dashed border-gray-300 rounded-lg h-5/6 flex items-center justify-center'>
        <p className='text-gray-500'>This is the actual game board section</p>
      </div>
    </div>
  );
};
export default Board;

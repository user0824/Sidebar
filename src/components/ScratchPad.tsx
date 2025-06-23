import React from 'react';

const ScratchPad: React.FC = () => {
  return (
    <div className='h-full bg-white border border-gray-200 rounded-lg p-4 scratchpad-container'>
      <h3 className='text-lg font-medium mb-3 scratchpad-title'>Scratch Pad</h3>
      <div className='bg-yellow-50 h-full p-4 rounded scratchpad-content'>
        <p className='text-gray-600 scratchpad-placeholder-text'>
          Use this scratch pad to take notes or sketch ideas
        </p>
      </div>
    </div>
  );
};

export default ScratchPad;

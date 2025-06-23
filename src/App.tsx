import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Board from './components/Board';

// App will render the sidebar on the left and the board on the right (probably 3/4 of the entire app)
function App() {
  return (
    <div className='flex h-screen bg-gray-100'>
      <div className='w-1/4 bg-white border-r border-gray-200'>
        <Sidebar />
      </div>
      <div className='w-3/4'>
        <Board />
      </div>
    </div>
  );
}
export default App;

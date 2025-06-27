// ----------------------------------------------------------------------
// >> APP << //
// ----------------------------------------------------------------------
import React from 'react';
import { Settings } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Board from './components/Board';
import { BoardContext } from './context/BoardContext';
import { Node, Edge } from '@xyflow/react';
import { ChatProvider } from './context/ChatContext';

function App() {
  const [nodes, setNodes] = React.useState<Node[]>([]);
  const [edges, setEdges] = React.useState<Edge[]>([]);
  return (
    <BoardContext.Provider value={{ nodes, setNodes, edges, setEdges }}>
      <div className='min-h-screen bg-gradient-to-br from-indigo-800 via-purple-400 to-sky-300'>
        {/* BG OVERLAY */}
        <div className='min-h-screen backdrop-blur-sm bg-white/10'>
          {/* HEADER */}
          <header className='bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <h1 className='text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>
                  Sidebar
                </h1>
              </div>
              {/* SETTINGS BUTTON */}
              <div className='flex items-center space-x-3'>
                <button className='p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105'>
                  <Settings className='w-5 h-5' />
                </button>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <div className='flex gap-6 p-6 h-[calc(100vh-88px)]'>
            {/* SIDEBAR */}
            <div className='w-80 bg-white/70 backdrop-blur-xl rounded-l-2xl rounded-r-sm shadow-2xl border border-white/20 overflow-hidden'>
              <ChatProvider>
                <Sidebar />
              </ChatProvider>
            </div>

            {/* BOARD */}
            <div className='flex-1 bg-white/50 backdrop-blur-xl rounded-r-2xl rounded-l-sm shadow-2xl border border-white/20 overflow-hidden'>
              <Board />
            </div>
          </div>
        </div>
      </div>
    </BoardContext.Provider>
  );
}

export default App;

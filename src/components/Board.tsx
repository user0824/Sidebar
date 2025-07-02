// ----------------------------------------------------------------------
// >> BOARD << //
// ----------------------------------------------------------------------

import React, { useState } from 'react';
import ReactFlowBoard from './ReactFlowBoard';
import ScratchPad from './ScratchPad';
import { useBoard } from '../context/BoardContext';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  NodeChange,
  Connection,
} from '@xyflow/react';
import {
  Monitor,
  StickyNote,
  Trash2,
  Download,
  ArrowUp,
  Circle,
} from 'lucide-react';

const Board: React.FC = () => {
  const { nodes, setNodes, edges, setEdges } = useBoard();
  const [activeTab, setActiveTab] = useState<'SystemBoard' | 'ScratchPad'>(
    'ScratchPad'
  );

  const onNodesChange = (changes: NodeChange[]) =>
    setNodes((nds) => applyNodeChanges(changes, nds));

  const onEdgesChange = (changes: EdgeChange[]) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));

  const onConnect = (params: Connection) =>
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          animated: true,
          style: { strokeWidth: 2, stroke: '#ffffff' },
        },
        eds
      )
    );

  // ----------------------------------------------------------------------
  // >> SYSTEM DESIGN TAB << //
  // ----------------------------------------------------------------------
  // * Clear board functionality * //
  const clearBoard = () => {
    setNodes([]);
    setEdges([]);
  };

  // * Export functionality * //
  const exportBoard = () => {
    const data = { nodes, edges };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'architecture-design.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  // ----------------------------------------------------------------------
  // >> NOTES TAB << //
  // ----------------------------------------------------------------------
  // * Clear scratch pad functionality * //
  const clearScratchPad = () => {
    localStorage.removeItem('scratchpad-content');
    // Force a re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('clearScratchPad'));
  };

  // ----------------------------------------------------------------------
  // >> RENDER << //
  // ----------------------------------------------------------------------
  return (
    <div className='h-full flex flex-col'>
      {/* UPDATED Header with Actions */}
      <div className='p-6'>
        <div className='flex items-center justify-between'>
          {/* TABS - Updated with glassmorphism toggle design */}
          <div className='flex bg-white/10 border border-white/20 rounded-xl p-1 backdrop-blur-sm text-md font-medium'>
            <button
              onClick={() => setActiveTab('SystemBoard')}
              className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${
                activeTab === 'SystemBoard'
                  ? 'bg-white/20 text-indigo-600 shadow-sm backdrop-blur-sm font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className='flex items-center space-x-2'>
                <Monitor className='w-4 h-4' />
                <span>System Design</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ScratchPad')}
              className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${
                activeTab === 'ScratchPad'
                  ? 'bg-white/20 text-indigo-600 shadow-sm backdrop-blur-sm font-semibold'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className='flex items-center space-x-2'>
                <StickyNote className='w-4 h-4' />
                <span>Notes</span>
              </div>
            </button>
          </div>

          {/* ACTIONS - Show different buttons based on active tab */}
          <div className='flex items-center space-x-2'>
            {activeTab === 'SystemBoard' ? (
              <>
                {/* CLEAR BOARD */}
                <button
                  onClick={clearBoard}
                  className='p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:text-red-400 transition-all duration-200 hover:scale-105'
                  title='Clear Board'
                >
                  <Trash2 className='w-5 h-5' />
                </button>
                {/* DOWNLOAD BOARD */}
                <button
                  onClick={exportBoard}
                  className='p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:text-indigo-600 transition-all duration-200 hover:scale-105'
                  title='Export Design'
                >
                  <Download className='w-5 h-5' />
                </button>
              </>
            ) : (
              /* CLEAR SCRATCH PAD */
              <button
                onClick={clearScratchPad}
                className='p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:text-red-400 transition-all duration-200 hover:scale-105'
                title='Clear Scratch Pad'
              >
                <Trash2 className='w-5 h-5' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className='flex-1 overflow-hidden'>
        {activeTab === 'SystemBoard' ? (
          <div className='h-full p-0'>
            <div className='h-full  overflow-hidden relative'>
              {/* GRID PATTERN BACKGROUND */}
              <div
                className='absolute inset-0 opacity-30 pointer-events-none'
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)
                  `,
                  backgroundSize: '24px 24px',
                }}
              />

              {nodes.length === 0 ? (
                /* EMPTY BOARD */
                <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                  <div className='text-center max-w-md'>
                    <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center'>
                      <Monitor className='w-10 h-10 text-indigo-600/80' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800/70 mb-3'>
                      Design Your Architecture
                    </h3>
                    <p className='text-gray-600/60 mb-6 leading-relaxed'>
                      Drag components from the sidebar to start building your
                      system architecture. Connect components to show data flow
                      and relationships.
                    </p>
                    <div className='flex items-center justify-center text-sm text-gray-600/60'>
                      <ArrowUp className='w-4 h-4 mr-2 animate-bounce' />
                      <span>Start by dragging a component here</span>
                      <ArrowUp className='w-4 h-4 ml-2 animate-bounce' />
                    </div>
                  </div>
                </div>
              ) : null}

              {/* ReactFlow Board - Always rendered for drag and drop */}
              <div className='absolute inset-0'>
                <ReactFlowBoard
                  nodes={nodes}
                  edges={edges}
                  setNodes={setNodes}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                />
              </div>

              {/* STATS OVERLAY */}
              {nodes.length > 0 && (
                <div className='absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl py-2 px-3 shadow-lg border border-white/20 z-10 transition-all duration-200 hover:bg-white/15'>
                  <div className='flex items-center space-x-4 text-sm'>
                    <div className='flex items-center space-x-2'>
                      <Circle className='w-2.5 h-2.5 text-indigo-400 fill-current animate-pulse' />
                      <span className='text-white/90 font-medium'>
                        {nodes.length} Components
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Circle className='w-2.5 h-2.5 text-green-400 fill-current animate-pulse' />
                      <span className='text-white/90 font-medium'>
                        {edges.length} Connections
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className='h-full'>
            <ScratchPad />
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;

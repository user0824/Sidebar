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
    'SystemBoard'
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
          style: { strokeWidth: 1.5, stroke: '#888' },
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
          {/* TABS */}
          <div className='flex bg-gray-100/60 rounded-xl p-1'>
            <button
              onClick={() => setActiveTab('SystemBoard')}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'SystemBoard'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-indigo-100/40'
              }`}
            >
              <div className='flex items-center space-x-2'>
                <Monitor className='w-4 h-4' />
                <span>System Design</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ScratchPad')}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'ScratchPad'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-indigo-100/40'
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
                  className='p-2.5 rounded-xl bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-all duration-200'
                  title='Clear Board'
                >
                  <Trash2 className='w-4 h-4' />
                </button>
                {/* DOWNLOAD BOARD */}
                <button
                  onClick={exportBoard}
                  className='p-2.5 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-600 hover:text-indigo-700 transition-all duration-200'
                  title='Export Design'
                >
                  <Download className='w-4 h-4' />
                </button>
              </>
            ) : (
              /* CLEAR SCRATCH PAD */
              <button
                onClick={clearScratchPad}
                className='p-2.5 rounded-xl bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-all duration-200'
                title='Clear Scratch Pad'
              >
                <Trash2 className='w-4 h-4' />
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
                    <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center'>
                      <Monitor className='w-10 h-10 text-blue-500' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                      Design Your Architecture
                    </h3>
                    <p className='text-gray-600 mb-6 leading-relaxed'>
                      Drag components from the sidebar to start building your
                      system architecture. Connect components to show data flow
                      and relationships.
                    </p>
                    <div className='flex items-center justify-center text-sm text-gray-500'>
                      <ArrowUp className='w-4 h-4 mr-2' />
                      <span>Start by dragging a component here</span>
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
                <div className='absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-xl py-1 px-2.5 shadow-lg border border-gray-200/50 z-10'>
                  <div className='flex items-center space-x-4 text-sm'>
                    <div className='flex items-center space-x-2'>
                      <Circle className='w-2 h-2 text-blue-500 fill-current' />
                      <span className='text-gray-600'>
                        {nodes.length} Components
                      </span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Circle className='w-2 h-2 text-green-500 fill-current ' />
                      <span className='text-gray-600'>
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

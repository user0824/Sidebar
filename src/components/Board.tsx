import React, { useState } from 'react';
import ReactFlowBoard from './ReactFlowBoard';
import ScratchPad from './ScratchPad';
import {
  Node,
  Edge,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  NodeChange,
  Connection,
} from '@xyflow/react';

const Board: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'SystemBoard' | 'ScratchPad'>(
    'SystemBoard'
  );

  // Persist nodes/edges across tab switches
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Callbacks pulled up so we can pass to child
  const onNodesChange = (changes: NodeChange[]) =>
    setNodes((nds) => applyNodeChanges(changes, nds));

  const onEdgesChange = (changes: EdgeChange[]) =>
    setEdges((eds) => applyEdgeChanges(changes, eds));

  const onConnect = (params: Connection) =>
    setEdges((eds) => addEdge(params, eds));

  return (
    <div className='h-full flex flex-col board-container'>
      {/* Board tabs header */}
      <div className='border-b border-gray-200 board-tabs-header'>
        <div className='flex w-full board-tab-buttons'>
          {/* SystemBoard tab button */}
          <button
            className={`flex-1 py-2 px-4 text-center text-sm font-medium border-b-2 ${
              activeTab === 'SystemBoard'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } board-tab-button system-board-tab-button`}
            onClick={() => setActiveTab('SystemBoard')}
          >
            System Board
          </button>

          {/* ScratchPad tab button */}
          <button
            className={`flex-1 py-2 px-4 text-center text-sm font-medium border-b-2 ${
              activeTab === 'ScratchPad'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } board-tab-button scratchpad-tab-button`}
            onClick={() => setActiveTab('ScratchPad')}
          >
            Scratch Pad
          </button>
        </div>
      </div>

      {/* Board content container */}
      <div className='flex-1 p-4 overflow-y-auto board-content-container'>
        {activeTab === 'SystemBoard' ? (
          <ReactFlowBoard
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
          />
        ) : (
          <ScratchPad />
        )}
      </div>
    </div>
  );
};

export default Board;

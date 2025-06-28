// @ts-nocheck
import React, { useCallback, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  ConnectionLineType,
  Controls,
  MiniMap,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  NodeTypes,
  NodeProps,
  ReactFlowProvider,
  ReactFlowInstance,
  Connection,
  Handle,
  Position,
  ConnectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { SystemIcons } from '../assets';

// Custom node with visible left/right handles that work as both sources and targets.
const knobStyle = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  border: '1px solid #6B7280', // gray-500
  background: '#FFFFFF',
};

const CustomNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div className='relative group'>
      {/* LEFT SIDE HANDLE (acts as source in loose mode) */}
      <Handle
        className='opacity-0 group-hover:opacity-100 transition-opacity'
        id='left'
        type='source'
        position={Position.Left}
        style={{ ...knobStyle, top: '50%', transform: 'translate(-50%, -50%)' }}
        isValidConnection={(conn) => conn.source !== conn.target}
      />

      {/* NODE BODY */}
      <div
        className={`${data.color} border border-gray-400 rounded-lg px-3 py-2 shadow-md flex items-center space-x-1`}
      >
        <span
          className='flex items-center justify-center overflow-hidden'
          style={{ width: 28, height: 28 }}
        >
          {SystemIcons[data.icon as keyof typeof SystemIcons] ? (
            <span style={{ display: 'inline-block', width: 24, height: 24 }}>
              {/* SVG will scale to fit this container */}
              {React.cloneElement(
                SystemIcons[data.icon as keyof typeof SystemIcons](),
                {
                  style: { width: '100%', height: '100%', display: 'block' },
                }
              )}
            </span>
          ) : (
            data.icon
          )}
        </span>
        <span className='text-xs font-medium text-gray-700'>{data.name}</span>
      </div>

      {/* RIGHT SIDE HANDLE (acts as source in loose mode) */}
      <Handle
        className='opacity-0 group-hover:opacity-100 transition-opacity'
        id='right'
        type='source'
        position={Position.Right}
        style={{ ...knobStyle, top: '50%', transform: 'translate(50%, -50%)' }}
        isValidConnection={(conn) => conn.source !== conn.target}
      />
    </div>
  );
};

const nodeTypes: NodeTypes = { custom: CustomNode };

interface ReactFlowBoardProps {
  nodes: Node[];
  edges: Edge[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (params: Connection) => void;
}

const ReactFlowBoard: React.FC<ReactFlowBoardProps> = ({
  nodes,
  edges,
  setNodes,
  onNodesChange,
  onEdgesChange,
  onConnect,
}) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      const data = event.dataTransfer.getData('application/reactflow');
      if (!data) return;

      const component = JSON.parse(data);

      // position in React Flow coordinate system (provide screen coords directly)
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: `${component.id}-${Date.now()}`,
        type: 'custom',
        position,
        data: {
          name: component.name,
          icon: component.icon,
          color: component.color,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <ReactFlowProvider>
      <div className='h-full w-full' ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          connectionLineType={ConnectionLineType.SmoothStep}
          connectionMode={ConnectionMode.Loose}
          defaultEdgeOptions={{
            style: {
              strokeDasharray: '4 2',
              stroke: '#ffffff',
              strokeWidth: 2,
            },
          }}
          connectionLineStyle={{
            strokeDasharray: '4 2',
            stroke: '#ffffff',
            strokeWidth: 2,
          }}
        >
          <MiniMap />
          <Controls />
          <Background gap={12} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default ReactFlowBoard;

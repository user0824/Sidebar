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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom node that keeps the emoji + color from the component library
const CustomNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div
      className={
        `${data.color} border border-gray-400 rounded-lg px-3 py-2 shadow-md flex items-center space-x-1`
      }
    >
      <span className='text-sm'>{data.icon}</span>
      <span className='text-xs font-medium text-gray-700'>{data.name}</span>
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
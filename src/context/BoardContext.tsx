// > Context for Board components and connections to pass to chat
import React, { createContext, useContext } from 'react';
import { Node, Edge } from '@xyflow/react';
//  for the setter function types, react dispatch is used to update state in a functional way
type BoardContextType = {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
};

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('useBoard must be used within a BoardContext.Provider');
  }
  return context;
};

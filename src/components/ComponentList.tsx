import React from 'react';
import { useDraggable } from '@dnd-kit/core';

// This si the sample component list. We can add Austins generated custom icons later!
const systemComponents = [
  { id: 'web-server', name: 'Web Server', icon: '🖥️', color: 'bg-blue-100' },
  { id: 'database', name: 'Database', icon: '🗄️', color: 'bg-green-100' },
  {
    id: 'load-balancer',
    name: 'Load Balancer',
    icon: '⚖️',
    color: 'bg-purple-100',
  },
  { id: 'cache', name: 'Cache', icon: '⚡', color: 'bg-yellow-100' },
  { id: 'queue', name: 'Message Queue', icon: '📬', color: 'bg-red-100' },
  { id: 'cdn', name: 'CDN', icon: '🌐', color: 'bg-indigo-100' },
  { id: 'api-gateway', name: 'API Gateway', icon: '🚪', color: 'bg-pink-100' },
  {
    id: 'microservice',
    name: 'Microservice',
    icon: '🔧',
    color: 'bg-gray-100',
  },
];

interface DraggableComponentProps {
  component: (typeof systemComponents)[0];
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({
  component,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: component.id,
      data: {
        type: 'component',
        component,
      },
    });

  // now we need to apply a transform to the component that will follow the drag state
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        ${component.color} 
        border border-gray-300 rounded-lg p-3
        flex items-center space-x-2 
        cursor-grab active:cursor-grabbing  // Shows grab cursor
        hover:shadow-md transition-shadow
        ${isDragging ? 'opacity-50' : ''}   // Fades while dragging
      `}
    >
      <span className='text-lg'>{component.icon}</span>
      <span className='text-sm font-medium text-gray-700'>
        {component.name}
      </span>
    </div>
  );
};

const ComponentList: React.FC = () => {
  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Components</h2>
      <p className='text-gray-600 text-sm mb-4'>
        These are system components you can use to design your architecture
      </p>

      <div className='space-y-2'>
        {systemComponents.map((component) => (
          <DraggableComponent key={component.id} component={component} />
        ))}
      </div>
    </div>
  );
};

export default ComponentList;

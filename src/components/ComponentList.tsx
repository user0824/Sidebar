// ----------------------------------------------------------------------
// >> COMPONENT LIST << //
// ----------------------------------------------------------------------
import React, { useState, useRef } from 'react';
import { SystemIcons } from '../assets';

// ----------------------------------------------------------------------
// >> COMPONENTS << //
// ----------------------------------------------------------------------
// * Enhanced component list with descriptions and categories * //
const systemComponents = [
  {
    id: 'web-server',
    name: 'Web Server',
    icon: '🖥️',
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    hoverColor: 'hover:from-blue-100 hover:to-blue-200 hover:border-blue-300',
    description: 'HTTP request handler',
    category: 'Compute',
  },
  {
    id: 'database',
    name: 'Database',
    icon: '🗄️',
    color:
      'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200',
    hoverColor:
      'hover:from-emerald-100 hover:to-emerald-200 hover:border-emerald-300',
    description: 'Data storage system',
    category: 'Storage',
  },
  {
    id: 'load-balancer',
    name: 'Load Balancer',
    icon: '⚖️',
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    hoverColor:
      'hover:from-purple-100 hover:to-purple-200 hover:border-purple-300',
    description: 'Traffic distribution',
    category: 'Network',
  },
  {
    id: 'cache',
    name: 'Cache',
    icon: '⚡',
    color: 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200',
    hoverColor:
      'hover:from-amber-100 hover:to-amber-200 hover:border-amber-300',
    description: 'Fast data access',
    category: 'Storage',
  },
  {
    id: 'queue',
    name: 'Message Queue',
    icon: '📬',
    color: 'bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200',
    hoverColor: 'hover:from-rose-100 hover:to-rose-200 hover:border-rose-300',
    description: 'Async communication',
    category: 'Messaging',
  },
  {
    id: 'cdn',
    name: 'CDN',
    icon: '🌐',
    color: 'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200',
    hoverColor:
      'hover:from-indigo-100 hover:to-indigo-200 hover:border-indigo-300',
    description: 'Content delivery',
    category: 'Network',
  },
  {
    id: 'api-gateway',
    name: 'API Gateway',
    icon: '🚪',
    color: 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200',
    hoverColor: 'hover:from-pink-100 hover:to-pink-200 hover:border-pink-300',
    description: 'API management',
    category: 'Network',
  },
  {
    id: 'microservice',
    name: 'Microservice',
    icon: '🔧',
    color: 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200',
    hoverColor:
      'hover:from-slate-100 hover:to-slate-200 hover:border-slate-300',
    description: 'Service component',
    category: 'Compute',
  },
];

interface DraggableComponentProps {
  component: (typeof systemComponents)[0];
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({
  component,
}) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(component)
    );
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`
        ${component.color} ${component.hoverColor}
        border rounded-xl p-1 cursor-grab active:cursor-grabbing
        transition-all duration-200 hover:shadow-lg hover:scale-[1.02]
        hover:-translate-y-1 group
      `}
    >
      <div className='flex items-start space-x-3'>
        {/* Icon w/ SVG or fallback to emoji */}
        <div className='flex-shrink-0'>
          {SystemIcons[component.id as keyof typeof SystemIcons] ? (
            <div className='w-10 h-10 flex items-center justify-center'>
              {SystemIcons[component.id as keyof typeof SystemIcons]()}
            </div>
          ) : (
            <div className='w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center text-lg'>
              {component.icon}
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className='flex-1 min-w-0'>
          <div className='flex items-center justify-between mb-1'>
            <h3 className='font-semibold text-gray-800 text-sm leading-tight'>
              {component.name}
            </h3>
            <span className='text-xs px-2 py-1 rounded-full bg-white/60 text-gray-600 font-medium'>
              {component.category}
            </span>
          </div>
          <p className='text-xs text-gray-600 leading-relaxed'>
            {component.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ComponentList: React.FC = () => {
  const [components, setComponents] =
    useState<typeof systemComponents>(systemComponents);
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // handler to toggle input visibility for when user wants to add a custom component
  const handleShowInput = () => {
    setShowInput(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };
  // modularized function to add new component either throughadd button or enter key
  const addNewComponent = () => {
    if (!newName.trim()) return;
    const id = newName.trim().toLowerCase().replace(/\s+/g, '-');
    const newComp = {
      id,
      name: newName,
      icon: '',
      color: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200',
      hoverColor: 'hover:from-gray-100 hover:to-gray-200 hover:border-gray-300',
      description: '',
      category: 'Custom',
    };
    setComponents((prev) => [...prev, newComp]);
    setNewName('');
    setShowInput(false);
  };

  return (
    <div className='h-full flex flex-col'>
      {/* INPUT FIELD OUTSIDE COMPONENT LIST */}
      {showInput ? (
        <div className='flex items-center gap-2 px-6 pt-1'>
          <input
            ref={inputRef}
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addNewComponent();
              }
            }}
            className='flex-1 border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-violet-500 focus:outline-none'
            placeholder='Component name'
          />
          <button
            onClick={addNewComponent}
            className='bg-violet-500 text-white px-3 py-1 rounded'
          >
            Add
          </button>
          <button onClick={() => setShowInput(false)} className='text-gray-500'>
            X
          </button>
        </div>
      ) : (
        <button
          onClick={handleShowInput}
          className='flex items-center gap-1 text-violet-800 hover:text-blue-700 justify-center w-full px-6 pt-1'
        >
          <span className='text-xl'>+</span> Add Custom Component
        </button>
      )}

      {/* COMPONENT GRID */}
      <div className='flex-1 px-6 pt-4 overflow-y-auto'>
        <div className='space-y-3'>
          {components.map((component) => (
            <DraggableComponent key={component.id} component={component} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentList;

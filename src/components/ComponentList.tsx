// ----------------------------------------------------------------------
// >> COMPONENT LIST << //
// ----------------------------------------------------------------------
import React, { useState, useRef, useEffect } from 'react';
import { SystemIcons } from '../assets';

// ----------------------------------------------------------------------
// >> COMPONENTS << //
// * Enhanced component list with descriptions and categories * //
import { systemComponents } from '../data/systemComponents';
// ----------------------------------------------------------------------

interface DraggableComponentProps {
  component: (typeof systemComponents)[0];
}

// Fallback emoji for components without SVGs
const fallbackEmojis: Record<string, string> = {
  cache: '🗄️',
  database: '🗄️',
  'web-server': '🖥️',
};

const DraggableComponent: React.FC<DraggableComponentProps> = React.memo(
  ({ component }) => {
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
        transition-shadow duration-200 hover:shadow-lg
        group
      `}
        style={{
          // Ensure component is always rendered
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className='flex items-center space-x-3'>
          {/* Icon w/ SVG or fallback to emoji */}
          <div className='flex-shrink-0 flex items-center h-10'>
            {SystemIcons[component.icon as keyof typeof SystemIcons] ? (
              <div className='w-10 h-10 flex items-center justify-center'>
                {SystemIcons[component.icon as keyof typeof SystemIcons]()}
              </div>
            ) : (
              <div className='w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center text-lg'>
                {fallbackEmojis[component.icon] || component.icon}
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
  }
);

const ComponentList: React.FC = React.memo(() => {
  const uniqueComponents = Array.from(
    new Map(systemComponents.map((comp) => [comp.name, comp])).values()
  ) as typeof systemComponents;

  const [components, setComponents] =
    useState<typeof systemComponents>(uniqueComponents);
  const [showInput, setShowInput] = useState(false);
  const [newName, setNewName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  // Search term for filtering
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Force render during scroll to prevent momentum scrolling delays
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let rafId: number;
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Force a repaint during scroll
      rafId = requestAnimationFrame(() => {
        // This forces the browser to recalculate styles and repaint
        scrollContainer.style.transform = 'translateZ(0)';

        // Reset after a micro-task to avoid accumulating transforms
        Promise.resolve().then(() => {
          scrollContainer.style.transform = '';
        });
      });
    };

    // Listen to both scroll and touchmove for mobile momentum scrolling
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    scrollContainer.addEventListener('touchmove', handleScroll, {
      passive: true,
    });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchmove', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

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

  // ------------------------------------------------------------
  // >> FILTERED COMPONENTS << //  Matches name or category
  // ------------------------------------------------------------
  const filteredComponents = components.filter((comp) =>
    `${comp.name} ${comp.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className='h-full flex flex-col'>
      {/* INPUT FIELD OUTSIDE COMPONENT LIST */}
      {showInput ? (
        <div className='flex items-center gap-2 px-6 pt-1'>
          <input
            ref={inputRef}
            value={newName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewName(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
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
          className='flex items-center gap-1 text-white/90 hover:text-indigo-700 justify-center w-full px-6 pt-1'
        >
          <span className='text-xl'>+</span> Add Custom Component
        </button>
      )}

      {/* SEARCH BAR */}
      <div className='px-6 pt-4 pb-4 flex justify-center'>
        <input
          type='text'
          placeholder='Search components...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full max-w-[calc(100%-1.5rem)] border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-violet-500 focus:outline-none text-sm'
        />
      </div>
      <div
        ref={scrollContainerRef}
        className='flex-1 px-6 overflow-y-auto'
        style={{
          // Enable GPU acceleration and prevent scroll jank
          WebkitOverflowScrolling: 'touch',
          willChange: 'scroll-position',
          // Disable scroll-linked effects that might delay rendering
          scrollBehavior: 'auto',
        }}
      >
        {/* COMPONENTS */}
        <div className='space-y-3'>
          {filteredComponents.length ? (
            filteredComponents.map((component) => (
              <DraggableComponent key={component.id} component={component} />
            ))
          ) : (
            <p className='text-sm text-gray-500'>No components found.</p>
          )}
        </div>
      </div>
    </div>
  );
});

export default ComponentList;

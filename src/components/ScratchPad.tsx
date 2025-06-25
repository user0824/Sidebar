import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import hljs from 'highlight.js';

const ScratchPad: React.FC = () => {
  const [value, setValue] = useState('');

  // * Toolbar configuration
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['code-block'],
    ],
    syntax: { hljs },
  };

  return (
    <div className='h-full bg-yellow-50 border border-gray-200 rounded-lg flex flex-col'>
      <div className='p-4 border-b border-gray-200 flex-shrink-0'>
        <h3 className='text-lg font-bold scratchpad-title text-yellow-500'>
          Scratch Pad
        </h3>
        <p className='text-sm text-gray-600 mt-1'>
          Write and format your notes
        </p>
      </div>

      <div
        className='flex-1 p-4 scratchpad-content'
        style={{ overflow: 'hidden' }}
      >
        <ReactQuill
          theme='snow'
          value={value}
          onChange={setValue}
          modules={modules}
          placeholder='Start writing your notes...'
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        />
      </div>
    </div>
  );
};

export default ScratchPad;

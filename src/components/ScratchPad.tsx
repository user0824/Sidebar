// ------------------------------------------------------------------------------------------------
// >> SCRATCH PAD << //
// ------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const ScratchPad: React.FC = () => {
  const STORAGE_KEY = 'scratchpad-content';

  // ------------------------------------------------------------------------------------------------
  // * NOTES LOCAL STORAGE * //
  // ------------------------------------------------------------------------------------------------
  const [value, setValue] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || '';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, value);
  }, [value]);

  // ------------------------------------------------------------------------------------------------
  // * TOOLBAR CONFIGURATION * //
  // ------------------------------------------------------------------------------------------------
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
  };

  // ------------------------------------------------------------------------------------------------
  // * RENDER * //
  // ------------------------------------------------------------------------------------------------
  return (
    <div className='h-full bg-yellow-50 border border-gray-200 rounded-lg flex flex-col'>
      <div className='p-4 border-b border-gray-200 shrink-0'>
        <h3 className='text-lg font-bold text-yellow-500'>Scratch Pad</h3>
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
      {/* CLEAR BUTTON */}
      <button
        onClick={() => {
          setValue('');
          localStorage.removeItem(STORAGE_KEY);
        }}
        className='ml-4 px-3 py-1 text-sm bg-red-100 text-red-600 border border-red-300 rounded hover:bg-red-200 transition'
      >
        Clear
      </button>
    </div>
  );
};

export default ScratchPad;

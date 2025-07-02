// ------------------------------------------------------------------------------------------------
// >> NOTES << //
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
  // * LISTEN FOR DELETE NOTES EVENT FROM PARENT * //
  // ------------------------------------------------------------------------------------------------
  useEffect(() => {
    const handleClear = () => {
      setValue('');
    };

    window.addEventListener('clearScratchPad', handleClear);
    return () => window.removeEventListener('clearScratchPad', handleClear);
  }, []);

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
    <div className='h-full bg-purple-300/10 flex flex-col'>
      <div
        className='flex-1 px-0 scratchpad-content'
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

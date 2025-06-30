import React, { useState } from 'react';
import { useTimer } from '../context/TimerContext';
import {
  AlarmClock,
  Play,
  RotateCcw,
} from 'lucide-react';

// Utility to format seconds as mm:ss
const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const TimerWidget: React.FC = () => {
  const { phase, countdown, elapsed, startTimer, resetTimer } = useTimer();
  const [minutesInput, setMinutesInput] = useState('');

  const handleStart = () => {
    const mins = parseInt(minutesInput, 10);
    if (isNaN(mins) || mins < 0) return;
    startTimer(mins * 60);
    setMinutesInput('');
  };

  return (
    <div className='flex items-center space-x-2'>
      {/* IDLE / CONFIG STATE */}
      {phase === 'idle' && (
        <>
          <input
            type='number'
            min='0'
            placeholder='Minutes'
            value={minutesInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinutesInput(e.target.value)}
            className='w-20 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm'
          />
          <button
            onClick={handleStart}
            className='p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white'
            title='Start Countdown'
          >
            <Play className='w-4 h-4' />
          </button>
        </>
      )}

      {/* COUNTDOWN STATE */}
      {phase === 'countdown' && (
        <>
          <AlarmClock className='w-4 h-4 text-indigo-200' />
          <span className='font-mono text-white'>{formatTime(countdown)}</span>
          <button
            onClick={resetTimer}
            className='p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white'
            title='Reset Timer'
          >
            <RotateCcw className='w-4 h-4' />
          </button>
        </>
      )}

      {/* RUNNING STATE */}
      {phase === 'running' && (
        <>
          <span className='font-mono text-white'>⏱ {formatTime(elapsed)}</span>
          <button
            onClick={resetTimer}
            className='p-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white'
            title='Reset Timer'
          >
            <RotateCcw className='w-4 h-4' />
          </button>
        </>
      )}
    </div>
  );
};

export default TimerWidget;
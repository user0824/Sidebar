import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

// ----------------------------------------------------------------------
// >> TIMER CONTEXT << //
// ----------------------------------------------------------------------

type TimerPhase = 'idle' | 'countdown' | 'running';

export interface TimerContextType {
  phase: TimerPhase;
  /** Remaining seconds in the countdown before the game starts */
  countdown: number;
  /** Seconds elapsed since the practice session started */
  elapsed: number;
  /** Start a countdown that will begin the session after the given delay (in seconds) */
  startTimer: (delaySeconds: number) => void;
  /** Reset the timer back to its initial idle state */
  resetTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const useTimer = () => {
  const ctx = useContext(TimerContext);
  if (!ctx) throw new Error('useTimer must be used within TimerProvider');
  return ctx;
};

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phase, setPhase] = useState<TimerPhase>('idle');
  const [countdown, setCountdown] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  // Keep a single interval reference so we can clear it whenever the phase changes
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clear any running interval
  const clear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Handle phase changes
  useEffect(() => {
    clear();

    if (phase === 'countdown') {
      intervalRef.current = setInterval(() => {
        setCountdown((prev: number) => {
          if (prev <= 1) {
            // Countdown finished – alert the user and stop the timer
            clear();
            // Ensure the countdown stays at 0
            setTimeout(() => window.alert('Time\'s up!'), 0);
            return 0;
          }
          // Continue counting down
          return prev - 1;
        });
      }, 1000);
    }

    if (phase === 'running') {
      intervalRef.current = setInterval(() => {
        setElapsed((prev: number) => prev + 1);
      }, 1000);
    }

    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Public API
  const startTimer = (delaySeconds: number) => {
    setElapsed(0);
    if (delaySeconds > 0) {
      setCountdown(delaySeconds);
      setPhase('countdown');
    } else {
      setPhase('running');
    }
  };

  const resetTimer = () => {
    clear();
    setPhase('idle');
    setCountdown(0);
    setElapsed(0);
  };

  return (
    <TimerContext.Provider value={{ phase, countdown, elapsed, startTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
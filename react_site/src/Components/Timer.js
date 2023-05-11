import React, { useEffect } from 'react';

const Timer = ({ onTimerTick, tickTime }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      onTimerTick();
    }, tickTime);

    return () => {
      clearInterval(intervalId);
    };
  }, [onTimerTick]);

  return null; // No need to render anything for the Timer component
};

export default Timer;
import React, { useEffect, useState } from 'react';

const CircularProgress = ({ radius, strokeWidth, tickTime }) => {
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
  }, [progress, circumference]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, tickTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <svg className="progress-ring transition-all" width={radius * 2} height={radius * 2}>
      <circle
        className="progress-ring__circle"
        stroke="grey"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
      />
      <circle
        className="progress-ring__circle progress-ring__circle--progress"
        stroke="white"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius - strokeWidth / 2}
        cx={radius}
        cy={radius}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
        }}
      />
    </svg>
  );
};

export default CircularProgress;

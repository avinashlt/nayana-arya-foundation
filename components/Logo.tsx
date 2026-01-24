import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 100 57.2"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Nayana Arya Foundation Logo"
    role="img"
  >
    <defs>
      <radialGradient id="irisGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#38bdf8' }} />
        <stop offset="100%" style={{ stopColor: '#0369a1' }} />
      </radialGradient>
    </defs>
    {/* Bottom Eyelid (Grey) */}
    <path
      d="M99.9,28.6C99.9,28.6,77,0,50,0S0.1,28.6,0.1,28.6S23,57.2,50,57.2S99.9,28.6,99.9,28.6Z"
      fill="#adb5bd" 
    />
    {/* Top Eyelid (Blue) */}
    <path
      d="M99.9,28.6C99.9,28.6,77,0,50,0S0.1,28.6,0.1,28.6c11.6-9.8,28.6-16.1,49.9-16.1S88.4,18.8,99.9,28.6Z"
      fill="#0EA5E9"
    />
    {/* Inner Swirl (Light Grey) */}
    <path
      d="M68.1,28.6c0-10-8.1-18.1-18.1-18.1c-2.3,0-4.5,0.4-6.5,1.2C37,20.1,32,28.6,32,28.6s4.6,8.2,10.6,12.5C45.3,40.6,47.6,41,50,41C59.9,41,68.1,35.8,68.1,28.6Z"
      fill="#ced4da"
    />
    {/* Iris (Blue Gradient) */}
    <circle cx="50" cy="28.6" r="16.3" fill="url(#irisGradient)" />
    {/* Pupil (Black) */}
    <circle cx="50" cy="28.6" r="8.2" fill="#000" />
    {/* Highlight (White) */}
    <circle cx="54.5" cy="24.1" r="2.5" fill="#FFF" />
  </svg>
);

export default Logo;

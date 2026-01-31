import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Logo"
    role="img"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#dc2626' }} />
        <stop offset="100%" style={{ stopColor: '#b91c1c' }} />
      </linearGradient>
      <filter id="logoShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
      </filter>
    </defs>
    
    {/* Main Icon - Eye with Vision */}
    <g filter="url(#logoShadow)">
      {/* Outer Eye Shape */}
      <ellipse cx="34" cy="40" rx="28" ry="22" fill="none" stroke="#dc2626" strokeWidth="2.5" />
      
      {/* Inner Iris Circle with Gradient */}
      <circle cx="34" cy="40" r="14" fill="url(#logoGradient)" />
      
      {/* Pupil - represents focus on vision */}
      <circle cx="34" cy="40" r="7" fill="#7f1d1d" />
      
      {/* Light Highlight - represents hope and insight */}
      <circle cx="38" cy="36" r="2.5" fill="#fafafa" opacity="0.9" />
      
      {/* Light Ray - symbolizes vision and enlightenment */}
      <path
        d="M 48 40 Q 65 40 75 40"
        stroke="#dc2626"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Accent Dots - represent children/community */}
      <circle cx="70" cy="35" r="1.5" fill="#b91c1c" opacity="0.6" />
      <circle cx="72" cy="42" r="1.5" fill="#b91c1c" opacity="0.6" />
      <circle cx="68" cy="48" r="1.5" fill="#b91c1c" opacity="0.6" />
    </g>
    
    {/* Organization Name */}
  </svg>
);

export default Logo;

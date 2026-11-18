import React from 'react';

interface LogoProps {
  className?: string;
  /** 'dark' = for light backgrounds (default), 'light' = for dark backgrounds. */
  tone?: 'dark' | 'light';
}

/**
 * Nayana Arya Foundation mark.
 *
 * "Nayana" means eye. The mark is a single calligraphic eye whose lower lid
 * curves upward into a gentle smile. The iris is a rising sun (warm amber into
 * the brand red) with soft dawn rays above, a quiet symbol of hope and of a
 * new way of seeing.
 */
const Logo: React.FC<LogoProps> = ({ className = '', tone = 'dark' }) => {
  const lid = tone === 'dark' ? '#254b50' : '#ffffff';
  const lidSoft = tone === 'dark' ? '#3d8b90' : 'rgba(255,255,255,0.7)';
  const pupil = tone === 'dark' ? '#213f44' : '#10272b';
  const rays = tone === 'dark' ? '#f5890b' : '#fcc34d';
  const gradId = `nayana-iris-${tone}`;

  return (
    <svg
      className={className}
      viewBox="0 0 120 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nayana Arya Foundation logo"
      role="img"
      fill="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="55%" stopColor="#f5890b" />
          <stop offset="100%" stopColor="#fcc34d" />
        </linearGradient>
      </defs>

      {/* Dawn rays: three soft strokes rising above the eye */}
      <g stroke={rays} strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
        <line x1="60" y1="14" x2="60" y2="4" />
        <line x1="42" y1="19" x2="36.5" y2="10.5" />
        <line x1="78" y1="19" x2="83.5" y2="10.5" />
      </g>

      {/* Iris: rising sun, clipped by the lids' shape through layering */}
      <circle cx="60" cy="56" r="19" fill={`url(#${gradId})`} />
      {/* Pupil */}
      <circle cx="60" cy="56" r="8.5" fill={pupil} />
      {/* Catchlight: the spark in the eye */}
      <circle cx="65" cy="50" r="3" fill="#ffffff" opacity="0.95" />

      {/* Upper lid: a confident calligraphic sweep */}
      <path
        d="M 12 58 C 28 26, 92 26, 108 58"
        stroke={lid}
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Lower lid: lighter, meeting the upper lid at the corners and curving into a gentle smile */}
      <path
        d="M 12 58 C 30 86, 90 86, 108 58"
        stroke={lidSoft}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;

import React from 'react';

export function BatLogo({ width = 32, height = 20, fill = 'var(--bat-gold)', style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" style={style}>
      <path
        fill={fill}
        d="M50 20 C40 10 20 5 0 15 C10 15 18 20 20 28 C15 25 8 26 5 30
           C12 28 18 32 20 38 C22 32 26 28 30 26 C34 35 38 42 42 45
           C44 48 46 52 50 55 C54 52 56 48 58 45 C62 42 66 35 70 26
           C74 28 78 32 80 38 C82 32 88 28 95 30 C92 26 85 25 80 28
           C82 20 90 15 100 15 C80 5 60 10 50 20Z"
      />
    </svg>
  );
}

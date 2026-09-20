import React from 'react';
import { useCursor } from '../hooks/useCursor';

const cursorStyle = {
  position: 'fixed',
  width: '12px',
  height: '12px',
  background: 'var(--bat-gold)',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 9999,
  transform: 'translate(-50%, -50%)',
  mixBlendMode: 'difference',
  transition: 'width 0.2s, height 0.2s',
};

const ringStyle = {
  position: 'fixed',
  width: '36px',
  height: '36px',
  border: '1px solid var(--bat-gold)',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 9998,
  transform: 'translate(-50%, -50%)',
  opacity: 0.5,
  transition: 'width 0.25s, height 0.25s, opacity 0.3s',
};

export default function Cursor() {
  const { cursorRef, ringRef } = useCursor();

  return (
    <>
      <div ref={cursorRef} style={cursorStyle} id="cursor-dot" />
      <div ref={ringRef} style={ringStyle} id="cursor-ring" />
    </>
  );
}

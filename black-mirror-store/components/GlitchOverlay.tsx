"use client";

import { useEffect, useState } from 'react';

export default function GlitchOverlay() {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchType, setGlitchType] = useState<'chromatic' | 'scanline' | 'flash'>('chromatic');

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.97) {
        // Random glitch type
        const types: ('chromatic' | 'scanline' | 'flash')[] = ['chromatic', 'scanline', 'flash'];
        setGlitchType(types[Math.floor(Math.random() * types.length)]);

        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isGlitching) return null;

  return (
    <>
      {/* Chromatic Aberration Glitch */}
      {glitchType === 'chromatic' && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          {/* Red channel offset */}
          <div
            className="absolute inset-0 bg-bm-accent/10 mix-blend-screen"
            style={{ transform: 'translateX(-3px)' }}
          />
          {/* Blue channel offset */}
          <div
            className="absolute inset-0 bg-bm-blue/10 mix-blend-screen"
            style={{ transform: 'translateX(3px)' }}
          />
        </div>
      )}

      {/* Scanline Glitch */}
      {glitchType === 'scanline' && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          <div className="absolute inset-0 scanlines opacity-30 animate-pulse" />
          <div
            className="absolute w-full h-[2px] bg-bm-accent/50 animate-scan"
            style={{ top: '40%' }}
          />
        </div>
      )}

      {/* Flash Glitch */}
      {glitchType === 'flash' && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          <div className="absolute inset-0 bg-bm-accent/5 animate-pulse" />
        </div>
      )}
    </>
  );
}

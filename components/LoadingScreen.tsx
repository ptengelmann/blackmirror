"use client";

import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';

export default function LoadingScreen() {
  // Check if already shown - do this check immediately
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);
  const [glitch, setGlitch] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const { addFoundCode, setEasterEggMessage } = useStore();

  // Check sessionStorage on mount
  useEffect(() => {
    const hasSeenBefore = sessionStorage.getItem('hasSeenLoadingScreen') === 'true';
    setShouldShow(!hasSeenBefore);
  }, []);

  const stages = [
    { text: "INITIALIZING BLACK MIRROR PROTOCOL", delay: 300 },
    { text: "LOADING CONSCIOUSNESS MATRIX", delay: 500 },
    { text: "CALIBRATING SURVEILLANCE ARRAY", delay: 400 },
    { text: "SCANNING BIOMETRIC DATA", delay: 600 },
    { text: "ESTABLISHING NEURAL LINK", delay: 500 },
    { text: "SYNCHRONIZING REALITY LAYER", delay: 400 },
    { text: "ACTIVATING SOCIAL CREDIT SYSTEM", delay: 500 },
    { text: "UPLOADING MEMORY FRAGMENTS", delay: 300 },
    { text: "SYSTEM READY - CODE: BOOTSTRAP", delay: 800 },
  ];

  useEffect(() => {
    // Don't run animations if we shouldn't show or if already complete
    if (shouldShow !== true) {
      return;
    }

    // Set initial time
    setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));

    // Update time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    // Trigger easter egg on load
    setTimeout(() => {
      addFoundCode('BOOTSTRAP');
      setEasterEggMessage('System initialized. Bootstrap code acquired.');
    }, 4500);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 100);

    // Stage progression
    const stageInterval = setInterval(() => {
      setStage(prev => {
        if (prev >= stages.length - 1) {
          clearInterval(stageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 100);
      }
    }, 800);

    // Complete after 5 seconds
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
      // Mark as shown in sessionStorage
      sessionStorage.setItem('hasSeenLoadingScreen', 'true');
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(progressInterval);
      clearInterval(stageInterval);
      clearInterval(glitchInterval);
      clearTimeout(completeTimer);
    };
  }, [shouldShow, addFoundCode, setEasterEggMessage, stages.length]);

  // Don't render anything if we're checking or shouldn't show
  if (shouldShow === null || shouldShow === false || isComplete) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[10000] bg-bm-rich-black flex items-center justify-center overflow-hidden">
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines opacity-20 pointer-events-none" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Glitch overlay */}
      {glitch && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-bm-accent/10 mix-blend-screen"
            style={{ transform: 'translateX(-3px)' }}
          />
          <div
            className="absolute inset-0 bg-bm-blue/10 mix-blend-screen"
            style={{ transform: 'translateX(3px)' }}
          />
        </div>
      )}

      {/* Main content container */}
      <div className="relative w-full max-w-2xl px-8">

        {/* Surveillance header */}
        <div className="flex items-center justify-between mb-12 border-b border-bm-accent/20 pb-4">
          <div className="flex items-center gap-3">
            {/* Recording indicator */}
            <div className="w-3 h-3 bg-bm-accent rounded-full animate-pulse shadow-[0_0_10px_#A4CAEC]" />
            <span className="font-mono text-[16px] tracking-[0.2em] uppercase text-bm-accent">
              SURVEILLANCE ACTIVE
            </span>
          </div>
          <span className="font-mono text-[16px] text-bm-gray/60">
            {currentTime}
          </span>
        </div>

        {/* Biometric scan effect */}
        <div className="relative mb-16 h-32 overflow-hidden">
          {/* Scanning line */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-bm-accent to-transparent animate-scan opacity-70" />
          </div>

          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-bm-accent/40" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-bm-accent/40" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-bm-accent/40" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-bm-accent/40" />

          {/* Center target */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 border-2 border-bm-accent rounded-full animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border border-bm-accent/40 rounded-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-bm-accent/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(164, 202, 236, 0.1) 10px, rgba(164, 202, 236, 0.1) 11px), repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(164, 202, 236, 0.1) 10px, rgba(164, 202, 236, 0.1) 11px)'
            }}
          />
        </div>

        {/* System messages */}
        <div className="space-y-2 mb-12 min-h-[120px]">
          {stages.slice(0, stage + 1).map((s, i) => (
            <div
              key={i}
              className={`font-mono text-[16px] tracking-[0.1em] uppercase transition-all duration-300 flex items-center gap-3 ${
                i === stage ? 'text-bm-accent' : 'text-bm-gray/50'
              }`}
            >
              <span className="text-bm-accent/60">&gt;</span>
              <span className={glitch && i === stage ? 'animate-subtle-glitch' : ''}>
                {s.text}
              </span>
              {i === stage && (
                <div className="ml-auto flex gap-1">
                  <div className="w-1 h-1 bg-bm-accent rounded-full animate-pulse" />
                  <div className="w-1 h-1 bg-bm-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-1 bg-bm-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[16px] font-mono">
            <span className="text-bm-gray/60 tracking-[0.15em] uppercase">Loading</span>
            <span className="text-bm-accent tracking-wider">{Math.min(Math.floor(progress), 100)}%</span>
          </div>

          {/* Progress bar container */}
          <div className="relative h-1 bg-bm-dark border border-bm-gray/20 overflow-hidden">
            {/* Progress fill */}
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-bm-blue via-bm-accent to-bm-accent transition-all duration-100 ease-out shadow-[0_0_10px_#A4CAEC]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />

            {/* Scanning effect */}
            <div className="absolute inset-0 opacity-50">
              <div className="w-1 h-full bg-white/80 animate-scan-vertical shadow-[0_0_5px_white]" />
            </div>
          </div>

          {/* Technical readout */}
          <div className="flex items-center justify-between text-[16px] font-mono text-bm-gray/40">
            <span>PROTOCOL v4.2.1</span>
            <span>MEMORY: {Math.floor(progress * 0.89)}%</span>
            <span>CPU: {Math.floor(progress * 0.67)}%</span>
          </div>
        </div>

        {/* Warning text */}
        <div className="mt-12 pt-8 border-t border-bm-gray/10">
          <p className="text-center font-mono text-[16px] text-bm-gray/40 tracking-[0.15em] uppercase">
            Your experience is being monitored
          </p>
          <p className="text-center font-mono text-[16px] text-bm-gray/30 tracking-[0.1em] uppercase mt-2">
            By proceeding, you consent to data collection
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-bm-accent/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-bm-accent/30" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-bm-accent/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-bm-accent/30" />

      {/* Hidden code in corner */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-bm-gray/10 tracking-[0.3em]">
        ACCESS_CODE: BOOTSTRAP
      </div>
    </div>
  );
}

"use client";

import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const { setEasterEggMessage, addFoundCode } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger glitch effect
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 600);

    setEasterEggMessage(`Welcome to the loop. Code: REALITY25`);
    addFoundCode('NEWSLETTER');
    setEmail('');
  };

  return (
    <section className="relative w-full bg-bm-rich-black py-32 overflow-hidden">
      {/* Glitch overlay */}
      {isGlitching && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-bm-accent/20 animate-pulse" />
          <div className="absolute inset-0 scanlines opacity-30" />
        </div>
      )}

      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-12 mb-16">
        <div className="flex items-center gap-6">
          <div className="h-[1px] w-16 bg-bm-accent" />
          <h2 className="text-[11px] font-black tracking-[0.3em] uppercase text-bm-white">
            Join The Loop
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-bm-accent/50 to-transparent" />
        </div>
      </div>

      {/* Newsletter Content */}
      <div className="max-w-[900px] mx-auto px-12">
        <div className="relative group">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />

          {/* Border with glitch effect */}
          <div className={`absolute inset-0 border border-bm-accent/30 transition-all duration-300 ${
            isGlitching ? 'border-bm-accent animate-pulse' : ''
          }`} />

          {/* Scanlines */}
          <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

          {/* Content */}
          <div className="relative p-16 space-y-10">
            {/* Title */}
            <div className="text-center space-y-4">
              <h3 className="text-[24px] font-black tracking-[0.15em] uppercase text-bm-white">
                <span className={`inline-block ${isGlitching ? 'animate-subtle-glitch' : ''}`}>
                  Subscribe to Reality
                </span>
              </h3>
              <p className="text-[10px] tracking-[0.15em] uppercase text-bm-gray/70 max-w-[600px] mx-auto">
                Early access to new drops • Hidden collections • Exclusive codes
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="relative group/input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.reality@email.com"
                  required
                  className="w-full px-6 py-4 bg-bm-rich-black border border-bm-gray/20 text-bm-white text-[10px] tracking-[0.1em] uppercase placeholder:text-bm-gray/40 focus:border-bm-accent focus:outline-none transition-all duration-300"
                />
                {/* Input border glow on focus */}
                <div className="absolute inset-0 border border-bm-accent/0 group-focus-within/input:border-bm-accent/40 transition-all duration-300 pointer-events-none" />

                {/* Scanline effect on input */}
                <div className="absolute inset-0 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                  <div className="absolute w-full h-[1px] bg-bm-accent/50 animate-scan" />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-bm-accent text-bm-rich-black text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-bm-white transition-all duration-300 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Enter The Loop</span>

                {/* Button glitch effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-30 transition-opacity duration-200">
                  <div className="absolute inset-0 bg-bm-accent translate-x-[-2px] translate-y-[2px]" />
                  <div className="absolute inset-0 bg-bm-blue translate-x-[2px] translate-y-[-2px]" />
                </div>

                {/* Scanline on button */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
              </button>
            </form>

            {/* Privacy Notice */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-bm-accent/60">
                <rect x="3" y="11" width="18" height="11" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <p className="text-[8px] tracking-[0.15em] uppercase text-bm-gray/60">
                Your data remains yours. We don't stream your reality.
              </p>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-bm-accent/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-bm-accent/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-bm-accent/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-bm-accent/40" />
        </div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(164, 202, 236, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(164, 202, 236, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
}

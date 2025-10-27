"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';

export default function Footer() {
  const { setEasterEggMessage, addFoundCode } = useStore();
  const [isDead, setIsDead] = useState(false);

  const handleKonamiTrigger = () => {
    setEasterEggMessage('CHEAT CODE ACTIVATED. Code: CHOICE10');
    addFoundCode('BANDERSNATCH');
  };

  return (
    <footer className="relative bg-bm-rich-black border-t border-bm-accent/10 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden">
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-bm-accent/30 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-10 sm:mb-12 md:mb-16">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <h3 className="text-[10px] sm:text-[11px] md:text-[12px] font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase text-bm-white">
              Black Mirror
            </h3>
            <p className="text-[8px] sm:text-[9px] text-bm-gray/70 leading-relaxed tracking-[0.05em] max-w-[280px]">
              Step beyond the screen. Explore reflections of distorted reality. Every product is a story, every glitch a mirror.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              <a
                href="#"
                className="relative w-10 h-10 flex items-center justify-center border border-bm-gray/20 hover:border-bm-accent transition-all duration-300 group overflow-hidden"
              >
                <span className="text-[10px] text-bm-gray/60 group-hover:text-bm-accent transition-colors relative z-10">𝕏</span>
                <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#"
                className="relative w-10 h-10 flex items-center justify-center border border-bm-gray/20 hover:border-bm-accent transition-all duration-300 group overflow-hidden"
              >
                <span className="text-[10px] text-bm-gray/60 group-hover:text-bm-accent transition-colors relative z-10">IG</span>
                <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#"
                className="relative w-10 h-10 flex items-center justify-center border border-bm-gray/20 hover:border-bm-accent transition-all duration-300 group overflow-hidden"
              >
                <span className="text-[10px] text-bm-gray/60 group-hover:text-bm-accent transition-colors relative z-10">TT</span>
                <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-bm-white mb-4 sm:mb-5 md:mb-6">
              Navigate
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="text-[8px] sm:text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/collections" className="text-[8px] sm:text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300">
                  Collections
                </a>
              </li>
              <li>
                <a href="/cart" className="text-[8px] sm:text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300">
                  Cart
                </a>
              </li>
              <li>
                <a href="#episodes" className="text-[8px] sm:text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300">
                  Episodes
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-bm-white mb-4 sm:mb-5 md:mb-6">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/terms" className="text-[8px] sm:text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/returns" className="text-[8px] sm:text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300">
                  Delivery & Returns
                </a>
              </li>
              <li>
                <a href="/faq" className="text-[8px] sm:text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Thrognlet */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[200px]">
              <motion.div
                className="relative cursor-pointer"
                onMouseEnter={() => {
                  if (!isDead) {
                    setIsDead(true);
                    // Respawn after 3 seconds
                    setTimeout(() => setIsDead(false), 3000);
                  }
                }}
                animate={isDead ? {} : { x: [-30, 70, -30] }}
                transition={
                  isDead
                    ? {}
                    : {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                {/* Thrognlet Image */}
                <motion.img
                  src={isDead ? '/thronglet-dead.png' : '/thronglet-live.png'}
                  alt="Thrognlet"
                  className="w-32 h-32 object-contain"
                  animate={
                    isDead
                      ? {
                          rotate: [0, -10, 10, -5, 5, 0],
                          scale: [1, 0.95, 1.05, 0.98, 1],
                        }
                      : {}
                  }
                  transition={
                    isDead
                      ? {
                          duration: 0.5,
                          ease: "easeInOut",
                        }
                      : {}
                  }
                />

                {/* Death Glitch Effect */}
                {isDead && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0, 1, 0] }}
                    transition={{ duration: 0.3, repeat: 2 }}
                  >
                    <img
                      src="/thronglet-dead.png"
                      alt=""
                      className="w-32 h-32 object-contain opacity-50"
                      style={{
                        transform: 'translate(-2px, 1px)',
                        filter: 'hue-rotate(180deg)',
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* Hover hint */}
              <p className="text-[7px] text-bm-gray/40 tracking-[0.15em] uppercase text-center mt-2">
                {isDead ? 'Respawning...' : 'Hover to eliminate'}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-bm-accent/20 to-transparent mb-6 sm:mb-8 md:mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
            <p className="text-[7px] sm:text-[8px] text-bm-gray/50 tracking-[0.08em] sm:tracking-[0.1em] uppercase text-center">
              © 2025 Black Mirror Store. All realities reserved.
            </p>
            <button
              onClick={handleKonamiTrigger}
              className="text-[7px] sm:text-[8px] text-bm-gray/20 hover:text-bm-accent font-mono tracking-wider transition-colors duration-300"
            >
              ↑↑↓↓←→←→BA
            </button>
          </div>

          {/* Security Badges */}
          <div className="flex gap-2 sm:gap-3">
            <span className="relative px-2 sm:px-3 py-1 sm:py-1.5 border border-bm-accent/20 text-[6px] sm:text-[7px] font-mono tracking-[0.12em] sm:tracking-[0.15em] text-bm-accent/60 uppercase hover:border-bm-accent/40 hover:text-bm-accent/80 transition-all duration-300 cursor-default group overflow-hidden">
              <span className="relative z-10">Secure</span>
              <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <span className="relative px-2 sm:px-3 py-1 sm:py-1.5 border border-bm-accent/20 text-[6px] sm:text-[7px] font-mono tracking-[0.12em] sm:tracking-[0.15em] text-bm-accent/60 uppercase hover:border-bm-accent/40 hover:text-bm-accent/80 transition-all duration-300 cursor-default group overflow-hidden">
              <span className="relative z-10">Encrypted</span>
              <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <span className="relative px-2 sm:px-3 py-1 sm:py-1.5 border border-bm-accent/20 text-[6px] sm:text-[7px] font-mono tracking-[0.12em] sm:tracking-[0.15em] text-bm-accent/60 uppercase hover:border-bm-accent/40 hover:text-bm-accent/80 transition-all duration-300 cursor-default group overflow-hidden">
              <span className="relative z-10">Anonymous</span>
              <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          </div>
        </div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(164, 202, 236, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(164, 202, 236, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </footer>
  );
}

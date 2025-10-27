"use client";

import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEggModal() {
  const { easterEggMessage, setEasterEggMessage } = useStore();

  return (
    <AnimatePresence>
      {easterEggMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-bm-rich-black/98 backdrop-blur-sm z-[10000] flex items-center justify-center p-8"
          onClick={() => setEasterEggMessage(null)}
        >
          {/* Scanlines overlay */}
          <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-[600px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />

            {/* Border */}
            <div className="absolute inset-0 border border-bm-accent/40" />

            {/* Scanlines */}
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-bm-accent" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-bm-accent" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-bm-accent" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-bm-accent" />

            {/* Content */}
            <div className="relative p-16 space-y-10">
              {/* Header */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-bm-accent" />
                  <div className="w-2 h-2 border border-bm-accent rotate-45" />
                  <div className="h-[1px] w-12 bg-bm-accent" />
                </div>

                <h3 className="text-[24px] font-black tracking-[0.25em] uppercase text-bm-accent">
                  System Alert
                </h3>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-bm-accent/50 to-transparent" />
                </div>
              </div>

              {/* Message */}
              <div className="text-center">
                <p className="text-[11px] tracking-[0.1em] text-bm-white leading-relaxed max-w-[450px] mx-auto">
                  {easterEggMessage}
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center pt-6">
                <button
                  onClick={() => setEasterEggMessage(null)}
                  className="group relative px-12 py-4 bg-transparent border border-bm-accent/30 hover:border-bm-accent transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 text-[9px] font-bold tracking-[0.25em] uppercase text-bm-white group-hover:text-bm-rich-black transition-colors duration-300">
                    Acknowledge
                  </span>

                  {/* Slide effect */}
                  <div className="absolute inset-0 bg-bm-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                  {/* Scanlines on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
                </button>
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <div className="w-1.5 h-1.5 bg-bm-accent animate-pulse" />
                <span className="text-[7px] font-mono tracking-[0.2em] uppercase text-bm-accent/60">
                  Easter Egg Detected
                </span>
                <div className="w-1.5 h-1.5 bg-bm-accent animate-pulse" />
              </div>
            </div>

            {/* Subtle glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-bm-accent/5 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

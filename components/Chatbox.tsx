"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full border-2 border-bm-accent bg-bm-rich-black hover:bg-bm-dark shadow-[0_0_30px_rgba(164,202,236,0.3)] hover:shadow-[0_0_50px_rgba(164,202,236,0.5)] transition-all duration-300 flex items-center justify-center group overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-20 pointer-events-none rounded-full" />

        {/* Icon */}
        <img
          src="/icon-2.png"
          alt="Chat"
          className="w-8 h-8 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
        />

        {/* Pulse effect */}
        <div className="absolute inset-0 border-2 border-bm-accent rounded-full animate-ping opacity-20" />
      </motion.button>

      {/* Chatbox Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-6 z-50 w-[90vw] sm:w-96 h-[500px] bg-bm-rich-black border-2 border-bm-accent shadow-[0_0_50px_rgba(164,202,236,0.3)] overflow-hidden"
          >
            {/* Scanlines */}
            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

            {/* Header */}
            <div className="relative border-b border-bm-accent/30 p-4 bg-gradient-to-r from-bm-dark to-bm-rich-black">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/icon-2.png"
                    alt="Support"
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h3 className="text-[15px] font-bold tracking-[0.2em] uppercase text-bm-white">
                      Black Mirror Support
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bm-accent animate-pulse" />
                      <span className="text-[16px] font-mono tracking-[0.15em] text-bm-gray/60 uppercase">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center border border-bm-gray/20 hover:border-bm-accent hover:bg-bm-accent/10 transition-all duration-300"
                >
                  <X size={16} className="text-bm-gray/60 hover:text-bm-accent" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="relative h-[calc(100%-140px)] overflow-y-auto p-4 space-y-4">
              {/* Welcome Message */}
              <div className="flex gap-3">
                <img
                  src="/icon-2.png"
                  alt=""
                  className="w-8 h-8 object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-bm-dark border border-bm-accent/20 p-3">
                    <p className="text-[15px] text-bm-white/90 leading-relaxed">
                      Welcome to Black Mirror. Reality is optional here.
                    </p>
                  </div>
                  <span className="text-[16px] font-mono text-bm-gray/40 mt-1 block tracking-[0.1em]">
                    Just now
                  </span>
                </div>
              </div>

              {/* System Message */}
              <div className="flex gap-3">
                <img
                  src="/icon-2.png"
                  alt=""
                  className="w-8 h-8 object-contain flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="bg-bm-dark border border-bm-accent/20 p-3">
                    <p className="text-[15px] text-bm-white/90 leading-relaxed">
                      How can I assist you today? Need help finding the perfect dystopian merch?
                    </p>
                  </div>
                  <span className="text-[16px] font-mono text-bm-gray/40 mt-1 block tracking-[0.1em]">
                    Just now
                  </span>
                </div>
              </div>

              {/* Glitch divider */}
              <div className="flex items-center gap-3 py-2">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-bm-accent/30 to-transparent" />
                <span className="text-[16px] font-mono text-bm-accent/60 tracking-[0.2em] uppercase">
                  Connected
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-bm-accent/30 to-transparent" />
              </div>
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-bm-accent/30 p-4 bg-gradient-to-r from-bm-dark to-bm-rich-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-bm-dark border border-bm-gray/20 px-4 py-3 text-[15px] text-bm-white placeholder:text-bm-gray/40 focus:border-bm-accent focus:outline-none transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-bm-accent text-bm-rich-black font-bold text-[15px] tracking-[0.2em] uppercase hover:shadow-[0_0_20px_rgba(164,202,236,0.5)] transition-all duration-300">
                  Send
                </button>
              </div>
              <p className="text-[16px] font-mono text-bm-gray/30 mt-2 text-center tracking-[0.1em] uppercase">
                Support is currently offline
              </p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-bm-accent" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-bm-accent" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-bm-accent" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-bm-accent" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

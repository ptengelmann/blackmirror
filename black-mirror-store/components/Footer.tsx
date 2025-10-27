"use client";

import { useStore } from '@/lib/store';

export default function Footer() {
  const { setEasterEggMessage, addFoundCode } = useStore();

  const handleKonamiTrigger = () => {
    setEasterEggMessage('CHEAT CODE ACTIVATED. Code: CHOICE10');
    addFoundCode('BANDERSNATCH');
  };

  return (
    <footer className="relative bg-bm-rich-black border-t border-bm-accent/10 pt-20 pb-10 overflow-hidden">
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-bm-accent/30 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-12 relative">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-black tracking-[0.3em] uppercase text-bm-white">
              Black Mirror
            </h3>
            <p className="text-[9px] text-bm-gray/70 leading-relaxed tracking-[0.05em] max-w-[280px]">
              Step beyond the screen. Explore reflections of distorted reality. Every product is a story, every glitch a mirror.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
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
            <h4 className="text-[9px] font-bold tracking-[0.25em] uppercase text-bm-white mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#shop" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  All Categories
                </a>
              </li>
              <li>
                <a href="#shop" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#episodes" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[9px] font-bold tracking-[0.25em] uppercase text-bm-white mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[9px] text-bm-gray/60 hover:text-bm-accent tracking-[0.1em] uppercase transition-colors duration-300">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] font-bold tracking-[0.25em] uppercase text-bm-white mb-6">
              Reality Check
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-bm-gray/60 text-[9px] tracking-[0.05em]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-bm-accent mt-0.5 flex-shrink-0">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>16 Chemin De La Madrague-Ville<br />13015 Marseille</span>
              </li>
              <li className="flex gap-3 text-bm-gray/60 text-[9px] tracking-[0.05em]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-bm-accent mt-0.5 flex-shrink-0">
                  <path d="M22 16.92V19.92C22 20.4728 21.5523 20.92 21 20.92H19C8.50659 20.92 0 12.4134 0 1.92V1.92C0 1.36772 0.447715 0.92 1 0.92H4C4.55228 0.92 5 1.36772 5 1.92V5.92L3 7.92C3 12.34 6.58 15.92 11 15.92L13 13.92H17C17.5523 13.92 18 14.3677 18 14.92V16.92C18 17.4723 18.4477 17.92 19 17.92H21C21.5523 17.92 22 17.3677 22 16.92Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>+33 (0)4 91 02 92 22</span>
              </li>
              <li className="flex gap-3 text-bm-gray/60 text-[9px] tracking-[0.05em]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-bm-accent mt-0.5 flex-shrink-0">
                  <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 5L12 13L21 5" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>reality@blackmirror.store</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-bm-accent/20 to-transparent mb-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[8px] text-bm-gray/50 tracking-[0.1em] uppercase">
              © 2025 Black Mirror Store. All realities reserved.
            </p>
            <button
              onClick={handleKonamiTrigger}
              className="text-[8px] text-bm-gray/20 hover:text-bm-accent font-mono tracking-wider transition-colors duration-300"
            >
              ↑↑↓↓←→←→BA
            </button>
          </div>

          {/* Security Badges */}
          <div className="flex gap-3">
            <span className="relative px-3 py-1.5 border border-bm-accent/20 text-[7px] font-mono tracking-[0.15em] text-bm-accent/60 uppercase hover:border-bm-accent/40 hover:text-bm-accent/80 transition-all duration-300 cursor-default group overflow-hidden">
              <span className="relative z-10">Secure</span>
              <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <span className="relative px-3 py-1.5 border border-bm-accent/20 text-[7px] font-mono tracking-[0.15em] text-bm-accent/60 uppercase hover:border-bm-accent/40 hover:text-bm-accent/80 transition-all duration-300 cursor-default group overflow-hidden">
              <span className="relative z-10">Encrypted</span>
              <div className="absolute inset-0 bg-bm-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
            <span className="relative px-3 py-1.5 border border-bm-accent/20 text-[7px] font-mono tracking-[0.15em] text-bm-accent/60 uppercase hover:border-bm-accent/40 hover:text-bm-accent/80 transition-all duration-300 cursor-default group overflow-hidden">
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

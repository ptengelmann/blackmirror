"use client";

import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { cart } = useStore();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    'Hoodies',
    'T-Shirts',
    'Phone Cases',
    'Collectibles',
    'Accessories',
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled
          ? 'bg-bm-rich-black/98 backdrop-blur-2xl border-b border-bm-gray/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-12">
        <div className="h-16 grid grid-cols-3 items-center">
          {/* Left - Shop Dropdown */}
          <div
            className="relative justify-self-start"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="relative text-[9px] font-medium tracking-[0.2em] uppercase text-bm-gray/70 hover:text-bm-white transition-all duration-300 group py-6">
              <span className="relative inline-block">
                Shop
                {/* Subtle glow on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-[2px] text-bm-accent" aria-hidden="true">
                  Shop
                </span>
                {/* Chromatic aberration layers */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 text-bm-accent -translate-x-[0.5px] translate-y-[0.5px]" aria-hidden="true">
                  Shop
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 text-bm-blue translate-x-[0.5px] -translate-y-[0.5px]" aria-hidden="true">
                  Shop
                </span>
              </span>
            </button>

            {/* Dropdown Menu */}
            {shopOpen && (
              <div className="absolute top-full left-0 pt-3 animate-fade-in">
                <div className="relative glass-effect border border-bm-accent/20 overflow-hidden min-w-[180px] shadow-[0_0_20px_rgba(164,202,236,0.1)]">
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

                  {categories.map((category, index) => (
                    <a
                      key={category}
                      href={`#shop?category=${category.toLowerCase()}`}
                      className="relative block px-6 py-3.5 text-[9px] font-medium tracking-[0.15em] uppercase text-bm-gray/80 hover:text-bm-white hover:bg-bm-accent/5 transition-all duration-200 border-b border-bm-gray/5 last:border-b-0 group/item"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="relative inline-block">
                        {category}
                        {/* Subtle glow on hover */}
                        <span className="absolute inset-0 opacity-0 group-hover/item:opacity-40 transition-opacity duration-200 blur-[1px] text-bm-accent" aria-hidden="true">
                          {category}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center - Logo */}
          <a href="/" className="group relative justify-self-center">
            <span className="text-[9px] font-black tracking-[0.25em] uppercase text-bm-white/90 group-hover:text-bm-white transition-all duration-300 relative inline-block">
              BLACK MIRROR
              {/* Subtle glow on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-[2px] text-bm-accent" aria-hidden="true">
                BLACK MIRROR
              </span>
              {/* Chromatic aberration layers */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 text-bm-accent -translate-x-[0.5px] translate-y-[0.5px]" aria-hidden="true">
                BLACK MIRROR
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 text-bm-blue translate-x-[0.5px] -translate-y-[0.5px]" aria-hidden="true">
                BLACK MIRROR
              </span>
            </span>
          </a>

          {/* Right - Custom Black Mirror Icons */}
          <div className="flex items-center gap-8 justify-self-end">
            {/* User Icon - Custom Black Mirror style */}
            <button className="relative group w-5 h-5">
              <div className="relative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-bm-white/50 group-hover:text-bm-accent transition-all duration-300">
                  <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M6 21C6 17.134 8.686 14 12 14C15.314 14 18 17.134 18 21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-bm-accent/40 blur-lg" />
                </div>
              </div>
            </button>

            {/* Cart Icon - Custom Black Mirror style */}
            <button className="relative group w-5 h-5">
              <div className="relative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-bm-white/50 group-hover:text-bm-accent transition-all duration-300">
                  <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" strokeLinejoin="miter"/>
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="1.2"/>
                </svg>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-bm-accent/40 blur-lg" />
                </div>
              </div>

              {/* Cart count badge */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-bm-accent text-bm-rich-black text-[7px] font-bold min-w-[14px] h-[14px] rounded-full flex items-center justify-center leading-none shadow-[0_0_8px_rgba(164,202,236,0.6)]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Subtle divider line */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-bm-gray/10 to-transparent transition-opacity duration-700 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
    </nav>
  );
}

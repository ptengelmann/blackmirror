"use client";

import { useStore } from '@/lib/store';

export default function Hero() {
  const { setEasterEggMessage, addFoundCode } = useStore();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-bm-rich-black">
      {/* Hero Image - using standard img tag for reliability */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Black Mirror"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Subtle dark overlay at bottom for button visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-bm-rich-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Buttons at bottom */}
      <div className="relative h-full flex items-end pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
            {/* Shop Now - Primary CTA */}
            <a
              href="#shop"
              className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-bm-white text-bm-rich-black text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 overflow-hidden text-center"
            >
              <span className="relative z-10">Shop Now</span>
              {/* Hover effect - slide from left */}
              <div className="absolute inset-0 bg-bm-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold tracking-[0.15em] sm:tracking-[0.2em]">
                Shop Now
              </span>
            </a>

            {/* Discover More - Secondary CTA with down arrow */}
            <button
              onClick={() => {
                setEasterEggMessage('Easter egg system active. Look for hidden codes throughout the site.');
                addFoundCode('INTRO');
              }}
              className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-bm-white/30 text-bm-white text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:border-bm-accent transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 sm:gap-3"
            >
              <span className="group-hover:text-bm-accent transition-colors duration-300">Discover More</span>
              {/* Down arrow */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                className="text-bm-white group-hover:text-bm-accent transition-all duration-300 group-hover:translate-y-1"
              >
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>

              {/* Subtle scanline on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

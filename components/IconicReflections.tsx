"use client";

import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export default function IconicReflections() {
  const router = useRouter();
  const { setEasterEggMessage, addFoundCode } = useStore();

  const products = [
    {
      id: 'white-bear-hoodie',
      title: "White Bear Hoodie",
      category: "Apparel",
      price: "$89.00",
      status: "Available",
      image: null,
    },
    {
      id: 'uss-callister-tee',
      title: "USS Callister Tee",
      category: "Apparel",
      price: "$45.00",
      status: "Available",
      image: null,
    },
    {
      id: 'nosedive-pin-set',
      title: "Nosedive Pin Set",
      category: "Accessories",
      price: "$29.00",
      status: "Available",
      image: null,
    },
    {
      id: 'arkangel-system',
      title: "ARKANGEL System",
      category: "Tech",
      price: "CLASSIFIED",
      status: "BLOCKED",
      isEasterEgg: true,
      image: null,
    },
    {
      id: 'san-junipero-poster',
      title: "San Junipero Poster",
      category: "Art Print",
      price: "$65.00",
      status: "Available",
      image: null,
    },
    {
      id: 'grain-memory-unit',
      title: "Grain Memory Unit",
      category: "Collectible",
      price: "$125.00",
      status: "Available",
      image: null,
    },
  ];

  const handleBlockedClick = () => {
    setEasterEggMessage('ACCESS DENIED. Parental controls active. Code: ARKANGEL');
    addFoundCode('ARKANGEL');
  };

  return (
    <section className="relative w-full bg-bm-rich-black py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Grain Effect */}
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      {/* Broken Code Background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none overflow-hidden">
        <pre className="text-[6px] sm:text-[7px] md:text-[8px] font-mono text-bm-accent leading-[1.4] whitespace-pre-wrap break-all">
{`ERROR: REALITY.CORRUPT
>>> import consciousness
Traceback (most recent call last):
  File "black_mirror.py", line 404, error
    def upload_consciousness(mind):
MemoryError: reality buffer overflow
>>> while True:
...     if sanity == None:
...         break  # SYSTEM FAILURE
IndexError: list index out of range
>>> class Human(object):
...     def __init__(self, free_will=False):
SyntaxError: invalid syntax
>>> print(reality.status())
NULL POINTER EXCEPTION
>>> import memories
ImportError: No module named 'authentic_experience'
>>> try:
...     delete_painful_memories()
... except:
...     consequences.unavoidable()
RuntimeError: cannot delete core.identity
>>> if privacy.exists():
...     surveillance.deactivate()
AssertionError: privacy is False
>>> rating = calculate_social_worth()
ValueError: human dignity cannot be quantified
>>> consciousness.upload()
FATAL ERROR: original lost forever
>>> reality.reboot()
PermissionError: access denied by ARKANGEL
SYSTEM HALTED - PRESS ANY KEY
`}
        </pre>
      </div>

      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-16 md:mb-20 relative z-10">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-bm-accent" />
          <h2 className="text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-bm-white">
            Featured Products
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-bm-accent/50 to-transparent" />
        </div>
        <p className="text-bm-gray text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-3 sm:mt-4 ml-0 sm:ml-[60px] md:ml-[88px]">
          Technology that reflects dystopia
        </p>
      </div>

      {/* 2x3 Product Grid - Responsive */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={product.isEasterEgg ? handleBlockedClick : () => router.push(`/product/${product.id}`)}
              className="group relative overflow-hidden h-[320px] sm:h-[340px] md:h-[380px] cursor-pointer"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />

              {/* Scanline overlay */}
              <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

              {/* Border */}
              <div className={`absolute inset-0 transition-all duration-300 ${
                product.isEasterEgg
                  ? 'border-[3px] border-[#FF006E] animate-pulse shadow-[0_0_40px_#FF006E] group-hover:shadow-[0_0_80px_#FF006E]'
                  : 'border border-bm-gray/20 group-hover:border-bm-accent/40'
              }`} />

              {/* Glitch effect on hover for blocked product */}
              {product.isEasterEgg && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none">
                  {/* Chromatic aberration */}
                  <div className="absolute inset-0 border-[2px] border-[#FF006E] translate-x-[-3px] translate-y-[1px] mix-blend-screen" />
                  <div className="absolute inset-0 border-[2px] border-[#00D9FF] translate-x-[3px] translate-y-[-1px] mix-blend-screen" />
                </div>
              )}

              {/* BLOCKED Overlay for Easter Egg */}
              {product.isEasterEgg && (
                <div className="absolute inset-0 bg-bm-rich-black/80 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3 relative">
                      <div className="w-3 h-3 border-2 border-bm-pink rotate-45 animate-pulse" />
                      <span className="relative text-[20px] font-black tracking-[0.3em] uppercase text-bm-pink group-hover:animate-subtle-glitch">
                        BLOCKED
                        {/* Chromatic aberration on hover */}
                        <span className="absolute inset-0 text-bm-pink opacity-0 group-hover:opacity-70 translate-x-[-1px] translate-y-[1px] transition-opacity duration-200">
                          BLOCKED
                        </span>
                        <span className="absolute inset-0 text-bm-blue opacity-0 group-hover:opacity-50 translate-x-[1px] translate-y-[-1px] transition-opacity duration-200">
                          BLOCKED
                        </span>
                      </span>
                      <div className="w-3 h-3 border-2 border-bm-pink rotate-45 animate-pulse" />
                    </div>
                    <p className="text-[7px] font-mono tracking-[0.2em] uppercase text-bm-gray/60">
                      Parental Controls Active
                    </p>
                  </div>
                </div>
              )}

              {/* Glass overlay on hover */}
              {!product.isEasterEgg && (
                <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                {/* Top - Category & Status */}
                <div className="flex items-center justify-between">
                  <span className={`text-[7px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    product.isEasterEgg ? 'text-bm-pink/60' : 'text-bm-gray/60 group-hover:text-bm-accent'
                  }`}>
                    {product.category}
                  </span>
                  <span className={`text-[6px] font-mono tracking-[0.15em] uppercase px-2 py-1 border transition-colors duration-300 ${
                    product.status === "BLOCKED"
                      ? 'border-bm-pink/40 text-bm-pink/80'
                      : 'border-bm-gray/20 text-bm-gray/50 group-hover:border-bm-accent/30 group-hover:text-bm-accent/70'
                  }`}>
                    {product.status}
                  </span>
                </div>

                {/* Middle - Product Image Placeholder */}
                <div className="flex-1 flex items-center justify-center">
                  <div className={`w-16 h-16 border-2 transition-all duration-300 ${
                    product.isEasterEgg
                      ? 'border-bm-pink/60 rotate-45'
                      : 'border-bm-gray/20 group-hover:border-bm-accent/40 group-hover:rotate-12'
                  }`} />
                </div>

                {/* Bottom - Product Info */}
                <div className="space-y-3">
                  <h3 className={`text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                    product.isEasterEgg ? 'text-bm-pink' : 'text-bm-white group-hover:text-bm-accent'
                  }`}>
                    {product.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className={`text-[12px] font-mono font-black tracking-wider transition-colors duration-300 ${
                      product.isEasterEgg ? 'text-bm-pink/80' : 'text-bm-gray group-hover:text-bm-white'
                    }`}>
                      {product.price}
                    </span>

                    {!product.isEasterEgg && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                        <span className="text-[7px] text-bm-white/70 tracking-[0.15em] uppercase">
                          View
                        </span>
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-bm-accent"
                        >
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subtle glow effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                product.isEasterEgg ? '' : ''
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-bm-accent/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

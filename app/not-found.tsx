"use client";

import { useRouter } from 'next/navigation';
import { AlertTriangle, Home, Search } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-bm-rich-black flex items-center justify-center px-4 pt-24 pb-16">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-10" />

      <div className="relative max-w-[800px] w-full">
        {/* Main Error Container */}
        <div className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-pink/40 p-8 sm:p-12 md:p-16">
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

          {/* Glitch border effect */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0 border-[2px] border-bm-pink translate-x-[-2px] translate-y-[1px] mix-blend-screen" />
            <div className="absolute inset-0 border-[2px] border-bm-blue translate-x-[2px] translate-y-[-1px] mix-blend-screen" />
          </div>

          <div className="relative space-y-8 text-center">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <AlertTriangle size={64} className="text-bm-pink animate-pulse" />
                <div className="absolute inset-0 animate-pulse">
                  <AlertTriangle size={64} className="text-bm-pink opacity-30 translate-x-[-2px]" />
                  <AlertTriangle size={64} className="text-bm-blue opacity-30 translate-x-[2px]" />
                </div>
              </div>
            </div>

            {/* Error Code */}
            <div className="space-y-4">
              <h1 className="relative text-[80px] sm:text-[100px] md:text-[120px] font-black tracking-[0.15em] uppercase text-bm-pink leading-none">
                404
                <span className="absolute inset-0 text-bm-pink opacity-20 translate-x-[-3px] translate-y-[2px]">
                  404
                </span>
                <span className="absolute inset-0 text-bm-blue opacity-20 translate-x-[3px] translate-y-[-2px]">
                  404
                </span>
              </h1>

              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 border-2 border-bm-pink rotate-45 animate-pulse" />
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-black tracking-[0.2em] uppercase text-bm-white">
                  Reality Not Found
                </h2>
                <div className="w-3 h-3 border-2 border-bm-pink rotate-45 animate-pulse" />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4 max-w-[500px] mx-auto">
              <p className="text-[12px] sm:text-[13px] text-bm-gray/80 leading-relaxed tracking-[0.05em]">
                The page you're looking for has been lost in the digital void. It may have been deleted, moved, or never existed in the first place.
              </p>

              <p className="text-[10px] sm:text-[11px] text-bm-pink/60 font-mono tracking-[0.1em] uppercase">
                Error Code: REALITY_BREACH_404
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-bm-pink/30 to-transparent" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => router.push('/')}
                className="group px-8 py-4 bg-bm-pink text-bm-rich-black text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-bm-pink/80 transition-all duration-300 relative overflow-hidden flex items-center gap-3"
              >
                <Home size={16} />
                <span className="relative z-10">Return Home</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
              </button>

              <button
                onClick={() => router.push('/collections')}
                className="group px-8 py-4 border border-bm-pink/40 text-bm-pink text-[10px] font-bold tracking-[0.2em] uppercase hover:border-bm-pink hover:bg-bm-pink/10 transition-all duration-300 flex items-center gap-3"
              >
                <Search size={16} />
                Browse Collections
              </button>
            </div>

            {/* Suggestion Links */}
            <div className="pt-8">
              <p className="text-[9px] text-bm-gray/60 tracking-[0.15em] uppercase mb-4">
                You might be looking for:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => router.push('/collections')}
                  className="px-4 py-2 border border-bm-gray/20 text-[8px] text-bm-gray/60 hover:text-bm-accent hover:border-bm-accent tracking-[0.15em] uppercase transition-all duration-300"
                >
                  Shop
                </button>
                <button
                  onClick={() => router.push('/cart')}
                  className="px-4 py-2 border border-bm-gray/20 text-[8px] text-bm-gray/60 hover:text-bm-accent hover:border-bm-accent tracking-[0.15em] uppercase transition-all duration-300"
                >
                  Cart
                </button>
                <button
                  onClick={() => router.push('/faq')}
                  className="px-4 py-2 border border-bm-gray/20 text-[8px] text-bm-gray/60 hover:text-bm-accent hover:border-bm-accent tracking-[0.15em] uppercase transition-all duration-300"
                >
                  FAQ
                </button>
                <button
                  onClick={() => router.push('/returns')}
                  className="px-4 py-2 border border-bm-gray/20 text-[8px] text-bm-gray/60 hover:text-bm-accent hover:border-bm-accent tracking-[0.15em] uppercase transition-all duration-300"
                >
                  Returns
                </button>
              </div>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-bm-pink/60" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-bm-pink/60" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-bm-pink/60" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-bm-pink/60" />
        </div>

        {/* Floating glitch elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 border border-bm-pink/20 rotate-45 animate-pulse" />
        <div className="absolute -bottom-4 -right-4 w-12 h-12 border border-bm-blue/20 rotate-12 animate-pulse" />
      </div>

      {/* Background grid pattern */}
      <div className="fixed inset-0 opacity-[0.01] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(164, 202, 236, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(164, 202, 236, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
}

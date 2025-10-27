"use client";

import { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';

export default function RatingSystem() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { userRating, setUserRating, setEasterEggMessage, addFoundCode } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const newRating = parseFloat((Math.random() * 1.5 + 3.5).toFixed(1));
    setUserRating(newRating);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);

    if (newRating >= 4.8) {
      setEasterEggMessage('Perfect rating achieved. Code: NOSEDIVE');
      addFoundCode('NOSEDIVE');
    }
  };

  const getRatingColor = () => {
    if (userRating >= 4.5) return 'text-bm-accent border-bm-accent/40';
    if (userRating >= 3.5) return 'text-bm-gray border-bm-gray/40';
    return 'text-bm-gray/60 border-bm-gray/20';
  };

  const getStarFill = () => {
    if (userRating >= 4.5) return 'fill-bm-accent';
    if (userRating >= 3.5) return 'fill-bm-gray';
    return 'fill-bm-gray/40';
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleClick}
      className={`fixed top-24 right-8 z-50 cursor-pointer group transition-all duration-300 ${
        isAnimating ? 'scale-110' : 'scale-100'
      }`}
    >
      {/* Main Rating Card */}
      <div className="relative">
        {/* Background */}
        <div className="absolute inset-0 bg-bm-rich-black border border-bm-gray/20 group-hover:border-bm-accent/40 transition-all duration-300" />

        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

        {/* Content */}
        <div className="relative px-5 py-3 flex items-center gap-3">
          {/* Rating Number */}
          <span className={`font-mono text-[18px] font-black tracking-wider transition-all duration-300 ${getRatingColor().split(' ')[0]}`}>
            {userRating.toFixed(1)}
          </span>

          {/* Star Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" className={`transition-all duration-300 ${getStarFill()}`}>
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>

          {/* Up/Down Indicator */}
          <div className="w-[1px] h-4 bg-bm-gray/20" />

          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            className={`transition-all duration-300 ${
              userRating >= 4.0 ? 'text-bm-accent rotate-0' : 'text-bm-gray/60 rotate-180'
            }`}
          >
            <path d="M12 5L19 12L12 19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
          </svg>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-bm-accent/5 to-transparent" />
        </div>

        {/* Animation pulse */}
        {isAnimating && (
          <div className="absolute inset-0 border border-bm-accent animate-pulse" />
        )}
      </div>

      {/* Tooltip on hover */}
      <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-bm-rich-black border border-bm-accent/20 px-3 py-1.5 whitespace-nowrap">
          <span className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/60">
            Click to update rating
          </span>
        </div>
      </div>
    </div>
  );
}

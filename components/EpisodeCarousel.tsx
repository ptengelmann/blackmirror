"use client";

import { useState } from 'react';

export default function EpisodeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const episodes = [
    {
      id: 1,
      title: "San Junipero",
      tagline: "Heaven is a place on Earth",
      year: "1987",
      image: "/1.png",
    },
    {
      id: 2,
      title: "Nosedive",
      tagline: "Smile. It's for your own good.",
      year: "Present Day",
      image: "/2.png",
    },
    {
      id: 3,
      title: "USS Callister",
      tagline: "Hate the boss. Become the boss.",
      year: "Future",
      image: "/episodes/uss-callister.jpg",
    },
    {
      id: 4,
      title: "White Christmas",
      tagline: "Three interconnected tales",
      year: "Near Future",
      image: "/episodes/white-christmas.jpg",
    },
    {
      id: 5,
      title: "15 Million Merits",
      tagline: "Keep pedaling",
      year: "Future",
      image: "/episodes/15-million-merits.jpg",
    },
    {
      id: 6,
      title: "Bandersnatch",
      tagline: "Change your past. Choose your future.",
      year: "1984",
      image: "/episodes/bandersnatch.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % episodes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

  return (
    <section className="relative w-full bg-bm-rich-black py-16 sm:py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 mb-12 sm:mb-16 md:mb-20">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <div className="h-[1px] w-8 sm:w-12 md:w-16 bg-bm-accent" />
          <h2 className="text-[9px] sm:text-[10px] md:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase text-bm-white">
            Episode Archive
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-bm-accent/50 to-transparent" />
        </div>
        <p className="text-bm-gray text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-3 sm:mt-4 ml-0 sm:ml-[60px] md:ml-[88px]">
          Exploring alternate realities
        </p>
      </div>

      {/* Horizontal Carousel */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Carousel Container */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          {/* Episodes */}
          <div
            className="flex transition-transform duration-700 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="min-w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-16"
              >
                <div className="w-full max-w-[1200px] h-[260px] sm:h-[340px] md:h-[420px] relative group cursor-pointer">
                  {/* Background - Episode imagery */}
                  {episode.image ? (
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />
                  )}

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-bm-rich-black/40" />

                  {/* Scanline overlay */}
                  <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Border glow */}
                  <div className="absolute inset-0 border border-bm-accent/20 group-hover:border-bm-accent/60 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 sm:p-10 md:p-16 flex flex-col justify-between">
                    {/* Top - Year badge */}
                    <div className="flex justify-end">
                      <div className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-bm-gray/30 group-hover:border-bm-accent/40 transition-colors duration-300">
                        <span className="text-[7px] sm:text-[8px] md:text-[9px] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-bm-gray/70 group-hover:text-bm-accent transition-colors duration-300">
                          {episode.year}
                        </span>
                      </div>
                    </div>

                    {/* Center - Episode Info */}
                    <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
                      <h3 className="text-[18px] sm:text-[24px] md:text-[28px] font-black tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] uppercase text-bm-white group-hover:text-bm-accent transition-colors duration-500">
                        {episode.title}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.12em] sm:tracking-[0.15em] uppercase text-bm-gray/80 italic">
                        &ldquo;{episode.tagline}&rdquo;
                      </p>
                    </div>

                    {/* Bottom - Episode counter */}
                    <div className="flex justify-center">
                      <span className="text-[7px] sm:text-[8px] md:text-[9px] font-mono tracking-wider text-bm-accent/60">
                        {String(episode.id).padStart(2, '0')} / {String(episodes.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-bm-accent/10 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-bm-white/20 hover:border-bm-accent hover:bg-bm-accent/10 transition-all duration-300 group"
            aria-label="Previous episode"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="sm:w-5 sm:h-5 text-bm-white/60 group-hover:text-bm-accent transition-colors">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-bm-white/20 hover:border-bm-accent hover:bg-bm-accent/10 transition-all duration-300 group"
            aria-label="Next episode"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="sm:w-5 sm:h-5 text-bm-white/60 group-hover:text-bm-accent transition-colors">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12">
          {episodes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[2px] transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-bm-accent'
                  : 'w-6 bg-bm-gray/30 hover:bg-bm-gray/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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

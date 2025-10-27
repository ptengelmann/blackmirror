"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PRODUCTS } from '@/lib/products';
import { Filter } from 'lucide-react';

export default function CollectionsPage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

  const filteredProducts = selectedCategories.length > 0
    ? PRODUCTS.filter((p) => selectedCategories.includes(p.category))
    : PRODUCTS;

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen bg-bm-rich-black pt-24 pb-16">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 sm:gap-6 mb-4">
            <div className="h-[1px] w-12 sm:w-16 bg-bm-accent" />
            <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-black tracking-[0.15em] uppercase text-bm-white">
              Collections
            </h1>
          </div>
          <p className="text-[15px] sm:text-[16px] text-bm-gray/70 tracking-[0.15em] uppercase ml-0 sm:ml-[76px] md:ml-[88px]">
            Explore reflections of distorted reality
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={16} className="text-bm-accent" />
            <span className="text-[16px] font-bold tracking-[0.2em] uppercase text-bm-white">
              Filter by Category
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={clearFilters}
              className={`px-5 py-2.5 border text-[15px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                selectedCategories.length === 0
                  ? 'border-bm-accent bg-bm-accent/10 text-bm-accent'
                  : 'border-bm-gray/20 text-bm-gray/60 hover:border-bm-accent/50 hover:text-bm-white'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-5 py-2.5 border text-[15px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  selectedCategories.includes(category)
                    ? 'border-bm-accent bg-bm-accent/10 text-bm-accent'
                    : 'border-bm-gray/20 text-bm-gray/60 hover:border-bm-accent/50 hover:text-bm-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => {
            const isBlocked = product.id === 'arkangel-system';

            return (
              <div
                key={product.id}
                onClick={() => !isBlocked && router.push(`/product/${product.id}`)}
                className={`group relative overflow-hidden h-[400px] sm:h-[420px] ${
                  isBlocked ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />

                {/* Scanline overlay */}
                <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

                {/* Border */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isBlocked
                    ? 'border-[4px] border-[#FF006E] animate-pulse shadow-[0_0_60px_#FF006E,0_0_120px_#FF006E] group-hover:shadow-[0_0_100px_#FF006E,0_0_150px_#FF006E]'
                    : 'border border-bm-gray/20 group-hover:border-bm-accent/40'
                }`} />

                {/* Glitch effect - constant for blocked product */}
                {isBlocked && (
                  <>
                    <div className="absolute inset-0 opacity-60 pointer-events-none animate-pulse">
                      <div className="absolute inset-0 border-[3px] border-[#FF006E] translate-x-[-3px] translate-y-[2px] mix-blend-screen" />
                      <div className="absolute inset-0 border-[3px] border-[#00D9FF] translate-x-[3px] translate-y-[-2px] mix-blend-screen" />
                    </div>
                    {/* Stronger glitch on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none">
                      <div className="absolute inset-0 border-[4px] border-[#FF006E] translate-x-[-5px] translate-y-[3px] mix-blend-screen" />
                      <div className="absolute inset-0 border-[4px] border-[#00D9FF] translate-x-[5px] translate-y-[-3px] mix-blend-screen" />
                    </div>
                  </>
                )}

                {/* BLOCKED Overlay for Easter Egg */}
                {isBlocked && (
                  <div className="absolute inset-0 bg-bm-rich-black/70 backdrop-blur-sm z-10 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-3 relative">
                        <div className="w-3 h-3 border-2 border-[#FF006E] rotate-45 animate-pulse shadow-[0_0_20px_#FF006E]" />
                        <span className="relative text-[24px] font-black tracking-[0.3em] uppercase text-[#FF006E] drop-shadow-[0_0_20px_#FF006E]">
                          BLOCKED
                          <span className="absolute inset-0 text-[#FF006E] opacity-70 translate-x-[-2px] translate-y-[2px] animate-pulse">
                            BLOCKED
                          </span>
                          <span className="absolute inset-0 text-[#00D9FF] opacity-60 translate-x-[2px] translate-y-[-2px] animate-pulse">
                            BLOCKED
                          </span>
                        </span>
                        <div className="w-3 h-3 border-2 border-[#FF006E] rotate-45 animate-pulse shadow-[0_0_20px_#FF006E]" />
                      </div>
                      <p className="text-[16px] font-mono tracking-[0.2em] uppercase text-[#FF006E]/80 drop-shadow-[0_0_10px_#FF006E]">
                        Parental Controls Active
                      </p>
                    </div>
                  </div>
                )}

                {/* Intense scanline effect for blocked products */}
                {isBlocked && (
                  <div className="absolute inset-0 scanlines opacity-20 pointer-events-none animate-pulse" />
                )}

                {/* Glass overlay on hover */}
                {!isBlocked && (
                  <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                  {/* Top - Category & Availability */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[16px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                      isBlocked ? 'text-[#FF006E]/80 drop-shadow-[0_0_8px_#FF006E]' : 'text-bm-gray/60 group-hover:text-bm-accent'
                    }`}>
                      {product.category}
                    </span>
                    {product.stock !== undefined && product.stock > 0 && !isBlocked && (
                      <span className="text-[15px] font-mono tracking-[0.15em] uppercase px-2 py-1 border border-bm-accent/20 text-bm-accent/60">
                        Available
                      </span>
                    )}
                  </div>

                  {/* Middle - Product Placeholder */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className={`w-16 h-16 border-2 transition-all duration-300 ${
                      isBlocked
                        ? 'border-[#FF006E] rotate-45 shadow-[0_0_20px_#FF006E] animate-pulse'
                        : 'border-bm-gray/20 group-hover:border-bm-accent/40 group-hover:rotate-12'
                    }`} />
                  </div>

                  {/* Bottom - Product Info */}
                  <div className="space-y-3">
                    <h3 className={`text-[16px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                      isBlocked ? 'text-[#FF006E] drop-shadow-[0_0_10px_#FF006E]' : 'text-bm-white group-hover:text-bm-accent'
                    }`}>
                      {product.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className={`text-[15px] font-mono font-black tracking-wider transition-colors duration-300 ${
                        isBlocked ? 'text-[#FF006E] drop-shadow-[0_0_8px_#FF006E]' : 'text-bm-gray group-hover:text-bm-white'
                      }`}>
                        ${product.price}
                      </span>

                      {!isBlocked && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                          <span className="text-[16px] text-bm-white/70 tracking-[0.15em] uppercase">
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

                {/* Glow effect */}
                <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                  isBlocked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className={`absolute inset-0 ${
                    isBlocked
                      ? 'bg-gradient-to-t from-[#FF006E]/20 to-transparent animate-pulse'
                      : 'bg-gradient-to-t from-bm-accent/10 to-transparent'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
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

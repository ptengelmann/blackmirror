"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/lib/products';
import { useStore } from '@/lib/store';
import { ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';

export default function ProductClient() {
  const params = useParams();
  const router = useRouter();
  const product = PRODUCTS.find((p) => p.id === params.id);
  const { addToCart } = useStore();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-bm-rich-black flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-[24px] font-black tracking-[0.3em] uppercase text-bm-white">
            Product Not Found
          </h1>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-4 border border-bm-accent text-bm-accent text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-bm-accent hover:text-bm-rich-black transition-all duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      return;
    }

    setIsAdding(true);
    addToCart(product, quantity, selectedSize || undefined);

    setTimeout(() => {
      setIsAdding(false);
    }, 800);
  };

  const isBlocked = product.id === 'arkangel-system';

  return (
    <div className="min-h-screen bg-bm-rich-black pt-24 pb-16">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-10" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 mb-8 sm:mb-12 text-bm-gray/60 hover:text-bm-accent transition-colors duration-300"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Back</span>
        </button>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Left - Product Image Placeholder */}
          <div className="relative group">
            <div className="aspect-square bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-gray/20 flex items-center justify-center overflow-hidden">
              {/* Scanline overlay */}
              <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

              {/* Product placeholder */}
              <div className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-2 transition-all duration-500 ${
                isBlocked
                  ? 'border-bm-pink rotate-45 animate-pulse'
                  : 'border-bm-accent/40 group-hover:border-bm-accent group-hover:rotate-12'
              }`} />

              {isBlocked && (
                <div className="absolute inset-0 bg-bm-rich-black/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-3 h-3 border-2 border-bm-pink rotate-45 animate-pulse" />
                      <span className="text-[24px] sm:text-[28px] font-black tracking-[0.3em] uppercase text-bm-pink">
                        BLOCKED
                      </span>
                      <div className="w-3 h-3 border-2 border-bm-pink rotate-45 animate-pulse" />
                    </div>
                  </div>
                </div>
              )}

              {/* Border glow */}
              <div className="absolute inset-0 border border-bm-accent/20 group-hover:border-bm-accent/40 transition-all duration-500" />
            </div>

            {/* Stock Badge */}
            {product.stock !== undefined && product.stock > 0 && (
              <div className="absolute top-4 right-4 px-4 py-2 bg-bm-rich-black/90 border border-bm-accent/30">
                <span className="text-[8px] font-mono tracking-[0.15em] uppercase text-bm-accent">
                  {product.stock} In Stock
                </span>
              </div>
            )}
          </div>

          {/* Right - Product Details */}
          <div className="space-y-6 sm:space-y-8">
            {/* Category */}
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-bm-accent" />
              <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-bm-gray/70">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-black tracking-[0.15em] uppercase text-bm-white leading-none">
              {product.title}
            </h1>

            {/* Episode */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              <span className="text-[9px] font-mono tracking-[0.15em] uppercase text-bm-accent/80">
                Episode: {product.episode}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-[36px] sm:text-[42px] font-mono font-black text-bm-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-[18px] sm:text-[20px] font-mono line-through text-bm-gray/50">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-bm-accent/30 to-transparent" />

            {/* Description */}
            <div className="space-y-4">
              <p className="text-[12px] sm:text-[13px] text-bm-gray/90 leading-relaxed tracking-[0.03em]">
                {product.longDescription || product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-bm-white">
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                      <span className="text-[10px] text-bm-gray/80 tracking-[0.05em]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-bm-white">
                  Select Size
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-bm-accent bg-bm-accent/10 text-bm-accent'
                          : 'border-bm-gray/20 text-bm-gray/60 hover:border-bm-accent/50 hover:text-bm-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            {!isBlocked && (
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-bm-white">
                  Quantity
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-bm-gray/20 hover:border-bm-accent text-bm-gray/60 hover:text-bm-accent flex items-center justify-center transition-all duration-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-[18px] font-mono font-bold text-bm-white w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-bm-gray/20 hover:border-bm-accent text-bm-gray/60 hover:text-bm-accent flex items-center justify-center transition-all duration-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Add to Cart */}
            {!isBlocked && (
              <button
                onClick={handleAddToCart}
                disabled={product.sizes && !selectedSize}
                className={`group w-full px-8 py-5 text-[11px] font-bold tracking-[0.25em] uppercase transition-all duration-300 relative overflow-hidden ${
                  product.sizes && !selectedSize
                    ? 'bg-bm-gray/20 text-bm-gray/40 cursor-not-allowed'
                    : isAdding
                    ? 'bg-bm-accent text-bm-rich-black'
                    : 'bg-bm-white text-bm-rich-black hover:bg-bm-accent'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <ShoppingCart size={18} />
                  {isAdding ? 'Added to Cart!' : 'Add to Cart'}
                </span>

                {/* Scanline effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
              </button>
            )}

            {isBlocked && (
              <div className="px-8 py-5 border-2 border-bm-pink/40 bg-bm-pink/5 text-center">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-bm-pink">
                  Access Denied - Parental Controls Active
                </span>
              </div>
            )}
          </div>
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

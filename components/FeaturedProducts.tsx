"use client";

import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { PRODUCTS } from '@/lib/products';
import { Plus } from 'lucide-react';

export default function FeaturedProducts() {
  const { addToCart } = useStore();

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);

    // Visual feedback
    const button = e.currentTarget as HTMLButtonElement;
    const originalText = button.innerHTML;
    button.innerHTML = 'ADDED ✓';
    button.style.background = '#00d9ff';

    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '';
    }, 2000);
  };

  return (
    <section id="shop" className="py-32 px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[11px] tracking-[3px] text-gray-400 mb-5">
            COLLECTION_01
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-5">
            ICONIC <span className="text-bm-cyan neon-glow">REFLECTIONS</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Limited edition pieces from alternate realities
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/2 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-400 cursor-pointer relative"
            >
              {/* Product Image */}
              <div className="relative h-80 bg-gradient-to-br from-bm-dark-2 to-bm-dark-3 flex items-center justify-center overflow-hidden">
                {product.episode === 'san-junipero' && (
                  <div className="absolute inset-0 border-2 border-bm-cyan/40 shadow-[inset_0_0_15px_rgba(0,217,255,0.1)]" />
                )}

                {/* Episode Tag */}
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-black/90 border border-white/30 rounded-full font-mono text-[10px] tracking-[2px] text-gray-300 uppercase">
                  {product.episode.replace('-', ' ')}
                </div>

                {/* Rating Badge */}
                {product.rating && (
                  <div className="absolute top-5 right-5 px-3 py-1.5 bg-bm-pink/90 rounded-full font-mono text-sm font-bold">
                    ★ {product.rating}
                  </div>
                )}

                {/* Placeholder Text */}
                <div className="text-5xl font-bold text-white/10 uppercase text-center leading-tight px-8">
                  {product.title.split(' ').slice(0, 3).join('\n')}
                </div>

                {/* Quick Add Button */}
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 px-8 py-3 bg-white text-black rounded-lg font-bold text-xs tracking-[2px] hover:bg-bm-red hover:shadow-[0_0_15px_rgba(255,0,51,0.3)] transition-all flex items-center gap-2"
                >
                  QUICK ADD
                  <Plus size={16} />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <span className="font-mono text-[11px] tracking-[2px] text-gray-400 uppercase">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{product.title}</h3>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Colors */}
                {product.colors && (
                  <div className="flex gap-2">
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-transparent hover:border-white hover:shadow-[0_0_10px_currentColor] transition-all cursor-pointer"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

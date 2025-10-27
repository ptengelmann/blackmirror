"use client";

import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useStore();

  const total = cartTotal();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-bm-rich-black pt-24 pb-16">
        {/* Scanlines */}
        <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
            <ShoppingBag size={64} className="text-bm-gray/30" />
            <div className="space-y-4">
              <h1 className="text-[28px] sm:text-[36px] font-black tracking-[0.2em] uppercase text-bm-white">
                Your Cart is Empty
              </h1>
              <p className="text-[17px] text-bm-gray/70 tracking-[0.1em] uppercase max-w-md">
                No items in your reality yet. Start exploring our collection.
              </p>
            </div>
            <button
              onClick={() => router.push('/')}
              className="group px-8 py-4 border border-bm-accent text-bm-accent text-[16px] font-bold tracking-[0.2em] uppercase hover:bg-bm-accent hover:text-bm-rich-black transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Continue Shopping</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bm-rich-black pt-24 pb-16">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-3 text-bm-gray/60 hover:text-bm-accent transition-colors duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-[15px] font-bold tracking-[0.2em] uppercase">Back</span>
          </button>

          <button
            onClick={clearCart}
            className="text-[15px] font-bold tracking-[0.2em] uppercase text-bm-gray/60 hover:text-bm-red transition-colors duration-300"
          >
            Clear Cart
          </button>
        </div>

        {/* Title */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-4">
            <div className="h-[1px] w-16 bg-bm-accent" />
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-black tracking-[0.15em] uppercase text-bm-white">
              Shopping Cart
            </h1>
          </div>
          <p className="text-[16px] text-bm-gray/70 tracking-[0.15em] uppercase ml-[88px]">
            {itemCount} {itemCount === 1 ? 'Item' : 'Items'} in your reality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize || 'default'}`}
                className="group relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-gray/20 p-4 sm:p-6 hover:border-bm-accent/40 transition-all duration-300"
              >
                {/* Scanline overlay */}
                <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

                <div className="relative flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-bm-rich-black border border-bm-gray/20 flex items-center justify-center">
                    <div className="w-12 h-12 border-2 border-bm-accent/40 group-hover:border-bm-accent rotate-45" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-[17px] sm:text-[16px] font-bold tracking-[0.1em] uppercase text-bm-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] text-bm-gray/60 tracking-[0.15em] uppercase">
                        {item.category}
                      </p>
                      {item.selectedSize && (
                        <p className="text-[15px] text-bm-accent tracking-[0.15em] uppercase mt-1">
                          Size: {item.selectedSize}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1, item.selectedSize);
                            } else {
                              removeFromCart(item.id, item.selectedSize);
                            }
                          }}
                          className="w-8 h-8 border border-bm-gray/20 hover:border-bm-accent text-bm-gray/60 hover:text-bm-accent flex items-center justify-center transition-all duration-300"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-[17px] font-mono font-bold text-bm-white w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                          className="w-8 h-8 border border-bm-gray/20 hover:border-bm-accent text-bm-gray/60 hover:text-bm-accent flex items-center justify-center transition-all duration-300"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between sm:justify-end gap-6">
                        <span className="text-[20px] sm:text-[24px] font-mono font-black text-bm-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-bm-gray/60 hover:text-bm-red transition-colors duration-300"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-accent/30 p-6 sm:p-8">
                {/* Scanline overlay */}
                <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

                <div className="relative space-y-6">
                  {/* Title */}
                  <h2 className="text-[18px] font-black tracking-[0.2em] uppercase text-bm-white">
                    Order Summary
                  </h2>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-bm-accent/30 to-transparent" />

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[16px] tracking-[0.15em] uppercase text-bm-gray/70">
                        Subtotal
                      </span>
                      <span className="text-[17px] font-mono font-bold text-bm-white">
                        ${total.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[16px] tracking-[0.15em] uppercase text-bm-gray/70">
                        Shipping
                      </span>
                      <span className="text-[15px] font-mono text-bm-accent">
                        FREE
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[16px] tracking-[0.15em] uppercase text-bm-gray/70">
                        Tax
                      </span>
                      <span className="text-[17px] font-mono font-bold text-bm-white">
                        ${(total * 0.1).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-bm-accent/30 to-transparent" />

                  {/* Total */}
                  <div className="flex justify-between items-baseline">
                    <span className="text-[15px] font-bold tracking-[0.2em] uppercase text-bm-white">
                      Total
                    </span>
                    <span className="text-[28px] font-mono font-black text-bm-accent">
                      ${(total * 1.1).toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    className="group w-full px-8 py-5 bg-bm-white text-bm-rich-black text-[17px] font-bold tracking-[0.25em] uppercase hover:bg-bm-accent transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Proceed to Checkout</span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
                  </button>

                  {/* Continue Shopping */}
                  <button
                    onClick={() => router.push('/collections')}
                    className="w-full px-8 py-4 border border-bm-gray/30 text-bm-gray/70 text-[16px] font-bold tracking-[0.2em] uppercase hover:border-bm-accent hover:text-bm-accent transition-all duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-bm-accent/40" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-bm-accent/40" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-bm-accent/40" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-bm-accent/40" />
              </div>
            </div>
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

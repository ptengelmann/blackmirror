"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft, Package, Truck, RefreshCw, Clock } from 'lucide-react';

export default function ReturnsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-bm-rich-black pt-24 pb-16">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-10" />

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 mb-8 sm:mb-12 text-bm-gray/60 hover:text-bm-accent transition-colors duration-300"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Back</span>
        </button>

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-6 mb-4">
            <div className="h-[1px] w-16 bg-bm-accent" />
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-black tracking-[0.15em] uppercase text-bm-white">
              Delivery & Returns
            </h1>
          </div>
          <p className="text-[10px] text-bm-gray/70 tracking-[0.15em] uppercase ml-[88px]">
            Seamless shipping. Hassle-free returns.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          <div className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-accent/20 p-5">
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
            <div className="relative space-y-3">
              <Truck size={24} className="text-bm-accent" />
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-bm-white">Free Shipping</h3>
              <p className="text-[9px] text-bm-gray/70 tracking-[0.05em]">On all orders worldwide</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-accent/20 p-5">
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
            <div className="relative space-y-3">
              <Clock size={24} className="text-bm-accent" />
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-bm-white">Fast Delivery</h3>
              <p className="text-[9px] text-bm-gray/70 tracking-[0.05em]">3-7 business days</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-accent/20 p-5">
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
            <div className="relative space-y-3">
              <RefreshCw size={24} className="text-bm-accent" />
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-bm-white">30-Day Returns</h3>
              <p className="text-[9px] text-bm-gray/70 tracking-[0.05em]">Full refund guarantee</p>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-accent/20 p-5">
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
            <div className="relative space-y-3">
              <Package size={24} className="text-bm-accent" />
              <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-bm-white">Secure Packaging</h3>
              <p className="text-[9px] text-bm-gray/70 tracking-[0.05em]">Premium protection</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 sm:space-y-10">
          {/* Shipping Policy */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              Shipping Policy
            </h2>
            <div className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5 space-y-4">
              <p>We offer free worldwide shipping on all orders. No minimum purchase required.</p>

              <div>
                <h3 className="text-[12px] font-bold text-bm-white mb-2 tracking-[0.1em] uppercase">Processing Time</h3>
                <p>Orders are processed within 1-2 business days. You will receive a confirmation email once your order ships with tracking information.</p>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-bm-white mb-2 tracking-[0.1em] uppercase">Delivery Times</h3>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                    <span><strong className="text-bm-white">United States:</strong> 3-5 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                    <span><strong className="text-bm-white">Europe:</strong> 5-7 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                    <span><strong className="text-bm-white">Rest of World:</strong> 7-14 business days</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-bm-white mb-2 tracking-[0.1em] uppercase">Tracking</h3>
                <p>All orders include tracking. You'll receive updates via email as your package moves through the delivery network.</p>
              </div>
            </div>
          </div>

          {/* Returns Policy */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              Returns Policy
            </h2>
            <div className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5 space-y-4">
              <p>We want you to be completely satisfied with your purchase. If you're not happy, we offer a 30-day return policy.</p>

              <div>
                <h3 className="text-[12px] font-bold text-bm-white mb-2 tracking-[0.1em] uppercase">Eligibility</h3>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                    <span>Items must be unused and in original condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                    <span>Original packaging and tags must be intact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                    <span>Return must be initiated within 30 days of delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-bm-accent mt-2 flex-shrink-0" />
                    <span>Proof of purchase required</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-bm-white mb-2 tracking-[0.1em] uppercase">How to Return</h3>
                <ol className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-bm-accent font-mono">01.</span>
                    <span>Contact us at <a href="mailto:returns@blackmirror.store" className="text-bm-accent hover:underline">returns@blackmirror.store</a> with your order number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bm-accent font-mono">02.</span>
                    <span>We'll provide you with a return shipping label and instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bm-accent font-mono">03.</span>
                    <span>Pack the item securely in its original packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bm-accent font-mono">04.</span>
                    <span>Attach the return label and ship the package</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-bm-accent font-mono">05.</span>
                    <span>Once received and inspected, we'll process your refund</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-bm-white mb-2 tracking-[0.1em] uppercase">Refunds</h3>
                <p>Refunds are processed within 5-7 business days of receiving your return. The refund will be issued to your original payment method. Please allow 5-10 business days for the refund to appear in your account.</p>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-bm-white mb-2 tracking-[0.1em] uppercase">Return Shipping</h3>
                <p>Return shipping is FREE for all customers. We'll provide a prepaid return label via email.</p>
              </div>
            </div>
          </div>

          {/* Exchanges */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              Exchanges
            </h2>
            <div className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5 space-y-3">
              <p>Need a different size or color? We're happy to help!</p>
              <p>Contact us at <a href="mailto:reality@blackmirror.store" className="text-bm-accent hover:underline">reality@blackmirror.store</a> to arrange an exchange. We'll send you the new item and provide a return label for the original.</p>
            </div>
          </div>

          {/* Damaged Items */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              Damaged or Defective Items
            </h2>
            <div className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5 space-y-3">
              <p>If you receive a damaged or defective item, please contact us immediately at <a href="mailto:reality@blackmirror.store" className="text-bm-accent hover:underline">reality@blackmirror.store</a> with photos of the damage.</p>
              <p>We'll arrange for a replacement to be sent to you at no charge, or issue a full refund if preferred.</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-bm-accent/20">
            <h2 className="text-[14px] sm:text-[16px] font-bold tracking-[0.15em] uppercase text-bm-white mb-4">
              Questions?
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em]">
              Have questions about shipping or returns? Contact us at{' '}
              <a href="mailto:reality@blackmirror.store" className="text-bm-accent hover:underline">
                reality@blackmirror.store
              </a>
              {' '}or call{' '}
              <a href="tel:+33491029222" className="text-bm-accent hover:underline">
                +33 (0)4 91 02 92 22
              </a>
            </p>
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

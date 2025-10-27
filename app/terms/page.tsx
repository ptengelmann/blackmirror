"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
          </div>
          <p className="text-[10px] text-bm-gray/70 tracking-[0.15em] uppercase ml-[88px]">
            Last Updated: October 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 sm:space-y-10">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              1. Acceptance of Terms
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5">
              By accessing and using Black Mirror Store, you accept and agree to be bound by these Terms and Conditions. If you do not agree, you must not use this website. Your continued use constitutes acceptance of any modifications to these terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              2. Product Information
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5">
              We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content on this site are accurate, complete, reliable, current, or error-free. Colors may vary due to screen settings. Pricing is subject to change without notice.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              3. Orders and Payment
            </h2>
            <div className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5 space-y-3">
              <p>All orders are subject to acceptance and availability. We reserve the right to refuse any order for any reason.</p>
              <p>Payment must be received in full before order processing. We accept major credit cards and secure payment methods. All transactions are encrypted and secure.</p>
              <p>Prices are displayed in your local currency. You are responsible for any applicable taxes and duties.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              4. User Accounts
            </h2>
            <div className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5 space-y-3">
              <p>You are responsible for maintaining the confidentiality of your account credentials.</p>
              <p>You must provide accurate and complete information when creating an account.</p>
              <p>You are responsible for all activities that occur under your account.</p>
              <p>We reserve the right to terminate accounts that violate these terms.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              5. Intellectual Property
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5">
              All content on this website, including text, graphics, logos, images, and software, is the property of Black Mirror Store and protected by intellectual property laws. Unauthorized use is prohibited.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              6. Limitation of Liability
            </h2>
            <div className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5 space-y-3">
              <p>Black Mirror Store shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or products.</p>
              <p>We do not guarantee uninterrupted or error-free operation of this website.</p>
              <p>Maximum liability is limited to the amount you paid for the product in question.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              7. Privacy
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5">
              Your use of the website is also governed by our Privacy Policy. We collect and process personal data in accordance with applicable data protection laws.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              8. Modifications
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use after changes constitutes acceptance.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-[18px] sm:text-[20px] font-bold tracking-[0.15em] uppercase text-bm-white flex items-center gap-3">
              <div className="w-2 h-2 bg-bm-accent" />
              9. Governing Law
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] pl-5">
              These terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate jurisdiction.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-bm-accent/20">
            <h2 className="text-[14px] sm:text-[16px] font-bold tracking-[0.15em] uppercase text-bm-white mb-4">
              Questions?
            </h2>
            <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em]">
              If you have any questions about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:reality@blackmirror.store" className="text-bm-accent hover:underline">
                reality@blackmirror.store
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

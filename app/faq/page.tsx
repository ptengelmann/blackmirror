"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are securely encrypted and processed through our secure payment gateway."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary by location. US orders typically arrive in 3-5 business days, European orders in 5-7 business days, and international orders in 7-14 business days. All orders include tracking and you'll receive email updates throughout delivery."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We offer free worldwide shipping to over 200 countries. International orders may be subject to customs duties and import taxes, which are the responsibility of the recipient."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items. Products must be unused, in original condition with tags attached. Return shipping is free - we'll provide a prepaid label. Refunds are processed within 5-7 business days of receiving your return."
    },
    {
      question: "Can I exchange an item?",
      answer: "Absolutely! Contact us at reality@blackmirror.store to arrange an exchange. We'll send you the new item and provide a return label for the original. Exchanges are free and processed quickly."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our shipping carrier's website. You'll also receive automatic updates as your order moves through the delivery network."
    },
    {
      question: "What if my item arrives damaged?",
      answer: "We're sorry if this happens! Please contact us immediately at reality@blackmirror.store with photos of the damage. We'll arrange for a replacement to be sent at no charge, or issue a full refund if you prefer."
    },
    {
      question: "Do you restock sold-out items?",
      answer: "Yes, most sold-out items are restocked regularly. Sign up for our newsletter or check back on the product page for updates. You can also contact us to inquire about specific restock dates."
    },
    {
      question: "Are the products officially licensed?",
      answer: "Yes, all Black Mirror Store products are officially licensed merchandise. We work directly with the series creators to ensure authentic, high-quality items."
    },
    {
      question: "Can I cancel or modify my order?",
      answer: "Orders can be cancelled or modified within 24 hours of placement. After that, orders are processed and shipped quickly. Please contact us immediately at reality@blackmirror.store if you need to make changes."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Currently, we don't offer gift wrapping, but all items come in premium packaging that makes them gift-ready. We can include a gift message upon request - just add a note at checkout."
    },
    {
      question: "How do I care for my merchandise?",
      answer: "Care instructions are included with each product. Generally, apparel should be machine washed cold and tumble dried low or air dried. Avoid bleach and high heat to preserve prints and fabric quality."
    },
    {
      question: "Do you have a physical store?",
      answer: "Black Mirror Store is currently online-only, allowing us to offer better prices and worldwide shipping. Our headquarters is located at 16 Chemin De La Madrague-Ville, 13015 Marseille."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach us via email at reality@blackmirror.store or call +33 (0)4 91 02 92 22. We typically respond within 24 hours on business days."
    },
    {
      question: "Do you offer student or military discounts?",
      answer: "We occasionally run special promotions. Sign up for our newsletter to be the first to know about discounts, sales, and exclusive offers. Easter egg hunters may find hidden discount codes throughout the site..."
    }
  ];

  return (
    <div className="min-h-screen bg-bm-rich-black pt-24 pb-16">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none z-10" />

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-12">
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
              FAQs
            </h1>
          </div>
          <p className="text-[10px] text-bm-gray/70 tracking-[0.15em] uppercase ml-[88px]">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-gray/20 hover:border-bm-accent/40 transition-all duration-300"
            >
              {/* Scanline overlay */}
              <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="relative w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-bm-white group-hover:text-bm-accent transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-bm-accent transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="relative px-6 pb-5">
                  <div className="h-[1px] bg-gradient-to-r from-bm-accent/30 to-transparent mb-4" />
                  <p className="text-[10px] sm:text-[11px] text-bm-gray/80 leading-relaxed tracking-[0.02em]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 pt-12 border-t border-bm-accent/20">
          <div className="relative bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark border border-bm-accent/30 p-8 sm:p-10">
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

            <div className="relative space-y-6 text-center">
              <h2 className="text-[20px] sm:text-[24px] font-black tracking-[0.15em] uppercase text-bm-white">
                Still Have Questions?
              </h2>
              <p className="text-[11px] sm:text-[12px] text-bm-gray/80 leading-relaxed tracking-[0.02em] max-w-[500px] mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help. Reach out and we&apos;ll get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="mailto:reality@blackmirror.store"
                  className="group px-8 py-4 border border-bm-accent text-bm-accent text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-bm-accent hover:text-bm-rich-black transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Email Support</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
                </a>

                <a
                  href="tel:+33491029222"
                  className="group px-8 py-4 border border-bm-gray/30 text-bm-gray/70 text-[10px] font-bold tracking-[0.2em] uppercase hover:border-bm-accent hover:text-bm-accent transition-all duration-300"
                >
                  +33 (0)4 91 02 92 22
                </a>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-bm-accent/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-bm-accent/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-bm-accent/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-bm-accent/40" />
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

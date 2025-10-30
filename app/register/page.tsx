"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export default function RegisterPage() {
  const router = useRouter();
  const { setEasterEggMessage, addFoundCode } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name required';
    if (!formData.email) newErrors.email = 'Email required';
    if (!formData.password) newErrors.password = 'Password required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeToTerms) {
      newErrors.terms = 'You must accept the terms';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate registration
    setTimeout(() => {
      setEasterEggMessage('Account created. Welcome to the system. Code: REGISTERED');
      addFoundCode('REGISTERED');
      router.push('/account');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-bm-rich-black pt-20 pb-16 px-4">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none" />

      {/* Grain */}
      <div className="fixed inset-0 grain opacity-30 pointer-events-none" />

      <div className="max-w-md mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[28px] font-black tracking-[0.25em] uppercase text-bm-white mb-3">
            Create Account
          </h1>
          <p className="text-[16px] text-bm-gray/60 tracking-[0.15em] uppercase">
            Join the system
          </p>
        </div>

        {/* Form Container */}
        <div className="relative glass-effect border border-bm-accent/20 p-8">
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-bm-accent/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-bm-accent/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-bm-accent/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-bm-accent/40" />

          <form onSubmit={handleSubmit} className="relative space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/70 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-bm-dark/50 border border-bm-gray/20 px-4 py-3 text-bm-white font-mono text-[16px] tracking-wider focus:border-bm-accent focus:outline-none transition-colors duration-300"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-bm-pink text-[16px] font-mono mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/70 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-bm-dark/50 border border-bm-gray/20 px-4 py-3 text-bm-white font-mono text-[16px] tracking-wider focus:border-bm-accent focus:outline-none transition-colors duration-300"
                placeholder="user@system.net"
              />
              {errors.email && (
                <p className="text-bm-pink text-[16px] font-mono mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/70 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full bg-bm-dark/50 border border-bm-gray/20 px-4 py-3 text-bm-white font-mono text-[16px] tracking-wider focus:border-bm-accent focus:outline-none transition-colors duration-300"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-bm-pink text-[16px] font-mono mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/70 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full bg-bm-dark/50 border border-bm-gray/20 px-4 py-3 text-bm-white font-mono text-[16px] tracking-wider focus:border-bm-accent focus:outline-none transition-colors duration-300"
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-bm-pink text-[16px] font-mono mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="mt-1 w-4 h-4 bg-bm-dark border border-bm-gray/40 checked:bg-bm-accent"
              />
              <label htmlFor="terms" className="text-[16px] text-bm-gray/60 tracking-[0.05em]">
                I agree to the{' '}
                <a href="/terms" className="text-bm-accent hover:underline">
                  Terms & Conditions
                </a>{' '}
                and consent to data collection and surveillance
              </label>
            </div>
            {errors.terms && (
              <p className="text-bm-pink text-[16px] font-mono">{errors.terms}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative group overflow-hidden border border-bm-accent px-6 py-4 text-[16px] font-bold tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 text-bm-accent group-hover:text-bm-rich-black transition-colors duration-300">
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </span>
              <div className="absolute inset-0 bg-bm-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Scanlines on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-[16px] text-bm-gray/50 tracking-[0.1em]">
              Already have an account?{' '}
              <button
                onClick={() => router.push('/login')}
                className="text-bm-accent hover:underline font-mono"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 p-4 border border-bm-pink/20 bg-bm-pink/5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-bm-pink animate-pulse" />
            <p className="text-[16px] font-mono text-bm-gray/60 tracking-[0.1em] uppercase">
              Warning: All activity is monitored
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

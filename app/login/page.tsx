"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';

export default function LoginPage() {
  const router = useRouter();
  const { setEasterEggMessage, addFoundCode } = useStore();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('All fields required');
      return;
    }

    setIsSubmitting(true);

    // Simulate login
    setTimeout(() => {
      setEasterEggMessage('Authentication successful. Access granted. Code: AUTHENTICATED');
      addFoundCode('AUTHENTICATED');
      router.push('/account');
    }, 1500);
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
            Access System
          </h1>
          <p className="text-[16px] text-bm-gray/60 tracking-[0.15em] uppercase">
            Authenticate your identity
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

          {/* Security Status */}
          <div className="mb-6 flex items-center gap-3 p-3 border border-bm-accent/20 bg-bm-accent/5">
            <div className="w-2 h-2 bg-bm-accent rounded-full animate-pulse" />
            <span className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-accent/80">
              Secure Connection Active
            </span>
          </div>

          <form onSubmit={handleSubmit} className="relative space-y-6">
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="remember"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="w-4 h-4 bg-bm-dark border border-bm-gray/40 checked:bg-bm-accent"
                />
                <label htmlFor="remember" className="text-[16px] text-bm-gray/60 tracking-[0.05em]">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-[16px] text-bm-accent hover:underline font-mono tracking-[0.05em]"
              >
                Forgot?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 border border-bm-pink/30 bg-bm-pink/10">
                <p className="text-[16px] font-mono text-bm-pink tracking-[0.1em] uppercase">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative group overflow-hidden border border-bm-accent px-6 py-4 text-[16px] font-bold tracking-[0.2em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 text-bm-accent group-hover:text-bm-rich-black transition-colors duration-300">
                {isSubmitting ? 'Authenticating...' : 'Sign In'}
              </span>
              <div className="absolute inset-0 bg-bm-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Scanlines on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 scanlines pointer-events-none transition-opacity duration-300" />
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-[16px] text-bm-gray/50 tracking-[0.1em]">
              No account yet?{' '}
              <button
                onClick={() => router.push('/register')}
                className="text-bm-accent hover:underline font-mono"
              >
                Create One
              </button>
            </p>
          </div>
        </div>

        {/* Biometric Scan Animation */}
        <div className="mt-8 relative h-24 overflow-hidden border border-bm-accent/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-bm-accent/50 to-transparent animate-scan" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-[16px] font-mono text-bm-gray/40 tracking-[0.15em] uppercase">
              Biometric verification standby
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

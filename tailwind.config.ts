import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Real Black Mirror Color Palette
        'bm-rich-black': '#00020C',
        'bm-dark': '#001312',
        'bm-white': '#F3F1F4',
        'bm-gray': '#BBC9D2',
        'bm-blue': '#6B9EA8',
        'bm-accent': '#A4CAEC',
        'bm-pink': '#FF006E', // Bright neon pink for blocked/special items
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      animation: {
        'subtle-glitch': 'subtle-glitch 4s infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'scan': 'scan 2s ease-in-out infinite',
        'scan-vertical': 'scan-vertical 2s ease-in-out infinite',
      },
      keyframes: {
        'subtle-glitch': {
          '0%, 96%, 100%': { transform: 'translate(0)', opacity: '1' },
          '97%': { transform: 'translate(-1px, 1px)', opacity: '0.95' },
          '99%': { transform: 'translate(1px, -1px)', opacity: '0.95' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scan': {
          '0%': { top: '0%', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        'scan-vertical': {
          '0%': { left: '0%', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

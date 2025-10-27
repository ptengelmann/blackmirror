"use client";

import { useState } from 'react';
import { useStore } from '@/lib/store';
import { SECRET_CODES } from '@/lib/products';
import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const HINTS = [
  'Look where reality cracks...',
  'The year San Junipero took place...',
  'What\'s the captain\'s ship called?',
  'How many merits for your dreams?',
  'The perfect rating...',
  'Ashley\'s catchphrase...',
  'The winter holiday episode...',
];

export default function GlitchHunt() {
  const [code, setCode] = useState('');
  const [hint, setHint] = useState(HINTS[0]);
  const { foundCodes, addFoundCode, setEasterEggMessage } = useStore();

  const handleUnlock = () => {
    const upperCode = code.toUpperCase();

    if (SECRET_CODES[upperCode as keyof typeof SECRET_CODES]) {
      if (!foundCodes.has(upperCode)) {
        addFoundCode(upperCode);
        setEasterEggMessage(SECRET_CODES[upperCode as keyof typeof SECRET_CODES].message);
        setCode('');

        // Visual success effect
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
          document.body.style.filter = '';
        }, 500);
      } else {
        setEasterEggMessage('You\'ve already unlocked this glitch!');
      }
    } else {
      // Wrong code - shake animation
      const input = document.getElementById('secret-code-input');
      if (input) {
        input.classList.add('animate-shake');
        setTimeout(() => input.classList.remove('animate-shake'), 300);
      }

      // Update hint
      setHint(HINTS[Math.floor(Math.random() * HINTS.length)]);
    }
  };

  return (
    <section
      id="reality"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 relative"
      style={{
        background:
          'linear-gradient(135deg, rgba(139, 92, 246, 0.02) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255, 0, 51, 0.02) 0%, transparent 70%)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-glitch"
        >
          CAN YOU FIND THE GLITCH?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 leading-6 sm:leading-7 md:leading-8 px-4"
        >
          Hidden across the site are <span className="text-bm-cyan neon-glow">special codes</span>.
          <br />
          Some you&apos;ll see. Some you&apos;ll feel. Unlock them for exclusive rewards.
        </motion.p>

        {/* Code Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-5 px-4"
        >
          <input
            id="secret-code-input"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
            placeholder="ENTER_SECRET_CODE"
            maxLength={20}
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/3 border-2 border-white/10 rounded-xl text-white font-mono text-xs sm:text-sm tracking-[1.5px] sm:tracking-[2px] uppercase outline-none focus:border-bm-red focus:shadow-[0_0_15px_rgba(255,0,51,0.3)] focus:bg-bm-red/3 transition-all"
          />
          <button
            onClick={handleUnlock}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-bm-red text-white rounded-xl font-bold text-xs sm:text-sm tracking-[1.5px] sm:tracking-[2px] flex items-center justify-center gap-2 sm:gap-2.5 hover:shadow-[0_0_20px_rgba(255,0,51,0.5)] hover:-translate-y-0.5 transition-all"
          >
            <span>UNLOCK</span>
            <Lock size={16} className="sm:w-5 sm:h-5" />
          </button>
        </motion.div>

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="font-mono text-xs sm:text-sm text-gray-400 mb-8 sm:mb-10 px-4"
        >
          HINT: <span className="text-white">{hint}</span>
        </motion.div>

        {/* Codes Found Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-bm-purple/5 border border-bm-purple/30 rounded-full mx-4"
        >
          <span className="font-mono text-xl sm:text-2xl font-bold text-bm-purple neon-glow">
            {foundCodes.size}/7
          </span>
          <span className="text-[10px] sm:text-xs text-gray-400 tracking-[1.5px] sm:tracking-[2px]">GLITCHES FOUND</span>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.3s ease;
        }
      `}</style>
    </section>
  );
}

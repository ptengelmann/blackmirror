"use client";

import { motion } from 'framer-motion';
import { useStore } from '@/lib/store';
import { ArrowRight } from 'lucide-react';

const EPISODES = [
  {
    id: 'be-right-back',
    title: 'The Reality You Don\'t Own',
    description: 'A woman discovers her life is a streaming show — and she\'s not the one writing it.',
    label: 'BE RIGHT BACK',
    large: true,
  },
  {
    id: 'fifteen-million',
    title: 'Disconnected Humanity',
    description: 'Trapped in cycles. Breaking free costs everything.',
    label: '15M MERITS',
  },
  {
    id: 'joan',
    title: 'Artificial Dreams',
    description: 'Your data. Their story. Your nightmare.',
    label: 'JOAN IS AWFUL',
  },
  {
    id: 'rebellion',
    title: 'Code of Rebellion',
    description: 'When AI fights back. When humanity adapts.',
    label: 'REBELLION',
  },
];

export default function EpisodesSection() {
  const { setEasterEggMessage } = useStore();

  const handleEpisodeClick = (episode: any) => {
    setEasterEggMessage(`📺 Loading episode: ${episode.label}... Reality distortion detected.`);
  };

  return (
    <section id="episodes" className="py-32 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[11px] tracking-[3px] text-gray-400 mb-5">
            MEMORY_FILES
          </span>
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="text-bm-cyan neon-glow">REFLECTED</span> REALITIES
          </h2>
        </div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EPISODES.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleEpisodeClick(episode)}
              className={`group bg-white/2 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_50px_rgba(255,0,51,0.15)] transition-all cursor-pointer ${
                episode.large ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
              }`}
            >
              {/* Visual */}
              <div className={`bg-gradient-to-br from-bm-dark-2 to-bm-dark-3 relative overflow-hidden ${
                episode.large ? 'h-full' : 'h-72'
              }`}>
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white/8 uppercase text-center px-10 leading-tight">
                  {episode.label}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{episode.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-5">{episode.description}</p>
                <button className="flex items-center gap-2 text-white border-2 border-white/30 px-6 py-3 rounded-lg font-bold text-xs tracking-[2px] hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-white transition-all">
                  EXPLORE
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

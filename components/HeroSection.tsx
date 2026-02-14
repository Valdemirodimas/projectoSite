'use client';

import { motion } from 'framer-motion';
import { CONFIG } from '@/lib/config';

interface HeroSectionProps {
  onScrollToCounter: () => void;
}

export default function HeroSection({ onScrollToCounter }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-vibrant rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-elegant rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight"
        >
          <span className="text-gradient">
            {CONFIG.messages.heroTitle}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-white-soft/80 mb-12 font-light leading-relaxed px-4"
        >
          {CONFIG.messages.heroSubtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onScrollToCounter}
          className="btn-premium relative px-12 py-5 bg-gradient-to-r from-pink-vibrant to-gold-elegant rounded-full text-white font-semibold text-lg shadow-2xl hover:shadow-pink-vibrant/50 transition-all duration-300"
        >
          <span className="relative z-10">Descobrir nossa história</span>
        </motion.button>

        {/* Floating hearts decoration */}
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">❤️</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute top-1/2 right-20 text-4xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>💖</div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-vibrant rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-pink-vibrant rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

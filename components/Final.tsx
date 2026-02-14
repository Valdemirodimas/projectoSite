'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '@/lib/config';

export default function Final() {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleFinalClick = () => {
    // Create heart explosion
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: 50 + (Math.random() - 0.5) * 20,
      y: 50 + (Math.random() - 0.5) * 20,
    }));
    setParticles(newParticles);

    // Show final message
    setTimeout(() => {
      setShowFinalMessage(true);
    }, 1000);

    // Clean up particles
    setTimeout(() => {
      setParticles([]);
    }, 4000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-vibrant/20 rounded-full filter blur-[150px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white-soft leading-relaxed mb-8">
            {CONFIG.messages.finalMessage}
          </p>
        </motion.div>

        {/* Final button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFinalClick}
            disabled={showFinalMessage}
            className="btn-premium px-12 py-6 bg-gradient-to-r from-pink-vibrant to-gold-elegant rounded-full text-white font-semibold text-xl shadow-2xl hover:shadow-pink-vibrant/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">{CONFIG.messages.finalButton}</span>
          </motion.button>
        </motion.div>

        {/* Decorative hearts */}
        <div className="mt-16 flex justify-center space-x-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            className="text-5xl"
          >
            ❤️
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="text-5xl"
          >
            💕
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="text-5xl"
          >
            💖
          </motion.div>
        </div>
      </div>

      {/* Heart explosion particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              top: '50%',
              left: '50%',
              opacity: 1,
              scale: 0,
            }}
            animate={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              opacity: 0,
              scale: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="fixed text-4xl pointer-events-none z-50"
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Final overlay message */}
      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-deep/95"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-6xl md:text-8xl lg:text-9xl font-serif text-gradient mb-8"
              >
                {CONFIG.messages.finalText}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="text-2xl md:text-3xl text-white-soft/70"
              >
                Para sempre ❤️
              </motion.div>

              {/* Infinite floating hearts */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ bottom: '-10%', left: `${10 + i * 9}%` }}
                  animate={{
                    bottom: '110%',
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 8,
                    delay: i * 0.8,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="fixed text-4xl pointer-events-none"
                >
                  ❤️
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

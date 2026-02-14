'use client';

import { motion } from 'framer-motion';
import { CONFIG } from '@/lib/config';

export default function Declaration() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Parallax background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-20 text-9xl opacity-50"
        >
          💕
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-20 text-9xl opacity-50"
        >
          ❤️
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main declaration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white-soft leading-relaxed mb-8">
            {CONFIG.messages.declaration1}
          </p>
        </motion.div>

        {/* Secondary declaration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gradient leading-relaxed">
            {CONFIG.messages.declaration2}
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-transparent via-pink-vibrant to-transparent rounded-full mx-auto max-w-md"
        />

        {/* Floating quote decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 relative"
        >
          <div className="text-8xl md:text-9xl text-pink-vibrant/20 font-serif absolute -top-8 left-1/2 transform -translate-x-1/2">
            &ldquo;
          </div>
          <p className="text-xl md:text-2xl text-white-soft/60 italic relative z-10 pt-12">
            Cada momento contigo é uma página do nosso livro de amor
          </p>
        </motion.div>
      </div>

      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-vibrant/10 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-elegant/10 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </section>
  );
}

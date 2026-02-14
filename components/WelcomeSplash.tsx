'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface WelcomeSplashProps {
  onEnter: () => void;
}

export default function WelcomeSplash({ onEnter }: WelcomeSplashProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-dark-deep"
    >
      <div className="absolute inset-0">
        <Image
          src="/welcome-photo.jpg"
          alt="Bem-vinda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/60 via-dark-deep/70 to-dark-deep/90" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 text-5xl md:text-6xl">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              ❤️
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              💖
            </motion.span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Bem-vinda ao
          <br />
          <span className="text-gradient">
            Nosso Mundo
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-2xl leading-relaxed"
        >
          Uma experiência digital criada com amor
          <br />
          para celebrar nossa história juntos
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="btn-premium relative px-16 py-6 bg-gradient-to-r from-pink-vibrant to-gold-elegant rounded-full text-white font-bold text-xl md:text-2xl shadow-2xl hover:shadow-pink-vibrant/50 transition-all duration-300 group"
        >
          <span className="relative z-10 flex items-center gap-3">
            Ver o Site
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          
          <motion.div
            className="absolute inset-0 rounded-full opacity-75 blur-xl"
            animate={{
              background: [
                'linear-gradient(45deg, #ff2e63, #f5c16c)',
                'linear-gradient(45deg, #f5c16c, #ff2e63)',
                'linear-gradient(45deg, #ff2e63, #f5c16c)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 text-white/60 text-sm md:text-base"
        >
          ✨ Prepare-se para uma viagem emocionante ✨
        </motion.p>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ bottom: '-10%', left: `${10 + i * 12}%`, opacity: 0 }}
            animate={{
              bottom: '110%',
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 1.2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="fixed text-3xl md:text-4xl pointer-events-none"
          >
            {i % 3 === 0 ? '❤️' : i % 3 === 1 ? '💕' : '💖'}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/40 text-sm flex flex-col items-center gap-2"
        >
          <span>Clique no botão</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

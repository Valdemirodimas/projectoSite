'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CONFIG } from '@/lib/config';

export default function Surprise() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showGiftScreen, setShowGiftScreen] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenSurprise = () => {
    setIsModalOpen(false);
    
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
    }));
    setHearts(newHearts);

    setTimeout(() => {
      setShowGiftScreen(true);
    }, 800);

    setTimeout(() => {
      setHearts([]);
    }, 3000);
  };

  const handleDownload = () => {
    window.open(CONFIG.surpriseLink, '_blank');
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-vibrant/10 rounded-full filter blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold-elegant/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-8"
          >
            Algo Especial Para Você
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white-soft/80 mb-12 leading-relaxed"
          >
            Preparei uma surpresa muito especial para você, algo que representa o nosso amor e a nossa história juntos. Clique no botão abaixo para descobrir o que é! 💖
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenModal}
            className="btn-premium relative px-12 py-6 bg-gradient-to-r from-pink-vibrant to-gold-elegant rounded-full text-white font-semibold text-xl shadow-2xl hover:shadow-pink-vibrant/50 transition-all duration-300 animate-glow"
          >
            <span className="relative z-10">{CONFIG.messages.surpriseButton}</span>
          </motion.button>

          <div className="absolute -top-10 left-10 text-4xl animate-float">✨</div>
          <div className="absolute -top-10 right-10 text-4xl animate-float" style={{ animationDelay: '1s' }}>✨</div>
          <div className="absolute -bottom-10 left-1/3 text-4xl animate-float" style={{ animationDelay: '2s' }}>✨</div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 md:p-12 max-w-2xl w-full text-center relative overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white-soft/70 hover:text-white-soft text-3xl"
              >
                ×
              </button>

              <div className="relative z-10">
                <div className="text-6xl mb-6 animate-float">🎁</div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-gradient mb-6">
                  Uma Surpresa Especial
                </h3>
                
                <p className="text-lg md:text-xl text-white-soft/80 mb-8 leading-relaxed">
                  {CONFIG.messages.surpriseModalText}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenSurprise}
                  className="btn-premium px-10 py-4 bg-gradient-to-r from-pink-vibrant to-gold-elegant rounded-full text-white font-semibold text-lg shadow-2xl"
                >
                  {CONFIG.messages.surpriseModalButton}
                </motion.button>
              </div>

              <div className="absolute top-10 left-10 w-4 h-4 bg-pink-vibrant rounded-full animate-pulse" />
              <div className="absolute bottom-10 right-10 w-4 h-4 bg-gold-elegant rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 right-20 w-3 h-3 bg-pink-vibrant rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ bottom: '10%', left: `${heart.x}%`, opacity: 0, scale: 0 }}
            animate={{ bottom: '100%', opacity: [0, 1, 1, 0], scale: [0, 1, 1, 0.5] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            className="fixed text-4xl pointer-events-none z-50"
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {showGiftScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-deep/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-2xl w-full text-center"
            >
              <button
                onClick={() => setShowGiftScreen(false)}
                className="absolute -top-4 -right-4 z-10 bg-pink-vibrant hover:bg-pink-vibrant/80 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Fechar"
              >
                ×
              </button>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -left-10 text-6xl opacity-50"
              >
                ✨
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 text-6xl opacity-50"
              >
                ✨
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-serif text-gradient mb-8"
              >
                Sua Surpresa Especial 🎁
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative w-full aspect-square max-w-md mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl group"
              >
                <Image
                  src="/gift-photo.jpg"
                  alt="Presente especial"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 rounded-3xl ring-4 ring-pink-vibrant/50 ring-offset-4 ring-offset-dark-deep" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-pink-vibrant/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-white-soft/80 text-lg md:text-xl mb-8 px-4"
              >
                Preparei algo muito especial para você! 💕
                <br />
                Clique no botão abaixo para baixar
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="btn-premium relative px-12 py-5 bg-gradient-to-r from-pink-vibrant to-gold-elegant rounded-full text-white font-bold text-xl shadow-2xl hover:shadow-pink-vibrant/50 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-3">
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                    />
                  </svg>
                  Baixar Presente
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

              <div className="mt-8 flex justify-center gap-4 text-3xl">
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  💖
                </motion.span>
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  ❤️
                </motion.span>
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                >
                  💕
                </motion.span>
              </div>

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{
                    y: [0, -100],
                    opacity: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 50],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  className="absolute bottom-0 text-2xl pointer-events-none"
                  style={{ left: `${20 + i * 12}%` }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

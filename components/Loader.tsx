'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '@/lib/config';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [currentText, setCurrentText] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const texts = [
    CONFIG.messages.loader1,
    CONFIG.messages.loader2,
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentText(1);
    }, 3000);

    const timer2 = setTimeout(() => {
      setIsComplete(true);
    }, 6000);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-deep"
        >
          <div className="text-center px-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl lg:text-6xl font-serif text-white-soft mb-4"
              >
                {texts[currentText]}
              </motion.h1>
            </AnimatePresence>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-pink-vibrant to-gold-elegant rounded-full mx-auto max-w-md mt-8"
            />
          </div>

          {/* Floating hearts */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [0, 1, 0],
                y: -100,
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute bottom-0 text-4xl"
              style={{ left: `${20 + i * 15}%` }}
            >
              ❤️
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { calculateTimeSince, formatNumber, getRelationshipStartDate } from '@/lib/utils';

export default function Counter() {
  const [time, setTime] = useState(calculateTimeSince(getRelationshipStartDate()));
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeSince(getRelationshipStartDate()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'Anos', value: time.years, icon: '🎂' },
    { label: 'Meses', value: time.months, icon: '📅' },
    { label: 'Dias', value: time.days, icon: '☀️' },
    { label: 'Horas', value: time.hours, icon: '⏰' },
    { label: 'Minutos', value: time.minutes, icon: '⏳' },
    { label: 'Segundos', value: time.seconds, icon: '⚡' },
  ];

  return (
    <section ref={counterRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Section title */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-4"
        >
          Nosso Amor em Números
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white-soft/70 text-lg md:text-xl"
        >
          Cada segundo ao seu lado é um presente
        </motion.p>
      </div>

      {/* Counter grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-32">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="glass-card p-6 md:p-8 text-center relative overflow-hidden group"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-vibrant/20 to-gold-elegant/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="text-4xl md:text-5xl mb-4 animate-float">
                {unit.icon}
              </div>

              {/* Number */}
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient mb-2"
              >
                {formatNumber(unit.value)}
              </motion.div>

              {/* Label */}
              <div className="text-white-soft/70 text-sm md:text-base font-medium uppercase tracking-wider">
                {unit.label}
              </div>
            </div>

            {/* Sparkle effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              className="absolute top-2 right-2 w-2 h-2 bg-gold-elegant rounded-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-pink-vibrant/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gold-elegant/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </section>
  );
}

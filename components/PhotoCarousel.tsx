'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// 📸 CONFIGURAÇÃO DAS FOTOS DO CARROSSEL
// Adicione suas fotos na pasta public/ e configure aqui
const carouselPhotos = [
  {
    src: '/carousel-1.jpg', // ← Coloque suas fotos em public/
    alt: 'Primeiro momento especial',
    title: 'AMOR DA MINHA VIDA',
    description: 'Namorada incrível, minha melhor amiga e minha parceira de aventuras.',
  },
  {
    src: '/carousel-2.jpg',
    alt: 'Viagem inesquecível',
    title: 'Aventuras Juntos',
    description: 'Cada viagem é uma nova história',
  },
  {
    src: '/carousel-3.jpg',
    alt: 'Momento romântico',
    title: 'Momentos de Amor',
    description: 'Celebrando nosso amor todos os dias',
  },
  {
    src: '/carousel-4.jpg',
    alt: 'Sorriso e felicidade',
    title: 'Felicidade Pura',
    description: 'Quando estamos juntos, tudo faz sentido',
  },
  {
    src: '/carousel-5.jpg',
    alt: 'Nosso futuro',
    title: 'Para Sempre',
    description: 'Construindo nosso futuro lado a lado',
  },
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselPhotos.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev === 0 ? carouselPhotos.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-vibrant rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-elegant rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-4">
            Nossos Momentos Inesquecíveis
          </h2>
          <p className="text-white-soft/70 text-lg md:text-xl">
            Cada foto conta uma parte da nossa história de amor
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                }}
                className="absolute inset-0"
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={carouselPhotos[currentIndex].src}
                    alt={carouselPhotos[currentIndex].alt}
                    fill
                    className="object-cover"
                    priority={currentIndex === 0}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent" />
                  
                  {/* Photo Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3">
                        {carouselPhotos[currentIndex].title}
                      </h3>
                      <p className="text-white/80 text-lg md:text-xl max-w-2xl">
                        {carouselPhotos[currentIndex].description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Foto anterior"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Próxima foto"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all duration-300 text-sm"
            aria-label={isAutoPlaying ? 'Pausar' : 'Play'}
          >
            {isAutoPlaying ? '⏸️ Pausar' : '▶️ Play'}
          </button>
        </div>

        {/* Thumbnails / Indicators */}
        <div className="flex justify-center mt-8 gap-3 flex-wrap px-4">
          {carouselPhotos.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 rounded-xl overflow-hidden ${
                index === currentIndex
                  ? 'ring-4 ring-pink-vibrant scale-110'
                  : 'ring-2 ring-white/20 hover:ring-white/40 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Ver foto ${index + 1}`}
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={photo.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-white-soft/70 text-lg">
            <span className="text-pink-vibrant font-semibold">
              {currentIndex + 1}
            </span>
            {' / '}
            {carouselPhotos.length}
          </p>
        </div>
      </div>

      {/* Floating hearts decoration */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float hidden md:block">
        💕
      </div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-float hidden md:block" style={{ animationDelay: '1s' }}>
        ❤️
      </div>
    </section>
  );
}

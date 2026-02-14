'use client';

import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeSplash from '@/components/WelcomeSplash';
import Loader from '@/components/Loader';
import Particles from '@/components/Particles';
import HeroSection from '@/components/HeroSection';
import Counter from '@/components/Counter';
import Declaration from '@/components/Declaration';
import Heart3D from '@/components/Heart3D';
import PhotoCarousel from '@/components/PhotoCarousel';
import Surprise from '@/components/Surprise';
import Final from '@/components/Final';
import SmoothScroll from '@/components/SmoothScroll';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const handleWelcomeEnter = () => {
    setShowWelcome(false);
    // Pequeno delay antes de mostrar o loader para transição suave
    setTimeout(() => {
      // O loader será mostrado automaticamente
    }, 500);
  };

  const handleLoaderComplete = () => {
    setShowContent(true);
  };

  const scrollToCounter = () => {
    const counterSection = document.querySelector('#counter-section');
    if (counterSection) {
      counterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <main className="relative min-h-screen animated-background overflow-x-hidden">
        {/* Background glow effect */}
        <div className="background-glow" />
        
        {/* Welcome Splash Screen */}
        <AnimatePresence>
          {showWelcome && <WelcomeSplash onEnter={handleWelcomeEnter} />}
        </AnimatePresence>
        
        {/* Loader */}
        {!showWelcome && !showContent && <Loader onComplete={handleLoaderComplete} />}

        {/* Main content */}
        {showContent && (
          <>
            {/* Background particles */}
            <Particles />

            {/* Music Player */}
            <MusicPlayer />

            {/* Hero Section */}
            <HeroSection onScrollToCounter={scrollToCounter} />

            {/* Counter Section */}
            <div id="counter-section">
              <Counter />
            </div>

            {/* Declaration Section */}
            <Declaration />

            {/* Photo Carousel Section */}
            <PhotoCarousel />

            {/* 3D Heart Section */}
            <Heart3D />

            {/* Surprise Section */}
            <Surprise />

            {/* Final Section */}
            <Final />

            {/* Footer */}
            <footer className="relative z-10 py-8 text-center text-white-soft/50 text-sm">
              <p>Feito com ❤️ para Margarida Gauper</p>
              <p className="mt-2">© 2026 - Uma história de amor infinita</p>
            </footer>
          </>
        )}
      </main>
    </SmoothScroll>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  const [attemptedAutoplay, setAttemptedAutoplay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Tentar tocar música IMEDIATAMENTE quando componente carrega
  useEffect(() => {
    if (!attemptedAutoplay && audioRef.current) {
      setAttemptedAutoplay(true);
      
      // Tentar autoplay direto
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Sucesso! Música começou
            setIsPlaying(true);
            console.log('🎵 Música iniciada automaticamente!');
          })
          .catch((error) => {
            console.log('⚠️ Autoplay bloqueado pelo navegador:', error);
            // Navegador bloqueou - precisará de interação do usuário
            setIsPlaying(false);
            
            // Criar listener para primeira interação
            const playOnInteraction = () => {
              if (audioRef.current && !isPlaying) {
                audioRef.current.play()
                  .then(() => {
                    setIsPlaying(true);
                    console.log('🎵 Música iniciada após interação!');
                  })
                  .catch(err => console.log('Erro ao tocar:', err));
              }
              // Remove listeners após primeira vez
              document.removeEventListener('click', playOnInteraction);
              document.removeEventListener('touchstart', playOnInteraction);
              document.removeEventListener('keydown', playOnInteraction);
            };
            
            // Escuta QUALQUER interação
            document.addEventListener('click', playOnInteraction, { once: true });
            document.addEventListener('touchstart', playOnInteraction, { once: true });
            document.addEventListener('keydown', playOnInteraction, { once: true });
          });
      }
    }
  }, [attemptedAutoplay, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Erro ao tocar música:', error);
          });
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music.mp3" type="audio/mpeg" />
        <source src="/music.ogg" type="audio/ogg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <div className="relative">
          <AnimatePresence>
            {showVolume && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-0 right-full mr-4 bg-dark-deep/90 backdrop-blur-lg border border-white/10 rounded-full px-4 py-3 flex items-center gap-3"
              >
                <span className="text-white/70 text-sm whitespace-nowrap">Volume</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 accent-pink-vibrant"
                />
                <span className="text-white/70 text-sm font-semibold">
                  {Math.round(volume * 100)}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowVolume(!showVolume)}
              className="bg-dark-deep/90 backdrop-blur-lg border border-white/10 hover:border-pink-vibrant/50 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-pink-vibrant/30"
              aria-label="Controle de volume"
            >
              {volume === 0 ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : volume < 0.5 ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className={`relative bg-gradient-to-r from-pink-vibrant to-gold-elegant text-white p-4 rounded-full transition-all duration-300 shadow-lg group overflow-hidden ${
                isPlaying ? 'animate-glow' : ''
              }`}
              aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-vibrant to-gold-elegant opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              
              <div className="relative z-10">
                {isPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>

              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              )}
            </motion.button>
          </div>

          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-3 right-0 bg-dark-deep/90 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-pink-vibrant"
                  >
                    🎵
                  </motion.div>
                  <span className="text-white/80 text-sm">Tocando agora</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!isPlaying && attemptedAutoplay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-16 right-0 bg-pink-vibrant text-white text-sm px-4 py-2 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span>Clique para ouvir música 🎵</span>
              </div>
              <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-pink-vibrant" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}

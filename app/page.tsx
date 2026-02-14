'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import confetti from 'canvas-confetti';

export default function Home() {
  const [stage, setStage] = useState(0);

  // ========================================
  // EDIT BAGIAN INI UNTUK MENGUBAH TEKS
  // ========================================
  
  const messages = [
    'Ada pesan buat kamu ❤️',           // Stage 0 - Tombol awal
    'Kamu tahu nggak?',                 // Stage 1
    'Orang yang paling berharga di hidupku...', // Stage 2
    'Tebak siapa?',                     // Stage 3
  ];

  const finalMessage = {
    title: 'ADALAH KAMU! ❤️',
    text: `Setiap hari bersamamu adalah anugerah yang tak ternilai. Kamu adalah alasan aku tersenyum di pagi hari, dan kamu adalah mimpi terindah di malam hari. 

Terima kasih sudah menjadi cahaya dalam hidupku, sudah menerima aku apa adanya, dan sudah membuat setiap momen menjadi istimewa. 

Aku berjanji akan selalu ada untukmu, menjaga hatimu, dan mencintaimu dengan sepenuh jiwa. 

Aku mencintaimu, sekarang dan selamanya. ❤️`,
  };

  // Path foto pasangan (letakkan foto di folder public/)
  // Contoh: jika file bernama "couple.jpg", maka path = "/couple.jpg"
  const couplephotoPath = '/couple.jpg';
  
  // ========================================
  // AKHIR BAGIAN YANG PERLU DIEDIT
  // ========================================

  const handleClick = () => {
    if (stage < messages.length - 1) {
      setStage(stage + 1);
    } else {
      setStage(stage + 1); // Stage Final
    }
  };

  // Trigger heart confetti when reaching final stage
  useEffect(() => {
    if (stage === messages.length) {
      triggerHeartConfetti();
    }
  }, [stage, messages.length]);

  const triggerHeartConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      colors: ['#ff0080', '#ff69b4', '#ff1493', '#c71585', '#db7093']
    };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        shapes: ['heart'] as confetti.Shape[],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        shapes: ['heart'] as confetti.Shape[],
      });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {stage < messages.length ? (
            // Stages 0-3: Show button with messages
            <motion.div
              key={stage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex items-center justify-center"
            >
              <button
                onClick={handleClick}
                className="px-12 py-6 bg-gradient-to-r from-pink-400 to-rose-500 text-white text-2xl md:text-3xl font-semibold rounded-full shadow-2xl hover:shadow-pink-300 hover:scale-105 transition-all duration-300 ease-in-out font-['Inter']"
              >
                {messages[stage]}
              </button>
            </motion.div>
          ) : (
            // Final Stage: Show revelation
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center space-y-8"
            >
              {/* Title */}
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-rose-600 font-['Playfair_Display']"
              >
                {finalMessage.title}
              </motion.h1>

              {/* Image */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-pink-300">
                  <Image
                    src={couplephotoPath}
                    alt="Couple Photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Final Message */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              >
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed whitespace-pre-line font-['Inter']">
                  {finalMessage.text}
                </p>
              </motion.div>

              {/* Hearts decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="flex justify-center gap-4 text-5xl"
              >
                <span className="animate-pulse">💕</span>
                <span className="animate-pulse delay-100">💖</span>
                <span className="animate-pulse delay-200">💕</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

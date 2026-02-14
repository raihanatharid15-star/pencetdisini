'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import confetti from 'canvas-confetti';

export default function Home() {
  const [stage, setStage] = useState(0);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

  // ========================================
  // EDIT BAGIAN INI UNTUK MENGUBAH TEKS
  // ========================================
  
  const messages = [
    { text: 'Ada pesan spesial buat kamu 💌', emoji: '💌', color: 'from-pink-500 to-rose-500' },
    { text: 'Kamu tahu nggak? 🤔', emoji: '🤔', color: 'from-purple-500 to-pink-500' },
    { text: 'Aku punya rahasia nih... 🤫', emoji: '🤫', color: 'from-blue-500 to-purple-500' },
    { text: 'Yang selalu ada di pikiranku... 💭', emoji: '💭', color: 'from-indigo-500 to-blue-500' },
    { text: 'Yang bikin aku tersenyum setiap hari... 😊', emoji: '😊', color: 'from-cyan-500 to-indigo-500' },
    { text: 'Yang membuat hidupku berwarna... 🌈', emoji: '🌈', color: 'from-teal-500 to-cyan-500' },
    { text: 'Orang yang paling berharga... 💎', emoji: '💎', color: 'from-emerald-500 to-teal-500' },
    { text: 'Yang selalu di hatiku... 💝', emoji: '💝', color: 'from-green-500 to-emerald-500' },
    { text: 'Tebak siapa orangnya? 🎯', emoji: '🎯', color: 'from-lime-500 to-green-500' },
    { text: 'Klik sekali lagi untuk tahu... 👆', emoji: '👆', color: 'from-yellow-500 to-lime-500' },
  ];

  const finalMessage = {
    title: 'ADALAH KAMU! ❤️',
    subtitle: 'Kamu adalah segalanya bagiku',
    text: `Setiap hari bersamamu adalah anugerah yang tak ternilai. Kamu adalah alasan aku tersenyum di pagi hari, dan kamu adalah mimpi terindah di malam hari.

Terima kasih sudah menjadi cahaya dalam hidupku, sudah menerima aku apa adanya, dan sudah membuat setiap momen menjadi istimewa.

Aku berjanji akan selalu ada untukmu, menjaga hatimu, dan mencintaimu dengan sepenuh jiwa.

Aku mencintaimu, sekarang dan selamanya. ❤️`,
  };

  // Path foto pasangan (letakkan foto di folder public/)
  const couplephotoPath = '/couple.jpg';
  
  // ========================================
  // AKHIR BAGIAN YANG PERLU DIEDIT
  // ========================================

  // Generate floating hearts
  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setHearts(newHearts);
  }, []);

  const handleClick = () => {
    if (stage < messages.length) {
      setStage(stage + 1);
    }
  };

  // Trigger confetti when reaching final stage
  useEffect(() => {
    if (stage === messages.length) {
      triggerConfetti();
    }
  }, [stage, messages.length]);

  const triggerConfetti = () => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      colors: ['#ff0080', '#ff69b4', '#ff1493', '#c71585', '#db7093', '#ffc0cb', '#ffb6c1']
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
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const currentMessage = messages[stage] || messages[messages.length - 1];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 animate-gradient-xy"></div>
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-4xl opacity-20"
            style={{ left: `${heart.x}%` }}
            initial={{ y: '100vh', rotate: 0 }}
            animate={{ 
              y: '-100vh', 
              rotate: 360,
              x: [0, 50, -50, 0],
            }}
            transition={{
              duration: 15,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Sparkles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <AnimatePresence mode="wait">
            {stage < messages.length ? (
              // Stages 0-9: Show button with messages
              <motion.div
                key={stage}
                initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="flex flex-col items-center justify-center gap-8"
              >
                {/* Emoji decoration */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="text-8xl md:text-9xl"
                >
                  {currentMessage.emoji}
                </motion.div>

                {/* Main button */}
                <motion.button
                  onClick={handleClick}
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-16 py-8 bg-gradient-to-r ${currentMessage.color} text-white text-2xl md:text-4xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out font-['Inter'] overflow-hidden group`}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <span className="relative z-10">{currentMessage.text}</span>
                </motion.button>

                {/* Progress indicator */}
                <div className="flex gap-2">
                  {messages.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index <= stage ? 'bg-white' : 'bg-white/30'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: index === stage ? 1.5 : 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              // Final Stage: Show revelation
              <motion.div
                key="final"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-center space-y-8"
              >
                {/* Animated title */}
                <motion.div className="space-y-4">
                  <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                    className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl font-['Playfair_Display']"
                  >
                    {finalMessage.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-2xl md:text-3xl text-white/90 font-semibold"
                  >
                    {finalMessage.subtitle}
                  </motion.p>
                </motion.div>

                {/* Image with decorative elements */}
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotate: -180 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 1, type: 'spring' }}
                  className="flex justify-center relative"
                >
                  {/* Decorative rings */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] border-4 border-white/30 rounded-full" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-[26rem] h-[26rem] md:w-[32rem] md:h-[32rem] border-4 border-white/20 rounded-full border-dashed" />
                  </motion.div>

                  {/* Photo */}
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white z-10">
                    <Image
                      src={couplephotoPath}
                      alt="Couple Photo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Final Message Card */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-white/50"
                >
                  <p className="text-gray-800 text-lg md:text-2xl leading-relaxed whitespace-pre-line font-['Inter'] font-medium">
                    {finalMessage.text}
                  </p>
                </motion.div>

                {/* Animated hearts decoration */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1 }}
                  className="flex justify-center gap-6 text-6xl md:text-7xl"
                >
                  {['💕', '💖', '💗', '💓', '💝'].map((heart, index) => (
                    <motion.span
                      key={index}
                      animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      {heart}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

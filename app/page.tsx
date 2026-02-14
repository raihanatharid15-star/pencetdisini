'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import confetti from 'canvas-confetti';

type StageType = {
  type: 'button' | 'quiz';
  text: string;
  emoji: string;
  color: string;
  question?: string;
  choices?: Array<{ text: string; isCorrect: boolean; response: string }>;
};

export default function Home() {
  const [stage, setStage] = useState(0);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);
  const [wrongAnswerText, setWrongAnswerText] = useState('');

  // ========================================
  // EDIT BAGIAN INI UNTUK MENGUBAH TEKS
  // ========================================
  
  const stages: StageType[] = [
    { 
      type: 'button',
      text: 'Ada pesan spesial buat kamu 💌', 
      emoji: '💌', 
      color: 'from-pink-500 to-rose-500' 
    },
    { 
      type: 'quiz',
      text: 'Pertanyaan 1',
      emoji: '🤔',
      color: 'from-purple-500 to-pink-500',
      question: 'Kamu tahu nggak siapa yang paling sayang sama kamu?',
      choices: [
        { text: 'Orang tua', isCorrect: false, response: 'Iya sih, tapi ada yang lebih sayang lagi 😊' },
        { text: 'Aku dong! ❤️', isCorrect: true, response: 'Betul banget! 💕' },
        { text: 'Kucing tetangga', isCorrect: false, response: 'Hahaha lucu deh kamu 😂' },
      ]
    },
    { 
      type: 'button',
      text: 'Aku punya rahasia nih... 🤫', 
      emoji: '🤫', 
      color: 'from-blue-500 to-purple-500' 
    },
    { 
      type: 'quiz',
      text: 'Pertanyaan 2',
      emoji: '💭',
      color: 'from-indigo-500 to-blue-500',
      question: 'Kapan pertama kali aku jatuh cinta sama kamu?',
      choices: [
        { text: 'Sejak pertama kali lihat', isCorrect: true, response: 'Love at first sight! 😍' },
        { text: 'Kemarin', isCorrect: false, response: 'Udah lama banget tau! 😄' },
        { text: 'Belum jatuh cinta', isCorrect: false, response: 'Bohong! Udah jatuh cinta banget kok 💖' },
      ]
    },
    { 
      type: 'button',
      text: 'Yang bikin aku tersenyum setiap hari... 😊', 
      emoji: '😊', 
      color: 'from-cyan-500 to-indigo-500' 
    },
    { 
      type: 'quiz',
      text: 'Pertanyaan 3',
      emoji: '🌈',
      color: 'from-teal-500 to-cyan-500',
      question: 'Apa yang paling aku suka dari kamu?',
      choices: [
        { text: 'Senyumnya', isCorrect: false, response: 'Iya sih, tapi ada yang lebih dari itu 😊' },
        { text: 'Semuanya! ❤️', isCorrect: true, response: 'Exactly! Semua yang ada di kamu itu perfect 💯' },
        { text: 'Masakannya', isCorrect: false, response: 'Haha itu bonus! Yang penting kamu orangnya 😘' },
      ]
    },
    { 
      type: 'button',
      text: 'Orang yang paling berharga... 💎', 
      emoji: '💎', 
      color: 'from-emerald-500 to-teal-500' 
    },
    { 
      type: 'quiz',
      text: 'Pertanyaan 4',
      emoji: '💝',
      color: 'from-green-500 to-emerald-500',
      question: 'Kalau aku boleh minta satu hal, aku mau...',
      choices: [
        { text: 'Uang banyak', isCorrect: false, response: 'Uang bisa dicari, tapi kamu cuma satu 💕' },
        { text: 'Bersamamu selamanya ❤️', isCorrect: true, response: 'That\'s all I need! 💖' },
        { text: 'Liburan ke Bali', isCorrect: false, response: 'Boleh juga, tapi yang penting bareng kamu 😊' },
      ]
    },
    { 
      type: 'quiz',
      text: 'Pertanyaan 5',
      emoji: '🎯',
      color: 'from-lime-500 to-green-500',
      question: 'Tebak siapa orangnya?',
      choices: [
        { text: 'Tobrut 😏', isCorrect: false, response: 'Wkwkwk salah fokus nih! 😂' },
        { text: 'Janda 🤭', isCorrect: false, response: 'Hahaha bukan! Coba lagi dong 😄' },
        { text: 'Kamu! ❤️', isCorrect: true, response: 'BINGO! Kamu yang paling sempurna! 💯' },
      ]
    },
    { 
      type: 'button',
      text: 'Klik sekali lagi untuk tahu... 👆', 
      emoji: '👆', 
      color: 'from-yellow-500 to-lime-500' 
    },
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

  const handleButtonClick = () => {
    if (stage < stages.length) {
      setStage(stage + 1);
    }
  };

  const handleChoiceClick = (isCorrect: boolean, response: string) => {
    if (isCorrect) {
      // Correct answer - move to next stage
      setStage(stage + 1);
      // Mini confetti for correct answer
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff0080', '#ff69b4', '#ff1493'],
      });
    } else {
      // Wrong answer - show feedback
      setWrongAnswerText(response);
      setShowWrongAnswer(true);
      setTimeout(() => setShowWrongAnswer(false), 2000);
    }
  };

  // Trigger confetti when reaching final stage
  useEffect(() => {
    if (stage === stages.length) {
      triggerConfetti();
    }
  }, [stage, stages.length]);

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

  const currentStage = stages[stage];

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

      {/* Wrong answer notification */}
      <AnimatePresence>
        {showWrongAnswer && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 20, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl border-4 border-pink-300"
          >
            <p className="text-xl md:text-2xl font-bold text-pink-600">{wrongAnswerText}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <AnimatePresence mode="wait">
            {stage < stages.length ? (
              currentStage.type === 'button' ? (
                // Button stage
                <motion.div
                  key={`button-${stage}`}
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
                    {currentStage.emoji}
                  </motion.div>

                  {/* Main button */}
                  <motion.button
                    onClick={handleButtonClick}
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-16 py-8 bg-gradient-to-r ${currentStage.color} text-white text-2xl md:text-4xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out font-['Inter'] overflow-hidden group`}
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
                    <span className="relative z-10">{currentStage.text}</span>
                  </motion.button>

                  {/* Progress indicator */}
                  <div className="flex gap-2">
                    {stages.map((_, index) => (
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
                // Quiz stage
                <motion.div
                  key={`quiz-${stage}`}
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
                    {currentStage.emoji}
                  </motion.div>

                  {/* Question */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/95 backdrop-blur-md px-8 py-6 rounded-3xl shadow-2xl border-4 border-white/50"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
                      {currentStage.question}
                    </h2>
                  </motion.div>

                  {/* Choices */}
                  <div className="flex flex-col gap-4 w-full max-w-2xl">
                    {currentStage.choices?.map((choice, index) => (
                      <motion.button
                        key={index}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        onClick={() => handleChoiceClick(choice.isCorrect, choice.response)}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative px-8 py-6 bg-gradient-to-r ${currentStage.color} text-white text-xl md:text-2xl font-semibold rounded-2xl shadow-xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out overflow-hidden group`}
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
                        <span className="relative z-10">{choice.text}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="flex gap-2">
                    {stages.map((_, index) => (
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
              )
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

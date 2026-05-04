import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import BlurText from '@/components/ui/blur-text';

export default function Hero() {
  const containerRef = useRef(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringScale = useSpring(1, { damping: 15, stiffness: 120 });

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);
    };
    const el = containerRef.current;
    el?.addEventListener('mousemove', handleMove);
    return () => el?.removeEventListener('mousemove', handleMove);
  }, [cursorX, cursorY]);

  const headline = ['Better', 'than', 'ever.'];

  return (
    <section
      id="home_hero"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-ink-900"
      onMouseEnter={() => ringScale.set(1.4)}
      onMouseLeave={() => ringScale.set(1)}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        poster="https://content-studio.biela.dev/cover/3840x2160/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777906864920.png/cinematic-slow-dolly-through-a-modern-university-computer-lab-at-golden-hour-3840x2160.webp?search_term=students,laptop,coding,classroom&img_prompt=Cinematic+slow+dolly+through+a+modern+university+computer+lab+at+golden+hour.+Diverse+full-body+students+coding+at+sleek+workstations,+monitors+glowing+blue.+Floating+particles+of+light+drift+through+the+air,+catching+sunlight+through+tall+windows.+Soft+atmospheric+haze+with+visible+light+rays.+Deep+navy+walls,+amber+desk+lamps,+electric+blue+screen+reflections.+Hyper-realistic,+cinematic+color+grading,+film+grain,+8k.&w=1920&h=1080&type=image"
      >
        <source
          src="https://content-studio.biela.dev/videos-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777906943773.mp4?search_term=coding,students,classroom,technology,lecture&img_prompt=Cinematic+slow+dolly+through+a+modern+university+computer+lab+at+golden+hour.+Diverse+full-body+students+coding+at+sleek+workstations,+monitors+glowing+blue.+Floating+particles+of+light+drift+through+the+air,+catching+sunlight+through+tall+windows.+Soft+atmospheric+haze+with+visible+light+rays.+Deep+navy+walls,+amber+desk+lamps,+electric+blue+screen+reflections.+Hyper-realistic,+cinematic+color+grading,+film+grain,+8k.&w=1920&h=1080&type=video"
          type="video/mp4"
        />
      </video>

      {/* Gradient veil for nav contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/50 to-ink-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-transparent" />

      {/* Cursor disturbance — light orb that follows */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          width: 280,
          height: 280,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, transparent 60%)',
          scale: ringScale,
          filter: 'blur(24px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Vertical text accent */}
      <div className="absolute left-6 bottom-12 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
        <span className="text-lg uppercase tracking-[0.4em] text-white/30 font-extralight">
          Educational Platform · 2025
        </span>
      </div>

      {/* Floating year sticker */}
      <div className="absolute top-32 right-8 z-10 hidden md:block">
        <motion.div
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-amber-accent text-ink-900 px-4 py-2 rounded-md text-lg font-extralight"
          style={{ transform: 'rotate(-4deg)' }}
        >
          ★ Sesiunea de cursuri 2026 deschisă!
        </motion.div>
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-[2400px] mx-auto h-screen flex items-center">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-9 lg:col-start-2 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-amber-glow text-lg uppercase tracking-[0.3em] font-extralight mb-6"
            >
              insightED — Educational Platform
            </motion.div>

            <h1 className="font-display text-white tracking-tight leading-[0.95] text-6xl md:text-7xl lg:text-8xl xl:text-9xl max-w-5xl">
              {headline.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.9, delay: 0.4 + i * 0.18, ease: [0.4, 0, 0.2, 1] }}
                  className="inline-block mr-4"
                >
                  {i === 2 ? <span className="text-signal-300 italic font-light">{word}</span> : word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 max-w-xl"
            >
              <BlurText
                text="Cursuri de programare, web development și baze de date — gândite pentru a te duce de la zero la primul tău proiect real."
                className="text-xl md:text-2xl text-signal-100/90 font-extralight leading-relaxed"
                delay={30}
                stepDuration={0.3}
              />
            </motion.div>

            {/* CTAs anchored opposite the headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
            >
              <Link
                to="/aplicare"
                className="group inline-flex items-center gap-3 bg-amber-accent text-ink-900 px-8 py-4 rounded-full text-lg font-light hover:bg-amber-glow transition-all duration-300"
                style={{ boxShadow: '0 10px 40px -10px rgba(245, 158, 11, 0.5)' }}
              >
                Aplică pentru curs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>

              <Link
                to="/despre-curs"
                className="group inline-flex items-center gap-3 text-white text-lg font-extralight hover:text-amber-glow transition-colors"
              >
                <PlayCircle className="w-6 h-6" strokeWidth={1.2} />
                Vezi cursurile
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-lg font-extralight tracking-[0.3em] uppercase z-10"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}

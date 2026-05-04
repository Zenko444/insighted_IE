import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function HeroEntrance({ onComplete }) {
  const [visible, setVisible] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const isReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
    const played = sessionStorage.getItem('entrancePlayed');

    if (isReload || !played) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      sessionStorage.setItem('entrancePlayed', 'true');

      const t1 = setTimeout(() => setStage(1), 400);   // grid forms
      const t2 = setTimeout(() => setStage(2), 1600);  // logo emerges
      const t3 = setTimeout(() => setStage(3), 3000);  // tagline
      const t4 = setTimeout(() => setStage(4), 4200);  // exit
      const t5 = setTimeout(() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        setVisible(false);
        onComplete?.();
      }, 5000);

      return () => { [t1, t2, t3, t4, t5].forEach(clearTimeout); };
    } else {
      onComplete?.();
    }
  }, [onComplete]);

  // Build a 7x7 grid of dots that assemble
  const cols = 9;
  const rows = 7;
  const dots = Array.from({ length: cols * rows });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: stage >= 4 ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 bg-ink-900 flex items-center justify-center overflow-hidden"
        >
          {/* atmospheric glow */}
          <motion.div
            className="absolute w-[60vw] h-[60vw] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 60%)' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: stage >= 1 ? 1.2 : 0, opacity: stage >= 1 ? 1 : 0 }}
            transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
          />

          {/* Dot grid that forms then scatters */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="grid"
              style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap: '24px' }}
            >
              {dots.map((_, i) => {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const cx = (cols - 1) / 2;
                const cy = (rows - 1) / 2;
                const dist = Math.hypot(col - cx, row - cy);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, x: (col - cx) * 80, y: (row - cy) * 80 }}
                    animate={{
                      opacity: stage >= 1 && stage < 4 ? 1 : 0,
                      scale: stage >= 1 ? 1 : 0,
                      x: stage >= 1 && stage < 4 ? 0 : (col - cx) * 200,
                      y: stage >= 1 && stage < 4 ? 0 : (row - cy) * 200,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: stage >= 4 ? dist * 0.04 : dist * 0.06,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="w-2 h-2 rounded-full bg-signal-300"
                  />
                );
              })}
            </div>
          </div>

          {/* Center logo + tagline */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(20px)' }}
              animate={{
                opacity: stage >= 2 ? 1 : 0,
                y: stage >= 2 ? 0 : 20,
                scale: stage >= 2 ? 1 : 0.9,
                filter: stage >= 2 ? 'blur(0px)' : 'blur(20px)',
              }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], scale: { type: 'spring', stiffness: 260, damping: 16 } }}
              className="font-display text-6xl md:text-8xl text-white tracking-tight"
            >
              insight<span className="text-signal-300 font-medium">ED</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 10 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-amber-glow font-extralight tracking-[0.3em] uppercase"
            >
              Better than ever
            </motion.div>

            {/* progress line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: stage >= 2 ? 240 : 0 }}
              transition={{ duration: 2.5, ease: 'linear' }}
              className="h-px bg-gradient-to-r from-transparent via-signal-300 to-transparent mt-8"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

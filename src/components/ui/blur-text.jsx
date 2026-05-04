import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))]);
  const kf = {};
  keys.forEach((k) => {
    kf[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return kf;
};

export default function BlurText({
  text = '',
  delay = 80,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  stepDuration = 0.4,
  onAnimationComplete,
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () => (direction === 'top' ? { filter: 'blur(12px)', opacity: 0, y: -30 } : { filter: 'blur(12px)', opacity: 0, y: 30 }),
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      { filter: 'blur(6px)', opacity: 0.6, y: direction === 'top' ? 4 : -4 },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const stepCount = defaultTo.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <p ref={ref} className={`${className} flex flex-wrap`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(defaultFrom, defaultTo);
        return (
          <motion.span
            key={index}
            initial={defaultFrom}
            animate={inView ? animateKeyframes : defaultFrom}
            transition={{
              duration: totalDuration,
              times,
              delay: (index * delay) / 1000,
              ease: [0.4, 0, 0.2, 1],
            }}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
}

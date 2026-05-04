import React, { useCallback, useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  separator = '',
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const formatValue = useCallback(
    (latest) => {
      const formatted = Intl.NumberFormat('en-US', {
        useGrouping: !!separator,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(latest);
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => motionValue.set(direction === 'down' ? from : to), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, motionValue, direction, from, to, delay]);

  useEffect(() => {
    const unsub = springValue.on('change', (latest) => {
      if (ref.current) ref.current.textContent = formatValue(latest);
    });
    return () => unsub();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}

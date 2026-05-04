import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = 'button',
  duration = 1.2,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState('TOP');

  const rotateDirection = (current) => {
    const dirs = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
    const idx = dirs.indexOf(current);
    const next = clockwise ? (idx - 1 + dirs.length) % dirs.length : (idx + 1) % dirs.length;
    return dirs[next];
  };

  const movingMap = {
    TOP: 'radial-gradient(20% 50% at 50% 0%, #F59E0B 0%, rgba(255,255,255,0) 100%)',
    LEFT: 'radial-gradient(16% 43% at 0% 50%, #F59E0B 0%, rgba(255,255,255,0) 100%)',
    BOTTOM: 'radial-gradient(20% 50% at 50% 100%, #F59E0B 0%, rgba(255,255,255,0) 100%)',
    RIGHT: 'radial-gradient(16% 41% at 100% 50%, #F59E0B 0%, rgba(255,255,255,0) 100%)',
  };

  const highlight = 'radial-gradient(75% 181% at 50% 50%, #2563EB 0%, rgba(255,255,255,0) 100%)';

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((p) => rotateDirection(p));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative flex rounded-full content-center bg-ink-900 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit',
        containerClassName
      )}
      {...props}
    >
      <div className={cn('w-auto text-white z-10 bg-ink-900 px-7 py-3 rounded-[inherit] text-lg font-light tracking-wide', className)}>
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{ filter: 'blur(2px)', position: 'absolute', width: '100%', height: '100%' }}
        initial={{ background: movingMap[direction] }}
        animate={{ background: hovered ? [movingMap[direction], highlight] : movingMap[direction] }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className="bg-ink-900 absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

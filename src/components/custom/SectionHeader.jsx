import React from 'react';
import { motion } from 'motion/react';

export default function SectionHeader({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-lg uppercase tracking-[0.3em] font-extralight mb-5 ${light ? 'text-amber-glow' : 'text-signal-500'}`}
        >
          {eyebrow}
        </motion.div>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight ${light ? 'text-white' : 'text-ink-900'}`}
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`text-xl mt-6 font-extralight leading-relaxed ${light ? 'text-signal-100/80' : 'text-ink-900/70'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

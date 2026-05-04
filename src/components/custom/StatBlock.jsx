import React from 'react';
import { motion } from 'motion/react';
import CountUp from '@/components/ui/count-up';

export default function StatBlock({ stats }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper-300">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-white p-6 md:p-10 flex flex-col"
        >
          <div className="text-lg uppercase tracking-[0.2em] text-signal-500 font-extralight mb-3">
            {stat.label}
          </div>
          <div className="font-display text-5xl md:text-6xl text-ink-900 font-light flex items-baseline">
            <CountUp to={stat.value} duration={2.2} separator="," />
            {stat.suffix && <span className="text-amber-accent ml-1">{stat.suffix}</span>}
          </div>
          <div className="text-lg text-ink-900/60 font-extralight mt-3 leading-relaxed">
            {stat.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

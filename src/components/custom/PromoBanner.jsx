import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';
import CountUp from '@/components/ui/count-up';

export default function PromoBanner() {
  return (
    <div className="relative max-w-[2400px] mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-gradient-to-r from-ink-900 via-ink-800 to-ink-900 border-2 border-amber-accent/30"
            style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)' }}
          >
            {/* atmospheric glow */}
            <div
              className="absolute -top-10 -right-10 w-[40vw] h-[40vw] opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 50%)' }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                top: '20%',
                left: '40%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 60%)',
              }}
            />

            <div className="relative z-10 grid md:grid-cols-12 gap-6 p-8 md:p-12 items-center">
              {/* Left: Discount badge */}
              <div className="md:col-span-3 flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="bg-amber-accent text-ink-900 w-28 h-28 rounded-full flex flex-col items-center justify-center font-display">
                    <CountUp to={15} duration={1.5} className="text-5xl font-light leading-none" />
                    <span className="text-lg font-extralight">% reducere</span>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-amber-glow" strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Middle: Message */}
              <div className="md:col-span-6">
                <div className="text-amber-glow text-lg uppercase tracking-[0.3em] font-extralight mb-2">
                  Early Enrollment
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-white font-light leading-tight">
                  15% reducere pentru aplicările trimise până pe <span className="text-amber-accent italic">20 iunie</span>
                </h3>
                <p className="text-lg font-extralight text-signal-100/80 mt-4">
                  Locurile sunt limitate. Aplică acum și securează-ți discountul de earlybird pentru sesiunea de toamnă.
                </p>
              </div>

              {/* Right: Date */}
              <div className="md:col-span-3 flex md:justify-end">
                <div className="flex items-center gap-3 text-signal-100/90 border-l-2 border-amber-accent/50 pl-5">
                  <Calendar className="w-6 h-6 text-amber-glow" strokeWidth={1.5} />
                  <div>
                    <div className="text-lg font-extralight uppercase tracking-wider text-amber-glow/70">Deadline</div>
                    <div className="text-2xl font-display font-light text-white">20 Iunie</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

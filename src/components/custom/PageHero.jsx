import React from 'react';
import { motion } from 'motion/react';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import BlurText from '@/components/ui/blur-text';

export default function PageHero({ eyebrow, title, description, accent }) {
  return (
    <section className="relative w-full pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-mesh-blue">
      {/* Animated dotted background */}
      <div className="absolute inset-0 opacity-60">
        <DottedGlowBackground gap={26} radius={1.5} color="rgba(37, 99, 235, 0.4)" glowColor="rgba(37, 99, 235, 0.7)" opacity={0.4} />
      </div>

      {/* Counterweight blob */}
      <div
        className="absolute -top-20 -right-32 w-[55vw] h-[55vw] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F59E0B 0%, transparent 60%)',
          clipPath: 'ellipse(60% 50% at 50% 50%)',
        }}
      />

      {/* Vertical accent */}
      <div className="absolute left-6 bottom-12 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
        <span className="text-lg uppercase tracking-[0.4em] text-ink-900/20 font-extralight">
          insightED · {accent || 'Platform'}
        </span>
      </div>

      <div className="relative z-10 max-w-[2400px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-9 lg:col-start-2 lg:col-span-8">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg uppercase tracking-[0.3em] text-signal-500 font-extralight mb-6"
              >
                {eyebrow}
              </motion.div>
            )}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ink-900 font-light leading-[0.95] tracking-tight">
              {title}
            </h1>
            {description && (
              <div className="mt-8 max-w-2xl">
                <BlurText
                  text={description}
                  className="text-xl md:text-2xl text-ink-900/70 font-extralight leading-relaxed"
                  delay={20}
                  stepDuration={0.3}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

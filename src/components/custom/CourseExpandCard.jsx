import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Clock, Users, Award } from 'lucide-react';

export default function CourseExpandCard({ course, index }) {
  const [open, setOpen] = useState(false);
  const Icon = course.icon;

  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className={`relative cursor-pointer overflow-hidden border-2 transition-all duration-500 ${
        open ? 'bg-ink-900 border-amber-accent md:col-span-2' : 'bg-white border-paper-300 hover:border-signal-500'
      }`}
      style={{
        clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)',
        minHeight: '320px',
      }}
    >
      {/* Background pattern when collapsed */}
      {!open && (
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2563EB 0.5px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
      )}

      {/* Big number */}
      <div className={`absolute top-6 right-8 text-7xl md:text-8xl font-display font-light leading-none transition-colors ${open ? 'text-signal-300/20' : 'text-paper-300'}`}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <motion.div layout className="relative z-10 p-8 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className={`inline-flex items-center gap-3 mb-4 ${open ? 'text-amber-glow' : 'text-signal-500'}`}>
              <div className={`w-12 h-12 rounded-md flex items-center justify-center ${open ? 'bg-amber-accent/20' : 'bg-signal-50'}`}>
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-extralight uppercase tracking-[0.2em]">{course.tag}</span>
            </div>

            <h3 className={`font-display text-3xl md:text-4xl font-light leading-tight transition-colors ${open ? 'text-white' : 'text-ink-900'}`}>
              {course.title}
            </h3>

            <p className={`text-lg font-extralight mt-4 leading-relaxed max-w-xl ${open ? 'text-signal-100/90' : 'text-ink-900/70'}`}>
              {course.short}
            </p>
          </div>

          <button
            className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
              open ? 'border-amber-accent bg-amber-accent text-ink-900' : 'border-paper-300 text-signal-500 hover:border-signal-500'
            }`}
          >
            {open ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden mt-8"
            >
              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-signal-300/20">
                <div>
                  <h4 className="text-lg font-display text-amber-glow mb-4">Ce vei învăța</h4>
                  <ul className="space-y-3">
                    {course.topics.map((t, i) => (
                      <li key={i} className="flex gap-3 text-lg font-extralight text-signal-100/90">
                        <span className="text-amber-glow font-light w-6">{String(i + 1).padStart(2, '0')}</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-display text-amber-glow mb-4">Detalii curs</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-lg font-extralight text-signal-100/90">
                      <Clock className="w-5 h-5 mt-0.5 text-signal-300" strokeWidth={1.5} />
                      <div><span className="text-white">Durată:</span> {course.duration}</div>
                    </div>
                    <div className="flex items-start gap-3 text-lg font-extralight text-signal-100/90">
                      <Users className="w-5 h-5 mt-0.5 text-signal-300" strokeWidth={1.5} />
                      <div><span className="text-white">Format:</span> {course.format}</div>
                    </div>
                    <div className="flex items-start gap-3 text-lg font-extralight text-signal-100/90">
                      <Award className="w-5 h-5 mt-0.5 text-signal-300" strokeWidth={1.5} />
                      <div><span className="text-white">Nivel:</span> {course.level}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

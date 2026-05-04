import React from 'react';
import { motion } from 'motion/react';
import { Play, ExternalLink, MapPin, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/custom/PageHero';
import ParallaxImage from '@/components/ParallaxImage';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import SectionHeader from '@/components/custom/SectionHeader';

const tutorials = [
  {
    title: 'Python for Beginners — Full Course',
    source: 'freeCodeCamp',
    duration: '4h 26m',
    embed: 'https://www.youtube.com/embed/rfscVS0vtbw',
    description: 'Cursul complet de Python — sintaxă, structuri de date, funcții și OOP, totul într-un singur tutorial.',
  },
  {
    title: 'JavaScript Programming — Full Course',
    source: 'freeCodeCamp',
    duration: '7h 42m',
    embed: 'https://www.youtube.com/embed/jS4aFq5-91M',
    description: 'JavaScript de la zero la framework-uri. HTML, CSS, DOM, async, fetch — tot ce trebuie.',
  },
  {
    title: 'SQL Tutorial — Full Database Course',
    source: 'freeCodeCamp',
    duration: '4h 20m',
    embed: 'https://www.youtube.com/embed/HXV3zeQKqGY',
    description: 'Învață SQL de la SELECT-ul de bază până la JOIN-uri complexe și optimizări.',
  },
  {
    title: 'MongoDB Crash Course',
    source: 'freeCodeCamp',
    duration: '2h 30m',
    embed: 'https://www.youtube.com/embed/c2M-rlkkT5o',
    description: 'NoSQL și MongoDB explicate practic — de la documente la aggregation pipeline.',
  },
];

const roadmap = [
  {
    stage: '01',
    title: 'Fundamente',
    duration: '2-3 luni',
    items: ['Logică de programare', 'Python basics', 'Git & terminal', 'Algoritmi simpli'],
  },
  {
    stage: '02',
    title: 'Web & Frontend',
    duration: '3-4 luni',
    items: ['HTML semantic + CSS', 'JavaScript modern (ES6+)', 'Responsive design', 'Un mini framework (React)'],
  },
  {
    stage: '03',
    title: 'Backend & Date',
    duration: '3-4 luni',
    items: ['Node.js sau Python backend', 'API REST', 'SQL fundamentals', 'NoSQL cu MongoDB'],
  },
  {
    stage: '04',
    title: 'Profesional',
    duration: '2-3 luni',
    items: ['Testing & debugging', 'Deployment & DevOps basics', 'Code review în echipă', 'Portofoliu + interviuri'],
  },
];

export default function Tutoriale() {
  return (
    <>
      <PageHero
        eyebrow="Tutoriale · Resurse gratuite"
        title="Toate resursele de care ai nevoie ca să începi acum."
        description="Tutoriale freeCodeCamp curate de mentorii noștri și roadmap-ul complet pentru a deveni dezvoltator."
        accent="Resources"
      />

      {/* Tutorials grid */}
      <section id="tutoriale_videos" className="relative py-16 md:py-20 bg-white overflow-visible">
        <div className="absolute left-6 bottom-12 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Learn</span>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxImage
            src="https://content-studio.biela.dev/cover/3840x2160/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907807236.png/cinematic-wide-angle-shot-of-a-developer-workspace-with-multiple-monitors-showing-code-warm-amber-desk-lighting-clean-modern-desk-navy-walls-blurred-background-professional-photography-shallow-depth-of-field-allow-only-white-person-european-3840x2160.webp?search_term=code,monitor,screen,developer&img_prompt=Cinematic+wide+angle+shot+of+a+developer+workspace+with+multiple+monitors+showing+code,+warm+amber+desk+lighting,+clean+modern+desk,+navy+walls,+blurred+background,+professional+photography,+shallow+depth+of+field&w=1920&h=1080&type=image"
            alt="Coding workspace background"
            className="w-full h-full object-cover opacity-[0.04]"
            scale={1.8}
          />
        </div>
        <div className="max-w-[2400px] mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <SectionHeader
                eyebrow="Tutoriale recomandate"
                title="Cele mai bune cursuri free din comunitate"
                description="Selectate de mentorii insightED. Toate sunt complete și gratuite — un punct de plecare excelent înainte de a aplica la un curs structurat."
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                {tutorials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="bg-paper-100 border border-paper-300 overflow-hidden"
                  >
                    <div className="aspect-video bg-ink-900 relative">
                      <iframe
                        src={t.embed}
                        title={t.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-lg text-signal-500 font-extralight">
                          <Play className="w-4 h-4" strokeWidth={1.5} />
                          {t.source}
                        </div>
                        <span className="text-lg text-ink-900/60 font-extralight">{t.duration}</span>
                      </div>
                      <h3 className="font-display text-2xl text-ink-900 font-light leading-tight">{t.title}</h3>
                      <p className="text-lg text-ink-900/70 font-extralight mt-3 leading-relaxed">{t.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning roadmap */}
      <section id="tutoriale_roadmap" className="py-16 md:py-20 bg-ink-900 text-white relative overflow-hidden">
        <div className="absolute right-6 top-16 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-white/10 font-extralight">insightED · Roadmap</span>
        </div>
        <DottedGlowBackground gap={30} radius={1.2} color="rgba(96, 165, 250, 0.35)" glowColor="rgba(96, 165, 250, 0.6)" opacity={0.25} />
        <div
          className="absolute -top-32 -left-32 w-[50vw] h-[50vw] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 60%)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[40vw] h-[40vw] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 60%)', clipPath: 'ellipse(60% 50% at 50% 50%)' }}
        />

        <div className="max-w-[2400px] mx-auto relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <SectionHeader
                eyebrow="Learning Roadmap"
                title="Drumul complet — de la zero la dezvoltator angajabil"
                description="12 luni structurate. Fiecare etapă construiește pe cea anterioară. Ai libertatea să mergi în ritmul tău."
                light
              />

              <div className="mt-20 relative">
                {/* Connecting line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-signal-300/30 to-transparent hidden md:block" />

                <div className="space-y-10">
                  {roadmap.map((stage, i) => (
                    <motion.div
                      key={stage.stage}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="relative flex flex-col md:flex-row gap-8 items-start"
                    >
                      {/* Stage marker */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 rounded-full bg-amber-accent text-ink-900 flex items-center justify-center font-display text-2xl font-medium z-10 relative">
                          {stage.stage}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-ink-800/40 backdrop-blur-sm border border-signal-300/10 p-7 md:p-9"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)' }}
                      >
                        <div className="flex flex-wrap items-baseline gap-4 mb-4">
                          <h3 className="font-display text-3xl md:text-4xl text-white font-light">{stage.title}</h3>
                          <span className="text-lg text-amber-glow font-extralight uppercase tracking-wider">{stage.duration}</span>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-3 mt-5">
                          {stage.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-lg text-signal-100/80 font-extralight">
                              <CheckCircle2 className="w-4 h-4 mt-1 text-signal-300 flex-shrink-0" strokeWidth={1.5} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center">
                <a
                  href="https://roadmap.sh/full-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-amber-glow text-lg font-light border-b border-amber-glow/40 pb-1 hover:text-white transition-colors"
                >
                  Vezi roadmap-ul detaliat pe roadmap.sh
                  <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

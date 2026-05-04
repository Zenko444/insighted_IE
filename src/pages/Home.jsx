import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Code2, Database, Globe, GraduationCap, Sparkles, Quote } from 'lucide-react';

import HeroEntrance from '@/components/HeroEntrance';
import Hero from '@/components/Hero';
import StatBlock from '@/components/custom/StatBlock';
import SectionHeader from '@/components/custom/SectionHeader';
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background';
import SpotlightCard from '@/components/ui/spotlight-card';
import { FocusCards } from '@/components/ui/focus-cards';
import ParallaxImage from '@/components/ParallaxImage';

const stats = [
  { label: 'Studenți', value: 1240, suffix: '+', description: 'Absolvenți activi în industrie' },
  { label: 'Cursuri', value: 4, suffix: '', description: 'Programe complete de formare' },
  { label: 'Mentori', value: 12, suffix: '', description: 'Profesioniști din tech' },
  { label: 'Rata succes', value: 92, suffix: '%', description: 'Studenți angajați în 6 luni' },
];

const offerings = [
  { icon: Code2, title: 'Programare', text: 'Fundamentele Python și Java explicate de la zero, cu proiecte reale.' },
  { icon: Globe, title: 'Web Development', text: 'HTML, CSS și JavaScript moderne pentru a construi site-uri profesionale.' },
  { icon: Database, title: 'Baze de date', text: 'SQL și MongoDB — gestionarea datelor în aplicațiile contemporane.' },
  { icon: BookOpen, title: 'Mentorat', text: 'Sesiuni 1:1 cu profesioniști activi din industrie tech.' },
];

const courses = [
  { title: 'Introduction to Python', subtitle: 'Programare de la zero', src: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777906971473.png/close-up-of-laptop-screen-with-python-code-in-blue-syntax-highlighting-warm-desk-lamp-lighting-coffee-cup-blurred-in-background-cinematic-depth-of-field-professional-photography-navy-blue-and-amber-tones-allow-only-white-person-european-1800x1200.webp?search_term=programming,python,laptop,code&img_prompt=Close+up+of+laptop+screen+with+Python+code+in+blue+syntax+highlighting,+warm+desk+lamp+lighting,+coffee+cup+blurred+in+background,+cinematic+depth+of+field,+professional+photography,+navy+blue+and+amber+tones&w=900&h=600&type=image' },
  { title: 'Web Development', subtitle: 'HTML, CSS, JavaScript', src: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777906971371.png/modern-code-editor-on-monitor-showing-html-and-css-in-blue-color-scheme-clean-minimal-desk-setup-soft-natural-window-light-from-left-professional-studio-photography-navy-and-electric-blue-aesthetic-allow-only-white-person-european-1800x1200.webp?search_term=web,development,coding,monitor&img_prompt=Modern+code+editor+on+monitor+showing+HTML+and+CSS+in+blue+color+scheme,+clean+minimal+desk+setup,+soft+natural+window+light+from+left,+professional+studio+photography,+navy+and+electric+blue+aesthetic&w=900&h=600&type=image' },
  { title: 'SQL & MongoDB', subtitle: 'Baze de date moderne', src: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777906971061.png/abstract-visualization-of-database-architecture-with-blue-glowing-connection-lines-and-nodes-dark-professional-atmosphere-navy-background-with-electric-blue-accents-cinematic-lighting-studio-photography-allow-only-white-person-european-1800x1200.webp?search_term=database,server,data,technology&img_prompt=Abstract+visualization+of+database+architecture+with+blue+glowing+connection+lines+and+nodes,+dark+professional+atmosphere,+navy+background+with+electric+blue+accents,+cinematic+lighting,+studio+photography&w=900&h=600&type=image' },
];

const testimonials = [
  { name: 'Andrei Mihalache', role: 'Junior Developer @ Bitdefender', quote: 'insightED mi-a oferit primul cadru structurat să învăț Python. La 6 luni după curs lucram în Bucharest tech scene.' },
  { name: 'Raluca Stoica', role: 'Frontend Developer @ UiPath', quote: 'Mentorii sunt ce face diferența. Am primit feedback real pe cod, ca într-o echipă adevărată.' },
  { name: 'Mihai Pavel', role: 'Backend Engineer @ FintechOS', quote: 'Modulul de SQL & MongoDB m-a pregătit pentru exact ce am întâlnit la primul interviu tehnic.' },
];

export default function Home() {
  const [entranceDone, setEntranceDone] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      <HeroEntrance onComplete={() => setEntranceDone(true)} />
      <Hero />

      {/* MISSION / OVERVIEW SECTION — establish trust */}
      <section id="home_mission" className="relative py-16 md:py-20 overflow-visible bg-white">
        <div
          className="absolute -top-40 -right-40 w-[60vw] h-[60vw] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 60%)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
        />
        <div className="absolute right-6 top-1/3 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/15 font-extralight">insightED · Mission</span>
        </div>
        <div className="max-w-[2400px] mx-auto relative">
          <div className="grid grid-cols-12 items-end gap-y-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-6">
              <SectionHeader
                eyebrow="Despre insightED"
                title="O școală pentru oamenii care vor să construiască viitorul, nu doar să-l consume."
              />
            </div>
            <div className="col-span-12 px-4 md:col-start-8 md:col-span-4">
              <p className="text-xl text-ink-900/70 font-extralight leading-relaxed">
                Suntem o organizație educațională care oferă cursuri structurate de programare și web development. Începem de la fundamente și te ducem până la primul proiect real — cu mentori, grupe mici și un curriculum testat.
              </p>
              <Link
                to="/despre-curs"
                className="inline-flex items-center gap-2 mt-8 text-lg text-signal-500 hover:text-amber-accent transition-colors font-light border-b border-signal-500/40 pb-1"
              >
                Vezi toate cursurile
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — Prove */}
      <section id="home_stats" className="relative bg-paper-100 py-16 md:py-20 overflow-visible">
        <div
          className="absolute -bottom-20 -right-20 w-[45vw] h-[45vw] opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 60%)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
        />
        <div className="absolute left-6 bottom-8 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">Results · 2026</span>
        </div>
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <SectionHeader
                eyebrow="Cifrele noastre"
                title="Rezultate care vorbesc"
                description="Patru ani de cursuri. Studenți care lucrează acum în companii din România și din afară."
              />
              <div className="mt-16">
                <StatBlock stats={stats} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS — Showcase */}
      <section id="home_offerings" className="relative py-16 md:py-20 bg-ink-900 text-white overflow-hidden">
        <DottedGlowBackground gap={28} radius={1.5} color="rgba(96, 165, 250, 0.5)" glowColor="rgba(96, 165, 250, 0.9)" opacity={0.3} />
        <div
          className="absolute top-1/3 -right-40 w-[60vw] h-[60vw] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 60%)', clipPath: 'ellipse(60% 50% at 50% 50%)' }}
        />

        <div className="absolute right-6 top-32 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-white/20 font-extralight">Program · Skills · Career</span>
        </div>

        <div className="relative z-10 max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <SectionHeader
                eyebrow="Ce oferim"
                title="Curriculum complet pentru drumul tău în tech"
                description="De la primele linii de cod până la proiecte deployate. Fiecare modul construiește pe celălalt."
                light
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {offerings.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      whileHover={{ y: -6 }}
                      className="bg-ink-800/60 backdrop-blur-sm border border-signal-300/10 p-8 h-full flex flex-col"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}
                    >
                      <div className="w-12 h-12 rounded-md bg-signal-500/20 flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-amber-glow" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-2xl text-white font-light mb-3">{item.title}</h3>
                      <p className="text-lg text-signal-100/70 font-extralight leading-relaxed mt-auto">{item.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW — focus cards */}
      <section id="home_courses" className="relative py-16 md:py-20 bg-white overflow-visible">
        <div
          className="absolute -top-16 -left-16 w-[35vw] h-[35vw] opacity-[0.06] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 60%)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
        />
        <div className="absolute right-6 top-20 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">Programul · Cursuri</span>
        </div>
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <SectionHeader
                  eyebrow="Cursuri populare"
                  title="Programe care te duc de la zero la primul proiect"
                />
                <Link
                  to="/despre-curs"
                  className="inline-flex items-center gap-2 text-lg text-signal-500 hover:text-amber-accent font-light border-b border-signal-500/40 pb-1 self-start md:self-auto"
                >
                  Vezi toate <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <FocusCards cards={courses} />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — prove via social */}
      <section id="home_testimonials" className="relative py-16 md:py-20 bg-paper-100 overflow-hidden">
        <div
          className="absolute top-10 left-10 text-[20rem] font-display text-signal-500/5 leading-none pointer-events-none select-none"
        >
          "
        </div>

        <div className="max-w-[2400px] mx-auto relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-4 flex flex-col justify-start">
              <div className="text-lg uppercase tracking-[0.3em] text-signal-500 font-extralight mb-5">
                Voci din comunitate
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-ink-900 font-light leading-tight">
                Ce spun absolvenții care lucrează în tech
              </h2>

              <div className="flex gap-3 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-1 transition-all duration-500 ${i === activeTestimonial ? 'w-12 bg-amber-accent' : 'w-6 bg-paper-300'}`}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-12 px-4 md:col-start-6 md:col-span-5">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Quote className="w-10 h-10 text-amber-accent mb-6" strokeWidth={1.2} />
                <p className="text-2xl md:text-3xl font-display font-light leading-snug text-ink-900 italic">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="mt-8 pt-6 border-t border-paper-300">
                  <div className="font-display text-xl text-ink-900 font-light">{testimonials[activeTestimonial].name}</div>
                  <div className="text-lg text-signal-500 font-extralight mt-1">{testimonials[activeTestimonial].role}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION — convert */}
      <section id="home_cta" className="relative py-16 md:py-20 bg-ink-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage
            src="https://content-studio.biela.dev/cover/3840x2160/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777906974376.png/cinematic-wide-shot-of-a-modern-classroom-with-diverse-students-collaborating-at-laptops-golden-hour-light-streaming-through-windows-atmospheric-blue-haze-full-body-figures-professional-film-photography-navy-and-amber-color-grading-allow-only-white-person-european-3840x2160.webp?search_term=students,studying,classroom,laptops,team&img_prompt=Cinematic+wide+shot+of+a+modern+classroom+with+diverse+students+collaborating+at+laptops,+golden+hour+light+streaming+through+windows,+atmospheric+blue+haze,+full+body+figures,+professional+film+photography,+navy+and+amber+color+grading&w=1920&h=1080&type=image"
            alt="Students learning together"
            className="w-full h-full object-cover opacity-30"
            scale={1.8}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/80 to-transparent" />

        <div className="relative z-10 max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-7">
              <Sparkles className="w-10 h-10 text-amber-glow mb-6" strokeWidth={1.2} />
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light leading-[1.05]">
                Următorul curs <br />
                <span className="text-amber-accent italic">se deschide acum.</span>
              </h2>
              <p className="text-xl text-signal-100/80 font-extralight mt-8 max-w-xl leading-relaxed">
                15% reducere pentru aplicările trimise până pe 20 iunie. Locurile sunt limitate.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <Link
                  to="/aplicare"
                  className="inline-flex items-center gap-3 bg-amber-accent text-ink-900 px-8 py-4 rounded-full text-lg font-light hover:bg-amber-glow transition-all duration-300"
                  style={{ boxShadow: '0 10px 40px -10px rgba(245, 158, 11, 0.5)' }}
                >
                  Aplică acum
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-light hover:border-amber-glow hover:text-amber-glow transition-all duration-300"
                >
                  Contactează-ne
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code2, Coffee, Globe2, Database, ArrowRight } from 'lucide-react';
import ParallaxImage from '@/components/ParallaxImage';
import PageHero from '@/components/custom/PageHero';
import SectionHeader from '@/components/custom/SectionHeader';
import CourseExpandCard from '@/components/custom/CourseExpandCard';

const courses = [
  {
    icon: Code2,
    tag: 'Python',
    title: 'Introduction to Python',
    short: 'Pornește de la zero și ajunge să scrii primele tale scripturi Python — cu proiecte care prind viață.',
    topics: [
      'Variabile, tipuri de date și operatori',
      'Structuri de control: if, for, while',
      'Funcții, module și organizarea codului',
      'Lucrul cu liste, dicționare și fișiere',
      'Introducere în OOP — clase și obiecte',
      'Mini-proiect: scraper web sau API simplu',
    ],
    duration: '8 săptămâni',
    format: 'Live online + sesiuni 1:1',
    level: 'Începător — fără cunoștințe prealabile',
  },
  {
    icon: Coffee,
    tag: 'Java',
    title: 'Start in Java',
    short: 'Bazele Java pentru programatori care vor să intre în lumea backend-ului enterprise și a Android-ului.',
    topics: [
      'Sintaxa Java și JVM-ul',
      'OOP: încapsulare, moștenire, polimorfism',
      'Colecții, generice și stream-uri',
      'Lucrul cu fișiere și I/O',
      'Multithreading — concepte de bază',
      'Proiect final: aplicație consolă completă',
    ],
    duration: '10 săptămâni',
    format: 'Live online + cod review săptămânal',
    level: 'Începător - intermediar',
  },
  {
    icon: Globe2,
    tag: 'Web Dev',
    title: 'The Bases of Web Development',
    short: 'CSS, HTML și JavaScript — combinația care face internetul. Construiește primele tale pagini live.',
    topics: [
      'HTML semantic și accessibility',
      'CSS modern: Flexbox, Grid și animații',
      'JavaScript: DOM, evenimente, asincronicitate',
      'Responsive design pentru toate device-urile',
      'Introducere în Git și deployment',
      'Proiect: portfoliu personal deployat live',
    ],
    duration: '12 săptămâni',
    format: 'Workshop-uri practice + mentorat',
    level: 'Începător — recomandat după Python',
  },
  {
    icon: Database,
    tag: 'Database',
    title: 'SQL & MongoDB',
    short: 'Datele sunt fundamentul oricărei aplicații. Învață să le modelezi, să le interoghezi și să le scalezi.',
    topics: [
      'Modelare relațională și normalizare',
      'SQL: SELECT, JOIN, agregări complexe',
      'Indecși și optimizarea query-urilor',
      'MongoDB: documente și colecții',
      'Aggregation pipeline în MongoDB',
      'Cazuri reale: când alegi SQL vs NoSQL',
    ],
    duration: '6 săptămâni',
    format: 'Live online + laborator practic',
    level: 'Intermediar',
  },
];

export default function DespreCurs() {
  return (
    <>
      <PageHero
        eyebrow="Despre curs · Catalog complet"
        title="Patru cursuri. Un singur drum: de la zero la primul tău proiect."
        description="Click pe orice card pentru a vedea conținutul complet, durata și nivelul recomandat."
        accent="Cursuri"
      />

      {/* Course grid — 2 column expandable */}
      <section id="despre_grid" className="relative py-16 md:py-20 bg-mesh-blue">
        <div className="absolute right-6 top-20 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Catalog</span>
        </div>
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((c, i) => (
                  <CourseExpandCard key={i} course={c} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method section */}
      <section id="despre_method" className="relative py-16 md:py-20 bg-white overflow-visible">
        <div className="absolute left-6 bottom-12 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Metoda</span>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxImage
            src="https://content-studio.biela.dev/cover/3840x2160/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907785778.png/wide-cinematic-shot-of-a-bright-modern-classroom-with-clean-whiteboards-and-study-materials-natural-light-from-tall-windows-navy-and-white-color-scheme-shallow-depth-of-field-professional-photography-allow-only-white-person-european-3840x2160.webp?search_term=classroom,learning,whiteboard,coding&img_prompt=Wide+cinematic+shot+of+a+bright+modern+classroom+with+clean+whiteboards+and+study+materials,+natural+light+from+tall+windows,+navy+and+white+color+scheme,+shallow+depth+of+field,+professional+photography&w=1920&h=1080&type=image"
            alt="Classroom background"
            className="w-full h-full object-cover opacity-[0.05]"
            scale={1.8}
          />
        </div>
        <div className="max-w-[2400px] mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-y-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-5">
              <SectionHeader
                eyebrow="Metoda noastră"
                title="Învățare prin cod, mentor lângă tine, proiect la final."
              />
              <p className="text-xl text-ink-900/70 font-extralight mt-8 leading-relaxed">
                Fiecare curs înseamnă grupe mici (max. 16 persoane), două sesiuni live pe săptămână, sesiuni 1:1 cu mentorul tău și un proiect final pe care îl prezinți.
              </p>
            </div>
            <div className="col-span-12 px-4 md:col-start-7 md:col-span-4">
              {[
                ['01', 'Aplici', 'Completezi formularul. Răspundem în 48h.'],
                ['02', 'Interviu scurt', '15 minute să vedem unde ești.'],
                ['03', 'Începi', 'Ai mentor și acces la materiale.'],
                ['04', 'Construiești', 'Proiect final + portofoliu.'],
              ].map(([n, t, d], i) => (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 py-5 border-b border-paper-300 last:border-b-0"
                >
                  <span className="font-display text-3xl text-amber-accent font-light">{n}</span>
                  <div>
                    <h4 className="font-display text-xl text-ink-900 font-light">{t}</h4>
                    <p className="text-lg text-ink-900/60 font-extralight mt-1">{d}</p>
                  </div>
                </motion.div>
              ))}
              <Link
                to="/aplicare"
                className="inline-flex items-center gap-2 mt-8 text-lg text-signal-500 hover:text-amber-accent font-light border-b border-signal-500/40 pb-1"
              >
                Aplică pentru curs <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

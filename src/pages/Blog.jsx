import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Clock, User } from 'lucide-react';
import PageHero from '@/components/custom/PageHero';
import SectionHeader from '@/components/custom/SectionHeader';
import SpotlightCard from '@/components/ui/spotlight-card';

const articles = [
  {
    category: 'Python',
    title: 'De ce Python este limbajul cu care merită să începi în 2026',
    excerpt: 'Sintaxă curată, comunitate masivă, aplicabil în data science, web și automation. Analizăm de ce Python rămâne prima alegere pentru cei care intră în programare.',
    author: 'Andrei Mihalache',
    readTime: '6 min',
    date: '12 Mai 2026',
    img: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907003984.png/cinematic-close-up-of-laptop-screen-showing-python-code-with-blue-syntax-highlighting-warm-desk-light-navy-and-amber-tones-professional-photography-allow-only-white-person-european-1800x1200.webp?search_term=python,coding,laptop,programming&img_prompt=Cinematic+close+up+of+laptop+screen+showing+Python+code+with+blue+syntax+highlighting,+warm+desk+light,+navy+and+amber+tones,+professional+photography&w=900&h=600&type=image',
    featured: true,
  },
  {
    category: 'Database',
    title: 'SQL vs MongoDB: când alegi fiecare?',
    excerpt: 'O comparație practică între bazele de date relaționale și NoSQL — cu exemple din aplicații reale.',
    author: 'Mihai Pavel',
    readTime: '8 min',
    date: '5 Mai 2026',
    img: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907003900.png/modern-monitor-displaying-sql-queries-and-database-visualization-in-blue-color-scheme-clean-desk-setup-navy-background-professional-studio-lighting-allow-only-white-person-european-1800x1200.webp?search_term=database,server,code,technology&img_prompt=Modern+monitor+displaying+SQL+queries+and+database+visualization+in+blue+color+scheme,+clean+desk+setup,+navy+background,+professional+studio+lighting&w=900&h=600&type=image',
  },
  {
    category: 'Web Dev',
    title: 'Fundamentele web development: de la HTML la framework-uri',
    excerpt: 'Drumul corect prin tehnologiile web — HTML semantic, CSS modern, JavaScript și apoi framework-urile.',
    author: 'Raluca Stoica',
    readTime: '10 min',
    date: '28 Aprilie 2026',
    img: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907004185.png/cinematic-shot-of-code-editor-with-html-and-css-open-blue-monitor-glow-clean-modern-desk-navy-and-amber-aesthetic-professional-studio-photography-allow-only-white-person-european-1800x1200.webp?search_term=web,development,monitor,code,html&img_prompt=Cinematic+shot+of+code+editor+with+HTML+and+CSS+open,+blue+monitor+glow,+clean+modern+desk,+navy+and+amber+aesthetic,+professional+studio+photography&w=900&h=600&type=image',
  },
  {
    category: 'Career',
    title: 'Cum arată primul interviu tehnic și cum te pregătești',
    excerpt: 'Sfaturi concrete de la mentori care intervievează zilnic candidați juniori.',
    author: 'Andrei Mihalache',
    readTime: '7 min',
    date: '20 Aprilie 2026',
    img: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907004485.png/modern-office-meeting-room-with-two-professionals-in-conversation-at-a-sleek-table-golden-hour-window-light-navy-blue-walls-professional-film-photography-allow-only-white-person-european-1800x1200.webp?search_term=interview,office,professional,meeting&img_prompt=Modern+office+meeting+room+with+two+professionals+in+conversation+at+a+sleek+table,+golden+hour+window+light,+navy+blue+walls,+professional+film+photography&w=900&h=600&type=image',
  },
  {
    category: 'JavaScript',
    title: 'Async/await pe înțelesul tuturor',
    excerpt: 'Programarea asincronă explicată cu metafore din viața reală și cod care chiar funcționează.',
    author: 'Raluca Stoica',
    readTime: '9 min',
    date: '15 Aprilie 2026',
    img: 'https://content-studio.biela.dev/cover/1800x1200/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907005014.png/developer-typing-on-laptop-with-javascript-code-visible-cozy-workspace-with-warm-amber-desk-lamp-blue-screen-glow-cinematic-depth-of-field-allow-only-white-person-european-1800x1200.webp?search_term=javascript,coding,laptop,developer&img_prompt=Developer+typing+on+laptop+with+JavaScript+code+visible,+cozy+workspace+with+warm+amber+desk+lamp,+blue+screen+glow,+cinematic+depth+of+field&w=900&h=600&type=image',
  },
];

export default function Blog() {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <PageHero
        eyebrow="Blog · Articole"
        title="Idei, lecții și povești din lumea programării."
        description="Articole scrise de mentori și absolvenți. Despre Python, baze de date, web dev și ce înseamnă să intri în tech."
        accent="Blog"
      />

      {/* Featured */}
      {featured && (
        <section id="blog_featured" className="relative py-16 md:py-20 bg-white">
          <div className="absolute left-6 bottom-12 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
            <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Featured</span>
          </div>
          <div className="max-w-[2400px] mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="grid md:grid-cols-12 gap-10 group cursor-pointer"
                >
                  <div className="md:col-span-7 overflow-hidden">
                    <img
                      src={featured.img}
                      alt={featured.title}
                      className="w-full h-[28rem] md:h-[34rem] object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)' }}
                    />
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-5">
                      <span className="bg-amber-accent text-ink-900 text-lg px-3 py-1 font-extralight">★ Featured</span>
                      <span className="text-lg uppercase tracking-[0.2em] text-signal-500 font-extralight">{featured.category}</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-ink-900 font-light leading-tight group-hover:text-signal-500 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-xl text-ink-900/70 font-extralight mt-6 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-6 mt-8 text-lg text-ink-900/60 font-extralight">
                      <span className="flex items-center gap-2"><User className="w-4 h-4" strokeWidth={1.5} />{featured.author}</span>
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4" strokeWidth={1.5} />{featured.readTime}</span>
                      <span>{featured.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 mt-8 text-lg text-signal-500 font-light border-b border-signal-500/40 pb-1 w-fit">
                      Citește articolul <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section id="blog_grid" className="relative py-16 md:py-20 bg-paper-100">
        <div className="absolute right-6 top-20 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">Blog · Archive</span>
        </div>
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <SectionHeader eyebrow="Toate articolele" title="Mai mult de citit" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {rest.map((a, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <SpotlightCard className="group cursor-pointer h-full p-0">
                      <div className="overflow-hidden">
                        <img src={a.img} alt={a.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <div className="p-7 flex flex-col h-full">
                        <span className="text-lg uppercase tracking-[0.2em] text-signal-500 font-extralight">{a.category}</span>
                        <h3 className="font-display text-2xl md:text-3xl text-ink-900 font-light mt-3 leading-tight group-hover:text-signal-500 transition-colors">
                          {a.title}
                        </h3>
                        <p className="text-lg text-ink-900/70 font-extralight mt-4 leading-relaxed">{a.excerpt}</p>
                        <div className="flex items-center gap-5 mt-auto pt-6 text-lg text-ink-900/60 font-extralight">
                          <span className="flex items-center gap-2"><User className="w-4 h-4" strokeWidth={1.5} />{a.author}</span>
                          <span className="flex items-center gap-2"><Clock className="w-4 h-4" strokeWidth={1.5} />{a.readTime}</span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail } from 'lucide-react';
import PageHero from '@/components/custom/PageHero';
import ParallaxImage from '@/components/ParallaxImage';
import SectionHeader from '@/components/custom/SectionHeader';

const team = [
  {
    name: "Christian Lungu",
    role: "Founder & Head of Curriculum",
    bio: "Vizionar tech cu experienta extinsa in educatie si dezvoltare software. A pus bazele insightED cu convingerea ca fiecare student merita un mentor care a trecut prin aceleasi provocari.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEX73KcjKg6bQ/profile-displayphoto-shrink_400_400/B4DZZxXqsrGgAk-/0/1745658752198?e=1779321600&v=beta&t=WywCVxO3mDgUwKOdqvsx_VOInYNNKcSCQ1pWZue7B8U",
    expertise: ["Python", "System Design", "Mentorat"],
    linkedin: "#",
    email: "christian@insighted.ro",
  },
  {
    name: "Andrei Durnea",
    role: "Lead Mentor — Web Development",
    bio: "Frontend Engineer pasionat de performanta si design modern. Preda HTML, CSS si JavaScript cu focus pe proiecte practice si cod curat.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEu5Y9P9pI5Lw/profile-displayphoto-shrink_400_400/B4DZ0kCIObIAAg-/0/1774426031578?e=1779321600&v=beta&t=rWD7pnlEzDAxR2Dx_1lkdU7ivdKRDt_WGC3ezIXhfpE",
    expertise: ["JavaScript", "React", "CSS"],
    linkedin: "#",
    email: "andrei@insighted.ro",
  },
  {
    name: "Teodor Gurzu",
    role: "Database & Backend Mentor",
    bio: "Backend Engineer cu pasiune pentru modelarea datelor si arhitecturi scalabile. Dedicat sa faca conceptele complexe de SQL si MongoDB accesibile tuturor.",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQFXpSPtyOqYmQ/profile-displayphoto-scale_400_400/B4DZmVlvRLJEAo-/0/1759151324817?e=1779321600&v=beta&t=d_W_jqkJH_c27MtYbQTdz3UstMlaNafUXwPv4vEXYy4",
    expertise: ["SQL", "MongoDB", "Node.js"],
    linkedin: "#",
    email: "teodor@insighted.ro",
  },
  {
    name: "Mugurel Balan",
    role: "Java & Python Mentor",
    bio: "Software Engineer cu experienta atat in Java cat si in Python. Crede in invatarea prin proiecte reale si in mentoratul care inspira curiozitate si gandire algoritmica.",
    img: "https://media.licdn.com/dms/image/v2/D5603AQG8YNLTNvso9Q/profile-displayphoto-scale_400_400/B56ZjgJwBfH8Ao-/0/1756107311096?e=1779321600&v=beta&t=gfh8z1qOXmfEL0gZ0GhONflPLtQoPb7AuH_0JmG4w7s",
    expertise: ["Java", "Python", "Algoritmi"],
    linkedin: "#",
    email: "mugurel@insighted.ro",
  },
];

export default function Echipa() {
  return (
    <>
      <PageHero
        eyebrow="Echipa INSIGHTED"
        title="Mentori care au trecut prin ce înveți tu acum."
        description="Patru profesioniști din industrie. Patru drumuri diferite. O singură convingere — învățarea reală vine din proiecte și conversații, nu din slide-uri."
        accent="Team"
      />

      {/* Team grid */}
      <section id="echipa_grid" className="relative py-16 md:py-20 bg-white">
        <div className="absolute left-6 bottom-12 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Mentori</span>
        </div>
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12 }}
                    whileHover={{ y: -8 }}
                    className="group flex flex-col h-full"
                  >
                    {/* Image with notched corner */}
                    <div
                      className="relative overflow-hidden bg-paper-200 h-[480px]"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)' }}
                    >
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Big number */}
                      <div className="absolute top-4 left-4 font-display text-6xl font-light text-white/90 mix-blend-difference leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="pt-6 flex flex-col flex-1">
                      <div className="text-lg uppercase tracking-[0.2em] text-signal-500 font-extralight mb-2">
                        {person.role}
                      </div>
                      <h3 className="font-display text-3xl text-ink-900 font-light leading-tight">
                        {person.name}
                      </h3>
                      <p className="text-lg text-ink-900/70 font-extralight mt-4 leading-relaxed flex-1">
                        {person.bio}
                      </p>

                      {/* Expertise tags */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {person.expertise.map((e) => (
                          <span key={e} className="text-lg px-3 py-1 bg-signal-50 text-signal-500 font-extralight border border-signal-100">
                            {e}
                          </span>
                        ))}
                      </div>

                      {/* LinkedIn + Email */}
                      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-paper-300">
                        <a
                          href={person.linkedin}
                          className="flex-1 flex items-center justify-center gap-2 py-3 bg-ink-900 text-white text-lg font-light hover:bg-signal-500 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                          LinkedIn
                        </a>
                        <a
                          href={`mailto:${person.email}`}
                          className="px-4 py-3 border border-paper-300 text-ink-900 hover:border-signal-500 hover:text-signal-500 transition-colors"
                        >
                          <Mail className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join us */}
      <section id="echipa_join" className="py-16 md:py-20 bg-paper-100 relative overflow-visible">
        <div className="absolute right-6 top-16 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Careers</span>
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxImage
            src="https://content-studio.biela.dev/cover/3840x2160/i/images-library/69a93e1cff67122f13bd4709/1777906598876-69a93e1cff67122f13bd4709/originals/1777907794754.png/wide-shot-of-a-modern-open-office-space-with-warm-golden-hour-light-streaming-through-windows-clean-desks-with-monitors-blurred-slightly-navy-and-amber-tones-professional-atmosphere-shallow-depth-of-field-allow-only-white-person-european-3840x2160.webp?search_term=team,collaboration,office,work&img_prompt=Wide+shot+of+a+modern+open+office+space+with+warm+golden+hour+light+streaming+through+windows,+clean+desks+with+monitors,+blurred+slightly,+navy+and+amber+tones,+professional+atmosphere,+shallow+depth+of+field&w=1920&h=1080&type=image"
            alt="Office background"
            className="w-full h-full object-cover opacity-[0.06]"
            scale={1.8}
          />
        </div>
        <div
          className="absolute -top-20 -right-20 w-[40vw] h-[40vw] opacity-15 pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 60%)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
        />
        <div className="max-w-[2400px] mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-7">
              <SectionHeader
                eyebrow="Vrei să te alături?"
                title="Căutăm mereu mentori cu experiență reală în industrie."
                description="Dacă ai 5+ ani în tech și vrei să predai unei generații care construiește viitorul, scrie-ne."
              />
              <a
                href="mailto:hello@insighted.ro"
                className="inline-flex items-center gap-3 mt-8 bg-ink-900 text-white px-8 py-4 rounded-full text-lg font-light hover:bg-signal-500 transition-colors"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
                hello@insighted.ro
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

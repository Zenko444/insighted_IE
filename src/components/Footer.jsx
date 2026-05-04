import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="global_footer" className="relative bg-ink-900 text-white overflow-hidden">
      {/* atmospheric shape */}
      <div
        className="absolute pointer-events-none -top-32 -right-32 w-[60vw] h-[60vw] opacity-20"
        style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 60%)', clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
      />
      <div
        className="absolute pointer-events-none -bottom-40 -left-20 w-[40vw] h-[40vw] opacity-15"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 60%)', clipPath: 'ellipse(60% 50% at 30% 50%)' }}
      />

      <div className="max-w-[2400px] mx-auto relative">
        <div className="grid grid-cols-12 pt-20 pb-10">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Brand */}
              <div className="md:col-span-5">
                <Link to="/" className="flex items-center gap-2 font-display text-3xl">
                  <GraduationCap className="w-7 h-7" strokeWidth={1.5} />
                  <span>insight<span className="font-medium text-signal-300">ED</span></span>
                </Link>
                <p className="text-lg font-extralight text-signal-100/70 mt-6 max-w-md leading-relaxed">
                  Better than ever! O platformă educațională unde drumul tău în tech începe cu pași clari, mentori reali și proiecte care contează.
                </p>

                <div className="flex gap-3 mt-8">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full border border-signal-200/20 flex items-center justify-center hover:bg-signal-500 hover:border-signal-500 transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Nav */}
              <div className="md:col-span-3">
                <h4 className="text-lg font-display font-light text-amber-glow mb-5">Navigare</h4>
                <ul className="space-y-3">
                  {[['/', 'Acasă'], ['/despre-curs', 'Despre curs'], ['/echipa', 'Echipa'], ['/blog', 'Blog'], ['/tutoriale', 'Tutoriale']].map(([to, l]) => (
                    <li key={to}>
                      <Link to={to} className="text-lg font-extralight text-signal-100/80 hover:text-white transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="md:col-span-4">
                <h4 className="text-lg font-display font-light text-amber-glow mb-5">Contact</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-lg font-extralight text-signal-100/80">
                    <Mail className="w-4 h-4 mt-1.5 flex-shrink-0 text-signal-300" strokeWidth={1.5} />
                    hello@insighted.ro
                  </li>
                  <li className="flex items-start gap-3 text-lg font-extralight text-signal-100/80">
                    <MapPin className="w-4 h-4 mt-1.5 flex-shrink-0 text-signal-300" strokeWidth={1.5} />
                    Str. Universității 14, București
                  </li>
                </ul>
                <Link
                  to="/aplicare"
                  className="inline-flex items-center gap-2 mt-6 text-amber-glow hover:text-white transition-colors text-lg font-extralight border-b border-amber-glow/40 pb-1"
                >
                  Aplică pentru curs →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slim copyright bar */}
        <div className="border-t border-signal-200/10">
          <div className="grid grid-cols-12 py-4">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 flex flex-col md:flex-row justify-between items-center gap-2">
              <p className="text-lg font-extralight text-signal-100/50">
                © {new Date().getFullYear()} insightED. Toate drepturile rezervate.
              </p>
              <p className="text-lg font-extralight text-signal-100/40">
                Developed by{' '}
                <a href="https://www.instagram.com/insighted2026" target="_blank" rel="noopener noreferrer" className="text-signal-200/70 hover:text-white transition-colors">
                  InsightED
                </a>
                , powered by{' '}
                <a href="https://teachmecode.ae/" target="_blank" rel="noopener noreferrer" className="text-signal-200/70 hover:text-white transition-colors">
                  UAIC IE32
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

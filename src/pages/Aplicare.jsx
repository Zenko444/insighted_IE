import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/custom/PageHero';
import PromoBanner from '@/components/custom/PromoBanner';

const courses = [
  'Introduction to Python',
  'Start in Java',
  'The Bases of Web Development (CSS, HTML, JS)',
  'SQL & MongoDB',
];

export default function Aplicare() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '', email: '', phone: '', course: courses[0], experience: '', motivation: '', referral: '',
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Numele este obligatoriu';
    if (!form.email.trim()) e.email = 'Emailul este obligatoriu';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email invalid';
    if (!form.motivation.trim()) e.motivation = 'Spune-ne câteva cuvinte';
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    // Placeholder for Google Forms API integration
    // const GOOGLE_FORM_API_ENDPOINT = 'YOUR_GOOGLE_FORMS_API_KEY_HERE';
    // fetch(GOOGLE_FORM_API_ENDPOINT, { method: 'POST', body: new FormData(ev.target) })
    setSubmitted(true);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  return (
    <>
      <PageHero
        eyebrow="Formular de aplicare"
        title="Sesiunea 2026 — locurile sunt limitate."
        description="Completează formularul și revenim la tine în maxim 48 de ore cu următorii pași."
        accent="Apply"
      />

      {/* Promo banner */}
      <section id="aplicare_promo" className="py-12 bg-white">
        <PromoBanner />
      </section>

      {/* Form */}
      <section id="aplicare_form" className="relative py-16 md:py-20 bg-paper-100">
        <div className="absolute right-6 top-20 -rotate-90 origin-top-right z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Apply</span>
        </div>
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border-2 border-signal-500 p-12 md:p-20 text-center max-w-3xl mx-auto"
                >
                  <CheckCircle2 className="w-16 h-16 text-amber-accent mx-auto mb-6" strokeWidth={1.5} />
                  <h2 className="font-display text-4xl md:text-5xl text-ink-900 font-light">
                    Aplicarea ta a fost <span className="text-signal-500 italic">trimisă</span>
                  </h2>
                  <p className="text-xl text-ink-900/70 font-extralight mt-6 leading-relaxed">
                    Mulțumim! Echipa noastră va analiza aplicarea și revine la tine în maxim 48 de ore cu un email și un slot de interviu scurt.
                  </p>
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-12 gap-12">
                  {/* Side info */}
                  <div className="md:col-span-4 flex flex-col justify-start">
                    <div className="text-lg uppercase tracking-[0.3em] text-signal-500 font-extralight mb-5">
                      Ce urmează?
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-ink-900 font-light leading-tight">
                      Procesul în 3 pași
                    </h2>
                    <div className="mt-10 space-y-7">
                      {[
                        ['01', 'Completezi formularul', 'Toate detaliile despre tine.'],
                        ['02', 'Răspundem în 48h', 'Email cu următorii pași.'],
                        ['03', 'Interviu scurt online', '15 minute, conversațional.'],
                      ].map(([n, t, d]) => (
                        <div key={n} className="flex gap-5">
                          <span className="font-display text-3xl text-amber-accent font-light">{n}</span>
                          <div>
                            <div className="font-display text-xl text-ink-900 font-light">{t}</div>
                            <div className="text-lg text-ink-900/60 font-extralight mt-1">{d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form */}
                  <form
                    noValidate
                    onSubmit={onSubmit}
                    className="md:col-span-8 bg-white border border-paper-300 p-8 md:p-12 space-y-7"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-lg text-ink-900 font-light block mb-2">Nume complet *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={onChange}
                          className="w-full bg-paper-100 border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
                        />
                        {errors.name && <p className="text-lg text-amber-accent mt-1 font-extralight">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-lg text-ink-900 font-light block mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange}
                          className="w-full bg-paper-100 border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
                        />
                        {errors.email && <p className="text-lg text-amber-accent mt-1 font-extralight">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-lg text-ink-900 font-light block mb-2">Telefon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={onChange}
                          className="w-full bg-paper-100 border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-lg text-ink-900 font-light block mb-2">Curs dorit *</label>
                        <select
                          name="course"
                          value={form.course}
                          onChange={onChange}
                          className="w-full bg-paper-100 border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none"
                        >
                          {courses.map((c) => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-lg text-ink-900 font-light block mb-2">Experiență anterioară (opțional)</label>
                      <input
                        type="text"
                        name="experience"
                        value={form.experience}
                        onChange={onChange}
                        placeholder="Ex: HTML basic, niciun cod scris niciodată..."
                        className="w-full bg-paper-100 border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-lg text-ink-900 font-light block mb-2">De ce vrei să înveți programare? *</label>
                      <textarea
                        name="motivation"
                        rows="4"
                        value={form.motivation}
                        onChange={onChange}
                        className="w-full bg-paper-100 border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors resize-none"
                      />
                      {errors.motivation && <p className="text-lg text-amber-accent mt-1 font-extralight">{errors.motivation}</p>}
                    </div>

                    <div>
                      <label className="text-lg text-ink-900 font-light block mb-2">Cum ai aflat de noi?</label>
                      <input
                        type="text"
                        name="referral"
                        value={form.referral}
                        onChange={onChange}
                        className="w-full bg-paper-100 border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <p className="text-lg text-ink-900/50 font-extralight italic">
                      * Formularul va fi conectat la Google Forms API (placeholder pentru cheia de integrare).
                    </p>

                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className="inline-flex items-center gap-3 bg-amber-accent text-ink-900 px-8 py-4 rounded-full text-lg font-light hover:bg-amber-glow transition-all"
                      style={{ boxShadow: '0 10px 40px -10px rgba(245, 158, 11, 0.5)' }}
                    >
                      Trimite aplicarea
                      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                    </motion.button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

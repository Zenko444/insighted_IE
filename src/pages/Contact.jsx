import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import PageHero from '@/components/custom/PageHero';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!form.name.trim()) e.name = 'Numele este obligatoriu';
    if (!form.email.trim()) e.email = 'Emailul este obligatoriu';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email invalid';
    if (!form.message.trim()) e.message = 'Mesajul este obligatoriu';
    if (Object.keys(e).length) { setErrors(e); return; }
    // Placeholder for Google Forms API integration
    // const GOOGLE_FORM_API_ENDPOINT = 'YOUR_GOOGLE_FORMS_API_KEY_HERE';
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contactează-ne"
        title="Întrebări? Idei? Suntem aici."
        description="Răspundem în maxim 24 de ore. Pentru aplicări la cursuri, folosește pagina dedicată."
        accent="Contact"
      />

      <section id="contact_form" className="relative py-16 md:py-20 bg-white">
        <div className="absolute left-6 bottom-12 -rotate-90 origin-bottom-left z-10 pointer-events-none hidden md:block">
          <span className="text-lg uppercase tracking-[0.4em] text-ink-900/10 font-extralight">insightED · Contact</span>
        </div>
        <div className="max-w-[2400px] mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 px-4 md:col-start-2 md:col-span-10">
              <div className="grid md:grid-cols-12 gap-12">
                {/* Contact info — left */}
                <div className="md:col-span-5 flex flex-col justify-start">
                  <div className="text-lg uppercase tracking-[0.3em] text-signal-500 font-extralight mb-5">
                    Detalii de contact
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-ink-900 font-light leading-tight">
                    Patru moduri de a ajunge la noi
                  </h2>

                  <div className="mt-10 space-y-7">
                    {[
                      { icon: Mail, label: 'Email', value: 'hello@insighted.ro', href: 'mailto:hello@insighted.ro' },
                      { icon: Phone, label: 'Telefon', value: '+40 21 234 5678', href: 'tel:+40212345678' },
                      { icon: MessageCircle, label: 'WhatsApp', value: '+40 750 123 456', href: '#' },
                      { icon: MapPin, label: 'Sediu', value: 'Str. Universității 14, București', href: '#' },
                    ].map(({ icon: Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-start gap-5 group hover:translate-x-1 transition-transform"
                      >
                        <div className="w-12 h-12 rounded-md bg-signal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-signal-500 transition-colors">
                          <Icon className="w-5 h-5 text-signal-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        <div>
                          <div className="text-lg text-signal-500 uppercase tracking-wider font-extralight">{label}</div>
                          <div className="text-xl text-ink-900 font-extralight mt-1">{value}</div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Hours */}
                  <div className="mt-12 p-6 bg-paper-100 border-l-2 border-amber-accent">
                    <div className="text-lg uppercase tracking-[0.2em] text-amber-accent font-extralight mb-3">
                      Program
                    </div>
                    <div className="space-y-1 text-lg text-ink-900 font-extralight">
                      <div>Luni - Vineri: 09:00 - 18:00</div>
                      <div>Sâmbătă: 10:00 - 14:00</div>
                      <div className="text-ink-900/60">Duminică: închis</div>
                    </div>
                  </div>
                </div>

                {/* Form — right */}
                <div className="md:col-span-7">
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-paper-100 border-2 border-signal-500 p-10 md:p-14 text-center h-full flex flex-col items-center justify-center"
                    >
                      <CheckCircle2 className="w-14 h-14 text-amber-accent mx-auto mb-5" strokeWidth={1.5} />
                      <h3 className="font-display text-3xl text-ink-900 font-light">Mesajul a fost trimis</h3>
                      <p className="text-lg text-ink-900/70 font-extralight mt-3 max-w-md">
                        Mulțumim! Echipa va răspunde în maxim 24 de ore.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      noValidate
                      onSubmit={onSubmit}
                      className="bg-paper-100 border border-paper-300 p-8 md:p-10 space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-lg text-ink-900 font-light block mb-2">Nume *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            className="w-full bg-white border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
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
                            className="w-full bg-white border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
                          />
                          {errors.email && <p className="text-lg text-amber-accent mt-1 font-extralight">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="text-lg text-ink-900 font-light block mb-2">Subiect</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={onChange}
                          className="w-full bg-white border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-lg text-ink-900 font-light block mb-2">Mesaj *</label>
                        <textarea
                          name="message"
                          rows="6"
                          value={form.message}
                          onChange={onChange}
                          className="w-full bg-white border border-paper-300 px-4 py-3 text-lg font-extralight focus:border-signal-500 focus:outline-none transition-colors resize-none"
                        />
                        {errors.message && <p className="text-lg text-amber-accent mt-1 font-extralight">{errors.message}</p>}
                      </div>

                      <p className="text-lg text-ink-900/50 font-extralight italic">
                        * Formular conectat la Google Forms API (placeholder pentru cheia de integrare).
                      </p>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                        className="inline-flex items-center gap-3 bg-ink-900 text-white px-8 py-4 rounded-full text-lg font-light hover:bg-signal-500 transition-colors"
                      >
                        <Send className="w-5 h-5" strokeWidth={1.5} />
                        Trimite mesajul
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

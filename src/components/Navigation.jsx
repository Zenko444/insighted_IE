import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap } from 'lucide-react';

const links = [
  { to: '/', label: 'Acasă' },
  { to: '/despre-curs', label: 'Despre curs' },
  { to: '/echipa', label: 'Echipa' },
  { to: '/blog', label: 'Blog' },
  { to: '/tutoriale', label: 'Tutoriale' },
  { to: '/aplicare', label: 'Aplicare' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const baseTextClass = isHome && !scrolled ? 'text-white' : 'text-ink-900';

  return (
    <header
      id="global_navigation"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/85 backdrop-blur-md border-b border-paper-300' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[2400px] mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 flex items-center justify-between h-20">
            <Link to="/" className={`flex items-center gap-2 font-display text-2xl tracking-tight ${baseTextClass}`}>
              <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
              <span>insight<span className="font-medium text-signal-500">ED</span></span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-lg font-extralight transition-colors duration-300 ${baseTextClass} hover:text-signal-500 ${
                      isActive ? 'border-b border-signal-500 pb-1' : ''
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <button
              className={`lg:hidden p-2 ${baseTextClass}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-paper-300"
          >
            <div className="grid grid-cols-12 py-4">
              <div className="col-span-12 px-4 md:col-start-2 md:col-span-10 flex flex-col gap-3">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      `text-lg font-extralight py-2 ${isActive ? 'text-signal-500' : 'text-ink-900'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

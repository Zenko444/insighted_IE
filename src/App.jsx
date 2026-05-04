import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import DespreCurs from '@/pages/DespreCurs';
import Echipa from '@/pages/Echipa';
import Tutoriale from '@/pages/Tutoriale';
import Aplicare from '@/pages/Aplicare';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <div id="app_root" className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/despre-curs" element={<DespreCurs />} />
          <Route path="/echipa" element={<Echipa />} />
          <Route path="/tutoriale" element={<Tutoriale />} />
          <Route path="/aplicare" element={<Aplicare />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

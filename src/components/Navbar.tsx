import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span className="text-primary-foreground font-black font-display text-lg">BD</span>
          </div>
          <div className="leading-tight">
            <p className="font-display font-black text-white text-xl tracking-tight leading-none">Blue Diamond</p>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Heating</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0234567891"
          className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-sm"
        >
          <Phone size={15} />
          0234 567 891
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl text-white hover:bg-primary/10 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border/40 px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0234567891"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-3 rounded-full shadow-xl text-sm mt-2"
            >
              <Phone size={15} />
              0234 567 891
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

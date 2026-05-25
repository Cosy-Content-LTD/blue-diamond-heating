import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Shield, Award, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1600&q=80')` }}
      />
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-bold uppercase tracking-widest">London&apos;s Premier Plumbing</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-white text-6xl sm:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
          >
            Blue
            <br />
            <span className="text-accent">Diamond</span>
            <br />
            Heating
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-xl font-medium leading-relaxed mb-10 max-w-xl"
          >
            10+ years of trusted plumbing expertise across South Bank, Waterloo, and Greater London. Certified professionals, every time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="tel:0234567891"
              className="flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
            >
              <Phone size={20} />
              Call Now: 0234 567 891
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 bg-white/10 border border-white/30 backdrop-blur-sm text-white font-bold px-8 py-5 rounded-full hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
            >
              Get a Free Quote
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Shield size={16} className="text-accent" />
              </div>
              <span className="text-sm font-bold">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <Award size={16} className="text-accent" />
              </div>
              <span className="text-sm font-bold">Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="text-accent font-black text-xs">10+</span>
              </div>
              <span className="text-sm font-bold">Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

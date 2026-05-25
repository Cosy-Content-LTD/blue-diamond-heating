import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Clock4, UserCheck } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    stat: '100%',
    label: 'Fully Insured',
    detail: 'Every job is covered. Peace of mind from the moment we arrive.',
  },
  {
    icon: Star,
    stat: '10+',
    label: 'Years Experience',
    detail: 'Over a decade serving London homes and businesses with pride.',
  },
  {
    icon: Clock4,
    stat: 'Fast',
    label: 'Quick Response',
    detail: 'We understand emergencies. Our team moves quickly to protect your property.',
  },
  {
    icon: UserCheck,
    stat: 'Cert.',
    label: 'Certified Pros',
    detail: 'All engineers are fully qualified and background-checked for your safety.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-section-alt py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                alt="Expert plumber inspecting pipework"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-6 bg-background rounded-2xl shadow-2xl p-6 max-w-[200px] border border-border/40"
            >
              <div className="text-5xl font-black text-primary font-display mb-1">10+</div>
              <p className="text-heading font-bold text-sm">Years of trusted service in London</p>
            </motion.div>
          </div>

          {/* Right — content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
            >
              Why Blue Diamond
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-heading text-5xl sm:text-6xl leading-none tracking-tight mb-8"
            >
              Built on
              <br />
              <span className="text-primary">Trust.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-foreground/70 text-lg font-medium leading-relaxed mb-12"
            >
              We don&apos;t just fix pipes — we build lasting relationships with every customer. Our reputation is built on showing up, doing great work, and leaving your home better than we found it.
            </motion.p>

            <div className="grid grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-background rounded-2xl p-6 border border-border/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <r.icon size={20} className="text-primary" />
                  </div>
                  <div className="text-3xl font-black font-display text-primary mb-1">{r.stat}</div>
                  <div className="font-bold text-heading text-sm mb-1">{r.label}</div>
                  <div className="text-foreground/60 text-xs leading-relaxed">{r.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = [
  'South Bank',
  'Waterloo',
  'Borough of Lambeth',
  'Greater London',
  'Southwark',
  'Westminster',
  'Elephant & Castle',
  'Vauxhall',
];

export default function CoverageArea() {
  return (
    <section className="bg-warm-bg py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
            >
              Coverage
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-heading text-5xl sm:text-6xl leading-none tracking-tight mb-6"
            >
              London-Wide
              <br />
              <span className="text-primary">Service.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-foreground/70 text-lg font-medium leading-relaxed mb-10"
            >
              Based in South Bank, we serve customers across Greater London. If you&apos;re not sure if we cover your area, just give us a call.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {areas.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                  className="flex items-center gap-1.5 bg-background border border-border/50 px-4 py-2 rounded-full text-sm font-bold text-heading shadow-sm"
                >
                  <MapPin size={12} className="text-primary" />
                  {area}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] overflow-hidden aspect-square shadow-2xl relative"
          >
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
              alt="Plumber working in London"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-5 border border-border/40 shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-heading text-sm">Headquarters</p>
                    <p className="text-foreground/70 text-xs leading-relaxed">108 Stamford Street, South Bank, Waterloo, London SE1 9NH</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

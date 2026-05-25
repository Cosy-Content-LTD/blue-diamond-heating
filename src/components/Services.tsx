import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Flame, ShowerHead, Wrench, PipetteIcon, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Leak Detection & Repair',
    description: 'Fast, accurate leak identification and repair to protect your property from water damage.',
  },
  {
    icon: Flame,
    title: 'Boiler Servicing',
    description: 'Annual boiler checks and full servicing to keep your heating running efficiently and safely.',
  },
  {
    icon: ShowerHead,
    title: 'Bathroom Installations',
    description: 'Complete bathroom plumbing — from new shower units to full suite replacements.',
  },
  {
    icon: Wrench,
    title: 'General Plumbing',
    description: 'Taps, toilets, cisterns, pipework — all everyday plumbing handled with care and precision.',
  },
  {
    icon: PipetteIcon,
    title: 'Pipe Replacement',
    description: 'Old or burst pipe replacement using modern materials built to last for decades.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Callouts',
    description: 'When disaster strikes, our team responds quickly to contain and fix urgent plumbing issues.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-heading text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight"
            >
              Plumbing
              <br />
              <span className="text-primary">Done Right.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 text-xl font-medium leading-relaxed max-w-lg"
          >
            From emergency repairs to full installations, Blue Diamond Heating covers every aspect of residential and commercial plumbing across London.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-warm-bg border border-border/40 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-display font-black text-heading text-2xl mb-3">{service.title}</h3>
              <p className="text-foreground/70 font-medium leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Image break */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[2rem] overflow-hidden aspect-video relative"
        >
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80"
            alt="Professional plumber at work"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 to-transparent flex items-center">
            <div className="p-12">
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-3">Our Standard</p>
              <p className="font-display font-black text-white text-4xl sm:text-5xl leading-tight max-w-sm">
                Precision. Reliability. Trust.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

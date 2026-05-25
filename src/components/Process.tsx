import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Get in Touch',
    description: 'Call us or fill in our contact form. We&apos;ll listen carefully to understand your plumbing issue.',
  },
  {
    num: '02',
    title: 'Free Assessment',
    description: 'Our certified engineer visits, assesses the situation, and provides a clear, honest quote.',
  },
  {
    num: '03',
    title: 'We Get to Work',
    description: 'Once you&apos;re happy, our team carries out the work with minimal disruption to your home.',
  },
  {
    num: '04',
    title: 'Sign-Off & Guarantee',
    description: 'We clean up after ourselves, walk you through what was done, and back our work with a guarantee.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-heading text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight"
          >
            Simple. Smooth.
            <br />
            <span className="text-primary">Stress-Free.</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border/60 -translate-x-6 z-0" />
              )}
              <div className="relative z-10">
                <div className="text-7xl font-black font-display text-primary/10 leading-none mb-4 select-none">{step.num}</div>
                <h3 className="font-display font-black text-heading text-2xl mb-3">{step.title}</h3>
                <p
                  className="text-foreground/70 font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-bleed image panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <div className="bg-secondary p-14 lg:p-20 flex flex-col justify-center">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Ready to Start?</p>
            <h3 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight mb-6">
              Call us today for a free, no-obligation quote.
            </h3>
            <a
              href="tel:0234567891"
              className="self-start flex items-center gap-3 bg-accent text-secondary font-black px-8 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
            >
              0234 567 891
            </a>
          </div>
          <div className="aspect-video lg:aspect-auto min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Plumbing team on site"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

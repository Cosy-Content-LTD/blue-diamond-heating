import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-widest text-primary mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-heading text-5xl sm:text-6xl leading-none tracking-tight mb-8"
            >
              Let&apos;s Solve
              <br />
              <span className="text-primary">Your Problem.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-foreground/70 text-lg font-medium leading-relaxed mb-12"
            >
              Whether it&apos;s an urgent leak or a planned installation, our team is ready to help. Reach out and we&apos;ll get back to you promptly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <a href="tel:0234567891" className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Phone size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-0.5">Call Us</p>
                  <p className="font-bold text-heading text-xl">0234 567 891</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/50 mb-0.5">Based At</p>
                  <p className="font-bold text-heading">108 Stamford Street, South Bank</p>
                  <p className="text-foreground/60 text-sm">Waterloo, London SE1 9NH</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-warm-bg rounded-3xl p-10 border border-border/40 shadow-xl"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send size={32} className="text-primary" />
                </div>
                <h3 className="font-display font-black text-heading text-3xl mb-3">Message Sent!</h3>
                <p className="text-foreground/70 font-medium">We&apos;ll be in touch shortly. Thank you for choosing Blue Diamond Heating.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-heading mb-2" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 text-heading font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-heading mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 text-heading font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-heading mb-2" htmlFor="message">How Can We Help?</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your plumbing issue..."
                    className="w-full bg-background border border-border/50 rounded-2xl px-5 py-4 text-heading font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold py-5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-lg"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

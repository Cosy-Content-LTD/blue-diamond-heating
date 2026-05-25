import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, ThumbsUp, MapPin } from 'lucide-react';

const items = [
  { icon: Wrench, label: 'Expert Plumbers', sub: 'Fully certified' },
  { icon: Clock, label: 'Prompt Response', sub: 'Available when you need us' },
  { icon: ThumbsUp, label: 'Quality Guaranteed', sub: 'Work done right first time' },
  { icon: MapPin, label: 'London-Based', sub: 'South Bank & Waterloo' },
];

export default function TrustBar() {
  return (
    <section className="bg-secondary py-12 border-y border-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{item.label}</p>
                <p className="text-white/60 text-xs">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

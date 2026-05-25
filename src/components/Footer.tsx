import React from 'react';
import { Phone, MapPin, Shield, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black font-display text-lg">BD</span>
              </div>
              <div>
                <p className="font-display font-black text-white text-lg leading-none">Blue Diamond</p>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">Heating</p>
              </div>
            </div>
            <p className="text-white/60 font-medium leading-relaxed text-sm max-w-xs">
              London&apos;s trusted plumbing specialists with over 10 years of experience serving homes and businesses.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold text-white/80">
                <Shield size={11} className="text-accent" />
                Fully Insured
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold text-white/80">
                <Award size={11} className="text-accent" />
                Certified
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-bold uppercase tracking-widest text-accent text-xs mb-5">Quick Links</p>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Why Us', href: '#why-us' },
                { label: 'How It Works', href: '#process' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white font-medium text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold uppercase tracking-widest text-accent text-xs mb-5">Contact</p>
            <div className="space-y-4">
              <a href="tel:0234567891" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200">
                <Phone size={15} className="text-accent flex-shrink-0" />
                <span className="font-medium text-sm">0234 567 891</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={15} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="font-medium text-sm leading-relaxed">108 Stamford Street, South Bank, Waterloo, London SE1 9NH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Blue Diamond Heating. All rights reserved.</p>
          <p className="text-white/30 text-xs">Professional Plumbing Services &mdash; London, UK</p>
        </div>
      </div>
    </footer>
  );
}

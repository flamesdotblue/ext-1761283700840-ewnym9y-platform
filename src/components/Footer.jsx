import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-10 border-t border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(236,72,153,0.1),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-3"
        >
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Divinoft Developers</h3>
            <p className="text-sm text-neutral-300">
              Full‑stack web development studio based in Salem, Tamil Nadu — serving clients across India with design, development, hosting, and SEO.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Get in touch</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-9042-000-000</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@divinoft.dev</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Salem, Tamil Nadu, India</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>UI/UX & Design to Code</li>
              <li>Python & Django Development</li>
              <li>MERN Stack Development</li>
              <li>Hosting, Redesign & Redevelopment</li>
              <li>SEO for India & Local SEO</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-neutral-300 backdrop-blur"
        >
          © {new Date().getFullYear()} Divinoft Developers — All rights reserved. Built with performance, accessibility, and SEO in mind.
        </motion.div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield } from 'lucide-react';

const work = [
  {
    title: 'E‑Commerce Revamp (Django + React)',
    desc: 'Migrated legacy PHP store to Django API with React frontend. 42% faster LCP and +68% organic traffic.',
    media: 'https://cdn.coverr.co/videos/coverr-ecommerce-on-iphone-5463/1080p.mp4',
    href: '#'
  },
  {
    title: 'SaaS Dashboard (MERN)',
    desc: 'Role‑based analytics with real‑time charts, JWT auth, and CI/CD to Vercel. Multi‑region hosting.',
    media: 'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-1754/1080p.mp4',
    href: '#'
  },
  {
    title: 'Corporate Website Redesign',
    desc: 'Accessibility-first redesign with structured data, improving crawlability and conversions.',
    media: 'https://cdn.coverr.co/videos/coverr-working-on-laptop-5107/1080p.mp4',
    href: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(59,130,246,0.1),transparent)]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-cyan-300">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Recent Work & Case Studies</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">High‑impact projects for Indian startups and enterprises. Performance, security, and SEO are built into our process.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {work.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <video
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                src={item.media}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 max-w-xl text-xs text-neutral-300">{item.desc}</p>
                </div>
                <div className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur md:flex">
                  <Globe className="h-3.5 w-3.5" /> Live
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur md:grid-cols-3"
        >
          <div className="text-center text-sm text-neutral-300">99.9% Uptime Hosting • SSL • CDN</div>
          <div className="text-center text-sm text-neutral-300">Measured SEO: Sitemaps, Schema, GSC & GA4</div>
          <div className="flex items-center justify-center gap-2 text-center text-sm text-neutral-300"><Shield className="h-4 w-4" /> OWASP‑guided secure development</div>
        </motion.div>
      </div>
    </section>
  );
}

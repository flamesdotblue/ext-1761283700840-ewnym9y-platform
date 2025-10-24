import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Server, Globe, Search, RefreshCw, Shield } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX & Design to Code',
    desc: 'Figma to pixel-perfect, accessible components with motion-first micro-interactions.',
    tags: ['Figma', 'Tailwind', 'Framer Motion']
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'Production-grade apps using Python, Django, and the MERN stack with CI/CD.',
    tags: ['Python', 'Django', 'MongoDB', 'React', 'Node']
  },
  {
    icon: Server,
    title: 'Hosting & DevOps',
    desc: 'Scalable cloud hosting, SSL, automated backups, and performance monitoring.',
    tags: ['Vercel', 'AWS', 'Docker']
  },
  {
    icon: Globe,
    title: 'Website Redesign',
    desc: 'Modernize legacy sites with responsive layouts, accessibility, and speed upgrades.',
    tags: ['Responsive', 'A11y', 'Core Web Vitals']
  },
  {
    icon: RefreshCw,
    title: 'Redevelopment & Migrations',
    desc: 'Rebuild broken or slow websites, migrate tech stacks with zero-downtime strategies.',
    tags: ['Replatform', 'Refactor']
  },
  {
    icon: Search,
    title: 'SEO & Growth',
    desc: 'Keyword strategy, technical SEO, rich snippets, and pan-India local SEO (GMB).',
    tags: ['Schema', 'Sitemaps', 'Local SEO']
  }
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24">
      {/* Prism light sweep */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(168,85,247,0.15),rgba(0,0,0,0))]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-fuchsia-300">Services</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">A–Z Website Solutions for Indian Businesses</h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            From startups in Bengaluru and Chennai to enterprises in Delhi and Mumbai, we build secure, fast, and SEO‑first websites that scale.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-fuchsia-400/30 hover:bg-white/10"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition duration-500 group-hover:opacity-30" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(56,189,248,0.4), rgba(232,121,249,0.4), rgba(251,191,36,0.4), rgba(56,189,248,0.4))' }} />

              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/20 to-amber-300/20 text-cyan-200">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-200">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* credibility strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur md:grid-cols-3"
        >
          <div className="text-center text-sm text-neutral-300">Optimized for Core Web Vitals</div>
          <div className="text-center text-sm text-neutral-300">Secure by design • SSL • Auth • OWASP</div>
          <div className="text-center text-sm text-neutral-300">Pan‑India Local SEO: Chennai, Bengaluru, Delhi, Mumbai & more</div>
        </motion.div>
      </div>
    </section>
  );
}

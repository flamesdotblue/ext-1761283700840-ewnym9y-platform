import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Phone, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[100dvh] overflow-hidden">
      {/* Spline animated background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve contrast on text (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Ambient smoke effect (video overlay) */}
      <video
        className="pointer-events-none absolute -bottom-10 left-1/2 z-0 h-[70vh] w-[120vw] -translate-x-1/2 opacity-25 mix-blend-screen"
        src="https://cdn.coverr.co/videos/coverr-smoke-on-a-black-background-3307/1080p.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Navbar */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-amber-300 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-neutral-950/70 backdrop-blur" />
            </div>
            <div className="text-lg font-semibold tracking-tight">Divinoft Developers</div>
          </div>
          <div className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm/none text-neutral-200 transition hover:text-white">Services</a>
            <a href="#portfolio" className="text-sm/none text-neutral-200 transition hover:text-white">Portfolio</a>
            <a href="#contact" className="text-sm/none text-neutral-200 transition hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 md:flex"
          >
            <Rocket className="h-4 w-4 transition group-hover:scale-110" />
            Get a Quote
          </a>
        </nav>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid h-[calc(100dvh-80px)] max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 backdrop-blur">
            Full-Stack Web Studio in India
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            Serving Salem, Tamil Nadu & Pan-India
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Design to Deployment — High-Performance Websites that Rank and Convert
          </h1>
          <p className="max-w-xl text-neutral-200">
            Divinoft Developers is a startup tech company delivering A–Z website services: UI/UX design, Python & Django, MERN stack, SEO, hosting, redesign, and rapid redevelopment. We craft blazing‑fast, secure, and scalable digital experiences for businesses across India.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 px-5 py-3 text-neutral-950 transition hover:brightness-110"
            >
              Explore Services
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10"
            >
              See Our Work
            </a>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Salem, Tamil Nadu</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +91-9042-000-000</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@divinoft.dev</span>
          </div>
        </motion.div>

        {/* Video teaser card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="relative"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <video
              className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105"
              src="https://cdn.coverr.co/videos/coverr-laptop-code-6837/1080p.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-neutral-300">Case Study</p>
                <p className="text-sm font-semibold">From Sketch to Production in Days</p>
              </div>
              <div className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">MERN • Django • SEO</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

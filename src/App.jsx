import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

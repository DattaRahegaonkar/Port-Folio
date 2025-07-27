import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

export default function FullPage() {
  return (
    <main className="bg-[#F2F2FC] text-[#302e4d] dark:bg-[#0e0e0e] dark:text-white">
      {/* Scrollable full-page sections */}
      <section id="home" className="h-screen overflow-hidden scroll-mt-16">
        <Home />
      </section>

      <section id="about" className="min-h-screen scroll-mt-16">
        <About />
      </section>

      <section id="skills" className="min-h-screen scroll-mt-16">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen scroll-mt-16">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen scroll-mt-16">
        <Contact />
      </section>
    </main>
  );
}

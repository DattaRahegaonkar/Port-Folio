import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { useTheme } from '../context/ThemeContext';

export default function FullPage() {
  const { isDark } = useTheme();

  return (
    <main className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-[#F2F2FC] text-[#302e4d]'
    }`}>
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

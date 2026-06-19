import React from 'react';

export default function Header({ onLinkClick }) {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    onLinkClick(id);
  };

  return (
    <header id="nav" className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 group"
          data-cursor="link"
          onClick={(e) => handleNavClick(e, 'top')}
        >
          <span className="relative inline-flex w-7 h-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-[var(--gold)] group-hover:rotate-90 transition-transform duration-700"></span>
            <span className="absolute inset-1.5 rounded-full gold-grad-bg"></span>
            <span className="relative font-display text-[#1a1407] text-sm font-bold">N</span>
          </span>
          <span className="font-display text-xl tracking-tight">
            Networq <span className="text-gold">Global</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink/80">
          <a
            href="#services"
            data-cursor="link"
            className="hover:text-gold transition-colors duration-300"
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#process"
            data-cursor="link"
            className="hover:text-gold transition-colors duration-300"
            onClick={(e) => handleNavClick(e, 'process')}
          >
            Process
          </a>
          <a
            href="#work"
            data-cursor="link"
            className="hover:text-gold transition-colors duration-300"
            onClick={(e) => handleNavClick(e, 'work')}
          >
            Work
          </a>
          <a
            href="#about"
            data-cursor="link"
            className="hover:text-gold transition-colors duration-300"
            onClick={(e) => handleNavClick(e, 'about')}
          >
            Studio
          </a>
          <a
            href="#insights"
            data-cursor="link"
            className="hover:text-gold transition-colors duration-300"
            onClick={(e) => handleNavClick(e, 'insights')}
          >
            Insights
          </a>
        </nav>
        <a
          href="#contact"
          data-cursor="link"
          className="btn-gold px-4 py-2 rounded-full text-sm font-medium hidden sm:inline-flex items-center gap-2"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Start a project <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}

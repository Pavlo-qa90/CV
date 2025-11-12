import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Tools } from './components/Tools';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { GoToTop } from './components/GoToTop';
import { LanguageDropdown } from './components/LanguageDropdown';
import { useLanguage } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './SEO';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Resume download handler
  const openResume = (e: React.MouseEvent) => {
    e.preventDefault();
    const resumePath = '/Medvedskiy_Pavlo_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Medvedskiy_Pavlo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sections = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'tools', label: t('nav.tools') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <HelmetProvider>
      <SEO />

      <div className="min-h-screen text-[#E8ECF5] overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed w-full glass-panel z-50 border-b border-white/10 animate-fade-blur" data-delay="1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <span
                onClick={scrollToTop}
                className="brand-name gradient-text cursor-pointer hover:opacity-80 transition-opacity"
                data-delay="1"
              >
                Pavlo Medvedskyi
              </span>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                {sections.map((section, i) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="nav-link text-sm font-medium animate-fade-blur"
                    data-delay={i + 2}
                  >
                    {section.label}
                  </a>
                ))}

                <button
                  className="flex items-center px-5 py-2 rounded-full text-sm font-medium text-white liquid-glass-btn transition-all duration-300 hover:scale-[1.04]"
                  onClick={openResume}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('nav.resume')}
                </button>

                <div className="animate-fade-blur" data-delay="8">
                  <LanguageDropdown />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <LanguageDropdown />
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-2xl text-[#E8ECF5]/60 hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-200"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-fade-blur" data-delay="2">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {sections.map(section => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block nav-link text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.label}
                  </a>
                ))}

                <button
                  className="flex items-center w-full px-4 py-2 rounded-full text-base font-medium text-white liquid-glass-btn hover:scale-[1.02] transition-transform duration-300"
                  onClick={openResume}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('nav.resume')}
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-24">
          <section id="header" className="reveal"><Header /></section>
          <section id="about" className="reveal"><About /></section>
          <section id="experience" className="reveal"><Experience /></section>
          <section id="projects" className="reveal"><Projects /></section>
          <section id="tools" className="reveal"><Tools /></section>
          <section id="skills" className="reveal"><Skills /></section>
          <section id="contact" className="reveal"><Contact /></section>
        </main>

        {/* Footer */}
        <footer className="glass-panel mt-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Pavlo-qa90"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-[#E8ECF5]/60 hover:text-white transition-all duration-200 hover-bloom"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavlo-medvedskyi-74231913b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-[#E8ECF5]/60 hover:text-white transition-all duration-200 hover-bloom"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:Medvedskiypa@gmail.com"
                aria-label="Email Contact"
                className="text-[#E8ECF5]/60 hover:text-white transition-all duration-200 hover-bloom"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-center text-base text-[#E8ECF5]/60">
              © {new Date().getFullYear()} Pavlo Medvedskyi. All rights reserved.
            </p>
          </div>
        </footer>

        <GoToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;

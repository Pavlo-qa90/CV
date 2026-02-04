import { useState, useEffect, lazy, Suspense } from 'react';
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Header } from './components/Header';
import { GoToTop } from './components/GoToTop';
import { LanguageDropdown } from './components/LanguageDropdown';
import { useLanguage } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './SEO';
import { initAnalytics, trackEvent, trackFunnelStep } from './utils/analytics';

const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));
const Experience = lazy(() => import('./components/Experience').then((m) => ({ default: m.Experience })));
const Tools = lazy(() => import('./components/Tools').then((m) => ({ default: m.Tools })));
const Skills = lazy(() => import('./components/Skills').then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })));
const OpenToWork = lazy(() => import('./components/OpenToWork').then((m) => ({ default: m.OpenToWork })));
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Resume download handler
  const openResume = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent('resume_download_click', { source: 'navigation' });
    trackFunnelStep('resume_download_click', { source: 'navigation' });
    const resumePath = `${import.meta.env.BASE_URL}Medvedskiy_Pavlo_Resume.pdf`;
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Medvedskiy_Pavlo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reveal animation
  useEffect(() => {
    initAnalytics();

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

  // Engagement analytics: contact reach + time on page
  useEffect(() => {
    const startTime = Date.now();
    const milestones = [30, 60, 120];
    const sentMilestones = new Set<number>();
    const sessionKey = 'analytics_contact_seen';

    const intervalId = window.setInterval(() => {
      const elapsedSec = Math.floor((Date.now() - startTime) / 1000);
      milestones.forEach((milestone) => {
        if (elapsedSec >= milestone && !sentMilestones.has(milestone)) {
          sentMilestones.add(milestone);
          trackEvent('engagement_time', { seconds: milestone, page: 'resume' });
        }
      });
    }, 5000);

    const contactSection = document.getElementById('contact');
    let contactObserver: IntersectionObserver | null = null;

    if (contactSection) {
      contactObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const wasTracked = sessionStorage.getItem(sessionKey) === '1';
            if (!wasTracked) {
              sessionStorage.setItem(sessionKey, '1');
              trackEvent('contact_section_view', { page: 'resume' });
              trackFunnelStep('contact_section_view', { page: 'resume' });
            }
            contactObserver?.disconnect();
          });
        },
        { threshold: 0.35 }
      );
      contactObserver.observe(contactSection);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'hidden') return;
      const elapsedSec = Math.floor((Date.now() - startTime) / 1000);
      if (elapsedSec >= 5) {
        trackEvent('engagement_session_end', { seconds: elapsedSec, page: 'resume' });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      contactObserver?.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const sections = [
    { id: 'about', label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'tools', label: t('nav.tools') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'open-to-work', label: t('nav.openToWork') },
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
              <button
                type="button"
                onClick={scrollToTop}
                className="brand-name gradient-text cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-0 p-0"
                data-delay="1"
              >
                Pavlo Medvedskyi
              </button>

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
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
          <section id="about" className="reveal"><Suspense fallback={null}><About /></Suspense></section>
          <section id="experience" className="reveal"><Suspense fallback={null}><Experience /></Suspense></section>
          <section id="projects" className="reveal"><Suspense fallback={null}><Projects /></Suspense></section>
          <section id="tools" className="reveal"><Suspense fallback={null}><Tools /></Suspense></section>
          <section id="skills" className="reveal"><Suspense fallback={null}><Skills /></Suspense></section>
          <section id="open-to-work" className="reveal"><Suspense fallback={null}><OpenToWork /></Suspense></section>
          <section id="contact" className="reveal"><Suspense fallback={null}><Contact /></Suspense></section>
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
                onClick={() => trackEvent('social_click', { network: 'github', location: 'footer' })}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavlo-medvedskyi-74231913b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-[#E8ECF5]/60 hover:text-white transition-all duration-200 hover-bloom"
                onClick={() => trackEvent('social_click', { network: 'linkedin', location: 'footer' })}
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:Medvedskiypa@gmail.com"
                aria-label="Email Contact"
                className="text-[#E8ECF5]/60 hover:text-white transition-all duration-200 hover-bloom"
                onClick={() => trackEvent('contact_click', { channel: 'email', location: 'footer' })}
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

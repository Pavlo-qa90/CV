import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Header() {
  const { t } = useLanguage();

  return (
    <section
      id="header"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center md:text-left"
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 px-6 md:px-12">
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex-shrink-0 glass-halo hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_rgba(109,220,255,0.3)]">
          <img src="/CV/images/Pavlo_medvedskyi.jpg" alt="Pavlo Medvedskyi" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/20 to-[#A67DFF]/20 mix-blend-overlay" />
        </div>

        <div className="max-w-2xl md:max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text drop-shadow-[0_0_20px_rgba(109,220,255,0.3)]">
              Pavlo Medvedskyi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#E8ECF5]/80 mb-6 tracking-wide">
            {t('hero.title')}
          </h2>
          <p className="text-lg md:text-xl text-[#E8ECF5]/90 mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white text-lg liquid-glass-btn hover:scale-105 transition-all duration-300"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-[#6DDCFF]/10 to-[#A67DFF]/10 blur-2xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-[#A67DFF]/10 to-[#6DDCFF]/10 blur-3xl animate-pulse-slow" />
    </section>
  );
}

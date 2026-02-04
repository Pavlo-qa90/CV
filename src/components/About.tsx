import { Award, BookOpen, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Coffee, label: t('about.stats.projects'), value: '7' },
    { icon: BookOpen, label: t('about.stats.experience'), value: '6+' },
    { icon: Award, label: t('about.stats.awards'), value: '5' },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl rounded-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center md:text-left">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* === Left: Description === */}
          <div className="glass-panel p-8 rounded-3xl shadow-xl hover-bloom">
            <p className="text-[#E8ECF5]/90 leading-relaxed text-lg tracking-wide">
              {t('about.description')}
            </p>
          </div>

          {/* === Right: Stats === */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center text-center rounded-3xl p-6 liquid-glass-btn hover-bloom"
              >
                <div className="glass-halo w-16 h-16 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#6DDCFF]" />
                </div>
                <div className="text-3xl font-semibold mb-2 text-white drop-shadow-[0_0_10px_rgba(109,220,255,0.3)]">
                  {value}
                </div>
                <div className="text-sm text-[#E8ECF5]/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Briefcase, Building2, Clock3, MapPin, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../utils/analytics';

export function OpenToWork() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Briefcase,
      label: t('openToWork.role.label'),
      value: t('openToWork.role.value'),
    },
    {
      icon: Building2,
      label: t('openToWork.format.label'),
      value: t('openToWork.format.value'),
    },
    {
      icon: MapPin,
      label: t('openToWork.timezone.label'),
      value: t('openToWork.timezone.value'),
    },
    {
      icon: Clock3,
      label: t('openToWork.availability.label'),
      value: t('openToWork.availability.value'),
    },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-10 gradient-text text-center md:text-left">
          {t('openToWork.title')}
        </h2>

        <div className="glass-panel p-8 rounded-3xl hover-bloom">
          <div className="grid md:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-[rgba(17,24,39,0.4)] p-5"
              >
                <div className="flex items-center mb-3">
                  <Icon className="w-5 h-5 text-[#6DDCFF] mr-2" />
                  <p className="text-sm text-[#E8ECF5]/70">{label}</p>
                </div>
                <p className="text-base md:text-lg text-white font-medium">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[#E8ECF5]/90">
              <span className="text-[#6DDCFF] font-semibold">{t('openToWork.interview.label')}:</span>{' '}
              {t('openToWork.interview.value')}
            </p>

            <a
              href="https://www.linkedin.com/in/pavlo-medvedskyi-74231913b/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-full liquid-glass-btn text-white text-sm font-medium"
              onClick={() => trackEvent('social_click', { network: 'linkedin_recommendations', location: 'open_to_work' })}
            >
              <Star className="w-4 h-4 mr-2" />
              {t('openToWork.recommendations.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


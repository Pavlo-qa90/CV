import { useLanguage } from '../context/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const skills = {
    [t('skills.technologies')]: [
      { name: 'SQL', level: 65 },
      { name: 'API', level: 80 },
      { name: 'OpenShift', level: 30 },
      { name: 'Kafka', level: 20 },
      { name: 'Java/Selenide', level: 30 },
    ],
    [t('skills.testing.tools')]: [
      { name: 'Postman', level: 80 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Jenkins', level: 50 },
      { name: 'Jira/Zephyr', level: 90 },
      { name: 'Chrome DevTools', level: 85 },
    ],
    [t('skills.testing.types')]: [
      { name: 'API Testing', level: 80 },
      { name: 'DB Testing', level: 65 },
      { name: 'Web Testing', level: 90 },
      { name: 'Mobile Testing', level: 50 },
      { name: 'Functional Testing', level: 90 },
    ],
  };

  return (
    <section id="skills" className="relative py-24">
      {/* glowing ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl rounded-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center md:text-left">
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div
              key={category}
              className="glass-panel p-8 rounded-3xl transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(109,220,255,0.2)]"
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text text-center md:text-left">
                {category}
              </h3>
              <div className="space-y-5">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#E8ECF5]/90 font-medium">{skill.name}</span>
                      <span className="text-[#6DDCFF]/80 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative w-full h-3 rounded-full overflow-hidden bg-[rgba(255,255,255,0.06)] border border-[#6DDCFF]/15 backdrop-blur-sm">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background:
                            'linear-gradient(90deg, rgba(109,220,255,0.9) 0%, rgba(166,125,255,0.9) 100%)',
                          boxShadow:
                            '0 0 20px rgba(109,220,255,0.3), 0 0 40px rgba(166,125,255,0.15)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

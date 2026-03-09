import { useLanguage } from '../context/LanguageContext';

export function Tools() {
  const { t } = useLanguage();

  const toolGroups = [
    {
      title: t('tools.cat.api'),
      items: ['Postman', 'Swagger', 'Rest Assured', 'Fiddler', 'TestNG'],
    },
    {
      title: t('tools.cat.ui'),
      items: ['Selenide', 'Playwright', 'Selenium'],
    },
    {
      title: t('tools.cat.db'),
      items: ['PostgreSQL', 'MSSQL', 'Derby DB', 'NoSQL', 'BigQuery', 'DBeaver'],
    },
    {
      title: t('tools.cat.dev'),
      items: ['IntelliJ IDEA', 'Java', 'Maven', 'Git', 'GitHub Actions'],
    },
    {
      title: t('tools.cat.ci'),
      items: ['Jenkins', 'Docker', 'VirtualBox', 'Google Cloud Console'],
    },
    {
      title: t('tools.cat.mgmt'),
      items: ['Jira', 'Zephyr', 'TestRail', 'Allure Report'],
    },
    {
      title: t('tools.cat.monitor'),
      items: ['Sentry', 'Chrome DevTools'],
    },
    {
      title: t('tools.cat.docs'),
      items: ['Confluence', 'Notion'],
    },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          {t('tools.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="glass-panel p-6 rounded-3xl text-left hover-bloom"
            >
              <h3 className="text-lg font-semibold text-[#E8ECF5]/90 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs text-[#E8ECF5]/80 bg-[rgba(255,255,255,0.06)] border border-[#6DDCFF]/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

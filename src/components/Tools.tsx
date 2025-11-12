import { useLanguage } from '../context/LanguageContext';

export function Tools() {
  const { t } = useLanguage();

const tools = [
  // 🔹 API & Backend Testing
  'Postman',
  'Swagger',
  'Rest Assured',
  'Fiddler',
  'TestNG',

  // 🔹 UI / Automation
  'Selenide',
  'Playwright',
  'Selenium',

  // 🔹 Databases
  'PostgreSQL',
  'MSSQL',
  'Derby DB',
  'NoSQL',
  'BigQuery',
  'DBeaver',

  // 🔹 Dev & IDE
  'IntelliJ IDEA',
  'Java',
  'Maven',
  'Git',
  'GitHub Actions',

  // 🔹 CI/CD & Infrastructure
  'Jenkins',
  'Docker',
  'VirtualBox',
  'Google Cloud Console',

  // 🔹 Test Management & Reporting
  'Jira',
  'Zephyr',
  'TestRail',
  'Allure Report',

  // 🔹 Monitoring & Debug
  'Sentry',
  'Chrome DevTools',

  // 🔹 Documentation & Collaboration
  'Confluence',
  'Notion',
];


  return (
    <section id="tools" className="relative py-24">
      {/* glowing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          {t('tools.title')}
        </h2>

        <div
          className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto"
        >
          {tools.map((tool) => (
            <div
              key={tool}
              className="px-6 py-3 min-w-[140px] rounded-2xl
                         bg-[rgba(17,24,39,0.55)] backdrop-blur-xl
                         border border-[#6DDCFF]/20
                         shadow-[0_4px_25px_rgba(109,220,255,0.1)]
                         text-[#E8ECF5]/90 font-medium text-sm tracking-wide
                         flex items-center justify-center text-center
                         transition-all duration-300 hover:scale-105 hover:text-[#6DDCFF]
                         hover:border-[#6DDCFF]/50 hover:shadow-[0_0_25px_rgba(109,220,255,0.3)]"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

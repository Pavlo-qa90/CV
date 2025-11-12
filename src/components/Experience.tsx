import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t } = useLanguage();

  const experiences = [
    {
      id: 'cody-solutions',
      company: 'Cody Solutions',
      link: 'https://codysolutions.com/',
      companyKey: 'experience.company.cody.desc',
      position: 'Senior Quality Assurance Engineer',
      period: '2024 - Present',
      shortDescription:
        'Enterprise-level platform with integrated backend, API, and desktop applications for multiple operating systems. Focused on quality assurance across data flow, system logic, and cross-platform stability.',
      logo:
        '/CV/images/codyua.jpg',
      responsibilities: [
        'Performed manual and automated API testing using Java and RestAssured',
        'Designed and executed test cases for backend, database, and API validation',
        'Tested desktop applications across Windows, macOS, and Linux environments',
        'Performed mobile and responsive testing across Android and iOS devices',
        'Collaborated with developers and product managers to refine requirements and ensure feature completeness',
        'Conducted exploratory, regression, and usability testing across web and desktop layers',
        'Interviewed and mentored QA candidates, participated in team onboarding and knowledge sharing',
        'Maintained test documentation, reporting, and continuous improvement processes in Agile workflow',
      ],
    },
    {
      id: '1648-factory',
      company: '1648 Factory',
      link: 'https://www.1648factory.com/',
      companyKey: 'experience.company.1648.desc',
      position: 'Senior Quality Assurance Engineer',
      period: '2024 - 2024',
      logo:
        '/CV/images/1648factory_logo.jpg',
      responsibilities: [
        'Performed manual and API testing across multiple environments',
        'Created and executed automated Postman collections and runners',
        'Validated MetaMask integration and crypto transaction flows',
        'Conducted database validation (PostgreSQL)',
        'Performed regression and smoke testing for web builds',
        'Maintained detailed QA documentation and test cases',
        'Collaborated with developers and product owners to refine requirements',
        'Actively participated in Scrum ceremonies',
      ],
    },
    {
      id: 'railsware',
      company: 'Railsware',
      link: 'https://railsware.com/',
      companyKey: 'experience.company.railsware.desc',
      position: 'Senior Quality Assurance Engineer',
      period: '2022 - 2023',
      logo:
        '/CV/images/railsware.jpg',
      responsibilities: [
        'Performed manual API and database testing',
        'Validated data synchronization and ETL pipeline accuracy',
        'Tested integrations with external APIs (Ads, CRMs, eCommerce platforms)',
        'Executed regression and smoke testing for weekly releases',
        'Verified UI/UX for responsive and mobile layouts',
        'Analyzed logs in Google Cloud Console and Sentry',
        'Maintained test plans, test cases, and QA documentation',
        'Provided product support and collaborated with cross-functional teams',
      ],
    },
    {
      id: 'softserve',
      company: 'SoftServe',
      link: 'https://www.softserveinc.com/',
      companyKey: 'experience.company.softserve.desc',
      position: 'Senior Quality Assurance Engineer',
      period: '2019 - 2022',
      logo:
        '/CV/images/softserve.jpg',
      responsibilities: [
        'Analyzed functional requirements and created QA strategy for the project',
        'Developed and maintained regression and smoke test suites',
        'Performed manual and API testing using Postman and Fiddler',
        'Conducted installation and compatibility testing on Windows and Unix servers',
        'Reviewed and analyzed server and application logs (OpenShift, Java apps)',
        'Validated backend data integrity in PostgreSQL',
        'Collaborated with developers to identify root causes of defects',
        'Mentored junior QA engineers and performed code reviews for test cases',
      ],
    },
    {
      id: 'epam',
      company: 'EPAM Systems',
      link: 'https://www.epam.com/',
      companyKey: 'experience.company.epam.desc',
      position: 'Junior Quality Assurance Engineer',
      period: '2018 - 2019',
      logo:
        '/CV/images/epam.png',
      responsibilities: [
        'Performed manual functional and UI testing',
        'Documented defects and test results in Jira',
        'Analyzed technical requirements and created test cases',
        'Executed database testing (MongoDB, DynamoDB)',
        'Conducted CLI-based validation and mobile testing',
        'Participated in daily stand-ups and QA review sessions',
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-16 px-4 sm:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 gradient-text text-center md:text-left">
          {t('nav.experience')}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`glass-panel rounded-3xl w-full overflow-hidden transition-all duration-500 hover-bloom ${
                expandedId === exp.id
                  ? 'border-[#6DDCFF]/40 shadow-[0_0_25px_rgba(109,220,255,0.2)]'
                  : ''
              }`}
            >
              {/* Header */}
              <div
                className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between cursor-pointer select-none"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover glass-halo"
                  />
                  <div>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl sm:text-2xl font-semibold text-white hover:text-[#6DDCFF] transition-colors flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {exp.company}
                      <ExternalLink className="w-4 h-4 text-[#6DDCFF]" />
                    </a>
                    <h4 className="text-base sm:text-lg gradient-text">{exp.position}</h4>
                  </div>
                </div>

                <div className="flex items-center text-[#E8ECF5]/70 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#6DDCFF]" />
                  <span>{exp.period}</span>
                  {expandedId === exp.id ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 ml-3 text-[#6DDCFF]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-3 text-[#6DDCFF]" />
                  )}
                </div>
              </div>

              {/* Company description */}
              <div className="px-6 sm:px-8 pb-3 text-[#E8ECF5]/70 italic text-sm sm:text-base leading-relaxed">
                {t(exp.companyKey)}
              </div>

              {/* Expanded content */}
              {expandedId === exp.id && (
                <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-white/10 backdrop-blur-sm">
                  <h5 className="text-lg font-semibold gradient-text mb-4">
                    Responsibilities:
                  </h5>
                  <ul className="list-disc list-inside space-y-2 text-[#E8ECF5]/80 text-sm sm:text-base">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="ml-2 transition-all duration-200 hover:text-[#6DDCFF]"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

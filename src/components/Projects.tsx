import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'blai',
      title: 'Blai',
      shortDescription:
        'Blai is an AI-powered mobile app that helps users manage crypto investments through smart insights, chat-based interactions, and automated portfolio tracking.',
      image: `${import.meta.env.BASE_URL}images/blai.png`,
      tech: ['API Testing', 'Mobile Testing', 'Swagger', 'iOS', 'Android'],
      link: 'https://play.google.com/store/apps/details?id=com.blai.app',
    },
    {
      id: 'jmesworld',
      title: 'JMES World',
      shortDescription:
        'JMES World is a Web3 platform that enables creators and communities to collaborate, tokenize content, and participate in decentralized governance.',
      image: `${import.meta.env.BASE_URL}images/JMES.jpg`,
      tech: ['API Testing', 'Web Testing', 'Blockchain', 'Postman', 'Java', 'Rest Assured'],
      link: 'https://app.jmesworld.com/login',
    },

    {
      id: 'supabox',
      title: 'SupaBox',
      shortDescription:
        'SupaBox is a gamified e-commerce platform that lets users open digital mystery boxes and win real-world prizes.',
      image: `${import.meta.env.BASE_URL}images/supabox.png`,
      tech: ['API Testing', 'PostgreSQL', 'Postman', 'Java', 'Rest Assured', 'Web Testing', 'Mobile Testing'],
      link: 'https://supabox.com/',
    },
    {
      id: 'concedes',
      title: 'Concedes Digital Assets',
      shortDescription:
        'Concedes Digital Assets is a fintech web application that empowers users to trade cryptocurrencies seamlessly.',
      image:
        `${import.meta.env.BASE_URL}images/CONCEDUS.webp`,
      tech: ['API Testing', 'PostgreSQL', 'Postman', 'MetaMask', 'Blockchain'],
      link: 'https://concedus.com/en/',
    },
    {
      id: 'coupler',
      title: 'Coupler.io',
      shortDescription:
        'A web application that synchronizes data between various services on a schedule, allowing users to monitor and manage metrics from Ads and marketplaces.',
      image:
        `${import.meta.env.BASE_URL}images/coupler.png`,
      tech: ['API Testing', 'Data Integration', 'Mobile Testing', 'Google Cloud Console'],
      link: 'https://www.coupler.io/',
    },
    {
      id: 'nectar',
      title: 'Nectar Corp Network Solutions',
      shortDescription:
        'Software solutions improving management, visibility, and service delivery across VoIP, SIP and MPLS networks.',
      image:
        `${import.meta.env.BASE_URL}images/nectar_services_logo.jpg`,
      tech: ['API Testing', 'PostgreSQL', 'OpenShift', 'VirtualBox', 'Linux', 'Microservices'],
      link: 'https://www.nectarcorp.com/',
    },
    {
      id: 'cloud',
      title: 'Epam Cloud',
      shortDescription:
        'Multi-cloud orchestrator helping users manage AWS, GCP, and MS Azure from one unified interface.',
      image:
        `${import.meta.env.BASE_URL}images/epam_cloud.jpg`,
      tech: ['CLI Testing', 'Cloud', 'AWS', 'GCP', 'Azure'],
      link: 'https://www.epam.com/services/cloud',
    },
  ];

  return (
    <section className="relative py-24">
      {/* glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6DDCFF]/10 via-transparent to-[#A67DFF]/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center md:text-left">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-[rgba(17,24,39,0.45)] 
                backdrop-blur-2xl border border-[#6DDCFF]/15 
                shadow-[0_8px_32px_rgba(0,0,0,0.4)] 
                transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(109,220,255,0.25)]"
            >
              {/* image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={340}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/90 via-[#0D1117]/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity"></div>
              </div>

              {/* content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-3 gradient-text">{project.title}</h3>
                <p className="text-[#E8ECF5]/80 mb-5 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm text-[#E8ECF5]/80 
                        bg-[rgba(255,255,255,0.06)] border border-[#6DDCFF]/20 
                        backdrop-blur-md transition-all duration-200 hover:bg-[rgba(109,220,255,0.12)] hover:text-[#6DDCFF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* subtle glow border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#6DDCFF]/40 transition-all duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

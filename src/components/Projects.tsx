import Concedes from './images/CONCEDUS_DIGTAL_ASSETS_MAIN_LOGO.png';
import CouplerIO from './images/CouplerIO.jfif';
import NectarCorp from './images/NectarCorp.jfif';
import EpamCloud from './images/EPAMCLOUD.jfif';

export function Projects() {
  const projects = [
    {
      id: 'concedes',
      title: 'Concedes Digital Assets',
      shortDescription: 'Concedes Digital Assets is a fintech web application that empowers users to trade cryptocurrencies seamlessly',
      image: Concedes,
      tech: ['API Testing', 'PostgreSQL', 'Postman', 'MetaMask'],
      link: 'https://concedus.com/en/',
    },
    {
      id: 'coupler',
      title: 'Coupler.io',
      shortDescription: 'A web application that synchronizes data between various services on a schedule. A tool that allows the enterprise and external users to manage and monitor metrics from Ads, marketplaces etc',
      image: CouplerIO,
      tech: ['API Testing', 'Data Integration', 'Mobile Testing', 'Google Cloud Console'],
      link: 'https://www.coupler.io/',
    },
    {
      id: 'nectar',
      title: 'Nectar Corp Network Solutions',
      shortDescription: 'Software solutions help to improve the management, visibility, and service delivery across global and enterprise converged VoIP, SIP and MPLS networks',
      image: NectarCorp,
      tech: ['API Testing', 'PostgreSQL', 'OpenShift', 'VirtualBox'],
      link: 'https://www.nectarcorp.com/',
    },
    {
      id: 'cloud',
      title: 'Epam Cloud',
      shortDescription: 'Multi-cloud orchestrator that helps user to manage different clouds: AWS, GCP, MS Azure from one application',
      image: EpamCloud,
      tech: ['API Testing', 'PostgreSQL', 'OpenShift', 'VirtualBox'],
      link: 'https://www.epam.com/services/cloud',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-blue-400 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

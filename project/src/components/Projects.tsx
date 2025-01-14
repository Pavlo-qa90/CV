import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Concedes from './images/CONCEDUS_DIGTAL_ASSETS_MAIN_LOGO.png';
import CouplerIO from './images/CouplerIO.jfif';
import NectarCorp from './images/NectarCorp.jfif';
import EpamCloud from './images/EPAMCLOUD.jfif';

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const projects = [
    {
      id: 'concedes',
      title: 'Concedes Digital Assets',
      shortDescription: 'A fintech web application for cryptocurrency trading with support for multiple cryptocurrencies.',
      image: Concedes,
      tech: ['API Testing', 'PostgreSQL', 'Postman', 'MetaMask'],
      responsibilities: [
        'Conducted comprehensive API testing',
        'Created and maintained Postman collections',
        'Performed database testing with PostgreSQL',
        'Implemented automated test scripts',
        'Led regression and smoke testing efforts',
      ],
      link: 'https://concedus.com/en/',
    },
    {
      id: 'coupler',
      title: 'Coupler.io',
      shortDescription: 'Data synchronization platform for enterprise metrics and analytics.',
      image: CouplerIO,
      tech: ['API Testing', 'Data Integration', 'Mobile Testing', 'Google Cloud Console'],
      responsibilities: [
        'Led API and database testing initiatives',
        'Performed integration testing with various services',
        'Conducted mobile and adaptive design testing',
        'Managed test documentation and knowledge base',
        'Monitored system logs and performance',
      ],
      link: 'https://www.coupler.io/',
    },
    {
      id: 'nectar',
      title: 'Nectar Corp Network Solutions',
      shortDescription: 'Enterprise VoIP and SIP network management platform.',
      image: NectarCorp,
      tech: ['API Testing', 'PostgreSQL', 'OpenShift', 'VirtualBox'],
      responsibilities: [
        'Created and maintained test strategies',
        'Led API and database testing efforts',
        'Managed server testing on Windows and Unix',
        'Implemented automation test frameworks',
        'Mentored junior team members',
      ],
      link: 'https://www.nectarcorp.com/',
    },
    {
      id: 'cloud',
      title: 'Epam Cloud',
      shortDescription: 'Enterprise VoIP and SIP network management platform.',
      image: EpamCloud,
      tech: ['API Testing', 'PostgreSQL', 'OpenShift', 'VirtualBox'],
      responsibilities: [
        'Manual functional testing',
        'Writing and maintaining test documentation',
        'Conducting requirements analysis',
        'Performing database testing (MongoDB, DynamoDB)',
        'CLI testing',
        'Mobile testing',
        'Participating in scrum meetings',
      ],
      link: 'https://www.epam.com/services/cloud',
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image with link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </a>

            {/* Project content */}
            <div className="p-6">
              {/* Title and expand/collapse button */}
              <div
                className="flex items-center justify-between cursor-pointer mb-2"
                onClick={() => toggleExpand(project.id)}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                {expandedId === project.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>

              {/* Short description */}
              <p className="text-gray-300 mb-4">{project.shortDescription}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expanded details (only for the active project) */}
              {expandedId === project.id && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {project.responsibilities.map((responsibility, index) => (
                      <li key={index} className="ml-4">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

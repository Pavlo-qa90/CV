import React, { useState } from 'react';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import factory from './images/1648Factory.jfif';
import railsware from './images/railsware.jfif';
import softserve from './images/SoftServe.jfif';
import epam from './images/epam.jfif';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const experiences = [
    {
      id: '1648-factory',
      company: '1648 Factory',
      position: 'Senior Quality Assurance Engineer',
      period: '2024 - 2024',
      shortDescription: 'Concedes Digital Assets is a fintech web application that empowers users to trade cryptocurrencies seamlessly.',
      logo: factory,
      responsibilities: [
        'API Testing',
        'Working with Postman collections, Postman automation runner, writing scripts for postman runners',
        'MetaMask',
        'DB Testing (PostgreSQL)',
        'Regression/Smoke testing',
        'Writing and maintaining test documentation',
        'Analyzing requirements, communicating with customers and developers',
        'Designing and executing test cases, reporting and analyzing defects',
        'Participating in scrum meetings'
      ]
    },
    {
      id: 'railsware',
      company: 'Railsware',
      position: 'Senior Quality Assurance Engineer',
      period: '2022 - 2023',
      shortDescription: 'Coupler.io - A web application that synchronizes data between various services on a schedule.',
      logo: railsware,
      responsibilities: [
        'API Testing',
        'DB Testing',
        'Data integration testing (with popular services – Facebook Ads, LinkedIn Ads, Google Ads, Shopify, WooCommerce etc.)',
        'Adaptive design testing',
        'Mobile Testing',
        'Regression/Smoke testing',
        'Reviewing logs in Google Cloud Console, Sentry',
        'Writing and maintaining test documentation',
        'Writing and maintaining knowledge base documentation',
        'Product support activities',
        'Participating in scrum meetings'
      ]
    },
    {
      id: 'softserve',
      company: 'SoftServe',
      position: 'Senior Quality Assurance Engineer',
      period: '2019 - 2022',
      shortDescription: 'Nectar Corp - Software solutions for VoIP, SIP and MPLS networks management.',
      logo: softserve,
      responsibilities: [
        'Analyzing requirements, communicating with customers and developers, creating and supporting test strategy',
        'Writing and maintaining test documentation',
        'Writing and maintaining knowledge base documentation',
        'Plan QA activities',
        'Designing and executing test cases, reporting and analyzing defects',
        'Performing API testing (Postman, Fiddler) and database testing (PostgreSQL)',
        'Conducting web and installation testing on Windows, Unix servers',
        'Verifying logs (OpenShift, Java applications on Windows and Unix servers)',
        'Creating an automation test strategy and running automation suites after deployment in production environments',
        'Analyzing automation test results and preparing regression suites before the release',
        'Mentoring trainees and supporting students throughout their training',
        'Performing performance appraisals for the QAs who wanted to be promoted',
        'Working with virtualization (VirtualBox), package manager (Chocolatey)',
        'Participating in scrum meetings'
      ]
    },
    {
      id: 'epam',
      company: 'Epam',
      position: 'Junior Quality Assurance Engineer',
      period: '2018 - 2019',
      shortDescription: 'Epam Cloud - Multi-cloud orchestrator for AWS, GCP, and MS Azure management.',
      logo: epam,
      responsibilities: [
        'Performing manual functional testing, analyzing and documenting defects using Jira as a bug tracking tool',
        'Writing and maintaining test documentation',
        'Conducting requirements analysis, designing and executing test cases',
        'Performing database testing (MongoDB, DynamoDB)',
        'CLI testing',
        'Mobile testing',
        'Participating in scrum meetings'
      ]
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300"
          >
            <div
              className="p-6 cursor-pointer hover:bg-gray-700"
              onClick={() => toggleExpand(exp.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <h4 className="text-lg text-blue-400">{exp.position}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  {expandedId === exp.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>
              <p className="text-gray-300">{exp.shortDescription}</p>
            </div>
            {expandedId === exp.id && (
              <div className="px-6 pb-6 bg-gray-750 border-t border-gray-700">
                <h5 className="text-lg font-semibold text-blue-400 my-4">Responsibilities:</h5>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.responsibilities.map((responsibility, index) => (
                    <li key={index} className="ml-4">{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
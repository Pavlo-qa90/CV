import React from 'react';
import { Award, BookOpen, Coffee } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Coffee, label: 'Projects Completed', value: '5' },
    { icon: BookOpen, label: 'Years Experience', value: '6+' },
    { icon: Award, label: 'Awards', value: '5' },
  ];

  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 leading-relaxed mb-6">
          I am a Senior Quality Assurance Engineer with over six years of experience in software testing. 
          My expertise lies in ensuring product quality through rigorous testing processes, collaboration, and leadership. 
          I have a strong foundation in testing methodologies, team mentoring, and effective communication with stakeholders.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="p-6 bg-gray-800 rounded-lg text-center hover:bg-gray-700 transition-colors"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <div className="text-2xl font-bold mb-2">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
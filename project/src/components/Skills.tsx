import React from 'react';

export function Skills() {
  const skills = {
    'Technologies': [
      { name: 'SQL', level: 65 },
      { name: 'API', level: 80 },
      { name: 'OpenShift', level: 30 },
      { name: 'Kafka', level: 20 },
      { name: 'Java/Selenide', level: 30 },
    ],
    'Testing Tools': [
      { name: 'Postman', level: 80 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Jenkins', level: 50 },
      { name: 'Jira/Zephyr', level: 90 },
      { name: 'Chrome DevTools', level: 85 },
    ],
    'Testing Types': [
      { name: 'API Testing', level: 80 },
      { name: 'DB Testing', level: 65 },
      { name: 'Web Testing', level: 90 },
      { name: 'Mobile Testing', level: 50 },
      { name: 'Functional Testing', level: 90 },
    ],
  };

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 rounded-full h-2 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
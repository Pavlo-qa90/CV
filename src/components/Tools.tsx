import postman from './images/postman.png';
import swagger from './images/swagger-logo.png';
import chrome_dev_tools from './images/chrome_dev_tools.png';
import Jenkins from './images/Jenkins.png';
import Fiddler from './images/Fiddler.png';
import Sentry from './images/sentry-logo.png';
import GCP from './images/google-cloud-console-social-preview.png';
import postgreSQL from './images/postgre-sql-logo.png';
import MSSQL from './images/sql-server-logo.png';
export function Tools() {
  const tools = [
    {
      name: 'Postman',
      image: postman,
    },
    {
      name: 'Swagger',
      image: swagger,
    },
    {
      name: 'Chrome Dev Tools',
      image: chrome_dev_tools,
    },
    {
      name: 'Jenkins',
      image: Jenkins,
    },
    {
      name: 'Fiddler',
      image: Fiddler,
    },
    {
      name: 'Sentry',
      image: Sentry,
    },
    {
      name: 'Google Cloud Console',
      image: GCP,
    },
    {
      name: 'PostgreSQL',
      image: postgreSQL,
    },
    {
      name: 'MSSQL',
      image: MSSQL,
    },
    {
      name: 'Derby DB',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Chocolatey',
      image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'VirtualBox',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Big Query',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'NoSQL',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Jira',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Zephyr',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Confluence',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <section id="tools" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="mt-2 text-sm text-gray-300 text-center group-hover:text-blue-400 transition-colors">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
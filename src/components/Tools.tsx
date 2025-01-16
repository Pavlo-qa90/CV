import postman from './images/postman.png';
import swagger from './images/swagger-logo.png';
import chrome_dev_tools from './images/chrome_dev_tools.png';
import Jenkins from './images/Jenkins.png';
import Fiddler from './images/Fiddler.png';
import Sentry from './images/sentry-logo.png';
import GCP from './images/google-cloud-console-social-preview.png';
import postgreSQL from './images/postgre-sql-logo.png';
import MSSQL from './images/sql-server-logo.png';
import berbyDB from './images/derbydb.png'
import choco from './images/Chocolatey_icon.png'
import VB from './images/VB.png'
import BigQuery from './images/BigQuery.png'
import noSQL from './images/nosql.png'
import jira from './images/jira.jfif'
import zephyr from './images/zephyr.png'
import confluence from './images/confluence.png'
import idea from './images/idea.jfif'
import dbeaver from './images/dbeaver-logo.png'
import linux from './images/linux.jfif'
import centOS from './images/centos.jfif'
export function Tools() {
  const tools = [
    { name: 'Postman', image: postman },
    { name: 'Swagger', image: swagger },
    { name: 'Chrome Dev Tools', image: chrome_dev_tools },
    { name: 'Jenkins', image: Jenkins },
    { name: 'Fiddler', image: Fiddler },
    { name: 'Sentry', image: Sentry },
    { name: 'Google Cloud Console', image: GCP },
    { name: 'PostgreSQL', image: postgreSQL },
    { name: 'MSSQL', image: MSSQL },
    { name: 'Derby DB', image: berbyDB },
    { name: 'Chocolatey', image: choco },
    { name: 'VirtualBox', image: VB },
    { name: 'Big Query', image: BigQuery },
    { name: 'NoSQL', image: noSQL },
    { name: 'Jira', image: jira },
    { name: 'Zephyr', image: zephyr },
    { name: 'Confluence', image: confluence },
    { name: 'DBeaver', image: dbeaver },
    { name: 'Linux', image: linux },
    { name: 'CentOS', image: centOS },
    { name: 'Intellijidea', image: idea }
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
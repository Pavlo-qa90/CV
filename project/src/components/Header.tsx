import React from 'react';
import { ArrowRight } from 'lucide-react';
import PavloImage from './images/Pavlo_medvedskyi.jpg';


export function Header() {
  return (
    <section id="header" className="min-h-screen flex items-center">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 flex-shrink-0">
            <img
              src={PavloImage}
              alt="Pavlo Medvedskyi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Pavlo Medvedskyi
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Senior Quality Assurance Engineer</h2>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
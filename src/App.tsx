import { useState } from 'react';
import { Download, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Tools } from './components/Tools';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { GoToTop } from './components/GoToTop';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sections = ['About', 'Experience', 'Tools', 'Skills', 'Projects', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span
              onClick={scrollToTop}
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
            >
              Pavlo Medvedskyi
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    {section}
                  </a>
                ))}
                <a
                  href="/Pavlo_Medvedskyi_CV.pdf"
                  download="Pavlo_Medvedskyi_CV.pdf"
                  className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
              <a
                href="/Public/Pavlo Medvedskyi CV.pdf"
                download="Pavlo_Medvedskyi_CV.pdf"
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Header />
        <About />
        <Experience />
        <Tools />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            © {new Date().getFullYear()} Pavlo Medvedskyi. All rights reserved.
          </p>
        </div>
      </footer>

      <GoToTop />
    </div>
  );
}

export default App;

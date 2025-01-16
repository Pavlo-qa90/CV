import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    
    const toggleVisibility = () => {
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        if (window.scrollY >= aboutTop) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
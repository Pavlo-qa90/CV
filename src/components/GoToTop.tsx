import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    const toggleVisibility = () => {
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        setIsVisible(window.scrollY >= aboutTop);
      }
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className={`go-top-btn fixed flex items-center justify-center 
        text-white transition-all duration-500 ease-out
        backdrop-blur-xl border border-[#6DDCFF]/40 
        bg-[rgba(17,24,39,0.55)] shadow-[0_0_25px_rgba(109,220,255,0.25)]
        hover:scale-110 hover:shadow-[0_0_40px_rgba(109,220,255,0.4)]
        hover:border-[#6DDCFF]/70 hover:bg-[rgba(17,24,39,0.75)]
        ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-12 pointer-events-none'
        }`}
      style={{
        zIndex: 9999,
        bottom: '2rem',
        right: '2rem',
        borderRadius: '9999px',
        padding: '0.85rem',
      }}
    >
      <div className="relative flex items-center justify-center">
        <ArrowUp className="w-6 h-6 text-[#6DDCFF] drop-shadow-[0_0_10px_rgba(109,220,255,0.6)]" />
        <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-gradient-to-tr from-[#6DDCFF] to-[#A67DFF]" />
      </div>
    </button>
  );
}

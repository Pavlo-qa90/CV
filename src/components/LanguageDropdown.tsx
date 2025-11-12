import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Language {
  code: 'en' | 'ua';
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'ua', name: 'Українська', flag: 'https://flagcdn.com/w40/ua.png' },
];

export function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const portalRootRef = useRef<HTMLDivElement | null>(null);
  const currentLanguage = languages.find((lang) => lang.code === language);

  useEffect(() => {
    const portal = document.createElement('div');
    portal.id = 'language-dropdown-portal';
    portal.style.position = 'fixed';
    portal.style.top = '0';
    portal.style.left = '0';
    portal.style.width = '100%';
    portal.style.height = '100%';
    portal.style.zIndex = '9999';
    portal.style.pointerEvents = 'none';
    document.body.appendChild(portal);
    portalRootRef.current = portal;
    return () => portal.remove();
  }, []);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const button = dropdownRef.current;
      const menu = menuRef.current;

      if (button?.contains(target) || menu?.contains(target)) return;

      setIsOpen(false);
    }

    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);


  const toggleMenu = () => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setMenuPos({ top: rect.bottom + 8, left: rect.left, width: rect.width });
    }
    setIsOpen((prev) => !prev);
  };


  const menu = (
    <div
      id="language-dropdown-menu"
      ref={menuRef}
      style={{
        position: 'absolute',
        top: `${menuPos.top}px`,
        left: `${menuPos.left}px`,
        width: `${menuPos.width}px`,
        pointerEvents: 'auto',
      }}
      className="rounded-2xl overflow-hidden bg-[rgba(17,24,39,0.9)]
                 backdrop-blur-2xl border border-[#6DDCFF]/20
                 shadow-[0_0_25px_rgba(109,220,255,0.2)]
                 transition-all duration-300 ease-out transform origin-top
                 animate-[fadeSlide_0.25s_ease-out]"
    >
      {languages.map((lang, index) => (
        <button
          key={lang.code}
          onClick={() => {
            setLanguage(lang.code);
            setIsOpen(false);
          }}
          className={`flex items-center space-x-2 w-full px-4 py-3 text-left text-[#E8ECF5]/90 transition-all duration-200
            hover:bg-[rgba(109,220,255,0.08)] hover:text-[#6DDCFF]
            ${language === lang.code ? 'bg-[rgba(109,220,255,0.05)]' : ''}
            ${index !== languages.length - 1 ? 'border-b border-white/10' : ''}`}
        >
          <img src={lang.flag} alt={lang.name} className="w-6 h-4 object-cover rounded" />
          <span className="text-sm font-medium">{lang.name}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleMenu}
        aria-label="Language selector"
        aria-expanded={isOpen}
        className="flex items-center space-x-2 px-4 py-2 rounded-full
          backdrop-blur-xl border border-[#6DDCFF]/30
          bg-[rgba(17,24,39,0.45)] text-white
          shadow-[0_4px_25px_rgba(109,220,255,0.15)]
          transition-all duration-300 hover:scale-105
          hover:shadow-[0_0_20px_rgba(109,220,255,0.3)]"
      >
        <img
          src={currentLanguage?.flag}
          alt={currentLanguage?.name}
          className="w-6 h-4 object-cover rounded shadow-[0_0_8px_rgba(109,220,255,0.4)]"
        />
        <span className="text-sm font-medium text-[#E8ECF5]/90 tracking-wide">
          {currentLanguage?.name}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-[#6DDCFF]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#6DDCFF]" />
        )}
      </button>

      {isOpen && portalRootRef.current ? createPortal(menu, portalRootRef.current) : null}
    </div>
  );
}
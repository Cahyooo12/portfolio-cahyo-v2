import { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 md:px-8">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-text-primary no-underline transition-opacity hover:opacity-70">
          <Code className="text-accent-blue" size={20} />
          <span className="text-[15px] font-semibold tracking-tight">Cahyo.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[13px] font-medium text-text-tertiary transition-colors hover:text-text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <a 
            href="#contact" 
            className="group hidden md:flex items-center gap-1 text-[13px] font-medium text-text-primary transition-opacity hover:opacity-70"
          >
            Hire me <span className="text-accent-blue transition-transform group-hover:translate-x-1">→</span>
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 items-center justify-center text-text-tertiary transition-colors hover:text-text-primary md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-border-subtle bg-bg-primary/95 p-6 backdrop-blur-xl shadow-lg md:hidden">
          <div className="flex flex-col gap-5">
            {links.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[15px] font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-2 pt-5 border-t border-border-subtle">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-medium text-text-tertiary">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

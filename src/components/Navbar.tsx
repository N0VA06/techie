
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: 'https://twitter.com/' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:your-email@example.com' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-neon-blue/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-jetbrains font-bold text-light relative group">
            <span className="text-neon-blue animate-pulse-neon">&lt;</span>
            <span className="group-hover:text-neon-blue transition-colors duration-300">Dev</span>
            <span className="text-neon-blue animate-pulse-neon">/&gt;</span>
            <span className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-sm bg-neon-blue/20 rounded transition-opacity duration-300 -z-10"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-light-secondary hover:text-neon-blue transition-colors duration-300 text-sm font-medium relative py-2"
                    data-text={link.name}
                  >
                    <span className="glitch-effect" data-text={link.name}>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4 pl-4 border-l border-dark-tertiary">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon hover:animate-pulse-neon"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light-secondary hover:text-neon-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-dark/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="cyber-grid absolute inset-0 opacity-10"></div>
        <div className="flex flex-col h-full justify-center items-center p-8 space-y-8">
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-light text-2xl font-medium hover:text-neon-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  data-text={link.name}
                >
                  <span className="glitch-effect" data-text={link.name}>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex space-x-6 mt-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-secondary hover:text-neon-blue transition-colors text-xl hover:animate-pulse-neon"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

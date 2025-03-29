
import React from 'react';
import TypedTerminal from './TypedTerminal';
import { ArrowRight, ArrowDown, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const terminalTexts = [
    "Building Scalable APIs 🚀",
    "Optimizing Databases 🔥",
    "Deploying on AWS ☁️",
    "Crafting Clean Code 💻"
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neon-blue font-jetbrains mb-4 animate-pulse-neon">
            <span className="inline-block">[</span> IDENTITY_CONFIRMED <span className="inline-block">]</span>
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
            <span className="glitch-effect" data-text="John Doe">John Doe</span>
            <span className="absolute -inset-x-6 inset-y-0 bg-neon-blue/5 blur-sm -z-10"></span>
            <span className="absolute h-0.5 w-1/3 bg-neon-blue/40 bottom-0 left-1/3"></span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold mb-6 h-12 relative angular-border bg-dark-secondary/30 px-4">
            <span className="absolute left-0 top-0 h-full w-1 bg-neon-blue opacity-60"></span>
            <TypedTerminal texts={terminalTexts} />
            <span className="absolute right-0 top-0 h-full w-1 bg-neon-blue opacity-60"></span>
          </div>
          
          <p className="text-light-tertiary mb-8 max-w-2xl mx-auto bg-dark-secondary/20 p-4 border-l-2 border-neon-blue/70 backdrop-blur-sm">
            A passionate backend engineer focused on building robust, scalable, and secure systems.
            I specialize in API development, database optimization, and cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="neon-border px-6 py-3 bg-dark-secondary/50 text-neon-blue rounded-sm flex items-center justify-center gap-2 hover:bg-neon-blue/10 transition-all duration-300 group"
            >
              <span className="group-hover:animate-pulse-neon">View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-neon-purple/40 text-light rounded-sm flex items-center justify-center gap-2 hover:border-neon-purple transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-neon-purple transition-colors duration-300">Contact Me</span>
              <Mail size={18} className="relative z-10 group-hover:text-neon-purple transition-colors duration-300" />
              <span className="absolute inset-0 bg-neon-purple/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#tech-stack" aria-label="Scroll Down" className="group">
          <ArrowDown className="text-light-tertiary group-hover:text-neon-blue transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

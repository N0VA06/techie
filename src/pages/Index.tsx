
import React from 'react';
import { Code2, Database, Server, Cloud, Github, Linkedin, Twitter, Mail } from 'lucide-react';

// Components
import GothamBackground from '../components/GothamBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TechCard from '../components/TechCard';
import ProjectGallery from '../components/ProjectGallery';
import TimelineItem from '../components/TimelineItem';
import ContactForm from '../components/ContactForm';

const Index = () => {
  // Tech Stack data
  const techCategories = [
    {
      icon: <Code2 />,
      title: "Languages",
      description: "Python, JavaScript, TypeScript, Go, Rust"
    },
    {
      icon: <Server />,
      title: "Frameworks",
      description: "Django, Node.js, Express, FastAPI, NestJS"
    },
    {
      icon: <Database />,
      title: "Databases",
      description: "PostgreSQL, MongoDB, Redis, MySQL, Elasticsearch"
    },
    {
      icon: <Cloud />,
      title: "DevOps",
      description: "Docker, Kubernetes, AWS, CI/CD, Terraform"
    }
  ];

  // Projects data
  const projects = [
    {
      title: "Scalable E-commerce API",
      description: "A high-performance REST API for e-commerce platforms, handling 10k+ requests per second with optimized caching.",
      techStack: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      githubUrl: "#",
      docsUrl: "#",
      liveUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Real-time Analytics Engine",
      description: "Event-driven microservice architecture for processing and analyzing real-time data streams.",
      techStack: ["Python", "FastAPI", "Kafka", "TimescaleDB", "Grafana"],
      githubUrl: "#",
      docsUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cloud Infrastructure Orchestrator",
      description: "Automated infrastructure provisioning and scaling system with self-healing capabilities.",
      techStack: ["Go", "Terraform", "Kubernetes", "AWS", "Prometheus"],
      githubUrl: "#",
      docsUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Auth Microservice",
      description: "Secure authentication and authorization service with OAuth2, JWT, and multi-factor authentication.",
      techStack: ["TypeScript", "NestJS", "PostgreSQL", "Redis", "JWT"],
      githubUrl: "#",
      docsUrl: "#"
    }
  ];

  // Experience data
  const experiences = [
    {
      position: "Senior Backend Engineer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      achievements: [
        "Redesigned the core API architecture, resulting in a 40% improvement in response times",
        "Implemented efficient caching strategies that reduced database load by 60%",
        "Led the migration from monolith to microservices architecture",
        "Mentored junior developers and established coding standards"
      ]
    },
    {
      position: "Backend Developer",
      company: "DataFlow Systems",
      period: "2019 - 2022",
      achievements: [
        "Built RESTful APIs serving 5+ million daily requests",
        "Optimized database queries, reducing query times by 70%",
        "Implemented CI/CD pipeline that reduced deployment time from hours to minutes",
        "Developed real-time data processing system using Kafka and ElasticSearch"
      ]
    },
    {
      position: "Junior Software Engineer",
      company: "StartupHub",
      period: "2017 - 2019",
      achievements: [
        "Developed backend services for a SaaS platform using Node.js and MongoDB",
        "Created automated testing suite with 90% code coverage",
        "Implemented webhooks system for third-party integrations",
        "Collaborated with frontend team to improve API usability"
      ],
      isLast: true
    }
  ];

  // Certifications data
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2020"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2019"
    }
  ];

  // Social links data
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/"
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com/"
    },
    {
      name: "Email",
      icon: <Mail size={24} />,
      url: "mailto:your-email@example.com"
    }
  ];

  return (
    <div className="bg-dark text-light min-h-screen">
      <GothamBackground />
      <div className="bat-symbol"></div>
      <div className="city-silhouette"></div>
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative">
              <span>Tech Stack</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
            </h2>
            <p className="text-light-tertiary max-w-2xl mx-auto">
              The technologies I use to build robust, scalable, and high-performance backend systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((tech, index) => (
              <TechCard
                key={index}
                icon={tech.icon}
                title={tech.title}
                description={tech.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-secondary/30 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative">
              <span>Featured Projects</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></span>
            </h2>
            <p className="text-light-tertiary max-w-2xl mx-auto mb-12">
              A collection of my most impactful backend projects, showcasing my expertise in building scalable systems.
            </p>
          </div>
          
          <ProjectGallery projects={projects} />
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative">
              <span>Experience</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></span>
            </h2>
            <p className="text-light-tertiary max-w-2xl mx-auto">
              My professional journey building backend systems and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                position={exp.position}
                company={exp.company}
                period={exp.period}
                achievements={exp.achievements}
                isLast={exp.isLast}
              />
            ))}
          </div>
          
          {/* Certifications */}
          <div className="max-w-3xl mx-auto mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center relative inline-block">
              <span>Certifications</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-5">
                  <h4 className="font-bold text-light mb-1">{cert.name}</h4>
                  <p className="text-light-tertiary text-sm">{cert.issuer}</p>
                  <p className="text-neon-blue text-sm mt-2">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-secondary/30 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 inline-block relative">
              <span>Get In Touch</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent"></span>
            </h2>
            <p className="text-light-tertiary max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <ContactForm />
            
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-3 hover:border-neon-blue/50 transition-all duration-300 group"
                >
                  <span className="text-neon-blue group-hover:animate-pulse-neon">{social.icon}</span>
                  <span className="group-hover:text-neon-blue transition-colors duration-300">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-light-tertiary text-sm border-t border-neon-blue/20 relative">
        <div className="absolute inset-0 bg-cyber-grid opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="mt-2">Built with <span className="text-neon-blue">React</span>, <span className="text-neon-purple">TailwindCSS</span>, and <span className="text-neon-green">TypeScript</span></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

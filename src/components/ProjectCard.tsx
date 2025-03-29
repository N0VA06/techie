
import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  docsUrl,
}) => {
  return (
    <div className="p-6 bg-dark-secondary/80 backdrop-blur-sm">
      <h3 className="text-xl font-bold mb-2 text-light">{title}</h3>
      <p className="text-light-tertiary mb-4 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="text-xs px-2 py-1 rounded-full bg-dark-tertiary text-neon-blue"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 flex-wrap">
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-button text-xs flex items-center gap-1"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-button text-xs flex items-center gap-1"
          >
            <Github size={14} />
            GitHub Repo
          </a>
        )}
        {docsUrl && (
          <a 
            href={docsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="neon-button text-xs flex items-center gap-1"
          >
            <FileText size={14} />
            API Docs
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

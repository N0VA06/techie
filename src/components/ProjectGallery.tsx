
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  imageUrl?: string;
}

interface ProjectGalleryProps {
  projects: Project[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-0 bg-transparent overflow-hidden">
                  <CardContent className="p-0">
                    <AspectRatio ratio={16/9} className="bg-dark-secondary/50">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="rounded-t-lg w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-dark-secondary/80">
                          <span className="text-neon-blue text-4xl">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </AspectRatio>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      docsUrl={project.docsUrl}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-8 gap-2">
          <CarouselPrevious className="relative static left-0 translate-y-0 bg-dark-tertiary border-dark-tertiary hover:bg-dark-secondary hover:border-neon-blue" />
          <CarouselNext className="relative static right-0 translate-y-0 bg-dark-tertiary border-dark-tertiary hover:bg-dark-secondary hover:border-neon-blue" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectGallery;

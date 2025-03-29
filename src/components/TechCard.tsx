
import React from 'react';
import { cn } from '@/lib/utils';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn(
      "tech-card glass-card p-6 flex flex-col items-center text-center",
      className
    )}>
      <div className="text-neon-blue text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-light-tertiary text-sm">{description}</p>
    </div>
  );
};

export default TechCard;

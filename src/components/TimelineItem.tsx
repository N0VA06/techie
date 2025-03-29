
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItemProps {
  position: string;
  company: string;
  period: string;
  achievements: string[];
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  position,
  company,
  period,
  achievements,
  isLast = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative pl-8 pb-8">
      <div className="timeline-dot"></div>
      {!isLast && (
        <div className="absolute top-4 bottom-0 left-[6px] w-px bg-neon-blue/10"></div>
      )}
      <div className="glass-card p-5 transition-all duration-300 hover:border-neon-blue/15 hover:shadow-[0_0_12px_rgba(26,78,104,0.2)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-light">{position}</h3>
            <p className="text-light-secondary">{company}</p>
          </div>
          <span className="text-light-tertiary text-sm whitespace-nowrap font-jetbrains opacity-80">
            <span className="text-neon-purple">&lt;</span>
            {period}
            <span className="text-neon-purple">&gt;</span>
          </span>
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm text-light-tertiary hover:text-light-secondary transition-colors mt-2 group"
        >
          {expanded ? (
            <>
              <ChevronUp size={16} className="text-neon-blue opacity-70" />
              <span>
                <span className="text-neon-blue opacity-70">[</span> HIDE DETAILS <span className="text-neon-blue opacity-70">]</span>
              </span>
            </>
          ) : (
            <>
              <ChevronDown size={16} className="text-neon-blue opacity-70" />
              <span>
                <span className="text-neon-blue opacity-70">[</span> SHOW DETAILS <span className="text-neon-blue opacity-70">]</span>
              </span>
            </>
          )}
        </button>
        
        <div className={cn(
          "overflow-hidden transition-all duration-300",
          expanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        )}>
          <ul className="list-none space-y-1 text-light-tertiary border-l border-neon-blue/10 pl-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="relative">
                <span className="text-neon-blue absolute -left-[5px] top-1/2 transform -translate-y-1/2 w-[6px] h-[1px] bg-neon-blue/30"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

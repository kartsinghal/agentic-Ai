import React from 'react';
import { cn } from '../../utils/cn'; // Assuming we have a cn utility

export const GlassCard = ({ children, className, glowing = false, ...props }) => {
  return (
    <div
      className={cn(
        'glass-panel relative overflow-hidden',
        glowing && 'neon-border-blue',
        className
      )}
      {...props}
    >
      {/* Subtle top glare effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {children}
    </div>
  );
};

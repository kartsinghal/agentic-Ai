import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Waves, Activity, Navigation, Zap } from 'lucide-react';
import { useCrisis } from '../../context/CrisisContext';
import { GlassCard } from '../ui/GlassCard';

export const DisasterSimulationPanel = () => {
  const { simulateIncident } = useCrisis();

  const handleSimulate = (type) => {
    simulateIncident(type);
  };

  return (
    <GlassCard className="p-4 flex flex-col h-full border-[var(--color-neon-purple)] shadow-[0_0_15px_rgba(176,38,255,0.1)]">
       <div className="flex items-center justify-between mb-4">
         <h2 className="text-sm font-bold text-gray-300 tracking-wider flex items-center">
            <Zap className="w-4 h-4 mr-2 text-[var(--color-neon-purple)]" /> DISASTER SIMULATION SUITE
         </h2>
         <span className="text-[10px] bg-[var(--color-neon-purple)] text-white px-2 py-0.5 rounded font-mono uppercase tracking-widest animate-pulse">Demo Mode</span>
       </div>
       
       <p className="text-xs text-gray-400 mb-4 leading-relaxed">
         Trigger synthetic crisis events to evaluate AI response protocols, dynamic routing, and resource allocation algorithms.
       </p>

       <div className="grid grid-cols-2 gap-3 flex-1">
          <SimButton 
            icon={<Flame className="w-6 h-6 mb-2 text-red-500" />} 
            label="Simulate Fire (Critical)" 
            onClick={() => handleSimulate('Fire')}
            hoverColor="hover:border-red-500 hover:bg-red-500/10 hover:shadow-[0_0_15px_#ef4444]"
          />
          <SimButton 
            icon={<Waves className="w-6 h-6 mb-2 text-blue-500" />} 
            label="Simulate Flood (High)" 
            onClick={() => handleSimulate('Flood')}
            hoverColor="hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_15px_#3b82f6]"
          />
          <SimButton 
            icon={<Activity className="w-6 h-6 mb-2 text-orange-500" />} 
            label="Simulate Earthquake" 
            onClick={() => handleSimulate('Earthquake')}
            hoverColor="hover:border-orange-500 hover:bg-orange-500/10 hover:shadow-[0_0_15px_#f97316]"
          />
          <SimButton 
            icon={<Navigation className="w-6 h-6 mb-2 text-yellow-500" />} 
            label="Simulate Traffic Block" 
            onClick={() => handleSimulate('Traffic')}
            hoverColor="hover:border-yellow-500 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_#eab308]"
          />
       </div>
    </GlassCard>
  );
};

const SimButton = ({ icon, label, onClick, hoverColor }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-3 rounded-lg border border-white/10 bg-black/30 transition-all duration-300 ${hoverColor}`}
  >
    {icon}
    <span className="text-xs font-bold text-center text-gray-300">{label}</span>
  </motion.button>
);

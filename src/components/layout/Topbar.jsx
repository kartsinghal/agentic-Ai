import React, { useState, useEffect } from 'react';
import { Bell, Activity, User, ShieldCheck, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCrisis } from '../../context/CrisisContext';

export const Topbar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { alerts } = useCrisis();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col z-10 sticky top-0">
      
      {/* Emergency Protocol Banner */}
      <AnimatePresence>
        {alerts.length > 0 && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="w-full bg-red-600 border-b border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] overflow-hidden"
          >
            <div className="px-6 py-2 flex items-center justify-center space-x-3 text-white">
               <AlertTriangle className="w-5 h-5 animate-pulse" />
               <div className="flex flex-col md:flex-row md:items-center text-sm font-bold tracking-widest space-y-1 md:space-y-0 md:space-x-4">
                 <span>🚨 EMERGENCY PROTOCOL ACTIVE – DELHI NCR REGION</span>
                 <span className="hidden md:inline">|</span>
                 <span className="text-red-200 font-mono text-xs">{alerts[0].msg}</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16 w-full glass-panel border-t-0 border-l-0 border-r-0 border-b border-white/10 flex items-center justify-between px-6 rounded-none backdrop-blur-xl bg-black/40">
        
        {/* System Status */}
        <div className="flex items-center space-x-4 border border-white/20 bg-black/40 px-4 py-2 rounded-full">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
          </div>
          <span className="text-xs font-mono tracking-widest text-green-400">SYSTEM AGENTS ACTIVE</span>
          
          <div className="w-px h-4 bg-white/20 mx-2"></div>
          
          <div className="flex items-center space-x-1 text-xs text-gray-400 font-mono">
            <Activity className="w-4 h-4 text-blue-400" />
            <span>LOAD: {Math.floor(Math.random() * 10) + 20}%</span>
          </div>

          <div className="w-px h-4 bg-white/20 mx-2"></div>
          
          <span className="text-xs font-mono tracking-widest text-gray-300">{time}</span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-6">
          
          {/* Security Status */}
          <div className="flex items-center space-x-2 text-[var(--color-neon-blue)]">
            <ShieldCheck className="w-5 h-5 neon-text-blue" />
            <span className="text-xs uppercase tracking-widest font-semibold">Protected</span>
          </div>

          {/* Notifications */}
          <div className="relative">
            <motion.button 
              whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            >
              <Bell className="w-5 h-5 text-gray-300" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[var(--color-dark-bg)] shadow-[0_0_8px_#ef4444]"></span>
            </motion.button>
          </div>

          {/* Admin Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-white/20">
            <div className="text-right hidden md:block">
               <div className="text-sm font-bold text-white tracking-wide">Commander</div>
               <div className="text-[10px] text-[var(--color-neon-purple)] neon-text-purple uppercase tracking-widest">Level 5 Auth</div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05, borderColor: '#00f3ff', boxShadow: '0 0 15px #00f3ff' }}
              className="w-10 h-10 rounded-full border-2 border-[var(--color-neon-purple)] shadow-[0_0_10px_var(--color-neon-purple)] bg-black flex items-center justify-center overflow-hidden transition-colors"
            >
              <User className="w-6 h-6 text-white/80 mt-1" />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, Truck, Flame, Droplets, Shield, Clock, BrainCircuit, Activity } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export default function Dashboard() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full text-white space-y-6 select-none font-sans">
       {/* Header */}
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div>
            <h1 className="text-2xl font-bold tracking-widest neon-text-blue">COMMAND DASHBOARD</h1>
            <p className="text-gray-400 text-sm mt-1">Global Incident Overview & Resource Allocation</p>
         </div>
         <div className="flex space-x-4 pr-2">
            <GlassCard className="px-4 py-2 flex items-center space-x-3">
               <Clock className="w-4 h-4 text-cyan-400" />
               <span className="font-mono text-lg tracking-wider font-semibold">{time}</span>
            </GlassCard>
            <GlassCard glowing className="px-4 py-2 flex items-center space-x-3 border-[var(--color-neon-purple)]">
               <Activity className="w-4 h-4 text-[var(--color-neon-purple)] neon-text-purple" />
               <div className="flex flex-col">
                 <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">AI THREAT LEVEL</span>
                 <span className="font-bold text-red-500 leading-none mt-1">CRITICAL</span>
               </div>
            </GlassCard>
         </div>
       </div>

       {/* Map & Feed Row */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
           {/* Live Incident Map */}
           <GlassCard className="lg:col-span-2 h-full flex flex-col p-4 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2 z-10">
                 <h2 className="text-sm font-bold text-gray-300 tracking-wider flex items-center"><MapPin className="w-4 h-4 mr-2 text-[var(--color-neon-blue)]" /> LIVE SECTOR MAP</h2>
                 <div className="flex space-x-2">
                   <span className="flex items-center text-xs text-red-400"><span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444] mr-1"></span> Fire</span>
                   <span className="flex items-center text-xs text-blue-400"><span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] mr-1"></span> Medical</span>
                   <span className="flex items-center text-xs text-[var(--color-neon-purple)]"><span className="w-2 h-2 rounded-full bg-[var(--color-neon-purple)] shadow-[0_0_8px_var(--color-neon-purple)] mr-1"></span> Police</span>
                 </div>
              </div>
              
              {/* Fake Map Grid Background */}
              <div className="flex-1 relative border border-white/5 rounded-lg bg-[#050a15] overflow-hidden">
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,150,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,150,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                 
                 {/* Map Markers */}
                 <MapMarker x={30} y={40} type="fire" pulse />
                 <MapMarker x={60} y={20} type="medical" />
                 <MapMarker x={80} y={70} type="police" pulse />
                 <MapMarker x={45} y={65} type="fire" />
                 
                 {/* Route Line Mock */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 5px var(--color-neon-blue))' }}>
                   <motion.path 
                     d="M 30% 40% Q 45% 30% 60% 20%" 
                     fill="none" 
                     stroke="var(--color-neon-blue)" 
                     strokeWidth="2" 
                     strokeDasharray="5,5"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
                 </svg>
              </div>
           </GlassCard>

           {/* Incident Feed */}
           <GlassCard className="h-full flex flex-col p-4">
              <h2 className="text-sm font-bold text-gray-300 tracking-wider mb-4 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" /> ACTIVE INCIDENTS
              </h2>
              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                 <IncidentCard 
                   type="Fire" 
                   location="Sector 7G, Industrial Park" 
                   priority="CRITICAL" 
                   status="Dispatching Teams"
                   eta="4 mins"
                   icon={<Flame className="w-5 h-5 text-red-500" />}
                   color="border-red-500/50 bg-red-500/5"
                 />
                 <IncidentCard 
                   type="Medical" 
                   location="Highway 42, Mile 18" 
                   priority="HIGH" 
                   status="Ambulance en route"
                   eta="8 mins"
                   icon={<Activity className="w-5 h-5 text-blue-400" />}
                   color="border-blue-500/50 bg-blue-500/5"
                 />
                 <IncidentCard 
                   type="Security" 
                   location="Downtown Metro Station" 
                   priority="MEDIUM" 
                   status="Police deployed"
                   eta="12 mins"
                   icon={<Shield className="w-5 h-5 text-purple-400" />}
                   color="border-purple-500/50 bg-purple-500/5"
                 />
                 <IncidentCard 
                   type="Structure" 
                   location="Old Bridge" 
                   priority="LOW" 
                   status="Under Assessment"
                   eta="N/A"
                   icon={<AlertTriangle className="w-5 h-5 text-yellow-500" />}
                   color="border-yellow-500/50 bg-yellow-500/5"
                 />
              </div>
           </GlassCard>
       </div>

       {/* AI & Resources Row */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Decision Log */}
          <GlassCard className="p-4 flex flex-col h-64">
            <h2 className="text-sm font-bold text-gray-300 tracking-wider mb-4 flex items-center">
              <BrainCircuit className="w-4 h-4 mr-2 text-[var(--color-neon-purple)]" /> AI LOGIC & DECISIONS
            </h2>
            <div className="bg-black/50 rounded p-3 flex-1 overflow-y-auto font-mono text-xs text-green-400 space-y-2 border border-white/5">
              <p>› <span className="text-gray-500">[10:42:01]</span> Analyzing NLP burst from Sector 7G calls.</p>
              <p>› <span className="text-gray-500">[10:42:03]</span> Extracted keywords: 'explosion', 'fire', 'trapped'.</p>
              <p>› <span className="text-gray-500">[10:42:04]</span> Risk classified as CRITICAL (Level 5).</p>
              <p className="text-[var(--color-neon-blue)]">› <span className="text-gray-500">[10:42:05]</span> Dispatching Fire Units F-12, F-14, Medical M-03.</p>
              <p>› <span className="text-gray-500">[10:42:08]</span> Rerouting F-12 to avoid traffic on I-95.</p>
              <p className="animate-pulse">› Computing next ideal allocation...</p>
            </div>
          </GlassCard>

          {/* Resource Status */}
          <GlassCard className="p-4 flex flex-col h-64 text-white">
            <h2 className="text-sm font-bold text-gray-300 tracking-wider mb-4 flex items-center">
               <Truck className="w-4 h-4 mr-2 text-gray-400" /> RESOURCE DEPLOYMENT
            </h2>
             <div className="flex-1 flex flex-col justify-between">
                <ResourceBar label="Fire Trucks" color="bg-red-500" available={8} total={24} />
                <ResourceBar label="Ambulances" color="bg-blue-500" available={15} total={40} />
                <ResourceBar label="Police Units" color="bg-[var(--color-neon-purple)]" available={32} total={50} />
             </div>
          </GlassCard>
       </div>
    </div>
  );
}

const MapMarker = ({ x, y, type, pulse }) => {
  const colors = {
    fire: 'bg-red-500 shadow-[0_0_15px_#ef4444]',
    medical: 'bg-blue-500 shadow-[0_0_15px_#3b82f6]',
    police: 'bg-[var(--color-neon-purple)] shadow-[0_0_15px_var(--color-neon-purple)]'
  };

  return (
    <div 
      className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className={`w-3 h-3 rounded-full relative ${colors[type]}`}>
        {pulse && (
          <span className={`absolute inset-0 rounded-full animate-ping opacity-75 ${colors[type]}`}></span>
        )}
      </div>
    </div>
  )
}

const IncidentCard = ({ type, location, priority, status, eta, icon, color }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`p-3 rounded-lg border ${color} backdrop-blur-sm cursor-pointer`}
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center space-x-2">
        {icon}
        <span className="font-bold text-sm">{type}</span>
      </div>
      <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold ${
        priority === 'CRITICAL' ? 'bg-red-500 text-white animate-pulse' : 
        priority === 'HIGH' ? 'bg-orange-500 text-white' : 
        'bg-gray-600 text-gray-200'
      }`}>
        {priority}
      </span>
    </div>
    <div className="text-xs text-gray-300 mb-2 truncate">📍 {location}</div>
    <div className="flex justify-between items-center text-xs">
      <span className="text-gray-400">Status: <span className="text-white font-medium">{status}</span></span>
      <span className="font-mono text-[var(--color-neon-blue)]">ETA: {eta}</span>
    </div>
  </motion.div>
);

const ResourceBar = ({ label, color, available, total }) => {
  const percentage = Math.round((available / total) * 100);
  
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-gray-400 font-mono"><span className="text-white font-bold">{available}</span> / {total} available</span>
      </div>
      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
         <motion.div 
            className={`h-full ${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
         ></motion.div>
      </div>
    </div>
  )
}

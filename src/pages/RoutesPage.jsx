import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Route, Navigation, Clock, Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { cn } from '../utils/cn';

const routes = [
  {
    id: 1,
    name: 'Primary AI Route (Fastest)',
    distance: '4.2 km',
    eta: '8 mins',
    traffic: 'Light',
    status: 'Optimal',
    selected: true,
    color: 'var(--color-neon-blue)'
  },
  {
    id: 2,
    name: 'Secondary Protocol',
    distance: '5.1 km',
    eta: '12 mins',
    traffic: 'Moderate',
    status: 'Detour (Debris Avoided)',
    selected: false,
    color: 'var(--color-neon-purple)'
  },
  {
    id: 3,
    name: 'Standard Route',
    distance: '3.8 km',
    eta: '25 mins',
    traffic: 'Heavy (Blocked)',
    status: 'Not Recommended',
    selected: false,
    color: '#ef4444' // Red
  }
];

export default function RoutesPage() {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);

  return (
    <div className="w-full h-full text-white flex flex-col space-y-6">
       <div className="flex items-center space-x-3">
         <Route className="w-8 h-8 text-[var(--color-neon-blue)] neon-text-blue" />
         <div>
            <h1 className="text-2xl font-bold tracking-widest text-[var(--color-neon-blue)] neon-text-blue">AI ROUTE OPTIMIZATION</h1>
            <p className="text-gray-400 text-sm">Dynamic Pathfinding & Traffic Evasion</p>
         </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 pb-6">
           
           {/* Map Representation */}
           <GlassCard className="lg:col-span-2 h-[500px] lg:h-auto relative overflow-hidden flex flex-col p-4">
              <div className="flex justify-between items-center mb-4 z-10">
                 <h2 className="text-sm font-bold text-gray-300 tracking-wider">LIVE SATELLITE FEED</h2>
                 <span className="text-xs bg-black/50 px-2 py-1 rounded border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] animate-pulse">
                   TRACKING DISPATCH M-03
                 </span>
              </div>
              
              <div className="flex-1 relative bg-[#010308] border border-white/5 rounded-lg overflow-hidden">
                 {/* Fake topographical/grid map view */}
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
                 
                 {/* Start Point */}
                 <div className="absolute top-[80%] left-[10%] w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_15px_#3b82f6] z-10">
                    <span className="text-[10px] font-bold">M3</span>
                 </div>
                 
                 {/* End Point (Incident) */}
                 <div className="absolute top-[20%] left-[80%] w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center animate-pulse z-10">
                    <FlameIcon />
                 </div>

                 {/* Simulated active SVG Routes */}
                 <svg className="absolute inset-0 w-full h-full">
                    {/* Background Routes */}
                    <path d="M 10% 80% Q 20% 40% 80% 20%" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" className="opacity-40" />
                    <path d="M 10% 80% Q 50% 90% 80% 20%" fill="none" stroke="var(--color-neon-purple)" strokeWidth="3" className="opacity-40" />
                    
                    {/* Active Selected Route */}
                    {selectedRoute.id === 1 && (
                      <motion.path 
                        d="M 10% 80% Q 40% 50% 80% 20%" 
                        fill="none" 
                        stroke="var(--color-neon-blue)" 
                        strokeWidth="4"
                        style={{ filter: "drop-shadow(0 0 8px var(--color-neon-blue))" }}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    )}
                    {selectedRoute.id === 2 && (
                      <motion.path 
                        d="M 10% 80% Q 50% 90% 80% 20%" 
                        fill="none" 
                        stroke="var(--color-neon-purple)" 
                        strokeWidth="4"
                        style={{ filter: "drop-shadow(0 0 8px var(--color-neon-purple))" }}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    )}
                    {selectedRoute.id === 3 && (
                      <motion.path 
                        d="M 10% 80% Q 20% 40% 80% 20%" 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="4"
                        style={{ filter: "drop-shadow(0 0 8px #ef4444)" }}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    )}
                 </svg>

                 {/* Animated Dispatch Vehicle Marker */}
                 <AnimatePresence>
                   <motion.div 
                     key={selectedRoute.id}
                     className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white] z-20"
                     initial={{ left: "10%", top: "80%" }}
                     animate={
                        selectedRoute.id === 1 ? { left: ["10%", "40%", "80%"], top: ["80%", "50%", "20%"] } :
                        selectedRoute.id === 2 ? { left: ["10%", "50%", "80%"], top: ["80%", "90%", "20%"] } :
                        { left: ["10%", "20%", "80%"], top: ["80%", "40%", "20%"] }
                     }
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   />
                 </AnimatePresence>
                 
              </div>
           </GlassCard>

           {/* Route Suggestions Panel */}
           <GlassCard className="flex flex-col p-4 overflow-y-auto">
              <h2 className="text-sm font-bold text-gray-300 tracking-wider mb-6">AI CALCULATED PATHS</h2>
              
              <div className="space-y-4">
                 {routes.map(route => (
                    <motion.div
                       key={route.id}
                       whileHover={{ scale: 1.02 }}
                       onClick={() => setSelectedRoute(route)}
                       className={cn(
                          "p-4 rounded-xl cursor-pointer border transition-all duration-300 relative overflow-hidden",
                          selectedRoute.id === route.id 
                            ? "bg-white/10" 
                            : "bg-black/30 border-white/10 hover:border-white/20"
                       )}
                       style={{
                         borderColor: selectedRoute.id === route.id ? route.color : undefined,
                         boxShadow: selectedRoute.id === route.id ? `0 0 15px ${route.color}40, inset 0 0 10px ${route.color}20` : 'none'
                       }}
                    >
                       <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg" style={{ color: selectedRoute.id === route.id ? route.color : 'white' }}>
                            {route.name}
                          </h3>
                          {selectedRoute.id === route.id && (
                             <CheckCircle2 className="w-5 h-5" style={{ color: route.color }} />
                          )}
                       </div>
                       
                       <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-400">
                          <div className="flex items-center"><Navigation className="w-4 h-4 mr-2" /> {route.distance}</div>
                          <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {route.eta}</div>
                          <div className="flex items-center"><Activity className="w-4 h-4 mr-2" /> {route.traffic}</div>
                          <div className="flex items-center text-xs text-white/70">{route.status}</div>
                       </div>
                    </motion.div>
                 ))}
              </div>

              <div className="mt-auto pt-6">
                 <button className={cn(
                    "w-full py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center",
                    selectedRoute.id === 3 ? "bg-red-500/20 text-red-500 cursor-not-allowed" : "bg-[var(--color-neon-blue)] text-black hover:bg-cyan-300 shadow-[0_0_15px_var(--color-neon-blue)]"
                 )}>
                    {selectedRoute.id === 3 ? "PATH BLOCKED" : "TRANSMIT ROUTE TO UNIT"}
                 </button>
              </div>
           </GlassCard>
       </div>
    </div>
  );
}

const FlameIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>
)

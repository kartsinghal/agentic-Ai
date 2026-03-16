import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, Activity, Route, Zap } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-dark-bg)] text-white overflow-hidden relative font-sans">
      {/* Background Particles/Grid Mock */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGgwdjQwaDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNMCAwaDQwdjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSsyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-neon-purple)] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20 mt-10">
        <div className="text-center max-w-4xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="mb-6 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-neon-blue)] bg-white/5"
           >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-neon-blue)]"></span>
             </span>
             <span className="text-sm font-medium tracking-widest text-[var(--color-neon-blue)]">SYSTEM OPERATIONAL</span>
           </motion.div>

           <motion.h1 
             className="text-6xl md:text-8xl font-black mb-6 tracking-tight neon-text-purple"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.1 }}
           >
             AI Crisis Response <br /> Coordinator
           </motion.h1>

           <motion.p 
             className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
             Agent-Based Disaster Resource Management System. Analyzes emergency calls, prioritizes incidents, allocates critical vehicles, and finds optimal routes in real-time.
           </motion.p>

           <motion.div 
             className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
           >
             <button 
                onClick={() => navigate('/dashboard')}
                className="group relative px-8 py-4 bg-[var(--color-neon-purple)] hover:bg-[#c24aff] text-white font-bold rounded-xl text-lg transition-all duration-300 shadow-[0_0_20px_var(--color-neon-purple)] hover:shadow-[0_0_30px_var(--color-neon-purple)] overflow-hidden"
             >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                Launch Dashboard
             </button>
             
             <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-lg border border-white/10 transition-colors backdrop-blur-md">
                View Architecture
             </button>
           </motion.div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
             icon={<BrainCircuit className="w-8 h-8 text-[var(--color-neon-purple)]" />}
             title="AI Call Analysis"
             description="Real-time NLP processing of emergency streams to isolate critical data."
             delay={0.4}
          />
          <FeatureCard 
             icon={<Activity className="w-8 h-8 text-red-400" />}
             title="Priority Classification"
             description="Dynamic triage algorithms to allocate resources when seconds matter."
             delay={0.5}
          />
          <FeatureCard 
             icon={<Zap className="w-8 h-8 text-[var(--color-neon-blue)]" />}
             title="Resource Allocation"
             description="Autonomous dispatching of fire, medical, and police units."
             delay={0.6}
          />
          <FeatureCard 
             icon={<Route className="w-8 h-8 text-green-400" />}
             title="Route Optimization"
             description="Live traffic evasion and disaster-aware pathfinding algorithms."
             delay={0.7}
          />
        </div>

        {/* System Workflow */}
        <div className="mt-32 pb-10">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-widest neon-text-blue">SYSTEM WORKFLOW</h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative">
             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-neon-purple)] via-[var(--color-neon-blue)] to-[var(--color-neon-purple)] -translate-y-1/2 opacity-30"></div>
             
             <WorkflowStep number="1" title="User Input" delay={0.8} />
             <WorkflowStep number="2" title="AI Agent" glowing delay={0.9} />
             <WorkflowStep number="3" title="Decision Engine" delay={1.0} />
             <WorkflowStep number="4" title="Tools & Data" delay={1.1} />
             <WorkflowStep number="5" title="Emergency Response" glowing delay={1.2} />
          </div>
        </div>

      </main>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <GlassCard className="p-6 h-full hover:-translate-y-2 transition-transform duration-300 cursor-default">
      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
         {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </GlassCard>
  </motion.div>
);

const WorkflowStep = ({ number, title, glowing, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="relative z-10 w-full md:w-auto px-4"
  >
    <GlassCard glowing={glowing} className="px-6 py-4 flex flex-col items-center justify-center text-center">
       <span className="text-[10px] font-mono text-gray-500 mb-1">PHASE {number}</span>
       <span className="font-bold text-white tracking-wide">{title}</span>
    </GlassCard>
  </motion.div>
);

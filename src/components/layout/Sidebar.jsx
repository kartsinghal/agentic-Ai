import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, RadioReceiver, Truck, BrainCircuit, ShieldAlert, ShieldCheck, Settings } from 'lucide-react';
import { cn } from '../../utils/cn';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Live Incidents', path: '/incidents', icon: RadioReceiver },
  { name: 'Units & Routes', path: '/routes', icon: Truck },
  { name: 'AI Decisions', path: '/ai-logs', icon: BrainCircuit },
  { name: 'Public Alerts', path: '/alerts', icon: ShieldAlert },
  { name: 'Security', path: '/security', icon: ShieldCheck },
  { name: 'Settings', path: '/settings', icon: Settings, bottom: true },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen glass-panel rounded-none border-t-0 border-b-0 border-l-0 border-r border-white/10 flex flex-col pt-6 pb-4">
      {/* Brand */}
      <div className="px-6 mb-10 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-neon-purple)] flex items-center justify-center neon-border-purple shadow-[0_0_15px_var(--color-neon-purple)]">
           <BrainCircuit className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white tracking-wider">A.C.R.C</h1>
          <p className="text-xs text-[var(--color-neon-blue)] neon-text-blue uppercase tracking-widest">Command Center</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 px-4">
        {navItems.map((item) => {
          if (item.bottom) return null;
          return <NavItem key={item.path} item={item} />;
        })}
      </nav>

      {/* Bottom Nav */}
      <div className="mt-auto px-4">
        {navItems.filter(item => item.bottom).map((item) => (
           <NavItem key={item.path} item={item} />
        ))}
      </div>
    </div>
  );
};

const NavItem = ({ item }) => {
  const Icon = item.icon;
  
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        cn(
          'relative flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300',
          isActive
            ? 'text-white bg-white/10 shadow-[inset_0_0_10px_rgba(176,38,255,0.2)]'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
        )
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
             <motion.div
               layoutId="activeTab"
               className="absolute left-0 w-1 h-8 bg-[var(--color-neon-purple)] rounded-r-full shadow-[0_0_10px_var(--color-neon-purple)]"
               initial={false}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
             />
          )}
          <Icon className={cn('w-5 h-5', isActive && 'text-[var(--color-neon-purple)] neon-text-purple')} />
          <span>{item.name}</span>
        </>
      )}
    </NavLink>
  );
};

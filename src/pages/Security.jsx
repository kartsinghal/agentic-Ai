import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export default function Security() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 text-white font-sans">
      <GlassCard className="p-8 text-center max-w-lg w-full flex flex-col items-center justify-center">
        <ShieldAlert className="w-16 h-16 text-[var(--color-neon-purple)] mb-4 neon-text-purple" />
        <h1 className="text-2xl font-bold tracking-widest neon-text-purple mb-2">SECURITY MODULE</h1>
        <p className="text-gray-400 text-sm">Initializing Cyberspace Defenses...</p>
      </GlassCard>
    </div>
  );
}

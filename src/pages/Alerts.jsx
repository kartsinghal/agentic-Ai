import React from 'react';
import { Radio } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export default function Alerts() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 text-white font-sans">
      <GlassCard className="p-8 text-center max-w-lg w-full flex flex-col items-center justify-center">
        <Radio className="w-16 h-16 text-red-500 mb-4 animate-pulse shadow-[0_0_15px_#ef4444] rounded-full" />
        <h1 className="text-2xl font-bold tracking-widest text-[#ef4444] mb-2">PUBLIC ALERTS</h1>
        <p className="text-gray-400 text-sm">Awaiting Broadcast Signal...</p>
      </GlassCard>
    </div>
  );
}

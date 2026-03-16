import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Wind, Droplets, CloudFog, Flame, Eye, Waves } from 'lucide-react';
import { useCrisis } from '../../context/CrisisContext';
import { GlassCard } from '../ui/GlassCard';

export const EnvironmentalRiskPanel = () => {
  const { metrics } = useCrisis();

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'critical': return 'text-red-500 shadow-[0_0_10px_#ef4444] border-red-500 bg-red-500/10';
      case 'high': return 'text-orange-500 shadow-[0_0_10px_#f97316] border-orange-500 bg-orange-500/10';
      case 'medium': return 'text-yellow-500 shadow-[0_0_10px_#eab308] border-yellow-500 bg-yellow-500/10';
      case 'low': return 'text-green-400 shadow-[0_0_10px_#4ade80] border-green-500 bg-green-500/10';
      default: return 'text-gray-400 border-gray-600 bg-gray-800/30';
    }
  };

  const indicators = [
    { id: 'temp', label: 'Temperature', value: metrics.temperature.value, icon: <Thermometer className="w-5 h-5" />, colorClass: getRiskColor(metrics.temperature.risk) },
    { id: 'wind', label: 'Wind Speed', value: metrics.windSpeed.value, icon: <Wind className="w-5 h-5" />, colorClass: getRiskColor(metrics.windSpeed.risk) },
    { id: 'humidity', label: 'Humidity', value: metrics.humidity.value, icon: <Droplets className="w-5 h-5" />, colorClass: getRiskColor(metrics.humidity.risk) },
    { id: 'aqi', label: 'Air Quality (AQI)', value: metrics.aqi.value, icon: <CloudFog className="w-5 h-5" />, colorClass: getRiskColor(metrics.aqi.risk) },
    { id: 'fire', label: 'Fire Risk', value: metrics.fireRisk.value, icon: <Flame className="w-5 h-5" />, colorClass: getRiskColor(metrics.fireRisk.risk) },
    { id: 'vis', label: 'Visibility', value: metrics.visibility.value, icon: <Eye className="w-5 h-5" />, colorClass: getRiskColor(metrics.visibility.risk) },
    { id: 'flood', label: 'Flood Risk', value: metrics.floodRisk.value, icon: <Waves className="w-5 h-5" />, colorClass: getRiskColor(metrics.floodRisk.risk) },
  ];

  return (
    <GlassCard className="p-4 w-full flex flex-col justify-center">
       <h2 className="text-xs font-bold text-gray-400 tracking-widest mb-4 flex items-center">
          <CloudFog className="w-4 h-4 mr-2" /> ENVIRONMENTAL TELEMETRY
       </h2>
       
       <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3">
         {indicators.map((ind, i) => (
           <motion.div 
             key={ind.id}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className={`flex flex-col items-center justify-center p-3 rounded border backdrop-blur-md ${ind.colorClass}`}
           >
             <div className="mb-2">{ind.icon}</div>
             <div className="text-lg font-black tracking-wider leading-none">{ind.value}</div>
             <div className="text-[10px] uppercase font-bold mt-1 text-center opacity-80">{ind.label}</div>
           </motion.div>
         ))}
       </div>
    </GlassCard>
  );
};

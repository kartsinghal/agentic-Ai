import React, { createContext, useContext, useState, useEffect } from 'react';

const CrisisContext = createContext();

export const useCrisis = () => useContext(CrisisContext);

export const CrisisProvider = ({ children }) => {
  const [incidents, setIncidents] = useState([
    { id: 1, type: 'Fire', location: 'Sector 7G', priority: 'CRITICAL', status: 'Dispatching Teams', eta: '4 mins', x: 30, y: 40 },
    { id: 2, type: 'Medical', location: 'Highway 42', priority: 'HIGH', status: 'Ambulance en route', eta: '8 mins', x: 60, y: 20 },
    { id: 3, type: 'Security', location: 'Downtown Metro', priority: 'MEDIUM', status: 'Police deployed', eta: '12 mins', x: 80, y: 70 },
  ]);

  const [logs, setLogs] = useState([
    { id: 1, time: '12:45 PM', text: 'Satellite data refreshed.', type: 'info' },
    { id: 2, time: '12:47 PM', text: 'AI detected wildfire expansion.', type: 'warning' },
    { id: 3, time: '12:50 PM', text: 'Helicopter unit dispatched.', type: 'action' },
    { id: 4, time: '12:53 PM', text: 'Evacuation alert broadcasted.', type: 'alert' }
  ]);

  const [aiDecisions, setAiDecisions] = useState([
    { id: 1, timestamp: Date.now() - 60000, content: '› Analyzing NLP burst from Sector 7G calls.\n› Extracted keywords: "explosion", "fire", "trapped".\n› Risk classified as CRITICAL.\n› Dispatching Fire Units F-12, Medical M-03.' }
  ]);

  const [resources, setResources] = useState({
    fireTrucks: { available: 8, total: 24, label: 'Fire Trucks', color: 'bg-red-500' },
    ambulances: { available: 15, total: 40, label: 'Ambulances', color: 'bg-blue-500' },
    police: { available: 32, total: 50, label: 'Police Units', color: 'bg-[var(--color-neon-purple)]' },
    helicopters: { available: 2, total: 5, label: 'Helicopters', color: 'bg-yellow-500' },
    personnel: { available: 120, total: 500, label: 'Emergency Personnel', color: 'bg-green-500' },
    reliefKits: { available: 850, total: 2000, label: 'Relief Kits', color: 'bg-orange-500' },
    waterSupply: { available: 65, total: 100, label: 'Water Supply (%)', color: 'bg-cyan-500' }
  });

  const [metrics, setMetrics] = useState({
    temperature: { value: '32°C', risk: 'high' },
    windSpeed: { value: '25 km/h', risk: 'medium' },
    humidity: { value: '15%', risk: 'high' },
    aqi: { value: '412', risk: 'critical' },
    fireRisk: { value: 'EXTREME', risk: 'critical' },
    visibility: { value: '1.2 km', risk: 'high' },
    floodRisk: { value: 'LOW', risk: 'low' }
  });

  const [alerts, setAlerts] = useState([
    { id: 1, msg: 'FOREST FIRE ADVISORY IN EFFECT', type: 'error' },
    { id: 2, msg: 'AIR QUALITY HAZARDOUS', type: 'warning' }
  ]);

  // Simulation Functions
  const simulateIncident = (type) => {
    const newId = Date.now();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    let simulatedEvent;
    let aiLogContent;
    
    switch(type) {
      case 'Fire':
        simulatedEvent = { id: newId, type: 'Structure Fire', location: `Industrial Zone ${Math.floor(Math.random() * 20)}`, priority: 'CRITICAL', status: 'Assessing', eta: 'Calculating', x: Math.floor(Math.random() * 80) + 10, y: Math.floor(Math.random() * 80) + 10 };
        aiLogContent = `› [${time}] Heat signature anomaly detected.\n› Thermal mapping confirms structure fire.\n› Classifying as CRITICAL.\n› Dispatching 2 Fire Units, 1 Ambulance.`;
        setResources(prev => ({ ...prev, fireTrucks: { ...prev.fireTrucks, available: Math.max(0, prev.fireTrucks.available - 2) }, ambulances: { ...prev.ambulances, available: Math.max(0, prev.ambulances.available - 1) } }));
        setMetrics(prev => ({ ...prev, aqi: { value: '450', risk: 'critical' }, fireRisk: { value: 'CRITICAL', risk: 'critical' } }));
        break;
      case 'Flood':
        simulatedEvent = { id: newId, type: 'Flash Flood', location: `River Bend ${Math.floor(Math.random() * 10)}`, priority: 'HIGH', status: 'Deploying Boats', eta: '6 mins', x: Math.floor(Math.random() * 80) + 10, y: Math.floor(Math.random() * 80) + 10 };
        aiLogContent = `› [${time}] Sensor F-22 reports massive water swell.\n› Projected path overlaps civilian housing.\n› Classifying as HIGH.\n› Dispatching 3 Rescue Boats, 1 Helicopter.`;
        setResources(prev => ({ ...prev, helicopters: { ...prev.helicopters, available: Math.max(0, prev.helicopters.available - 1) }, personnel: { ...prev.personnel, available: Math.max(0, prev.personnel.available - 12) } }));
        setMetrics(prev => ({ ...prev, floodRisk: { value: 'HIGH', risk: 'critical' }, humidity: { value: '98%', risk: 'low' } }));
        break;
      case 'Earthquake':
        simulatedEvent = { id: newId, type: 'Seismic Activity', location: 'City Center', priority: 'CRITICAL', status: 'Grid Offline', eta: 'Immediate', x: 50, y: 50 };
        aiLogContent = `› [${time}] Magnitude 6.2 tremor detected at epicenter.\n› Structural integrity compromised in Sector A.\n› Classifying as SEVERE CRITICAL.\n› Initiating full city emergency protocol.`;
        setResources(prev => ({ ...prev, fireTrucks: { ...prev.fireTrucks, available: Math.floor(prev.fireTrucks.available / 2) }, police: { ...prev.police, available: Math.floor(prev.police.available / 2) } }));
        setMetrics(prev => ({ ...prev, visibility: { value: '0.5 km', risk: 'critical' } }));
        break;
      case 'Traffic':
         simulatedEvent = { id: newId, type: 'Gridlock', location: 'Highway 9', priority: 'MEDIUM', status: 'Rerouting units', eta: 'N/A', x: Math.floor(Math.random() * 80) + 10, y: Math.floor(Math.random() * 80) + 10 };
         aiLogContent = `› [${time}] Major collision causing highway blockage.\n› Traffic flowing at 0% efficiency.\n› Recalculating all active dispatch routes.\n› Expected delays: 15 minutes.`;
         setResources(prev => ({ ...prev, police: { ...prev.police, available: Math.max(0, prev.police.available - 3) } }));
         break;
      default:
        return;
    }

    setIncidents(prev => [simulatedEvent, ...prev].slice(0, 10)); // Keep last 10
    setAiDecisions(prev => [{ id: newId, timestamp: Date.now(), content: aiLogContent }, ...prev]);
    setLogs(prev => [{ id: newId, time: time, text: `Simulated ${type} event dispatched.`, type: 'alert' }, ...prev]);
    setAlerts(prev => [{ id: newId, msg: `${type.toUpperCase()} WARNING ISSUED FOR ${simulatedEvent.location}`, type: 'error' }, ...prev].slice(0, 3));
  };


  return (
    <CrisisContext.Provider value={{
      incidents, logs, aiDecisions, resources, metrics, alerts, simulateIncident
    }}>
      {children}
    </CrisisContext.Provider>
  );
};

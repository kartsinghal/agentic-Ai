import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';

// Temporary page placeholders
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import RoutesPage from './pages/RoutesPage';
import Alerts from './pages/Alerts';
import Security from './pages/Security';

// Layout wrapper for dashboard pages
const DashboardLayout = ({ children }) => (
  <div className="flex h-screen w-full overflow-hidden bg-[var(--color-dark-bg)]">
    <Sidebar />
    <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-0">
      <Topbar />
      <main className="flex-1 overflow-y-auto w-full p-6 relative">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(0,243,255,0.05)] via-transparent to-transparent pointer-events-none" />
         {children}
      </main>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/incidents" element={<DashboardLayout><div className="text-white text-2xl font-mono tracking-widest neon-text-blue">LIVE INCIDENTS (Coming Soon)</div></DashboardLayout>} />
        <Route path="/routes" element={<DashboardLayout><RoutesPage /></DashboardLayout>} />
        <Route path="/ai-logs" element={<DashboardLayout><div className="text-white text-2xl font-mono tracking-widest neon-text-purple">AI DECISIONS (Coming Soon)</div></DashboardLayout>} />
        <Route path="/alerts" element={<DashboardLayout><Alerts /></DashboardLayout>} />
        <Route path="/security" element={<DashboardLayout><Security /></DashboardLayout>} />
        
        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

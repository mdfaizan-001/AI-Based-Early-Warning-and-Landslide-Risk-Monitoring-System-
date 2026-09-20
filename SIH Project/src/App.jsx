import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MetricsGrid from './components/MetricsGrid';
import MapComponent from './components/MapComponent';
import AnalyticsChart from './components/AnalyticsChart';
import AlertsPanel from './components/AlertsPanel';
import SettingsPanel from './components/SettingsPanel';
import './App.css';

function App() {
  
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div style={{ flex: 1, padding: '28px 36px', overflowX: 'hidden' }}>
        
        <Navbar />       
        {activeTab === 'overview' && (
          <>
            <MetricsGrid />
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '2fr 1.1fr', 
              gap: '24px', 
              marginTop: '10px',
              alignItems: 'stretch' 
            }}>
              <MapComponent />
              <AlertsPanel />
            </div>
            <AnalyticsChart />
          </>
        )}
        
        {activeTab === 'map' && (
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#0f172a', marginBottom: '15px' }}>🗺️ Live GIS Slope Monitoring Map</h2>
            <MapComponent />
          </div>
        )}
        
        {activeTab === 'alerts' && (
          <div style={{ marginTop: '20px' }}>
            <AlertsPanel />
          </div>
        )}
        
        {activeTab === 'analytics' && (
          <div style={{ marginTop: '20px' }}>
            <AnalyticsChart />
          </div>
        )}
        
        {activeTab === 'settings' && (
          <div style={{ marginTop: '20px' }}>
            <SettingsPanel />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

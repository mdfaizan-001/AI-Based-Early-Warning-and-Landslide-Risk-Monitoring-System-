import React from 'react';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
      border: '1px solid #e2e8f0',
      marginBottom: '24px'
    }}>
      {/* Left Title & Status Info */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.3px' }}>
            Landslide Monitoring System
          </h1>
          
          {/* Live Telemetry Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#f0fdf4',
            padding: '3px 10px',
            borderRadius: '20px',
            border: '1px solid #bbf7d0'
          }}>
            <span style={{
              height: '7px',
              width: '7px',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 8px #22c55e'
            }}></span>
            <span style={{ fontSize: '10px', color: '#15803d', fontWeight: '800', letterSpacing: '0.5px' }}>
              LIVE TELEMETRY
            </span>
          </div>
        </div>

        {/* Subtitle / Region info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '4px' }}>
          <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
            {'\u{1F4CD}'} Active Zone: <strong>North-West Himalayan Sector</strong>
          </span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
            {'\u{23F1}\u{FE0F}'} Last Sync: <strong>Just Now</strong>
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '8px 14px',
            borderRadius: '10px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#f8fafc',
            color: '#334155',
            fontWeight: '600',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'all 0.2s ease'
          }}
        >
          {'\u{1F504}'} Sync Data
        </button>

        <button 
          onClick={() => window.print()}
          style={{
            padding: '8px 16px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#0284c7',
            color: 'white',
            fontWeight: '600',
            fontSize: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)'
          }}
        >
          {'\u{1F4C4}'} Export Report
        </button>
      </div>
    </div>
  );
}

export default Navbar;
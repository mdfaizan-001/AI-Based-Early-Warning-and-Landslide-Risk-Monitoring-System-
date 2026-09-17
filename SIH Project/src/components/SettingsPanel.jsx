import React, { useState } from 'react';

function SettingsPanel() {
  const [rainThreshold, setRainThreshold] = useState(75);
  const [moistureThreshold, setMoistureThreshold] = useState(80);
  const [autoAlerts, setAutoAlerts] = useState(true);

  return (
    <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
      <h3 style={{ marginTop: 0, color: '#0f172a' }}>⚙️ Monitoring & Threshold Settings</h3>
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>Configure critical risk parameters for triggering automated SMS/Email emergency alerts.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '600', fontSize: '14px', color: '#334155', marginBottom: '8px' }}>
            Rainfall Alert Threshold (mm/hr): <span style={{ color: '#0284c7' }}>{rainThreshold} mm</span>
          </label>
          <input 
            type="range" 
            min="30" 
            max="150" 
            value={rainThreshold} 
            onChange={(e) => setRainThreshold(e.target.value)}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: '600', fontSize: '14px', color: '#334155', marginBottom: '8px' }}>
            Soil Moisture Saturation Limit (%): <span style={{ color: '#ef4444' }}>{moistureThreshold}%</span>
          </label>
          <input 
            type="range" 
            min="50" 
            max="100" 
            value={moistureThreshold} 
            onChange={(e) => setMoistureThreshold(e.target.value)}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
          <div>
            <strong style={{ fontSize: '14px', color: '#334155' }}>Automated Emergency Broadcast</strong>
            <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#94a3b8' }}>Send instant notifications to local authorities upon Critical status.</p>
          </div>
          <input 
            type="checkbox" 
            checked={autoAlerts} 
            onChange={(e) => setAutoAlerts(e.target.checked)}
            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          />
        </div>

        <button 
          onClick={() => alert('Settings Saved Successfully!')}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#0f172a',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Save Configuration
        </button>
      </div>
    </div>
  );
}

export default SettingsPanel;
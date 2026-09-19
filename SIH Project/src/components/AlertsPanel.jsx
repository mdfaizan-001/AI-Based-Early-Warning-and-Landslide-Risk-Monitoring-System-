import React, { useState } from 'react';

function AlertsPanel() {
  const [filter, setFilter] = useState('all');
  const alerts = [
    {
      id: 1,
      location: 'Mandi Highway - Sector 4',
      type: 'critical',
      message: 'Soil movement detected (>5.2mm/hr)',
      time: '2 mins ago',
      icon: '\u{1F6A8}' 
    },
    {
      id: 2,
      location: 'Shimla Ridge North',
      type: 'warning',
      message: 'Moisture threshold breached (78%)',
      time: '14 mins ago',
      icon: '\u{26A0}\u{FE0F}' 
    },
    {
      id: 3,
      location: 'Kullu Bypass Zone B',
      type: 'warning',
      message: 'Rainfall intensity sustained >40mm/hr',
      time: '28 mins ago',
      icon: '\u{1F327}\u{FE0F}' 
    }
  ];
  
  const filteredAlerts = alerts.filter(
    (item) => filter === 'all' || item.type === filter
  );
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '20px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header & Filter Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '16px',
        paddingBottom: '12px',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>{'\u{1F511}'}</span>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>
            Real-Time Alerts
          </h3>
        </div>
        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '4px', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '8px' }}>
          {['all', 'critical', 'warning'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                border: 'none',
                backgroundColor: filter === type ? '#ffffff' : 'transparent',
                color: filter === type ? '#0f172a' : '#64748b',
                fontWeight: filter === type ? '700' : '600',
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                textTransform: 'capitalize',
                boxShadow: filter === type ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      
      {/* Feed List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
        {filteredAlerts.map((alert) => {
          const isCritical = alert.type === 'critical';
          return (
            <div
              key={alert.id}
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                backgroundColor: isCritical ? '#fef2f2' : '#fffbeb',
                borderLeft: `4px solid ${isCritical ? '#dc2626' : '#d97706'}`,
                borderTop: '1px solid rgba(0,0,0,0.03)',
                borderRight: '1px solid rgba(0,0,0,0.03)',
                borderBottom: '1px solid rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: isCritical ? '#991b1b' : '#92400e' }}>
                  {alert.icon} {alert.location}
                </span>
                <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '600' }}>
                  {alert.time}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#334155', fontWeight: '500' }}>
                {alert.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AlertsPanel;

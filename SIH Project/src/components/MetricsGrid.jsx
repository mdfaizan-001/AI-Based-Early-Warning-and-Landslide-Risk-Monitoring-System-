import React from 'react';

function MetricsGrid() {
  const metrics = [
    {
      title: 'Current Risk Level',
      value: 'HIGH RISK',
      status: 'Critical Alert',
      icon: '\u{26A0}\u{FE0F}', 
      color: '#ef4444',
      bgColor: '#fef2f2',
      borderColor: '#fca5a5',
      trend: '+12% from last hour'
    },
    {
      title: 'Avg Rainfall Rate',
      value: '45 mm/hr',
      status: 'Moderate Heavy',
      icon: '\u{1F327}\u{FE0F}', 
      color: '#0284c7',
      bgColor: '#f0f9ff',
      borderColor: '#bae6fd',
      trend: 'Threshold: 75 mm/hr'
    },
    {
      title: 'Soil Moisture Level',
      value: '78%',
      status: 'Near Saturation',
      icon: '\u{1F4A1}', 
      color: '#d97706',
      bgColor: '#fffbeb',
      borderColor: '#fde68a',
      trend: 'Safe Limit: <80%'
    }
  ];
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginBottom: '24px'
    }}>
      {metrics.map((item, index) => (
        <div
          key={index}
          style={{
            background: 'white',
            padding: '20px 24px',
            borderRadius: '16px',
            border: `1px solid ${item.borderColor}`,
            borderTop: `5px solid ${item.color}`,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          
          {/* Top Row: Title & Clean Unicode Icon */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {item.title}
            </span>
            <span style={{
              fontSize: '18px',
              backgroundColor: item.bgColor,
              padding: '8px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {item.icon}
            </span>
          </div>
          
          {/* Main Value */}
          <div style={{ margin: '14px 0 10px 0' }}>
            <h2 style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#0f172a' }}>
              {item.value}
            </h2>
          </div>
          
          {/* Bottom Status & Trend */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '5px' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: '700',
              padding: '3px 8px',
              borderRadius: '6px',
              color: item.color,
              backgroundColor: item.bgColor
            }}>
              {item.status}
            </span>
            <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500' }}>
              {item.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MetricsGrid;

import React from 'react';

const data = [
  { day: 'Mon', rainfall: 20, moisture: 45 },
  { day: 'Tue', rainfall: 35, moisture: 55 },
  { day: 'Wed', rainfall: 50, moisture: 68 },
  { day: 'Thu', rainfall: 80, moisture: 85 }, // High Risk Day
  { day: 'Fri', rainfall: 65, moisture: 80 },
  { day: 'Sat', rainfall: 40, moisture: 70 },
  { day: 'Sun', rainfall: 25, moisture: 60 },
];

function AnalyticsChart() {
  return (
    <div style={{ marginTop: '20px', background: '#f8fafc', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
      <h3 style={{ margin: '0 0 20px 0', color: '#1e293b' }}> {'\u{1F4C8}'} Weekly Rainfall & Soil Moisture Trend</h3> 
      
      {/* Legend */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '15px', fontSize: '14px' }}>
        <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>■ Rainfall (mm)</span>
        <span style={{ color: '#ef4444', fontWeight: 'bold' }}>■ Soil Moisture (%)</span>
      </div>
      
      {/* Visual Bar Chart */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '180px', padding: '10px 0', borderBottom: '2px solid #cbd5e1' }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', flex: 1 }}>    
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '140px' }}>
              
              {/* Rainfall Bar */}
              <div 
                title={`Rainfall: ${item.rainfall}mm`}
                style={{ 
                  height: `${item.rainfall * 1.4}px`, 
                  width: '14px', 
                  backgroundColor: '#3b82f6', 
                  borderRadius: '4px 4px 0 0' 
                }}
              />
              
              {/* Moisture Bar */}
              <div 
                title={`Moisture: ${item.moisture}%`}
                style={{ 
                  height: `${item.moisture * 1.4}px`, 
                  width: '14px', 
                  backgroundColor: '#ef4444', 
                  borderRadius: '4px 4px 0 0' 
                }}
              />
            </div>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'bold' }}>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsChart;

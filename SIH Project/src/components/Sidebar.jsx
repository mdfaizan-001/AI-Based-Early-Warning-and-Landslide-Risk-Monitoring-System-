import React from 'react';

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: '\u{1F4CA}' },   
    { id: 'map', label: 'Live Map', icon: '\u{1F5FA}' },        
    { id: 'alerts', label: 'Active Alerts', icon: '\u{1F6A8}' }, 
    { id: 'analytics', label: 'Analytics', icon: '\u{1F4C8}' },   
    { id: 'settings', label: 'Settings', icon: '\u{2699}' },    
  ];

  return (
    <div style={{
      width: '240px',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      height: '100vh',
      position: 'sticky',
      top: 0,
      padding: '24px 16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '4px 0 10px rgba(0,0,0,0.05)'
    }}>
      {/* Brand Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '35px', paddingLeft: '8px' }}>
        <span style={{ fontSize: '24px' }}>{'\u{1F30B}'}</span>
        <h2 style={{ color: '#38bdf8', margin: 0, fontSize: '20px', fontWeight: '700', letterSpacing: '0.5px' }}>GeoMonitor</h2>
      </div>

      <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#64748b', fontWeight: '700', marginBottom: '12px', paddingLeft: '8px', letterSpacing: '1px' }}>
        Main Menu
      </div>

      {/* Navigation List */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: isActive ? '#1e293b' : 'transparent',
                color: isActive ? '#38bdf8' : '#94a3b8',
                fontWeight: isActive ? '600' : '500',
                fontSize: '14px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                borderLeft: isActive ? '4px solid #38bdf8' : '4px solid transparent'
              }}
            >
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Premium Profile Card Container */}
      <div style={{
        marginTop: 'auto',
        backgroundColor: '#1e293b',
        borderRadius: '12px',
        padding: '12px',
        border: '1px solid #334155',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Avatar with Active Online Dot */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              backgroundColor: '#0284c7',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '12px'
            }}>
              DM
            </div>
            <span style={{
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              width: '8px',
              height: '8px',
              backgroundColor: '#22c55e',
              borderRadius: '50%',
              border: '2px solid #1e293b'
            }}></span>
          </div>

          <div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#f8fafc', letterSpacing: '-0.2px' }}>
              Disaster Mgmt
            </div>
            <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>
              Admin • v2.4
            </div>
          </div>
        </div>

        {/* Clean Logout Trigger */}
        <button 
          onClick={() => alert('Backend Auth Integration Pending')}
          title="Logout Session"
          style={{
            background: '#0f172a',
            border: '1px solid #334155',
            color: '#ef4444',
            cursor: 'pointer',
            fontSize: '11px',
            fontWeight: '700',
            padding: '6px 8px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
        >
          OFF
        </button>
      </div>

    </div>
  );
}

export default Sidebar;
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Custom Marker Icons (SVG/DivIcon based to avoid broken leaflet asset paths)
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-map-pin',
    html: `<div style="
      background-color: ${color};
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 3px solid #ffffff;
      box-shadow: 0 0 10px ${color}, 0 2px 6px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};
const redIcon = createCustomIcon('#dc2626');
const orangeIcon = createCustomIcon('#d97706');
const greenIcon = createCustomIcon('#16a34a');
function MapComponent() {
  // Center coordinates for Himachal Pradesh / NW Himalayan Sector
  const centerPosition = [31.7087, 76.9320];
  const locations = [
    {
      id: 1,
      name: 'Mandi Sector 4',
      coords: [31.7087, 76.9320],
      risk: 'HIGH RISK',
      moisture: '82%',
      color: '#dc2626',
      icon: redIcon,
      status: 'Active Landslide Movement Detected'
    },
    {
      id: 2,
      name: 'Shimla Ridge North',
      coords: [31.1048, 77.1734],
      risk: 'MODERATE RISK',
      moisture: '74%',
      color: '#d97706',
      icon: orangeIcon,
      status: 'Rainfall threshold near breach'
    },
    {
      id: 3,
      name: 'Dharamshala Zone B',
      coords: [32.2190, 76.3234],
      risk: 'LOW RISK',
      moisture: '58%',
      color: '#16a34a',
      icon: greenIcon,
      status: 'Slope Stable'
    }
  ];
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      boxSizing: 'border-box'
    }}>
      {/* Map Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        paddingBottom: '8px',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px' }}>{'\u{1F5FA}\u{FE0F}'}</span>
          <h3 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>
            Live GIS Sensor Mapping
          </h3>
        </div>
        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
          CartoDB Topo Layer • Active Telemetry
        </span>
      </div>
      {/* Map Container */}
      <div style={{
        height: '400px',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #cbd5e1'
      }}>
        <MapContainer 
          center={centerPosition} 
          zoom={9} 
          scrollWheelZoom={true} 
          style={{ height: '100%', width: '100%' }}
        >
          {/* High quality clean CartoDB tile layer */}
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          {locations.map((loc) => (
            <React.Fragment key={loc.id}>
              {/* Radius Circle overlay for High Risk zones */}
              {loc.risk === 'HIGH RISK' && (
                <Circle
                  center={loc.coords}
                  pathOptions={{
                    color: loc.color,
                    fillColor: loc.color,
                    fillOpacity: 0.15,
                    weight: 2
                  }}
                  radius={5000}
                />
              )}
              {/* Marker with Custom Popup */}
              <Marker position={loc.coords} icon={loc.icon}>
                <Popup style={{ borderRadius: '12px' }}>
                  <div style={{ padding: '4px 2px', fontFamily: 'sans-serif' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                      <strong style={{ fontSize: '13px', color: '#0f172a' }}>{loc.name}</strong>
                      <span style={{
                        fontSize: '9px',
                        fontWeight: '800',
                        color: '#ffffff',
                        backgroundColor: loc.color,
                        padding: '2px 6px',
                        borderRadius: '4px'
                      }}>
                        {loc.risk}
                      </span>
                    </div>
                    <p style={{ margin: '6px 0 2px 0', fontSize: '11px', color: '#475569' }}>
                      {loc.status}
                    </p>
                    <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px', borderTop: '1px solid #e2e8f0', paddingTop: '4px' }}>
                      Soil Moisture: <strong>{loc.moisture}</strong>
                    </div>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
export default MapComponent;

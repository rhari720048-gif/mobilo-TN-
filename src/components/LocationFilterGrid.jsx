import React from 'react';

export default function LocationFilterGrid({ selectedDistrict, setSelectedDistrict }) {
  const topDistricts = [
    "All Districts",
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruchirappalli (Trichy)",
    "Tirunelveli",
    "Erode",
    "Vellore"
  ];

  return (
    <section style={{ padding: '1.25rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginRight: '0.5rem', whiteSpace: 'nowrap' }}>
            Popular Districts:
          </span>

          {topDistricts.map(dist => {
            const isSelected = selectedDistrict === dist;
            return (
              <button
                key={dist}
                onClick={() => setSelectedDistrict(dist)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isSelected ? 'var(--primary)' : 'var(--bg-subtle)',
                  color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                  fontSize: '0.825rem',
                  fontWeight: isSelected ? 700 : 600,
                  whiteSpace: 'nowrap',
                  border: 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {dist}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function CoverageSection({ selectedDistrict, setSelectedDistrict, districts }) {
  return (
    <section 
      style={{
        padding: '4rem 0',
        backgroundColor: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <h2 style={{
            fontSize: '1.85rem',
            fontWeight: 850,
            color: '#0F172A',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '0.4rem'
          }}>
            Coverage Across Tamil Nadu
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 500 }}>
            We are present in all 38 districts of Tamil Nadu.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Stat Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
          }}>
            <div style={{
              backgroundColor: '#EFF6FF',
              color: '#2563EB',
              width: '60px',
              height: '60px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={32} />
            </div>

            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', lineHeight: 1 }}>
                38
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#64748B', marginTop: '0.25rem' }}>
                Districts Covered
              </div>
            </div>
          </div>

          {/* Center Column: TN Map Illustration */}
          <div style={{ textAlign: 'center' }}>
            <img 
              src="/hero_illustration.png" 
              alt="Tamil Nadu Coverage Map"
              style={{
                width: '100%',
                maxWidth: '320px',
                height: 'auto',
                borderRadius: '16px',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Right Column: Dropdown & Checkmarks */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.75rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)'
          }}>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.5rem' }}>
              Select District
            </label>
            
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '0.875rem',
                outline: 'none',
                marginBottom: '1.25rem',
                backgroundColor: '#F8FAFC'
              }}
            >
              <option value="All Districts">All Districts</option>
              {districts.filter(d => d !== "All Districts").map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#334155', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#16A34A" />
                <span>All 38 districts covered</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#334155', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#16A34A" />
                <span>Get location-based results</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#334155', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#16A34A" />
                <span>Find shops in your area</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

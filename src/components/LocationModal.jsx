import React from 'react';
import { X, MapPin, Check } from 'lucide-react';

export default function LocationModal({ isOpen, onClose, selectedDistrict, setSelectedDistrict, districts }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '520px' }} onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            padding: '0.4rem',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-subtle)',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
          <MapPin size={24} color="var(--primary)" />
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>Select Your District</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Choose your district to discover physically verified mobile shops near you</p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.5rem',
          maxHeight: '360px',
          overflowY: 'auto',
          paddingRight: '0.25rem'
        }}>
          {districts.map(dist => {
            const isSelected = selectedDistrict === dist;
            return (
              <button
                key={dist}
                onClick={() => {
                  setSelectedDistrict(dist);
                  onClose();
                }}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: isSelected ? 'var(--primary-light)' : 'var(--bg-subtle)',
                  color: isSelected ? 'var(--primary)' : 'var(--text-main)',
                  fontWeight: isSelected ? 700 : 600,
                  border: `1px solid ${isSelected ? 'var(--primary)' : 'transparent'}`,
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <span>{dist}</span>
                {isSelected && <Check size={16} color="var(--primary)" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

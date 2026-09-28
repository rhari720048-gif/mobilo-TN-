import React from 'react';
import { X, Phone, Mail, MapPin, ShieldAlert } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
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
          <div style={{ padding: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '10px' }}>
            <Phone size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>Contact Us</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>MOBILO TN Support & District Admin Helpdesk</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
              <Mail size={18} color="var(--primary)" />
              <span>General Enquiries: <strong>support@mobilotn.gov.in</strong></span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
              <Phone size={18} color="var(--primary)" />
              <span>Helpline: <strong>+91 044 2800 1930</strong> (Mon - Sat, 9 AM - 6 PM)</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem' }}>
              <MapPin size={18} color="var(--primary)" />
              <span>Headquarters: <strong>Secretariat, St. George Fort, Chennai - 600009</strong></span>
            </div>
          </div>

          <div style={{
            backgroundColor: 'var(--danger-bg)',
            border: '1px solid var(--danger-border)',
            padding: '0.85rem',
            borderRadius: 'var(--radius-md)',
            color: '#991B1B',
            fontSize: '0.825rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ShieldAlert size={18} color="var(--danger)" />
            <span>Cyber Fraud Emergency? Call <strong>1930</strong> (National Cyber Crime Helpline).</span>
          </div>

        </div>

        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', textAlign: 'right' }}>
          <button className="btn btn-primary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

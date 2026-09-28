import React from 'react';
import { X, ShieldCheck, CheckCircle2, Award, UserCheck } from 'lucide-react';

export default function AboutModal({ isOpen, onClose }) {
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
          <div style={{ padding: '0.5rem', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '10px' }}>
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>About MOBILO TN</h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Tamil Nadu Verified Mobile Shop Discovery & Scam Awareness Platform</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
          <p>
            <strong>MOBILO TN</strong> is built to protect consumers across all 38 districts of Tamil Nadu from mobile shop fraud while helping legitimate, physical-verified mobile retailers connect with customers.
          </p>

          <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--primary)' }}>
              <CheckCircle2 size={16} /> Physical District Verification
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Every shop owner must undergo in-person verification by their designated District Admin before their shop goes active on the portal.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: 'var(--danger)' }}>
              <ShieldCheck size={16} /> Curated Scammer Alert Network
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              User scammer reports are verified with police complaints, FIR copies, or bank receipts by District Admins before publishing per Rule 4.
            </p>
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

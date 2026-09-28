import React from 'react';
import { ShieldCheck, MapPin, Store, AlertOctagon, Award, ArrowRight } from 'lucide-react';

export default function TrustStats({ onOpenReportScammer }) {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)',
      color: '#FFFFFF',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#60A5FA', lineHeight: 1 }}>
              38
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.5rem', color: '#E2E8F0' }}>
              TN Districts Covered
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#34D399', lineHeight: 1 }}>
              4,800+
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.5rem', color: '#E2E8F0' }}>
              Physical Verified Shops
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#FBBF24', lineHeight: 1 }}>
              100%
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.5rem', color: '#E2E8F0' }}>
              District Admin On-Site Checked
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#F87171', lineHeight: 1 }}>
              Zero
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.5rem', color: '#E2E8F0' }}>
              Unverified Scammers Published
            </div>
          </div>
        </div>

        {/* Callout Box for Shop Owners & Community Vigilance */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.35rem' }}>
              Are You a Mobile Shop Owner in Tamil Nadu?
            </h3>
            <p style={{ color: '#93C5FD', fontSize: '0.95rem', maxWidth: '600px' }}>
              Get your shop physically verified by your District Admin and gain trust from thousands of mobile buyers in your city.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button 
              className="btn"
              onClick={() => alert("Shop Owner Registration Form will open in Phase 3/4. Currently viewing Step 1: User Landing Page.")}
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--primary)',
                fontWeight: 700,
                borderRadius: 'var(--radius-full)'
              }}
            >
              <Store size={18} />
              <span>Register Your Shop</span>
            </button>

            <button 
              className="btn btn-danger"
              onClick={onOpenReportScammer}
              style={{ borderRadius: 'var(--radius-full)' }}
            >
              <AlertOctagon size={18} />
              <span>Report a Scam</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

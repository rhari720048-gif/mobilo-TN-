import React from 'react';
import { CheckCircle2, Camera, FileCheck, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function VerificationTrustSection() {
  const leftCheckpoints = [
    'Physical verification by District Admin',
    'Documents & photos verification',
    'Location verification (Google Maps)',
    'Approval & activation'
  ];

  const rightItems = [
    { icon: Camera, label: 'Shop photos & videos' },
    { icon: FileCheck, label: 'ID / Business proof documents' },
    { icon: MapPin, label: 'Address & location (GPS)' },
    { icon: Phone, label: 'Contact details' }
  ];

  return (
    <section 
      id="verification-trust"
      style={{
        padding: '3rem 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Single Row 3-Column Grid Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}
          className="verification-trust-grid"
        >
          
          {/* Left Column: Title & Checkpoints */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
                color: '#FFFFFF',
                padding: '0.45rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 3px 10px rgba(37, 99, 235, 0.25)'
              }}>
                <ShieldCheck size={22} color="#FFFFFF" />
              </div>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 850, color: '#0F172A', lineHeight: 1.2 }}>
                Shop Verification You Can Trust
              </h2>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Every shop goes through a strict verification process by District Admins.
            </p>

            {/* Checkpoint list with solid green badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {leftCheckpoints.map((item, i) => (
                <div 
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: '#1E293B'
                  }}
                >
                  <div style={{
                    background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 8px rgba(22, 163, 74, 0.25)'
                  }}>
                    <CheckCircle2 size={15} color="#FFFFFF" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Verification Officer Image */}
          <div style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.25rem 0',
            overflow: 'visible'
          }}>
            <img 
              src="/verification_officer.png" 
              alt="District Admin Physical Shop Verification Officer"
              style={{
                width: '100%',
                maxWidth: '480px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                transform: 'scale(1.15) translateX(-10px)',
                transformOrigin: 'center center',
                filter: 'drop-shadow(0 10px 24px rgba(37, 99, 235, 0.12))'
              }}
            />
          </div>

          {/* Right Column: Verification Includes Card Box */}
          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '16px',
            padding: '1.35rem 1.5rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)'
          }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              color: '#1D4ED8',
              backgroundColor: '#EFF6FF',
              padding: '0.15rem 0.55rem',
              borderRadius: '99px',
              display: 'inline-block',
              marginBottom: '0.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Verification Includes
            </div>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 850, color: '#0F172A', marginBottom: '1rem' }}>
              Verification Includes
            </h3>

            {/* Vertical Stack List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {rightItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={i} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{
                      background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
                      color: '#FFFFFF',
                      width: '28px',
                      height: '28px',
                      borderRadius: '7px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 2px 6px rgba(37, 99, 235, 0.2)'
                    }}>
                      <Icon size={14} color="#FFFFFF" />
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1E293B' }}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 1024px) {
          .verification-trust-grid {
            grid-template-columns: 1fr 1.35fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

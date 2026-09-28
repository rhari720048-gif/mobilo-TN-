import React from 'react';
import { ShieldAlert, ArrowRight, MapPin, Phone, Tag, CheckCircle2, AlertTriangle, Smartphone, DollarSign } from 'lucide-react';

export default function CheckBeforeYouBuySection({ onOpenReportScammer }) {
  const scrollToScammers = () => {
    document.getElementById('scammers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      style={{
        padding: '3.5rem 0',
        backgroundColor: '#FEF2F2',
        borderTop: '1px solid #FCA5A5',
        borderBottom: '1px solid #FCA5A5'
      }}
    >
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Info & Tags */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
              <div style={{
                backgroundColor: '#EF4444',
                color: '#FFFFFF',
                padding: '0.5rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(239, 68, 68, 0.25)'
              }}>
                <ShieldAlert size={24} />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 850, color: '#991B1B', lineHeight: 1.2 }}>
                Check Before You Buy
              </h2>
            </div>

            <p style={{ fontSize: '0.925rem', color: '#7F1D1D', lineHeight: 1.55, marginBottom: '1.25rem' }}>
              Reported scammers are reviewed and verified by District Admins before being published on the platform.
            </p>

            {/* Tags Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#991B1B',
                backgroundColor: '#FEE2E2',
                border: '1px solid #FCA5A5',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Smartphone size={13} color="#991B1B" />
                <span>Device Scam</span>
              </span>

              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#C2410C',
                backgroundColor: '#FFEDD5',
                border: '1px solid #FDBA74',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <DollarSign size={13} color="#C2410C" />
                <span>Money Fraud</span>
              </span>

              <span style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#7E22CE',
                backgroundColor: '#F3E8FF',
                border: '1px solid #D8B4FE',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Tag size={13} color="#7E22CE" />
                <span>Fake Offer</span>
              </span>
            </div>
          </div>

          {/* Middle Column: Scammer Card Preview */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.35rem 1.5rem',
            border: '1px solid #FECDD3',
            boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.35rem'
          }}>
            
            {/* Hacker Image on the LEFT (Larger size: 105px x 105px) */}
            <div style={{
              flexShrink: 0,
              width: '105px',
              height: '105px',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#0F172A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px rgba(15, 23, 42, 0.18)',
              border: '1px solid #E2E8F0'
            }}>
              <img 
                src="/scammer_hacker.png" 
                alt="Scammer Illustration" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Card Info Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.65rem',
                flexWrap: 'wrap'
              }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
                  Fake Mobile Sales
                </h3>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  backgroundColor: '#EF4444',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 6px rgba(239, 68, 68, 0.3)'
                }}>
                  <AlertTriangle size={12} />
                  <span>Reported Scammer</span>
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.825rem', color: '#475569', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <MapPin size={14} color="#EF4444" style={{ flexShrink: 0 }} />
                  <span>Chennai • T. Nagar</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Phone size={14} color="#2563EB" style={{ flexShrink: 0 }} />
                  <span>Mobile: <strong style={{ color: '#0F172A' }}>+91 98765 12345</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Tag size={14} color="#7C3AED" style={{ flexShrink: 0 }} />
                  <span>Type: <span style={{ fontWeight: 600, color: '#6B21A8' }}>Fake Offer</span></span>
                </div>
              </div>

              <div>
                <span style={{
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  color: '#B45309',
                  backgroundColor: '#FEF3C7',
                  border: '1px solid #FDE68A',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <CheckCircle2 size={13} color="#D97706" />
                  <span>Verified & Listed</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
            <button 
              onClick={scrollToScammers}
              style={{
                backgroundColor: '#2563EB',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.875rem',
                padding: '0.75rem 1.4rem',
                borderRadius: '9999px',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <span>View Scammers</span>
              <ArrowRight size={16} />
            </button>

            <button 
              onClick={onOpenReportScammer}
              style={{
                backgroundColor: '#FFFFFF',
                color: '#2563EB',
                fontWeight: 700,
                fontSize: '0.875rem',
                padding: '0.75rem 1.4rem',
                borderRadius: '9999px',
                border: '1.5px solid #BFDBFE',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease'
              }}
            >
              <ShieldAlert size={15} color="#2563EB" />
              <span>Report a Scammer</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}



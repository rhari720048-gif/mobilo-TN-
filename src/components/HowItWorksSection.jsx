import React from 'react';
import { MapPin, Store, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '1',
      icon: MapPin,
      title: '1. Select Location',
      desc: 'Choose your district, city or town.'
    },
    {
      num: '2',
      icon: Store,
      title: '2. Browse Shops',
      desc: 'Explore verified mobile shops near you.'
    },
    {
      num: '3',
      icon: CheckCircle2,
      title: '3. Check Details',
      desc: 'View ratings, location and contact info.'
    },
    {
      num: '4',
      icon: AlertTriangle,
      title: '4. Report if Needed',
      desc: 'Help others by reporting scammers or fake shops.'
    }
  ];

  return (
    <section 
      id="how-it-works"
      style={{
        padding: '2rem 0 0.25rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header - Compact */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 850,
            color: '#0F172A',
            letterSpacing: '-0.03em',
            marginBottom: '0.25rem',
            lineHeight: 1.2
          }}>
            How It <span style={{ color: '#2563EB' }}>Works?</span>
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500, margin: 0 }}>
            Get started in just a few simple steps and shop worry-free.
          </p>
        </div>

        {/* 4 Steps Container + Right End Character Image */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.85rem',
          width: '100%'
        }} className="how-it-works-content-wrapper">
          
          {/* 4 Cards Compact Flow Row */}
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '0.65rem',
            flex: '1 1 auto',
            minWidth: 0
          }} className="how-it-works-cards-row">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={idx}>
                  {/* Step Card - Compact */}
                  <div 
                    style={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: '14px',
                      padding: '0.9rem 0.85rem',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 3px 10px rgba(15, 23, 42, 0.03)',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      flex: '1 1 0px',
                      minWidth: 0
                    }}
                    className="how-it-works-single-card"
                  >
                    {/* Compact MOBILO Official Blue Gradient Icon Badge */}
                    <div style={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                      color: '#FFFFFF',
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.65rem',
                      flexShrink: 0,
                      boxShadow: '0 3px 8px rgba(37, 99, 235, 0.25)'
                    }}>
                      <Icon size={19} color="#FFFFFF" strokeWidth={2.2} />
                    </div>

                    <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem', lineHeight: 1.2 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.35, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow Connector (between cards) */}
                  {idx < steps.length - 1 && (
                    <div className="how-it-works-arrow-connector">
                      <ArrowRight size={16} color="#94A3B8" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right End Character Image */}
          <div style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingLeft: '0.5rem',
            marginBottom: '-0.25rem',
            marginTop: '-0.5rem'
          }} className="how-it-works-right-character">
            <img 
              src="/boy_blue_hoodie_cutout.png" 
              alt="Safe Shopping Starts Here with MOBILO TN"
              style={{
                height: '210px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 16px rgba(37, 99, 235, 0.18))'
              }}
            />
          </div>

        </div>

      </div>

      <style>{`
        .how-it-works-single-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px -4px rgba(37, 99, 235, 0.12) !important;
          border-color: #BFDBFE !important;
          background-color: #FFFFFF !important;
        }
        .how-it-works-arrow-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0;
        }
        @media (max-width: 1200px) {
          .how-it-works-right-character img {
            height: 180px !important;
          }
        }
        @media (max-width: 1024px) {
          .how-it-works-content-wrapper {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .how-it-works-cards-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .how-it-works-arrow-connector {
            display: none !important;
          }
          .how-it-works-right-character {
            align-self: center !important;
            margin-top: 0.5rem !important;
            margin-bottom: 0 !important;
          }
          .how-it-works-right-character img {
            height: 170px !important;
          }
        }
        @media (max-width: 600px) {
          .how-it-works-cards-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

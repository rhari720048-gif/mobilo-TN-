import React from 'react';
import { ShieldCheck, AlertTriangle, MapPin, Shield, Headphones } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: ShieldCheck,
      gradient: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
      shadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
      title: 'Verified Shops',
      desc: 'All shops are physically verified by district admins.'
    },
    {
      icon: AlertTriangle,
      gradient: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
      shadow: '0 4px 12px rgba(225, 29, 72, 0.35)',
      title: 'Report Scammers',
      desc: 'Help and protect others from fraud.'
    },
    {
      icon: MapPin,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      shadow: '0 4px 12px rgba(16, 185, 129, 0.35)',
      title: 'Location Based Search',
      desc: 'Find shops near you with ease.'
    },
    {
      icon: Shield,
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
      shadow: '0 4px 12px rgba(139, 92, 246, 0.35)',
      title: 'Trusted Platform',
      desc: 'Real reviews, real people, real shops.'
    },
    {
      icon: MapPin,
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
      shadow: '0 4px 12px rgba(14, 165, 233, 0.35)',
      title: '38 Districts Covered',
      desc: 'From Chennai to Kanyakumari.'
    },
    {
      icon: Headphones,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      shadow: '0 4px 12px rgba(245, 158, 11, 0.35)',
      title: '24/7 Support',
      desc: "We're here to help you always."
    }
  ];

  return (
    <section 
      id="why-choose"
      style={{
        padding: '2.25rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 850,
            color: '#0F172A',
            letterSpacing: '-0.03em',
            marginBottom: '0.35rem',
            lineHeight: 1.2
          }}>
            Why Choose <span style={{ color: '#2563EB' }}>MOBILO TN?</span>
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500, maxWidth: '640px', lineHeight: 1.45, margin: 0 }}>
            Your safety is our priority. We make sure you get genuine products and stay away from frauds.
          </p>
        </div>

        {/* 6 Feature Cards Grid (3 Columns x 2 Rows) Compact Full Width */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem'
        }} className="why-choose-cards-full">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '1.25rem 1.15rem',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02)',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
                className="why-choose-single-card"
              >
                {/* Custom Gradient Badge Icon */}
                <div style={{
                  background: feat.gradient,
                  color: '#FFFFFF',
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.85rem',
                  flexShrink: 0,
                  boxShadow: feat.shadow
                }}>
                  <Icon size={21} color="#FFFFFF" strokeWidth={2.2} />
                </div>

                {/* Title & Desc */}
                <h3 style={{
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  marginBottom: '0.25rem',
                  lineHeight: 1.25
                }}>
                  {feat.title}
                </h3>
                <p style={{
                  fontSize: '0.82rem',
                  color: '#64748B',
                  lineHeight: 1.4,
                  margin: 0
                }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .why-choose-single-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 22px -4px rgba(37, 99, 235, 0.1) !important;
          border-color: #BFDBFE !important;
          background-color: #FFFFFF !important;
        }
        @media (max-width: 900px) {
          .why-choose-cards-full {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .why-choose-cards-full {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

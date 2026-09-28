import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  MapPin, 
  Smartphone, 
  UserCheck, 
  Lock
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section 
      id="about-section"
      style={{
        padding: '4.5rem 0',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderBottom: '1px solid #E2E8F0',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Glow Elements */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.35rem 0.9rem',
            borderRadius: '99px',
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            color: '#1D4ED8',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '0.02em',
            textTransform: 'uppercase'
          }}>
            <Smartphone size={14} />
            <span>About MOBILO TN Portal</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
            fontWeight: 850,
            color: '#0F172A',
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Why Was MOBILO TN Created & <span style={{ color: '#2563EB' }}>What Is Its Purpose?</span>
          </h2>

          <p style={{
            fontSize: '1.025rem',
            color: '#475569',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            MOBILO TN is Tamil Nadu’s first <strong>District Admin Verified Mobile Ecosystem</strong>. 
            We protect mobile buyers from online scams, counterfeit phones, and advance-payment fraud 
            while promoting genuine local mobile shop owners across all 38 districts.
          </p>
        </div>

        {/* 4 Core Features / Use Cases Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Card 1: Physical Store Verification */}
          <div 
            className="about-card-hover"
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#ECFDF5',
              border: '1px solid #A7F3D0',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <ShieldCheck size={26} />
            </div>

            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#059669',
              backgroundColor: '#D1FAE5',
              padding: '0.2rem 0.6rem',
              borderRadius: '99px',
              display: 'inline-block',
              marginBottom: '0.65rem'
            }}>
              Physical Verification
            </span>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.5rem', lineHeight: 1.3 }}>
              Physical Store Verification
            </h3>

            <p style={{ fontSize: '0.885rem', color: '#475569', lineHeight: 1.55 }}>
              Every mobile shop listed on MOBILO TN is physically inspected by an authorized District Admin. 
              We verify GST, store address, and owner identity before granting the blue checkmark badge.
            </p>
          </div>

          {/* Card 2: Scam Alert Network */}
          <div 
            className="about-card-hover"
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#FEF2F2',
              border: '1px solid #FCA5A5',
              color: '#B91C1C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <AlertTriangle size={26} />
            </div>

            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#B91C1C',
              backgroundColor: '#FEE2E2',
              padding: '0.2rem 0.6rem',
              borderRadius: '99px',
              display: 'inline-block',
              marginBottom: '0.65rem'
            }}>
              Scam Prevention
            </span>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.5rem', lineHeight: 1.3 }}>
              Scammers & Fraud Alert Network
            </h3>

            <p style={{ fontSize: '0.885rem', color: '#475569', lineHeight: 1.55 }}>
              Prevent money loss from fake online sellers! Check mobile numbers and UPI IDs against 
              verified fraud complaints backed by FIRs and bank transfer proofs reviewed by District Admins.
            </p>
          </div>

          {/* Card 3: District Mobile Search */}
          <div 
            className="about-card-hover"
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#EFF6FF',
              border: '1px solid #BFDBFE',
              color: '#2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <MapPin size={26} />
            </div>

            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#2563EB',
              backgroundColor: '#DBEAFE',
              padding: '0.2rem 0.6rem',
              borderRadius: '99px',
              display: 'inline-block',
              marginBottom: '0.65rem'
            }}>
              38 TN Districts
            </span>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.5rem', lineHeight: 1.3 }}>
              Hyperlocal Shop Discovery
            </h3>

            <p style={{ fontSize: '0.885rem', color: '#475569', lineHeight: 1.55 }}>
              Whether you are in Chennai, Madurai, Coimbatore, or Salem — easily filter genuine mobile shops, 
              authorised service centers, and verified second-hand phone retailers near your exact town.
            </p>
          </div>

          {/* Card 4: Direct Trust & Contact */}
          <div 
            className="about-card-hover"
            style={{
              backgroundColor: '#F8FAFC',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid #E2E8F0',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: '#F3E8FF',
              border: '1px solid #D8B4FE',
              color: '#7E22CE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <UserCheck size={26} />
            </div>

            <span style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#7E22CE',
              backgroundColor: '#F3E8FF',
              padding: '0.2rem 0.6rem',
              borderRadius: '99px',
              display: 'inline-block',
              marginBottom: '0.65rem'
            }}>
              Direct Dealings
            </span>

            <h3 style={{ fontSize: '1.15rem', fontWeight: 750, color: '#0F172A', marginBottom: '0.5rem', lineHeight: 1.3 }}>
              Zero Middleman Commission
            </h3>

            <p style={{ fontSize: '0.885rem', color: '#475569', lineHeight: 1.55 }}>
              Connect directly with verified local shop owners via WhatsApp or phone call. 
              Get genuine bill warranty, physical store visits, and best pricing with 100% peace of mind.
            </p>
          </div>

        </div>

        {/* Bottom Banner Summary Box */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: '20px',
          padding: '2.25rem 2rem',
          color: '#FFFFFF',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.3)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
              <Lock size={16} />
              <span>CONSUMER TRUST GUARANTEE</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '0.5rem' }}>
              100% Physical Store Verification Across Tamil Nadu
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5 }}>
              We never accept unverified online accounts. Only real shops with physical store locations 
              and verified District Admin approvals get listed on MOBILO TN.
            </p>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(10px)',
            borderRadius: '14px',
            padding: '1.25rem 1rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#60A5FA', lineHeight: 1 }}>38</div>
              <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, marginTop: '0.25rem' }}>TN Districts</div>
            </div>

            <div style={{ width: '1px', height: '36px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#34D399', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, marginTop: '0.25rem' }}>Physical Checked</div>
            </div>

            <div style={{ width: '1px', height: '36px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F87171', lineHeight: 1 }}>0</div>
              <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, marginTop: '0.25rem' }}>Fake Sellers</div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px -8px rgba(37, 99, 235, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04);
          border-color: #BFDBFE !important;
          background-color: #FFFFFF !important;
        }
        @media (max-width: 768px) {
          #about-section {
            padding: 2.5rem 0 !important;
          }
          .about-banner-metrics {
            padding: 1rem 0.5rem !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

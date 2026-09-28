import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function PreFooterCTA() {
  const handleExploreShops = () => {
    document.getElementById('shops')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '2.5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        
        <div style={{
          background: 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)',
          borderRadius: '20px',
          padding: '2.25rem 2.5rem',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: '0 12px 30px rgba(37, 99, 235, 0.25)'
        }}>
          
          {/* Left: Shield Icon + Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShieldCheck size={32} color="#FFFFFF" />
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 850, color: '#FFFFFF', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Let's Build a Safer Tamil Nadu
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#DBEAFE', fontWeight: 500, marginTop: '0.25rem' }}>
                Join MOBILO TN and be part of a fraud-free shopping community.
              </p>
            </div>
          </div>

          {/* Right: Explore Shops White Pill Button */}
          <button 
            onClick={handleExploreShops}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1D4ED8',
              fontWeight: 800,
              fontSize: '0.95rem',
              padding: '0.85rem 1.75rem',
              borderRadius: '99px',
              border: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s ease, boxShadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)';
            }}
          >
            <span>Explore Shops</span>
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}

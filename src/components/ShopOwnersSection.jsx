import React from 'react';
import { Store, ArrowRight, ShieldCheck, UserPlus, FileCheck, Award, LayoutDashboard } from 'lucide-react';

export default function ShopOwnersSection() {
  const steps = [
    { 
      num: 1, 
      title: 'Register Your Shop',
      icon: UserPlus,
      gradient: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
      shadow: '0 3px 8px rgba(37, 99, 235, 0.16)'
    },
    { 
      num: 2, 
      title: 'Physical Verification', 
      subtitle: 'by District Admins',
      icon: FileCheck,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      shadow: '0 3px 8px rgba(16, 185, 129, 0.16)'
    },
    { 
      num: 3, 
      title: 'Get Approved', 
      icon: Award,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      shadow: '0 3px 8px rgba(245, 158, 11, 0.16)'
    },
    { 
      num: 4, 
      title: 'Manage Your Shop', 
      icon: LayoutDashboard,
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
      shadow: '0 3px 8px rgba(139, 92, 246, 0.16)'
    }
  ];

  return (
    <section 
      style={{
        padding: '3rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        <div style={{
          backgroundColor: '#F8FAFC',
          borderRadius: '24px',
          padding: '2.25rem 2rem',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)'
        }}>
          
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
              color: '#FFFFFF',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 8px rgba(37, 99, 235, 0.16)'
            }}>
              <Store size={20} color="#FFFFFF" strokeWidth={2.2} />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 850, color: '#0F172A', margin: 0 }}>
              For Mobile Shop Owners
            </h2>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#64748B', marginBottom: '0.85rem' }}>
            Register your shop, get verified by District Admins and manage your profile easily.
          </p>

          <span style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#1D4ED8',
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '1.75rem'
          }}>
            <ShieldCheck size={14} color="#1D4ED8" />
            <span>District assignment is automatic based on your selected district.</span>
          </span>

          {/* 4 Step Cards Grid - Exactly 4 equal columns on desktop */}
          <div className="shop-owner-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem'
          }}>
            {steps.map((s, idx) => {
              const IconComponent = s.icon;
              return (
                <div 
                  key={s.num}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '1.25rem 1rem',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.03)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    minHeight: '135px'
                  }}
                >
                  {/* Step Number Pill */}
                  <div style={{
                    background: s.gradient,
                    color: '#FFFFFF',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.55rem',
                    boxShadow: s.shadow
                  }}>
                    {s.num}
                  </div>

                  <div style={{
                    background: s.gradient,
                    padding: '0.45rem',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    marginBottom: '0.45rem',
                    boxShadow: s.shadow
                  }}>
                    <IconComponent size={19} color="#FFFFFF" strokeWidth={2.2} />
                  </div>

                  <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  {s.subtitle && (
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2563EB', marginTop: '0.2rem' }}>
                      {s.subtitle}
                    </span>
                  )}

                  {/* Desktop connector arrow indicator overlay for steps 1, 2, 3 */}
                  {idx < steps.length - 1 && (
                    <div 
                      className="step-connector-arrow"
                      style={{
                        position: 'absolute',
                        right: '-16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
                      }}
                    >
                      <ArrowRight size={14} color="#2563EB" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .shop-owner-steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .step-connector-arrow {
            display: none !important;
          }
        }
        @media (max-width: 550px) {
          .shop-owner-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

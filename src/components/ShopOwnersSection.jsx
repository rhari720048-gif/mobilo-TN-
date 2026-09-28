import React from 'react';
import { Store, ArrowRight, ShieldCheck, UserPlus, FileCheck, Award, LayoutDashboard } from 'lucide-react';

export default function ShopOwnersSection() {
  const steps = [
    { 
      num: 1, 
      title: 'Register Your Shop',
      icon: UserPlus,
      iconColor: '#2563EB'
    },
    { 
      num: 2, 
      title: 'Physical Verification', 
      subtitle: 'by District Admins',
      icon: FileCheck,
      iconColor: '#10B981'
    },
    { 
      num: 3, 
      title: 'Get Approved', 
      icon: Award,
      iconColor: '#D97706'
    },
    { 
      num: 4, 
      title: 'Manage Your Shop', 
      icon: LayoutDashboard,
      iconColor: '#8B5CF6'
    }
  ];

  return (
    <section 
      style={{
        padding: '3.5rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        <div style={{
          backgroundColor: '#F8FAFC',
          borderRadius: '24px',
          padding: '2.5rem 2.25rem',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
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
              For Mobile Shop <span style={{ color: '#2563EB' }}>Owners</span>
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
                    padding: '1.35rem 1.15rem',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    minHeight: '140px',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="shop-owner-single-card"
                >
                  {/* Step Number Pill */}
                  <div style={{
                    backgroundColor: '#F1F5F9',
                    color: s.iconColor,
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.65rem'
                  }}>
                    {s.num}
                  </div>

                  {/* Clean Icon without background color */}
                  <div style={{
                    marginBottom: '0.55rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={26} color={s.iconColor} strokeWidth={2.2} />
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
        .shop-owner-single-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.08) !important;
          border-color: #93C5FD !important;
        }
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

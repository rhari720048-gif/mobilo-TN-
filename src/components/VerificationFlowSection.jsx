import React from 'react';
import { Store, UserCheck, ShieldCheck, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export default function VerificationFlowSection() {
  const steps = [
    {
      num: "01",
      icon: Store,
      title: "Shop Registration & Proof Submission",
      desc: "Shop owner submits GST registration, business ID proof, address, photos, and Google location."
    },
    {
      num: "02",
      icon: FileText,
      title: "Auto-Assigned to District Admin",
      desc: "System automatically routes registration to the designated District Admin based on location (e.g. Chennai, Coimbatore)."
    },
    {
      num: "03",
      icon: UserCheck,
      title: "Physical Site Inspection",
      desc: "District Admin carries out physical verification of shop premises, stock authenticity, and business documents."
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Active Badge & Public Listing",
      desc: "Approved shops receive official 'Physically Verified' badge on MOBILO TN. Rejections record reason."
    }
  ];

  return (
    <section id="verification-process" style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem'
          }}>
            <ShieldCheck size={16} />
            <span>Strict Data Integrity & Verification Standard</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: 1.2 }}>
            How Physical Shop Verification Works
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.5rem' }}>
            We don't rely on virtual claims. Every listed shop undergoes a multi-step physical verification by Tamil Nadu District Admins.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          position: 'relative'
        }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 1.5rem',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#CBD5E1', fontFamily: 'var(--font-heading)' }}>
                    {step.num}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {step.desc}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--success)' }}>
                  <CheckCircle2 size={14} /> Step Verified
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

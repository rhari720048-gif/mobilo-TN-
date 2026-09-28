import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is MOBILO TN?',
      a: 'MOBILO TN is Tamil Nadu’s first physical-verified mobile shop discovery and scam prevention platform. It connects consumers with genuine, physically checked mobile retailers across all 38 districts.'
    },
    {
      q: 'How are shops verified?',
      a: 'Every shop undergoes a multi-step physical verification by designated District Admins. GST registration, store photos, address coordinates, and owner ID are physically cross-checked.'
    },
    {
      q: 'How are scam reports reviewed?',
      a: 'User reports are reviewed by District Admins alongside FIR copies, bank transfer receipts, and police complaint proofs per Rule 4 standards before public listing.'
    },
    {
      q: 'Can anyone publish a scammer?',
      a: 'No. Reports must undergo verification by authorized District Admins to prevent false claims or malicious reports.'
    },
    {
      q: 'How do I register my shop?',
      a: 'Shop owners can click on "Register Your Shop", submit their GST & physical address details, and request physical store inspection by their District Admin.'
    },
    {
      q: 'How do I report a scammer?',
      a: 'Click "Report Scammer" in the navigation bar or use the inline form on this page to submit details and evidence for District Admin review.'
    }
  ];

  return (
    <section 
      id="faq"
      style={{
        padding: '3rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: '1.85rem',
            fontWeight: 850,
            color: '#0F172A',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '0.4rem'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#64748B', fontWeight: 500 }}>
            Find answers to common questions about MOBILO TN.
          </p>
        </div>

        {/* 2 Column Accordion Grid with alignItems start to prevent blank height stretching */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          alignItems: 'start'
        }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div 
                key={i}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '14px',
                  border: isOpen ? '1.5px solid #2563EB' : '1px solid #E2E8F0',
                  padding: '1.15rem 1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isOpen ? '0 4px 14px rgba(37, 99, 235, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
                  alignSelf: 'start'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 750, color: isOpen ? '#2563EB' : '#0F172A', lineHeight: 1.35, margin: 0 }}>
                    {faq.q}
                  </h3>
                  <ChevronDown 
                    size={18} 
                    color={isOpen ? '#2563EB' : '#64748B'} 
                    style={{ transition: 'transform 0.2s ease', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', flexShrink: 0 }} 
                  />
                </div>

                {isOpen && (
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #E2E8F0', margin: '0.75rem 0 0 0' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ScamAlertSection({ scammers, onOpenReportScammer, selectedDistrict }) {
  const filteredScammers = scammers.filter(s => 
    selectedDistrict === "All Districts" || s.district === selectedDistrict
  );

  return (
    <section id="scammers" style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--danger)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase' }}>
              <AlertTriangle size={15} />
              <span>Public Scam Warning Registry</span>
            </div>
            <h2 style={{ fontSize: '1.65rem', color: 'var(--text-main)', marginTop: '0.2rem' }}>
              Verified Mobile Scammer List
            </h2>
          </div>

          <button className="btn btn-danger-outline btn-sm" onClick={onOpenReportScammer}>
            <AlertTriangle size={14} />
            <span>Report a Scammer</span>
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem'
        }}>
          {filteredScammers.length > 0 ? (
            filteredScammers.map(scam => (
              <div 
                key={scam.id}
                style={{
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  padding: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--danger)', backgroundColor: 'var(--danger-bg)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                    Verified Scammer
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{scam.district}</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{scam.scammerName}</h3>
                <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--danger)' }}>Phone: {scam.mobileNumber}</div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>"{scam.description}"</p>
                
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                  Verified by: {scam.verifiedByAdmin}
                </div>
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No verified scammers reported in {selectedDistrict}.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

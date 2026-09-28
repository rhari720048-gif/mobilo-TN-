import React, { useState } from 'react';
import { X, AlertTriangle, ShieldCheck, Upload, FileCheck, CheckCircle2 } from 'lucide-react';
import { DISTRICT_TOWNS } from '../data/mockData';

export default function ReportScammerModal({ isOpen, onClose, districts, onSubmitReport }) {
  const [formData, setFormData] = useState({
    scammerName: '',
    mobileNumber: '',
    district: districts[1] || 'Chennai',
    town: 'Tambaram',
    scamType: 'Fake Refurbished Phone Fraud',
    description: '',
    reporterContact: '',
    evidenceFile: null
  });

  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      onSubmitReport(formData);
      setSubmittedSuccess(false);
      onClose();
    }, 2200);
  };

  const availableTowns = DISTRICT_TOWNS[formData.district] || ["All Areas"];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            padding: '0.4rem',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-subtle)',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {submittedSuccess ? (
          <div style={{ padding: '2rem 1rem', textAlign: 'center', animation: 'fadeIn 0.3s ease' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--success-bg)',
              color: 'var(--success)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Report Submitted to District Admin!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1rem auto' }}>
              Your scammer report has been routed to the <strong>{formData.district} District Admin</strong> for evidence verification. Status: <span style={{ color: 'var(--warning)', fontWeight: 700 }}>Pending Verification</span>.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>
              (Rule 4 Enforcement: Unapproved entries are strictly held until verified).
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                padding: '0.6rem',
                backgroundColor: 'var(--danger-bg)',
                color: 'var(--danger)',
                borderRadius: 'var(--radius-md)'
              }}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.35rem', color: 'var(--text-main)' }}>
                  Report Mobile Scammer / Fraud Shop
                </h2>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  Help protect Tamil Nadu mobile buyers. All reports are verified by District Admins.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Scammer / Shop Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="input-field" 
                    placeholder="e.g. Speedy Tech Mobiles"
                    value={formData.scammerName}
                    onChange={e => setFormData({...formData, scammerName: e.target.value})}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Scammer Mobile Number / WhatsApp *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="input-field" 
                    placeholder="+91 98765 43210"
                    value={formData.mobileNumber}
                    onChange={e => setFormData({...formData, mobileNumber: e.target.value})}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    District (Auto-assigns to District Admin) *
                  </label>
                  <select 
                    className="select-field"
                    value={formData.district}
                    onChange={e => setFormData({...formData, district: e.target.value, town: 'All Areas'})}
                  >
                    {districts.filter(d => d !== "All Districts").map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    City / Town / Village *
                  </label>
                  <select 
                    className="select-field"
                    value={formData.town}
                    onChange={e => setFormData({...formData, town: e.target.value})}
                  >
                    {availableTowns.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Scam Type *
                </label>
                <select 
                  className="select-field"
                  value={formData.scamType}
                  onChange={e => setFormData({...formData, scamType: e.target.value})}
                >
                  <option value="Fake Refurbished Phone Fraud">Fake Refurbished Phone Fraud / Duplicate IMEI</option>
                  <option value="Advance Payment Theft">Advance Payment Theft (UPI Money Taken, No Goods Sent)</option>
                  <option value="Component Swapping during Repair">Component Swapping during Repair (Original motherboard/screen stolen)</option>
                  <option value="Fake Accessories Sales">Fake Accessories Sold as Original</option>
                  <option value="Stolen Device Re-selling">Stolen Device Re-selling</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Detailed Scam Description *
                </label>
                <textarea 
                  required
                  rows={3}
                  className="input-field"
                  placeholder="Describe exact details of what happened, transaction date, amount lost..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Upload Proof / Evidence (Bill, UPI Receipt, Chat)
                  </label>
                  <div style={{
                    border: '2px dashed var(--border)',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    backgroundColor: 'var(--bg-subtle)',
                    cursor: 'pointer'
                  }}>
                    <Upload size={20} color="var(--primary)" style={{ margin: '0 auto 0.25rem auto' }} />
                    <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Click to attach screenshot/PDF</div>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    Your Contact Details (For Verification Only) *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="input-field" 
                    placeholder="Your Phone / Email (Not shown publicly)"
                    value={formData.reporterContact}
                    onChange={e => setFormData({...formData, reporterContact: e.target.value})}
                  />
                </div>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-accent-light)',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.775rem',
                color: 'var(--primary)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <ShieldCheck size={16} />
                <span>Notice: False reports are punishable. District Admin will verify receipts before publishing.</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-danger btn-sm" style={{ padding: '0.65rem 1.25rem' }}>
                  Submit Report to Admin
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

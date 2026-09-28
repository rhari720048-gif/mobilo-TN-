import React, { useState } from 'react';
import { AlertTriangle, Upload, CheckCircle2 } from 'lucide-react';
import { DISTRICT_TOWNS } from '../data/mockData';

export default function ReportScammerInlineSection({ districts, onSubmitReport }) {
  const [scammerName, setScammerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [town, setTown] = useState('');
  const [scamType, setScamType] = useState('Fake Mobile Sales');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const availableTowns = district && DISTRICT_TOWNS[district] ? DISTRICT_TOWNS[district] : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!scammerName || !mobileNumber || !district || !description) {
      alert("Please fill in all required fields!");
      return;
    }

    onSubmitReport({
      scammerName,
      mobileNumber,
      district,
      town: town || district,
      scamType,
      description,
      contactInfo
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setScammerName('');
      setMobileNumber('');
      setDistrict('');
      setTown('');
      setDescription('');
      setContactInfo('');
    }, 4000);
  };

  return (
    <section 
      id="report-scammer-section"
      style={{
        padding: '2.5rem 0',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        {/* Compact Card Box */}
        <div style={{
          backgroundColor: '#FFF5F5',
          borderRadius: '16px',
          padding: '1.75rem 1.5rem',
          border: '1px solid #FCA5A5',
          boxShadow: '0 6px 20px -4px rgba(239, 68, 68, 0.08)'
        }}>
          
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                backgroundColor: '#EF4444',
                color: '#FFFFFF',
                padding: '0.4rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <AlertTriangle size={18} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 850, color: '#991B1B', margin: 0, lineHeight: 1.2 }}>
                  Report a Scammer
                </h2>
                <p style={{ fontSize: '0.825rem', color: '#7F1D1D', margin: 0, marginTop: '2px' }}>
                  Help others stay safe. Reports are cross-checked by District Admins before publishing.
                </p>
              </div>
            </div>

            <span style={{
              fontSize: '0.725rem',
              fontWeight: 700,
              color: '#B91C1C',
              backgroundColor: '#FEE2E2',
              border: '1px solid #FCA5A5',
              padding: '0.2rem 0.6rem',
              borderRadius: '99px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <AlertTriangle size={12} />
              <span>Admin Verified</span>
            </span>
          </div>

          {submitted ? (
            <div style={{
              padding: '1.75rem',
              backgroundColor: '#DCFCE7',
              border: '1px solid #86EFAC',
              borderRadius: '12px',
              textAlign: 'center',
              color: '#15803D'
            }}>
              <CheckCircle2 size={36} style={{ marginBottom: '0.5rem' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Report Submitted Successfully!</h3>
              <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
                Assigned to District Admin for physical verification & cross-check per Rule 4.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              
              {/* Row 1: 4 Inputs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.85rem'
              }}>
                
                {/* Scammer Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    Scammer Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="Scammer or Shop Name"
                    value={scammerName}
                    onChange={(e) => setScammerName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.48rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.825rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    Mobile Number <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="Phone number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.48rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.825rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                {/* District */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    District <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <select 
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                      setTown('');
                    }}
                    required
                    style={{
                      width: '100%',
                      padding: '0.48rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.825rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option value="">Select District</option>
                    {districts.filter(d => d !== "All Districts").map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* City/Town/Village */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    City/Town/Village
                  </label>
                  {availableTowns.length > 0 ? (
                    <select
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.48rem 0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.825rem',
                        outline: 'none',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <option value="">Select Area</option>
                      {availableTowns.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  ) : (
                    <input 
                      type="text"
                      placeholder="Town / Village"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.48rem 0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.825rem',
                        outline: 'none',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  )}
                </div>

              </div>

              {/* Row 2: Textarea & Upload */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr',
                gap: '0.85rem'
              }} className="report-scammer-row2">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    Scam Details <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea 
                    placeholder="Describe what happened..."
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.48rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.825rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Evidence Upload */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                    Proof / Screenshot (Optional)
                  </label>
                  <div style={{
                    border: '1.5px dashed #CBD5E1',
                    borderRadius: '8px',
                    padding: '0.4rem 0.75rem',
                    textAlign: 'center',
                    backgroundColor: '#FFFFFF',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    height: '62px'
                  }}>
                    <Upload size={18} color="#64748B" />
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>
                      Upload screenshot or receipt
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3: Contact Info & Submit Button in 1 flex line */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.85rem',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <input 
                    type="text"
                    placeholder="Your contact number/email (Optional)"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.8rem',
                      outline: 'none',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>

                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#EF4444',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    padding: '0.55rem 1.4rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 3px 10px rgba(239, 68, 68, 0.25)',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                >
                  Submit Report ›
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .report-scammer-row2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { TN_DISTRICTS } from '../data/mockData';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !emailOrPhone || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmailOrPhone('');
      setDistrict('');
      setMessage('');
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      style={{ 
        padding: '4rem 0', 
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0'
      }}
    >
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>

          {/* Left Column: Contact Details */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#2563EB', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
              <Mail size={16} />
              <span>Contact Us</span>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 850, color: '#0F172A', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '0.75rem' }}>
              Get In Touch With MOBILO TN
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6, marginBottom: '2rem' }}>
              Have questions about shop verification, reporting fraud, or district admin support? Send us a message and our team will assist you.
            </p>

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
              
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '1rem 1.25rem',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}>
                <div style={{ backgroundColor: '#EFF6FF', color: '#2563EB', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Helpline</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>+91 044 2800 1930</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Mon - Sat, 9 AM - 6 PM</div>
                </div>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '1rem 1.25rem',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}>
                <div style={{ backgroundColor: '#EFF6FF', color: '#2563EB', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Official Email</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>support@mobilotn.gov.in</div>
                </div>
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '1rem 1.25rem',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}>
                <div style={{ backgroundColor: '#EFF6FF', color: '#2563EB', width: '42px', height: '42px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Headquarters</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>Secretariat, St. George Fort, Chennai - 600009</div>
                </div>
              </div>

            </div>

            {/* Emergency Cyber Fraud Alert Pill */}
            <div style={{
              backgroundColor: '#FEF2F2',
              border: '1px solid #FCA5A5',
              padding: '1rem 1.25rem',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#991B1B'
            }}>
              <ShieldAlert size={22} color="#EF4444" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.825rem', lineHeight: 1.4 }}>
                <strong>Cyber Fraud Emergency?</strong> Call <strong style={{ color: '#DC2626' }}>1930</strong> (National Cyber Crime Helpline) immediately for financial scams.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form Box */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.25rem 2rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.06)'
          }}>
            
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.5rem' }}>
              Fill out the form below and our team will get back to you shortly.
            </p>

            {submitted ? (
              <div style={{
                padding: '2rem',
                backgroundColor: '#DCFCE7',
                border: '1px solid #86EFAC',
                borderRadius: '16px',
                textAlign: 'center',
                color: '#15803D'
              }}>
                <CheckCircle2 size={40} style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>Message Sent Successfully!</h4>
                <p style={{ fontSize: '0.875rem', marginTop: '0.35rem' }}>
                  Thank you for reaching out. A representative will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Your Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      outline: 'none',
                      backgroundColor: '#F8FAFC'
                    }}
                  />
                </div>

                {/* Email / Mobile */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Email or Mobile Number <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="Enter email or mobile number"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      outline: 'none',
                      backgroundColor: '#F8FAFC'
                    }}
                  />
                </div>

                {/* District Dropdown */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    District (Optional)
                  </label>
                  <select 
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      outline: 'none',
                      backgroundColor: '#F8FAFC'
                    }}
                  >
                    <option value="">Select District</option>
                    {TN_DISTRICTS.filter(d => d !== "All Districts").map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Your Message <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea 
                    placeholder="Type your query or feedback here..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      outline: 'none',
                      backgroundColor: '#F8FAFC',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  style={{
                    backgroundColor: '#2563EB',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                    marginTop: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

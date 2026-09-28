import React, { useState } from 'react';
import { 
  X, 
  Store, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Building2, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  EyeOff, 
  ShieldCheck 
} from 'lucide-react';
import { TN_DISTRICTS } from '../data/mockData';

export default function ShopLoginModal({ isOpen, onClose, initialTab = 'login' }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'login' or 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register Form State
  const [registerShopName, setRegisterShopName] = useState('');
  const [registerMobile, setRegisterMobile] = useState('');
  const [registerDistrict, setRegisterDistrict] = useState(TN_DISTRICTS[1] || 'Chennai');
  const [registerState, setRegisterState] = useState('Tamil Nadu');
  const [registerLocation, setRegisterLocation] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  if (!isOpen) return null;

  // District options filtering out "All Districts"
  const districtList = TN_DISTRICTS.filter(d => d !== "All Districts");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmittedMessage({
      type: 'success',
      title: 'Login Successful!',
      text: `Welcome back, shop owner (${loginEmail})! Redirecting to your MOBILO TN Shop Dashboard...`
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerShopName || !registerMobile || !registerDistrict || !registerState || !registerLocation || !registerEmail || !registerPassword) {
      alert("Please fill in all required shop details.");
      return;
    }
    setSubmittedMessage({
      type: 'success',
      title: 'Shop Registration Submitted!',
      text: `Thank you for registering "${registerShopName}". Your details have been submitted to ${registerDistrict} District Admin for physical verification.`
    });
  };

  const resetAndClose = () => {
    setSubmittedMessage(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose} style={{ zIndex: 1100 }}>
      <div 
        className="modal-card" 
        onClick={e => e.stopPropagation()} 
        style={{ 
          maxWidth: '520px', 
          width: '95%',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Top Gradient Banner Accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #1D4ED8 0%, #2563EB 50%, #3B82F6 100%)'
        }} />

        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#F1F5F9',
            border: 'none',
            color: '#64748B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          className="modal-close-btn"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Header Icon + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
            color: '#FFFFFF',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)'
          }}>
            <Store size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 850, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
              Shop Owner <span style={{ color: '#2563EB' }}>Portal</span>
            </h2>
            <p style={{ fontSize: '0.825rem', color: '#64748B', margin: '2px 0 0 0' }}>
              MOBILO TN Verified Shop Management
            </p>
          </div>
        </div>

        {/* Success / Notification View */}
        {submittedMessage ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#DCFCE7',
              color: '#16A34A',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
              {submittedMessage.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {submittedMessage.text}
            </p>
            <button 
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.75rem' }}
              onClick={resetAndClose}
            >
              Done / Close
            </button>
          </div>
        ) : (
          <>
            {/* Toggle Tabs (Login vs Register) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              backgroundColor: '#F1F5F9',
              padding: '4px',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <button
                type="button"
                onClick={() => { setActiveTab('login'); setSubmittedMessage(null); }}
                style={{
                  padding: '0.6rem',
                  fontSize: '0.9rem',
                  fontWeight: activeTab === 'login' ? 700 : 600,
                  color: activeTab === 'login' ? '#1D4ED8' : '#64748B',
                  backgroundColor: activeTab === 'login' ? '#FFFFFF' : 'transparent',
                  borderRadius: '9px',
                  border: 'none',
                  boxShadow: activeTab === 'login' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Shop Login
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('register'); setSubmittedMessage(null); }}
                style={{
                  padding: '0.6rem',
                  fontSize: '0.9rem',
                  fontWeight: activeTab === 'register' ? 700 : 600,
                  color: activeTab === 'register' ? '#1D4ED8' : '#64748B',
                  backgroundColor: activeTab === 'register' ? '#FFFFFF' : 'transparent',
                  borderRadius: '9px',
                  border: 'none',
                  boxShadow: activeTab === 'register' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Register Shop
              </button>
            </div>

            {/* TAB 1: LOGIN FORM */}
            {activeTab === 'login' && (
              <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                
                {/* Email Field */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Mail ID / Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type="email"
                      required
                      placeholder="owner@mobileshop.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.75rem 0.7rem 2.4rem',
                        fontSize: '0.9rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        outline: 'none',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <label style={{ fontSize: '0.825rem', fontWeight: 700, color: '#334155' }}>
                      Password <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); alert("Password reset link will be sent to your registered shop mail ID."); }}
                      style={{ fontSize: '0.775rem', fontWeight: 600, color: '#2563EB', textDecoration: 'none' }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <Lock size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.7rem 2.4rem 0.7rem 2.4rem',
                        fontSize: '0.9rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        outline: 'none',
                        backgroundColor: '#FFFFFF'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    backgroundColor: '#2563EB',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Login to Shop Dashboard</span>
                  <ArrowRight size={16} />
                </button>

                {/* Footer Switcher */}
                <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.85rem', color: '#64748B' }}>
                  Don't have a shop account yet?{' '}
                  <button 
                    type="button"
                    onClick={() => setActiveTab('register')}
                    style={{ background: 'none', border: 'none', color: '#2563EB', fontWeight: 700, cursor: 'pointer', padding: 0 }}
                  >
                    Register Your Shop
                  </button>
                </div>

              </form>
            )}

            {/* TAB 2: REGISTER FORM */}
            {activeTab === 'register' && (
              <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxHeight: '68vh', overflowY: 'auto', paddingRight: '4px' }}>
                
                {/* 1. Shop Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Shop Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Building2 size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Apex Mobile Care & Accessories"
                      value={registerShopName}
                      onChange={(e) => setRegisterShopName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem 0.65rem 2.4rem',
                        fontSize: '0.875rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* 2. Mobile Number */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Mobile Number <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={registerMobile}
                      onChange={(e) => setRegisterMobile(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem 0.65rem 2.4rem',
                        fontSize: '0.875rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* 3. District & State Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  
                  {/* District Dropdown */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      District <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <select
                      value={registerDistrict}
                      onChange={(e) => setRegisterDistrict(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#FFFFFF',
                        color: '#0F172A',
                        outline: 'none'
                      }}
                    >
                      {districtList.map((dist) => (
                        <option key={dist} value={dist}>{dist}</option>
                      ))}
                    </select>
                  </div>

                  {/* State Field */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      State <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Globe size={16} color="#94A3B8" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                      <input 
                        type="text"
                        required
                        value={registerState}
                        onChange={(e) => setRegisterState(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.5rem 0.65rem 2.2rem',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          borderRadius: '10px',
                          border: '1px solid #CBD5E1',
                          outline: 'none',
                          backgroundColor: '#F8FAFC'
                        }}
                      />
                    </div>
                  </div>

                </div>

                {/* 4. Location / Address */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Location / Area Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                    <textarea 
                      required
                      rows={2}
                      placeholder="e.g. No. 42, GST Road, Opp. Railway Station, Tambaram West"
                      value={registerLocation}
                      onChange={(e) => setRegisterLocation(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.75rem 0.6rem 2.4rem',
                        fontSize: '0.85rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        outline: 'none',
                        resize: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                </div>

                {/* 5. Mail ID */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Mail ID / Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type="email"
                      required
                      placeholder="owner@mobileshop.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.75rem 0.65rem 2.4rem',
                        fontSize: '0.875rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* 6. Password */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Password <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input 
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Create account password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.65rem 2.4rem 0.65rem 2.4rem',
                        fontSize: '0.875rem',
                        borderRadius: '10px',
                        border: '1px solid #CBD5E1',
                        outline: 'none'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Notice Pill */}
                <div style={{ 
                  backgroundColor: '#EFF6FF', 
                  border: '1px solid #BFDBFE', 
                  borderRadius: '8px', 
                  padding: '0.5rem 0.75rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  fontSize: '0.75rem', 
                  color: '#1E40AF',
                  marginTop: '0.2rem'
                }}>
                  <ShieldCheck size={16} color="#1D4ED8" style={{ flexShrink: 0 }} />
                  <span>After registration, your shop will be listed after physical verification by your district admin.</span>
                </div>

                {/* Submit Register Button */}
                <button 
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    backgroundColor: '#2563EB',
                    marginTop: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Register Shop Now</span>
                  <ArrowRight size={16} />
                </button>

                {/* Footer Switcher */}
                <div style={{ textAlign: 'center', marginTop: '0.3rem', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#64748B' }}>
                  Already registered your shop?{' '}
                  <button 
                    type="button"
                    onClick={() => setActiveTab('login')}
                    style={{ background: 'none', border: 'none', color: '#2563EB', fontWeight: 700, cursor: 'pointer', padding: 0 }}
                  >
                    Login here
                  </button>
                </div>

              </form>
            )}

          </>
        )}

      </div>

      <style>{`
        .modal-close-btn:hover {
          background-color: #E2E8F0 !important;
          color: #0F172A !important;
        }
      `}</style>
    </div>
  );
}

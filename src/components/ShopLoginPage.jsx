import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
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
  ArrowLeft,
  ChevronDown,
  Search,
  Check
} from 'lucide-react';
import { TN_DISTRICTS, INDIA_STATES } from '../data/mockData';
import MobiloWave from '../assets/MobiloWave';
import MobiloPoint from '../assets/Shop Owner Login and admin login/MobiloPoint';

export default function ShopLoginPage({ onNavigateHome, initialTab = 'login' }) {
  const [isSignUp, setIsSignUp] = useState(initialTab === 'register');
  const [showPassword, setShowPassword] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(null);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register Form State
  const [registerShopName, setRegisterShopName] = useState('');
  const [registerMobile, setRegisterMobile] = useState('');
  
  // District Search & Selection State
  const districtList = TN_DISTRICTS.filter(d => d !== "All Districts");
  const [registerDistrict, setRegisterDistrict] = useState('Ariyalur');
  const [districtSearch, setDistrictSearch] = useState('');
  const [districtDropdownOpen, setDistrictDropdownOpen] = useState(false);

  // State Search & Selection State (All Indian States & UTs)
  const [registerState, setRegisterState] = useState('Tamil Nadu');
  const [stateSearch, setStateSearch] = useState('');
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);

  const [registerLocation, setRegisterLocation] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  // Filter 38 districts based on user search query
  const filteredDistricts = districtList.filter(dist => 
    dist.toLowerCase().includes(districtSearch.toLowerCase().trim())
  );

  // Filter 36 Indian states & UTs based on user search query
  const filteredStates = INDIA_STATES.filter(st => 
    st.toLowerCase().includes(stateSearch.toLowerCase().trim())
  );

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmittedMessage({
      title: 'Login Successful!',
      text: `Logged in as ${loginEmail}`
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerShopName || !registerMobile || !registerDistrict || !registerState || !registerLocation || !registerEmail || !registerPassword) {
      alert("Please fill in all required shop details.");
      return;
    }
    setSubmittedMessage({
      title: 'Shop Registered!',
      text: `Registered "${registerShopName}" in ${registerDistrict}, ${registerState}. Pending admin verification.`
    });
  };

  return (
    <div className="white-bg-container">
      
      {/* Back to Home Floating Button */}
      <button
        onClick={onNavigateHome}
        className="white-back-btn"
      >
        <ArrowLeft size={14} color="#2563EB" />
        <span>Back to Home</span>
      </button>

      {/* Main Neumorphic Soft Light Sliding Container */}
      <div className={`auth-sliding-container ${isSignUp ? 'right-panel-active' : ''}`}>
        
        {/* ==================== 1. REGISTER FORM (SIGN UP) ==================== */}
        <div className="form-container sign-up-container">
          {submittedMessage ? (
            <div className="submitted-view">
              
              {/* Confetti Burst Animation Particles */}
              <div className="confetti-container">
                {[...Array(18)].map((_, i) => (
                  <span key={i} className={`confetti-particle p-${i % 6}`} />
                ))}
              </div>

              {/* Animated Draw SVG Checkmark */}
              <div className="check-icon-circle-animated">
                <svg className="checkmark-svg" viewBox="0 0 52 52">
                  <circle className="checkmark-circle" cx="26" cy="26" r="23" fill="none" />
                  <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>

              <h3 className="success-title">{submittedMessage.title}</h3>
              <p className="success-text">{submittedMessage.text}</p>
              
              <button className="auth-btn-primary" onClick={onNavigateHome}>
                <span>Back to Home</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="auth-form scrollable-form">
              <h2 className="form-title">Register Your Shop</h2>
              <span className="form-subtitle">Enter details for district physical verification</span>

              {/* 1. Shop Name */}
              <div className="input-group">
                <Building2 size={14} className="input-icon" />
                <input 
                  type="text"
                  required
                  placeholder="Shop Name *"
                  value={registerShopName}
                  onChange={(e) => setRegisterShopName(e.target.value)}
                  className="neu-input"
                />
              </div>

              {/* 2. Mobile Number */}
              <div className="input-group">
                <Phone size={14} className="input-icon" />
                <input 
                  type="tel"
                  required
                  placeholder="Mobile Number *"
                  value={registerMobile}
                  onChange={(e) => setRegisterMobile(e.target.value)}
                  className="neu-input"
                />
              </div>

              {/* 3. Searchable District & State Grid */}
              <div className="grid-2-col">
                
                {/* Searchable District Dropdown */}
                <div className="combobox-wrapper">
                  <button
                    type="button"
                    onClick={() => {
                      setDistrictDropdownOpen(!districtDropdownOpen);
                      setStateDropdownOpen(false);
                    }}
                    className="combobox-btn neu-input"
                  >
                    <span className="truncate">{registerDistrict}</span>
                    <ChevronDown size={12} color="#64748B" />
                  </button>

                  {districtDropdownOpen && (
                    <div className="combobox-dropdown dropdown-left">
                      <div className="combobox-search-box">
                        <Search size={12} className="search-icon" />
                        <input 
                          type="text"
                          placeholder="Search 38 districts..."
                          value={districtSearch}
                          onChange={(e) => setDistrictSearch(e.target.value)}
                          autoFocus
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="combobox-list">
                        {filteredDistricts.length > 0 ? (
                          filteredDistricts.map((dist) => (
                            <button
                              key={dist}
                              type="button"
                              onClick={() => {
                                setRegisterDistrict(dist);
                                setDistrictDropdownOpen(false);
                                setDistrictSearch('');
                              }}
                              className={`combobox-option ${registerDistrict === dist ? 'active' : ''}`}
                            >
                              <span>{dist}</span>
                              {registerDistrict === dist && <Check size={12} color="#2563EB" />}
                            </button>
                          ))
                        ) : (
                          <div className="no-result">No district found</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Searchable State Dropdown */}
                <div className="combobox-wrapper">
                  <button
                    type="button"
                    onClick={() => {
                      setStateDropdownOpen(!stateDropdownOpen);
                      setDistrictDropdownOpen(false);
                    }}
                    className="combobox-btn neu-input"
                  >
                    <span className="truncate">{registerState}</span>
                    <ChevronDown size={12} color="#64748B" />
                  </button>

                  {stateDropdownOpen && (
                    <div className="combobox-dropdown dropdown-right">
                      <div className="combobox-search-box">
                        <Search size={12} className="search-icon" />
                        <input 
                          type="text"
                          placeholder="Search 36 states/UTs..."
                          value={stateSearch}
                          onChange={(e) => setStateSearch(e.target.value)}
                          autoFocus
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="combobox-list">
                        {filteredStates.length > 0 ? (
                          filteredStates.map((st) => (
                            <button
                              key={st}
                              type="button"
                              onClick={() => {
                                setRegisterState(st);
                                setStateDropdownOpen(false);
                                setStateSearch('');
                              }}
                              className={`combobox-option ${registerState === st ? 'active' : ''}`}
                            >
                              <span>{st}</span>
                              {registerState === st && <Check size={12} color="#2563EB" />}
                            </button>
                          ))
                        ) : (
                          <div className="no-result">No state found</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* 4. Location / Address */}
              <div className="input-group">
                <MapPin size={14} className="input-icon" />
                <input 
                  type="text"
                  required
                  placeholder="Location *"
                  value={registerLocation}
                  onChange={(e) => setRegisterLocation(e.target.value)}
                  className="neu-input"
                />
              </div>

              {/* 5. Email ID */}
              <div className="input-group">
                <Mail size={14} className="input-icon" />
                <input 
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="neu-input"
                />
              </div>

              {/* 6. Password */}
              <div className="input-group">
                <Lock size={14} className="input-icon" />
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password *"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  className="neu-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-toggle-btn"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>

              {/* Register Action Button */}
              <button type="submit" className="auth-btn-primary mt-2">
                <span>Register Shop Now</span>
                <ArrowRight size={14} />
              </button>

            </form>
          )}
        </div>

        {/* ==================== 2. LOGIN FORM (SIGN IN) ==================== */}
        <div className="form-container sign-in-container">
          {submittedMessage ? (
            <div className="submitted-view">
              
              {/* Confetti Burst Animation Particles */}
              <div className="confetti-container">
                {[...Array(18)].map((_, i) => (
                  <span key={i} className={`confetti-particle p-${i % 6}`} />
                ))}
              </div>

              {/* Animated Draw SVG Checkmark */}
              <div className="check-icon-circle-animated">
                <svg className="checkmark-svg" viewBox="0 0 52 52">
                  <circle className="checkmark-circle" cx="26" cy="26" r="23" fill="none" />
                  <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>

              <h3 className="success-title">{submittedMessage.title}</h3>
              <p className="success-text">{submittedMessage.text}</p>
              
              <button className="auth-btn-primary" onClick={onNavigateHome}>
                <span>Back to Home</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <h2 className="form-title">Shop Owner Login</h2>
              <span className="form-subtitle">Enter your credentials to access shop portal</span>

              {/* Email */}
              <div className="input-group mt-3">
                <Mail size={14} className="input-icon" />
                <input 
                  type="email"
                  required
                  placeholder="Mail ID *"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="neu-input"
                />
              </div>

              {/* Password */}
              <div className="input-group">
                <Lock size={14} className="input-icon" />
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password *"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="neu-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-toggle-btn"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>

              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert("Password reset link will be sent to your registered mail ID."); }}
                className="forgot-link"
              >
                Forgot Password?
              </a>

              {/* Login Action Button */}
              <button type="submit" className="auth-btn-primary mt-2">
                <span>Login</span>
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>

        {/* ==================== 3. SLIDING OVERLAY CONTAINER ==================== */}
        <div className="overlay-container">
          <div className="overlay">
            
            {/* Left Overlay Panel (Shown when right-panel-active / Register mode) */}
            <div className="overlay-panel overlay-left">
              
              <div className="overlay-top-content">
                {/* Landing Page Exact Logo */}
                <div className="brand-logo-badge" onClick={onNavigateHome}>
                  <div className="logo-icon-box">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="brand-name">MOBILO <span className="blue-accent">TN</span></div>
                    <div className="brand-tag">VERIFIED PLATFORM</div>
                  </div>
                </div>

                <h1 className="overlay-heading">Hello, Shop Owner!</h1>
                <p className="overlay-desc">
                  Register your mobile shop today, get verified by District Admins across all 38 districts of Tamil Nadu.
                </p>
              </div>

              {/* MobiloWave WebGL Animation Character */}
              <div className="mobilo-wave-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: '24px', boxSizing: 'border-box', margin: '0.1rem 0' }}>
                <MobiloWave width={220} />
              </div>

              <button 
                type="button"
                className="ghost-btn"
                onClick={() => {
                  setIsSignUp(false);
                  setDistrictDropdownOpen(false);
                  setStateDropdownOpen(false);
                }}
              >
                <span>Shop Login</span>
              </button>
            </div>

            {/* Right Overlay Panel (Shown when default Login mode) */}
            <div className="overlay-panel overlay-right">
              
              <div className="overlay-top-content">
                {/* Landing Page Exact Logo */}
                <div className="brand-logo-badge" onClick={onNavigateHome}>
                  <div className="logo-icon-box">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="brand-name">MOBILO <span className="blue-accent">TN</span></div>
                    <div className="brand-tag">VERIFIED PLATFORM</div>
                  </div>
                </div>

                <h1 className="overlay-heading">Welcome Back, Boss!</h1>
                <p className="overlay-desc">
                  Already registered your shop? Login to manage your active stock, profile & verification status.
                </p>
              </div>

              {/* MobiloPoint WebGL Animation Character */}
              <div className="mobilo-point-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '100%', paddingLeft: '25px', boxSizing: 'border-box', margin: '0.1rem 0' }}>
                <MobiloPoint width={240} />
              </div>

              <button 
                type="button"
                className="ghost-btn"
                onClick={() => {
                  setIsSignUp(true);
                  setDistrictDropdownOpen(false);
                  setStateDropdownOpen(false);
                }}
              >
                <span>Register Shop</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* NEUMORPHIC PURE WHITE BACKGROUND DESIGN & ANIMATION ENGINE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');

        .white-bg-container {
          min-height: 100vh;
          background-color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          font-family: 'Montserrat', sans-serif;
          position: relative;
        }

        .white-back-btn {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background-color: #FFFFFF;
          color: #1E293B;
          border: 1px solid #E2E8F0;
          padding: 0.45rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 4px 4px 12px rgba(15, 23, 42, 0.05), -4px -4px 12px #FFFFFF;
          transition: all 0.25s ease;
          z-index: 200;
        }
        .white-back-btn:hover {
          background-color: #EFF6FF;
          border-color: #93C5FD;
          color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 6px 6px 16px rgba(37, 99, 235, 0.12);
        }

        /* MAIN SLIDING CONTAINER - NEUMORPHIC SOFT LIGHT ELEVATION ON PURE WHITE */
        .auth-sliding-container {
          background-color: #FFFFFF;
          border-radius: 24px;
          box-shadow: 0 20px 50px -10px rgba(15, 23, 42, 0.1), 0 10px 25px rgba(15, 23, 42, 0.05);
          position: relative;
          overflow: hidden;
          width: 800px;
          max-width: 100%;
          min-height: 520px;
          border: 1px solid #F1F5F9;
          z-index: 10;
        }

        .form-container {
          position: absolute;
          top: 0;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .sign-in-container {
          left: 0;
          width: 50%;
          z-index: 2;
        }

        .auth-sliding-container.right-panel-active .sign-in-container {
          transform: translateX(100%);
        }

        .sign-up-container {
          left: 0;
          width: 50%;
          opacity: 0;
          z-index: 1;
        }

        .auth-sliding-container.right-panel-active .sign-up-container {
          transform: translateX(100%);
          opacity: 1;
          z-index: 5;
          animation: show 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes show {
          0%, 49% {
            opacity: 0;
            z-index: 1;
          }
          50%, 100% {
            opacity: 1;
            z-index: 5;
          }
        }

        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 100;
        }

        .auth-sliding-container.right-panel-active .overlay-container {
          transform: translateX(-100%);
        }

        .overlay {
          background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #1E40AF 100%);
          background-repeat: no-repeat;
          background-size: cover;
          color: #FFFFFF;
          position: relative;
          left: -100%;
          height: 100%;
          width: 200%;
          transform: translateX(0);
          transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .auth-sliding-container.right-panel-active .overlay {
          transform: translateX(50%);
        }

        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          padding: 2.25rem 25px 2rem 25px;
          box-sizing: border-box;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .overlay-top-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .overlay-left {
          transform: translateX(-20%);
        }

        .auth-sliding-container.right-panel-active .overlay-left {
          transform: translateX(0);
        }

        .overlay-right {
          right: 0;
          transform: translateX(0);
        }

        .auth-sliding-container.right-panel-active .overlay-right {
          transform: translateX(20%);
        }

        /* NEUMORPHIC LIGHT TACTILE INPUTS & FORMS */
        .auth-form {
          background-color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 1.5rem 2.25rem;
          width: 100%;
          box-sizing: border-box;
          text-align: center;
          margin: auto 0;
        }

        .scrollable-form {
          max-height: 100%;
          overflow-y: auto;
          margin: auto 0 !important;
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }

        .form-title {
          font-weight: 800;
          font-size: 1.25rem;
          margin: 0;
          color: #0F172A;
        }

        .form-subtitle {
          font-size: 0.725rem;
          color: #64748B;
          margin-top: 3px;
          margin-bottom: 0.85rem;
        }

        .input-group {
          position: relative;
          width: 100%;
          margin: 4px 0;
        }

        .input-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
          transition: color 0.2s ease;
        }

        .neu-input {
          background-color: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 0.45rem 0.6rem 0.45rem 2rem;
          width: 100%;
          border-radius: 8px;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.785rem;
          outline: none;
          box-shadow: inset 2px 2px 5px rgba(15, 23, 42, 0.03), inset -2px -2px 5px #FFFFFF;
          transition: all 0.25s ease;
        }

        .neu-input:focus {
          border-color: #2563EB !important;
          background-color: #FFFFFF !important;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15) !important;
        }
        .input-group:focus-within .input-icon {
          color: #2563EB;
        }

        .eye-toggle-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0;
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
          width: 100%;
          margin: 4px 0;
        }

        .combobox-wrapper {
          position: relative;
          width: 100%;
        }

        .combobox-btn {
          width: 100%;
          padding: 0.45rem 0.5rem;
          font-size: 0.765rem;
          font-weight: 600;
          border-radius: 8px;
          border: 1px solid #E2E8F0;
          background-color: #F8FAFC;
          color: #0F172A;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          outline: none;
          text-transform: none;
          letter-spacing: normal;
        }

        .combobox-dropdown {
          position: absolute;
          top: 100%;
          z-index: 150;
          background-color: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          margin-top: 4px;
          padding: 0.4rem;
          max-height: 200px;
          width: 160px;
          display: flex;
          flex-direction: column;
        }
        .dropdown-left { left: 0; }
        .dropdown-right { right: 0; }

        .combobox-search-box {
          position: relative;
          margin-bottom: 0.35rem;
        }
        .combobox-search-box .search-icon {
          position: absolute;
          left: 6px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }
        .combobox-search-box input {
          width: 100%;
          padding: 0.3rem 0.4rem 0.3rem 1.6rem;
          font-size: 0.75rem;
          border-radius: 5px;
          border: 1px solid #E2E8F0;
          outline: none;
          background-color: #F8FAFC;
          margin: 0;
        }

        .combobox-list {
          overflow-y: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .combobox-option {
          text-align: left;
          padding: 0.3rem 0.4rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: #1E293B;
          background: transparent;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-transform: none;
          letter-spacing: normal;
        }
        .combobox-option.active {
          font-weight: 700;
          color: #1D4ED8;
          background-color: #EFF6FF;
        }

        .no-result {
          padding: 0.4rem;
          font-size: 0.725rem;
          color: #94A3B8;
          text-align: center;
        }

        .forgot-link {
          color: #2563EB;
          font-size: 0.725rem;
          text-decoration: none;
          margin: 6px 0 12px 0;
          font-weight: 600;
        }

        .auth-btn-primary {
          border-radius: 25px;
          border: none;
          background-color: #2563EB;
          color: #FFFFFF;
          font-size: 0.775rem;
          font-weight: 700;
          padding: 0.65rem 2rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: all 0.25s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
        }
        .auth-btn-primary:hover {
          background-color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
        }
        .auth-btn-primary:active {
          transform: scale(0.96);
        }

        /* OVERLAY BRANDING & BUTTONS */
        .brand-logo-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          margin-bottom: 0.75rem;
        }
        .logo-icon-box {
          background-color: #FFFFFF;
          color: #2563EB;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .brand-name {
          font-size: 1.05rem;
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1;
        }
        .blue-accent {
          color: #93C5FD;
        }
        .brand-tag {
          font-size: 0.55rem;
          color: #DBEAFE;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-top: 2px;
        }

        .overlay-heading {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 0.4rem 0;
          color: #FFFFFF;
        }

        .overlay-desc {
          font-size: 0.785rem;
          font-weight: 400;
          line-height: 1.5;
          margin: 0 0 0.5rem 0;
          color: #E0E7FF;
        }

        .img-wrapper-3d {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          margin-bottom: 0.25rem;
          width: 100%;
          overflow: hidden;
        }

        .char-pulse-aura {
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
          pointer-events: none;
          z-index: 0;
        }

        .overlay-img {
          width: auto;
          object-fit: contain;
          margin-top: 0.25rem;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25));
        }

        .overlay-img-left-pointing {
          max-height: 200px;
          transform: translateX(-68px);
        }

        .overlay-img-right-pointing {
          max-height: 200px;
          transform: translateX(68px);
        }

        .ghost-btn {
          border-radius: 25px;
          border: 1.5px solid #FFFFFF;
          background-color: transparent;
          color: #FFFFFF;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.55rem 1.75rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .ghost-btn:hover {
          background-color: #FFFFFF;
          color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        }
        .ghost-btn:active {
          transform: scale(0.96);
        }

        /* CONFETTI BURST & DRAW CHECKMARK ANIMATION */
        .submitted-view {
          padding: 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          position: relative;
        }

        .check-icon-circle-animated {
          width: 60px;
          height: 60px;
          margin-bottom: 1rem;
        }
        .checkmark-svg {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: block;
          stroke-width: 2.5;
          stroke: #16A34A;
          stroke-miterlimit: 10;
          box-shadow: inset 0px 0px 0px #16A34A;
          animation: fillCheck 0.4s ease-in-out 0.4s forwards, scaleCheck 0.3s ease-in-out 0.9s both;
        }
        .checkmark-circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2.5;
          stroke-miterlimit: 10;
          stroke: #16A34A;
          fill: none;
          animation: strokeCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        .checkmark-check {
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: strokeCheck 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
        }

        @keyframes strokeCircle { 100% { stroke-dashoffset: 0; } }
        @keyframes strokeCheck { 100% { stroke-dashoffset: 0; } }
        @keyframes scaleCheck {
          0%, 100% { transform: none; }
          50% { transform: scale3d(1.15, 1.15, 1); }
        }

        .success-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.3rem;
        }
        .success-text {
          font-size: 0.825rem;
          color: #64748B;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        /* CONFETTI PARTICLES */
        .confetti-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .confetti-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          top: -10px;
          opacity: 0.9;
          animation: confettiFall 2.5s ease-out forwards infinite;
        }
        .confetti-particle.p-0 { left: 10%; background: #2563EB; animation-delay: 0s; }
        .confetti-particle.p-1 { left: 25%; background: #10B981; animation-delay: 0.3s; }
        .confetti-particle.p-2 { left: 45%; background: #F59E0B; animation-delay: 0.1s; }
        .confetti-particle.p-3 { left: 60%; background: #EC4899; animation-delay: 0.4s; }
        .confetti-particle.p-4 { left: 78%; background: #8B5CF6; animation-delay: 0.2s; }
        .confetti-particle.p-5 { left: 90%; background: #06B6D4; animation-delay: 0.5s; }

        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
        }

        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .mt-2 { margin-top: 0.5rem; }
        .mt-3 { margin-top: 0.75rem; }

        .mobilo-point-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 100%;
          padding-left: 48px;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .auth-sliding-container {
            min-height: 560px;
          }
          .overlay-panel {
            padding: 0 15px;
          }
          .overlay-heading {
            font-size: 1.1rem;
          }
          .overlay-desc {
            font-size: 0.7rem;
          }
          .mobilo-point-wrapper {
            padding-left: 20px !important;
          }
          .mobilo-point-wrapper > div {
            width: 290px !important;
          }
        }

        @media (max-width: 480px) {
          .mobilo-point-wrapper {
            padding-left: 14px !important;
          }
          .mobilo-point-wrapper > div {
            width: 220px !important;
          }
        }
      `}</style>

    </div>
  );
}

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  AlertTriangle, 
  Menu, 
  X, 
  ChevronDown, 
  Store, 
  Home, 
  Info, 
  ShieldAlert, 
  PhoneCall 
} from 'lucide-react';

export default function Navbar({ 
  selectedDistrict, 
  onOpenReportScammer,
  onOpenLocationModal,
  onOpenAboutModal,
  onOpenContactModal,
  onOpenShopLoginModal,
  onOpenAdminLogin
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const scrollTo = (id, navName) => {
    setActiveNav(navName);
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(203, 213, 225, 0.7)',
      height: '70px',
      boxShadow: '0 4px 20px -5px rgba(15, 23, 42, 0.08)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        
        {/* Brand Logo - Matching Reference Mockup */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero', 'home'); }} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
            color: '#FFFFFF',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 3px 10px rgba(37, 99, 235, 0.25)'
          }}>
            <ShieldCheck size={20} />
          </div>
          <div>
            <div style={{
              fontSize: '1.15rem',
              fontWeight: 900,
              fontFamily: 'var(--font-sans)',
              color: '#0F172A',
              lineHeight: 1,
              letterSpacing: '-0.025em'
            }}>
              MOBILO <span style={{ color: '#2563EB' }}>TN</span>
            </div>
            <div className="brand-subtitle-desktop" style={{ fontSize: '0.6rem', color: '#3B82F6', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>
              VERIFIED PLATFORM
            </div>
          </div>
        </a>

        {/* Navigation Links with Icons & Underline Pill */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          <button 
            onClick={() => scrollTo('hero', 'home')} 
            className={`main-nav-item ${activeNav === 'home' ? 'active' : ''}`}
          >
            <Home size={16} color="#2563EB" />
            <span>Home</span>
          </button>

          <button 
            onClick={() => { setActiveNav('about'); onOpenAboutModal(); }} 
            className={`main-nav-item ${activeNav === 'about' ? 'active' : ''}`}
          >
            <Info size={16} color="#64748B" />
            <span>About</span>
          </button>

          <button 
            onClick={() => scrollTo('scammers', 'scammers')} 
            className={`main-nav-item ${activeNav === 'scammers' ? 'active' : ''}`}
            style={{ color: '#EF4444' }}
          >
            <ShieldAlert size={16} color="#EF4444" />
            <span>Verified Scammer</span>
          </button>

          <button 
            onClick={() => { setActiveNav('contact'); onOpenContactModal(); }} 
            className={`main-nav-item ${activeNav === 'contact' ? 'active' : ''}`}
          >
            <PhoneCall size={16} color="#2563EB" />
            <span>Contact Us</span>
          </button>
        </nav>

        {/* Right Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexShrink: 0, minWidth: 0 }}>
          
          {/* Location Selector Button */}
          <button 
            onClick={onOpenLocationModal} 
            className="nav-location-btn"
            style={{
              fontWeight: 600,
              color: '#1E293B',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              backgroundColor: '#F1F5F9',
              padding: '0.4rem 0.65rem',
              borderRadius: '8px',
              border: '1px solid #E2E8F0',
              transition: 'all 0.15s ease',
              maxWidth: '130px',
              flexShrink: 1
            }}
            title="Click to Choose Location"
          >
            <MapPin size={13} color="#2563EB" style={{ flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {selectedDistrict}
            </span>
            <ChevronDown size={12} color="#64748B" style={{ flexShrink: 0 }} />
          </button>

          {/* Report Scammer Pill Button */}
          <button 
            onClick={onOpenReportScammer}
            className="nav-action-btn hide-mobile-small"
            style={{ 
              backgroundColor: '#EF4444', 
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.8rem',
              padding: '0.42rem 0.85rem',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 2px 8px rgba(239, 68, 68, 0.25)'
            }}
          >
            <AlertTriangle size={14} />
            <span className="hide-mobile">Report Scammer</span>
          </button>

          {/* Shop Login Pill Button */}
          <button 
            onClick={() => onOpenShopLoginModal && onOpenShopLoginModal('login')}
            className="nav-action-btn hide-mobile-small"
            style={{ 
              backgroundColor: '#2563EB', 
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.8rem',
              padding: '0.42rem 0.85rem',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
            }}
          >
            <Store size={14} />
            <span className="hide-mobile">Shop Login</span>
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ padding: '0.35rem', color: '#0F172A', flexShrink: 0 }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
          animation: 'fadeIn 0.2s ease'
        }}>
          <button onClick={() => scrollTo('hero', 'home')} style={{ textAlign: 'left', fontWeight: 600, fontSize: '0.9rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Home size={16} color="#2563EB" /> Home
          </button>
          <button onClick={() => { setMobileMenuOpen(false); onOpenAboutModal(); }} style={{ textAlign: 'left', fontWeight: 600, fontSize: '0.9rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={16} color="#64748B" /> About Us
          </button>
          <button onClick={() => scrollTo('scammers', 'scammers')} style={{ textAlign: 'left', fontWeight: 700, fontSize: '0.9rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldAlert size={16} color="#EF4444" /> Verified Scammers
          </button>
          <button onClick={() => { setMobileMenuOpen(false); onOpenContactModal(); }} style={{ textAlign: 'left', fontWeight: 600, fontSize: '0.9rem', color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PhoneCall size={16} color="#2563EB" /> Contact Us
          </button>
          
          <div style={{ height: '1px', backgroundColor: '#E2E8F0', margin: '0.25rem 0' }} />

          <button onClick={() => { setMobileMenuOpen(false); onOpenReportScammer(); }} style={{ textAlign: 'left', fontWeight: 700, fontSize: '0.875rem', color: '#B91C1C', backgroundColor: '#FEF2F2', padding: '0.6rem 0.85rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertTriangle size={16} color="#EF4444" /> Report Scammer
          </button>
          <button onClick={() => { setMobileMenuOpen(false); onOpenShopLoginModal && onOpenShopLoginModal('login'); }} style={{ textAlign: 'left', fontWeight: 700, fontSize: '0.875rem', color: '#1D4ED8', backgroundColor: '#EFF6FF', padding: '0.6rem 0.85rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Store size={16} color="#2563EB" /> Shop Owner Login
          </button>
          <button onClick={() => { setMobileMenuOpen(false); onOpenAdminLogin && onOpenAdminLogin(); }} style={{ textAlign: 'left', fontWeight: 700, fontSize: '0.875rem', color: '#0F172A', backgroundColor: '#F1F5F9', padding: '0.6rem 0.85rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} color="#1E40AF" /> Admin Portal Login
          </button>
        </div>
      )}

      <style>{`
        .main-nav-item {
          font-family: var(--font-nav);
          font-weight: 700;
          color: #1E293B;
          font-size: 0.885rem;
          letter-spacing: -0.01em;
          transition: all 0.15s ease;
          padding: 0.3rem 0;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .main-nav-item:hover {
          color: #2563EB;
        }
        .main-nav-item.active {
          color: #2563EB;
          font-weight: 800;
        }
        .main-nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 3px;
          background-color: #2563EB;
          border-radius: 99px;
        }
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
          .brand-subtitle-desktop { display: none !important; }
          .nav-location-btn {
            max-width: 100px !important;
            padding: 0.35rem 0.5rem !important;
            font-size: 0.75rem !important;
          }
        }
        @media (max-width: 480px) {
          .hide-mobile-small { display: none !important; }
          .nav-location-btn {
            max-width: 90px !important;
          }
        }
      `}</style>
    </header>
  );
}

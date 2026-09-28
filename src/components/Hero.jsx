import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  Store, 
  ArrowRight,
  ChevronDown,
  Check,
  Search,
  X
} from 'lucide-react';

export default function Hero({ 
  selectedDistrict, 
  setSelectedDistrict, 
  setSelectedTown, 
  districts 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const actualDistricts = districts.filter(d => d !== "All Districts");

  const filteredDistricts = actualDistricts.filter(d => 
    d.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const handleContinue = () => {
    document.getElementById('shops')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section style={{
        backgroundColor: '#EFF7FE',
        backgroundImage: `
          radial-gradient(circle at 75% 35%, #C8E5FD 0%, rgba(239, 247, 254, 0) 65%),
          linear-gradient(135deg, #F4F9FE 0%, #E3F1FE 50%, #D2E7FD 100%)
        `,
        padding: '3rem 0 0 0',
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'visible',
        borderBottom: '1px solid #CDE4FA',
        zIndex: 10
      }}>
        {/* Outer wrapper to allow right image to touch the viewport edge while left content matches container */}
        <div style={{
          width: '100%',
          margin: 0,
          paddingLeft: 'max(1.5rem, calc((100vw - 1220px) / 2))',
          paddingRight: 0,
          flex: '1 1 auto',
          display: 'flex',
          alignItems: 'center'
        }}>
          
          {/* Main 2-Column Hero Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'flex-end',
            width: '100%'
          }} className="hero-grid-layout">
            
            {/* Left Column - Content & Location Box */}
            <div style={{ paddingRight: '1.5rem', paddingBottom: '1.5rem', zIndex: 30, position: 'relative' }} className="hero-left-content">
              
              {/* Main Headline */}
              <h1 style={{
                fontSize: 'clamp(2.35rem, 4.4vw, 3.25rem)',
                color: '#0F172A',
                lineHeight: 1.12,
                fontWeight: 900,
                letterSpacing: '-0.035em',
                marginBottom: '1rem',
                fontFamily: 'Inter, sans-serif'
              }}>
                Find Verified Mobile Shops in TN & <span style={{ color: '#2563EB' }}>Avoid Scams</span>
              </h1>

              {/* Subtitle Description */}
              <p style={{
                fontSize: '1.025rem',
                color: '#334155',
                lineHeight: 1.55,
                marginBottom: '1.5rem',
                maxWidth: '560px',
                fontWeight: 500
              }}>
                Get genuine mobile shops verified by District Admins. <br className="hide-mobile" />
                Choose your location first and explore trusted shops near you.
              </p>

              {/* Interactive Location Selector Card Box with Glassmorphism & Hover Elevation */}
              <div 
                className="location-card-glass"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '18px',
                  padding: '1.05rem 1.25rem',
                  boxShadow: '0 14px 38px -8px rgba(37, 99, 235, 0.16), 0 4px 14px -2px rgba(15, 23, 42, 0.04)',
                  border: '1px solid #CBD5E1',
                  marginBottom: '2.25rem',
                  maxWidth: '510px',
                  position: 'relative',
                  zIndex: 40,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >

                {/* Curved Blue Doodle Arrow pointing directly towards Continue button */}
                <img 
                  src="/blue_curved_arrow.png" 
                  alt="Curved Blue Arrow" 
                  style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-165px',
                    width: '235px',
                    height: 'auto',
                    pointerEvents: 'none',
                    zIndex: 20
                  }}
                  className="hide-mobile"
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.55rem' }}>
                  
                  {/* Location Map Pin Graphic Icon */}
                  <div style={{ flexShrink: 0 }}>
                    <img 
                      src="/location_pin_graphic.png" 
                      alt="Location Pin Graphic"
                      style={{ width: '64px', height: '64px', objectFit: 'contain', display: 'block', transform: 'translateY(-6px)' }}
                    />
                  </div>

                  <div>
                    <h3 style={{ fontSize: '0.985rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.12rem', lineHeight: 1.2 }}>
                      Choose Your Location First
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 500, lineHeight: 1.25 }}>
                      Select your district to find verified mobile shops near you.
                    </p>
                  </div>
                </div>

                {/* Popular Quick Select Chips */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Popular:
                  </span>
                  {['Chennai', 'Coimbatore', 'Madurai', 'Trichy'].map((districtName) => {
                    const fullName = districtName === 'Trichy' ? 'Tiruchirappalli (Trichy)' : districtName;
                    const isChipSelected = selectedDistrict === fullName;
                    return (
                      <button
                        key={districtName}
                        type="button"
                        onClick={() => {
                          setSelectedDistrict(fullName);
                          setSelectedTown("All Areas");
                        }}
                        style={{
                          fontSize: '0.73rem',
                          fontWeight: 600,
                          padding: '0.18rem 0.6rem',
                          borderRadius: '99px',
                          border: isChipSelected ? '1px solid #2563EB' : '1px solid #E2E8F0',
                          backgroundColor: isChipSelected ? '#EFF6FF' : '#F8FAFC',
                          color: isChipSelected ? '#1D4ED8' : '#475569',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.2rem'
                        }}
                        className="quick-chip-hover"
                      >
                        <MapPin size={12} color="#2563EB" style={{ flexShrink: 0 }} />
                        <span>{districtName}</span>
                      </button>
                    );
                  })}
                </div>

                {/* District Select Input Row with Action Button */}
                <div style={{
                  display: 'flex',
                  gap: '0.55rem',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div 
                    ref={dropdownRef}
                    style={{ flex: 1, minWidth: '170px', position: 'relative' }}
                  >
                    {/* Custom Dropdown Trigger */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        if (!isOpen) setSearchQuery('');
                      }}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.52rem 0.75rem 0.52rem 2.25rem',
                        borderRadius: '9px',
                        border: isOpen ? '1.5px solid #2563EB' : '1px solid #CBD5E1',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        color: selectedDistrict === 'All Districts' ? '#64748B' : '#0F172A',
                        backgroundColor: '#FFFFFF',
                        boxShadow: isOpen ? '0 0 0 3px rgba(37, 99, 235, 0.15)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        textAlign: 'left',
                        position: 'relative'
                      }}
                    >
                      <MapPin size={16} color="#2563EB" style={{ position: 'absolute', left: '0.75rem', pointerEvents: 'none' }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '0.5rem' }}>
                        {selectedDistrict === 'All Districts' ? 'Select District' : selectedDistrict}
                      </span>
                      <ChevronDown 
                        size={16} 
                        color="#64748B" 
                        style={{ 
                          flexShrink: 0, 
                          transition: 'transform 0.2s ease', 
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                        }} 
                      />
                    </button>

                    {/* Custom Dropdown Menu Popup with Sticky Search Bar */}
                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          left: 0,
                          width: '100%',
                          minWidth: '240px',
                          backgroundColor: '#FFFFFF',
                          borderRadius: '14px',
                          border: '1px solid #CBD5E1',
                          boxShadow: '0 16px 36px -6px rgba(15, 23, 42, 0.22)',
                          zIndex: 9999,
                          padding: '0.45rem',
                          animation: 'fadeIn 0.15s ease-out'
                        }}
                      >
                        {/* Search Input Bar at top */}
                        <div style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '0.35rem',
                          paddingBottom: '0.35rem',
                          borderBottom: '1px solid #F1F5F9'
                        }}>
                          <Search size={14} color="#64748B" style={{ position: 'absolute', left: '0.65rem', pointerEvents: 'none' }} />
                          <input 
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search district..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.45rem 1.8rem 0.45rem 2rem',
                              borderRadius: '8px',
                              border: '1px solid #E2E8F0',
                              fontSize: '0.8rem',
                              color: '#0F172A',
                              backgroundColor: '#F8FAFC',
                              outline: 'none',
                              boxSizing: 'border-box'
                            }}
                          />
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQuery('')}
                              style={{
                                position: 'absolute',
                                right: '0.5rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#94A3B8',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center'
                              }}
                            >
                              <X size={13} />
                            </button>
                          )}
                        </div>

                        {/* Scrollable District List */}
                        <div 
                          style={{
                            maxHeight: '210px',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2px'
                          }}
                          className="custom-dropdown-scrollbar"
                        >
                          {filteredDistricts.length > 0 ? (
                            filteredDistricts.map(d => {
                              const isSelected = selectedDistrict === d;
                              return (
                                <div
                                  key={d}
                                  onClick={() => {
                                    setSelectedDistrict(d);
                                    setSelectedTown("All Areas");
                                    setIsOpen(false);
                                    setSearchQuery('');
                                  }}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '0.48rem 0.75rem',
                                    borderRadius: '7px',
                                    fontSize: '0.83rem',
                                    fontWeight: isSelected ? 700 : 500,
                                    color: isSelected ? '#2563EB' : '#334155',
                                    backgroundColor: isSelected ? '#EFF6FF' : 'transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.12s ease'
                                  }}
                                  className="dropdown-item-hover"
                                >
                                  <span>{d}</span>
                                  {isSelected && <Check size={14} color="#2563EB" />}
                                </div>
                              );
                            })
                          ) : (
                            <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: '#94A3B8', textAlign: 'center' }}>
                              No district matching "{searchQuery}"
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={handleContinue}
                    style={{
                      backgroundColor: '#2563EB',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      padding: '0.52rem 1.15rem',
                      borderRadius: '9px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }}
                  >
                    <span>Continue</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Bottom 4 Feature Badges */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                width: 'max-content',
                maxWidth: 'none',
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 10
              }}>
                
                {/* Feature 1 - Verified Shops Only */}
                <div className="feature-badge-hover" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="badge-circle-icon" style={{ 
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', 
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 8px rgba(16, 185, 129, 0.16)'
                  }}>
                    <ShieldCheck size={18} color="#FFFFFF" strokeWidth={2.2} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#0F172A', lineHeight: 1.2, fontFamily: 'Inter, sans-serif' }}>
                    Verified <br />Shops Only
                  </span>
                </div>

                <div style={{ height: '28px', width: '1px', backgroundColor: '#CBD5E1', margin: '0 0.15rem' }} className="hide-mobile" />

                {/* Feature 2 - 38 Districts Covered */}
                <div className="feature-badge-hover" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="badge-circle-icon" style={{ 
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', 
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 8px rgba(14, 165, 233, 0.16)'
                  }}>
                    <MapPin size={18} color="#FFFFFF" strokeWidth={2.2} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#0F172A', lineHeight: 1.2, fontFamily: 'Inter, sans-serif' }}>
                    38 Districts <br />Covered
                  </span>
                </div>

                <div style={{ height: '28px', width: '1px', backgroundColor: '#CBD5E1', margin: '0 0.15rem' }} className="hide-mobile" />

                {/* Feature 3 - Physical Store Inspection */}
                <div className="feature-badge-hover" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="badge-circle-icon" style={{ 
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)', 
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 8px rgba(139, 92, 246, 0.16)'
                  }}>
                    <Store size={18} color="#FFFFFF" strokeWidth={2.2} />
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#0F172A', lineHeight: 1.2, fontFamily: 'Inter, sans-serif' }}>
                    Physical Store <br />Inspection
                  </span>
                </div>

                <div style={{ height: '28px', width: '1px', backgroundColor: '#CBD5E1', margin: '0 0.15rem' }} className="hide-mobile" />

                {/* Feature 4 - Stop Scammers */}
                <div className="feature-badge-hover" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="badge-circle-icon" style={{ 
                    background: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)', 
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 3px 8px rgba(225, 29, 72, 0.16)'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#0F172A', lineHeight: 1.2, fontFamily: 'Inter, sans-serif' }}>
                    Stop <br />Scammers
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column - Larger Illustration Image Flush at Bottom */}
            <div style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'flex-end', 
              justifyContent: 'flex-end',
              width: '100%',
              overflow: 'visible',
              marginBottom: '-2px'
            }} className="hero-img-col">
              <img 
                src="/hero_illustration.png" 
                alt="Tamil Nadu Verified Mobile Shops Map & Storefront"
                style={{ 
                  width: '114%', 
                  maxWidth: '1040px', 
                  height: 'auto', 
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 0,
                  marginTop: '-6.5rem',
                  transform: 'scale(1.15) translate(-10px, 4px)',
                  transformOrigin: 'right bottom',
                  marginBottom: '-2px',
                  objectFit: 'contain',
                  objectPosition: 'right bottom'
                }}
              />
            </div>

          </div>

        </div>

        <style>{`
          @media (min-width: 992px) {
            .hero-grid-layout {
              grid-template-columns: 1fr 1.15fr !important;
            }
          }
          @media (max-width: 991px) {
            .hero-left-content {
              padding-right: 1.25rem !important;
              padding-bottom: 1.25rem !important;
            }
            .hero-img-col {
              justify-content: center !important;
              padding-right: 1.25rem !important;
            }
            .hero-img-col img {
              margin-right: auto !important;
            }
          }
          .location-card-glass:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 18px 42px -10px rgba(37, 99, 235, 0.2) !important;
            border-color: #93C5FD !important;
          }
          .quick-chip-hover:hover {
            background-color: #DBEAFE !important;
            color: #1D4ED8 !important;
            border-color: #93C5FD !important;
            transform: translateY(-1px) !important;
          }
          .feature-badge-hover {
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
            padding: 0.3rem 0.5rem;
            border-radius: 12px;
            cursor: default;
          }
          .feature-badge-hover:hover {
            transform: translateY(-3px) !important;
            background-color: rgba(255, 255, 255, 0.75) !important;
            box-shadow: 0 8px 18px -4px rgba(37, 99, 235, 0.12) !important;
          }
          .feature-badge-hover:hover .badge-circle-icon {
            transform: scale(1.08) !important;
          }
          .badge-circle-icon {
            transition: transform 0.25s ease !important;
          }
          .dropdown-item-hover:hover {
            background-color: #F1F5F9 !important;
            color: #1D4ED8 !important;
          }
          .custom-dropdown-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-dropdown-scrollbar::-webkit-scrollbar-track {
            background: #F8FAFC;
            border-radius: 99px;
          }
          .custom-dropdown-scrollbar::-webkit-scrollbar-thumb {
            background: #CBD5E1;
            border-radius: 99px;
          }
          .custom-dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #94A3B8;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* Trust Strip Below Hero Section */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #F1F5F9',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        fontSize: '0.835rem',
        color: '#64748B',
        fontWeight: 600,
        flexWrap: 'wrap'
      }}>
        <div style={{ width: '70px', height: '1px', background: 'linear-gradient(90deg, transparent 0%, #CBD5E1 100%)' }} className="hide-mobile" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <ShieldCheck size={16} color="#2563EB" />
          <span style={{ color: '#334155', fontWeight: 600 }}>Verified Shops</span>
        </div>

        <span style={{ color: '#CBD5E1' }}>|</span>

        <div style={{ color: '#334155', fontWeight: 600 }}>
          Safer Purchases
        </div>

        <span style={{ color: '#CBD5E1' }}>|</span>

        <div style={{ color: '#334155', fontWeight: 600 }}>
          A Trusted Tamil Nadu
        </div>

        <div style={{ width: '70px', height: '1px', background: 'linear-gradient(90deg, #CBD5E1 0%, transparent 100%)' }} className="hide-mobile" />
      </div>
    </>
  );
}

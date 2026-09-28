import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseSection from './components/WhyChooseSection';
import HowItWorksSection from './components/HowItWorksSection';
import ShopOwnersSection from './components/ShopOwnersSection';
import VerificationTrustSection from './components/VerificationTrustSection';
import LocationFilterGrid from './components/LocationFilterGrid';
import ShopCard from './components/ShopCard';
import TestimonialsSection from './components/TestimonialsSection';
import ReportScammerInlineSection from './components/ReportScammerInlineSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import ShopDetailModal from './components/ShopDetailModal';
import ReportScammerModal from './components/ReportScammerModal';
import LocationModal from './components/LocationModal';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';
import ShopLoginPage from './components/ShopLoginPage';

import { TN_DISTRICTS, MOCK_VERIFIED_SHOPS, MOCK_APPROVED_SCAMMERS } from './data/mockData';
import { Store, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'shop-login'
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [selectedTown, setSelectedTown] = useState("All Areas");
  const [searchQuery, setSearchQuery] = useState("");
  
  const [selectedShopModal, setSelectedShopModal] = useState(null);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [shopLoginInitialTab, setShopLoginInitialTab] = useState('login');

  const [scammersList, setScammersList] = useState(MOCK_APPROVED_SCAMMERS);
  const [shopsList] = useState(MOCK_VERIFIED_SHOPS);

  const openShopLoginPageWithTab = (tab = 'login') => {
    setShopLoginInitialTab(tab);
    setCurrentView('shop-login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredShops = shopsList.filter(shop => {
    const matchesDistrict = selectedDistrict === "All Districts" || shop.district === selectedDistrict;
    const matchesTown = selectedTown === "All Areas" || shop.town === selectedTown;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = query === "" || 
      shop.name.toLowerCase().includes(query) ||
      shop.address.toLowerCase().includes(query);

    return matchesDistrict && matchesTown && matchesQuery;
  });

  const handleAddNewScammerReport = (newReport) => {
    const createdReport = {
      id: `scam-${Date.now()}`,
      scammerName: newReport.scammerName,
      mobileNumber: newReport.mobileNumber,
      district: newReport.district,
      town: newReport.town,
      address: `${newReport.town}, ${newReport.district}`,
      scamType: newReport.scamType || "Fake Mobile Sales",
      description: newReport.description,
      reportedDate: new Date().toISOString().split('T')[0],
      verifiedByAdmin: `${newReport.district} District Admin`,
      status: "Approved"
    };
    setScammersList([createdReport, ...scammersList]);
  };

  if (currentView === 'shop-login') {
    return (
      <ShopLoginPage 
        onNavigateHome={handleNavigateHome} 
        initialTab={shopLoginInitialTab} 
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)', paddingTop: '70px' }}>
      
      {/* 1. Navbar */}
      <Navbar 
        selectedDistrict={selectedDistrict}
        onOpenReportScammer={() => setReportModalOpen(true)}
        onOpenLocationModal={() => setLocationModalOpen(true)}
        onOpenAboutModal={() => setAboutModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
        onOpenShopLoginModal={openShopLoginPageWithTab}
      />

      {/* 2. Hero Section */}
      <Hero 
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        selectedTown={selectedTown}
        setSelectedTown={setSelectedTown}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        districts={TN_DISTRICTS}
      />

      {/* 3. Why Choose MOBILO TN? Section */}
      <WhyChooseSection />

      {/* 4. How It Works? Section */}
      <HowItWorksSection />

      {/* 5. For Mobile Shop Owners Section */}
      <ShopOwnersSection onOpenShopLoginModal={openShopLoginPageWithTab} />

      {/* 6. Shop Verification You Can Trust */}
      <VerificationTrustSection />

      {/* 8. Trusted by People Across Tamil Nadu */}
      <TestimonialsSection />

      {/* 9. Report a Scammer (Inline Form) */}
      <ReportScammerInlineSection 
        districts={TN_DISTRICTS}
        onSubmitReport={handleAddNewScammerReport}
      />

      {/* 10. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 11. Contact Form Section */}
      <ContactSection />

      {/* 12. Footer */}
      <Footer 
        onOpenReportScammer={() => setReportModalOpen(true)}
        onOpenAboutModal={() => setAboutModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* MODALS */}
      <ShopDetailModal 
        shop={selectedShopModal}
        onClose={() => setSelectedShopModal(null)}
      />

      <ReportScammerModal 
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        districts={TN_DISTRICTS}
        onSubmitReport={handleAddNewScammerReport}
      />

      <LocationModal 
        isOpen={locationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        districts={TN_DISTRICTS}
      />

      <AboutModal 
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />

      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

    </div>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroSlider from './components/HeroSlider';
import RealField from './components/RealField';
import ServiceIntro from './components/ServiceIntro';
import BusinessInfo from './components/BusinessInfo';
import CompanyVision from './components/CompanyVision';
import CompanyPhilosophy from './components/CompanyPhilosophy';
import Recruitment from './components/Recruitment';
import CompanyInfo from './components/CompanyInfo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProtectPride from './components/ProtectPride';
import SiteMap from './pages/sitemap'; // 小文字で揃える

const sliderImages = [
  '/images/repeat-10.png'
];

// 👇 ページスクロール処理を別コンポーネントで実装
const ScrollToSection: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const { scrollToId } = location.state || {};
    if (scrollToId) {
      const target = document.getElementById(scrollToId);
      if (target) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollToSection /> {/* スクロール処理をルート内に挿入 */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <RealField />
                <HeroSlider images={sliderImages} />
                <ServiceIntro />
                <BusinessInfo />
                <CompanyVision />
                <CompanyPhilosophy />
                <Recruitment />
                <CompanyInfo />
                <ContactForm />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sitemap" element={<SiteMap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

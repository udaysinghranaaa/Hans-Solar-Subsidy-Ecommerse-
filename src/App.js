// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

// Home sections
import HeroVideo from './components/HeroVideo/HeroVideo';           // NEW
import HeroSection from './components/HeroSection/HeroSection';
import SubsidyInfo from './components/SubsidyInfo/SubsidyInfo';
import WhyChoose from './components/WhyChoose/WhyChoose';
import LeadingCompany from './components/LeadingCompany/LeadingCompany';
import WhySolarUp from './components/WhySolarUp/WhySolarUp';
import Testimonials from './components/Testimonials/Testimonials';
import Awards from './components/Awards/Awards';
import FAQ from './components/FAQ/FAQ';
import PresenceMap from './components/PresenceMap/PresenceMap';
import ContactCTA from './components/ContactCTA/ContactCTA';
import Footer from './components/Footer/Footer';

// Other pages
import SolarHomePage from './pages/SolarHomePage';
import SetPage from './pages/SetPage';
import SetProductsPage from './pages/SetProductsPage';
import PortfolioPage from './pages/PortfolioPage';

import './App.css';

const HomePage = () => (
  <div className="page-transition">
    <HeroVideo />          {/* Navbar ke neeche full background video */}
    <HeroSection />        {/* Text + subsidy hero */}
    <SubsidyInfo />
    <WhyChoose />
    <LeadingCompany />
    <WhySolarUp />
    <Testimonials />
    <Awards />
    <FAQ />
    <PresenceMap />
    <ContactCTA />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Landing page */}
          <Route path="/" element={<HomePage />} />

          {/* Portfolio page */}
          <Route
            path="/portfolio"
            element={
              <div className="page-transition">
                <PortfolioPage />
              </div>
            }
          />

          {/* Solar home main page */}
          <Route
            path="/solar-home"
            element={
              <div className="page-transition">
                <SolarHomePage />
              </div>
            }
          />

          {/* kW choose karne ke baad – type select */}
          <Route
            path="/solar-home/:kw"
            element={
              <div className="page-transition">
                <SetPage />
              </div>
            }
          />

          {/* final packages list page */}
          <Route
            path="/solar-home/:kw/:type"
            element={
              <div className="page-transition">
                <SetProductsPage />
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

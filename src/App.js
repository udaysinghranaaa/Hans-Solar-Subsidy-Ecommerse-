// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
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
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SubsidyInfo />
      <WhyChoose />
      <LeadingCompany />
      <WhySolarUp />
      <Testimonials />
      <Awards />
      <FAQ />
      <PresenceMap />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;

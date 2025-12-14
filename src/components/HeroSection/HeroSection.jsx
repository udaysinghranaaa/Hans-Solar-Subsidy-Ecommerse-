// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/hero-up.jpg'; // apni image ka naam/path sahi karein

const subsidyRows = [
  { capacity: '1 kW', central: '₹30,000', state: '₹15,000', total: '₹45,000' },
  { capacity: '2 kW', central: '₹60,000', state: '₹30,000', total: '₹90,000' },
  { capacity: '3 kW', central: '₹78,000', state: '₹30,000', total: '₹1,08,000' },
  { capacity: 'Above 3 kW', central: '₹78,000', state: '₹30,000', total: '₹1,08,000' },
];

const HeroSection = () => {
  return (
    <section className="hero" id="main-content">
      <div className="hero-inner">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <p className="hero-eyebrow">Avail Subsidy of</p>
          <h1 className="hero-title">
            ₹1.08 Lakhs <span>for solar in Uttar Pradesh</span>
          </h1>

          <p className="hero-subtext">
            From Lucknow to Kanpur and Prayagraj to Varanasi, families across Uttar Pradesh
            trust Hans Solar for rooftop solar solutions under the PM Surya Ghar Yojana.
          </p>

          {/* SUBSIDY TABLE */}
          <div className="hero-table">
            <div className="hero-table-row hero-table-head">
              <span>Capacity</span>
              <span>Central Subsidy</span>
              <span>State Subsidy</span>
              <span>Total Subsidy</span>
            </div>

            {subsidyRows.map((row) => (
              <div className="hero-table-row" key={row.capacity}>
                <span>{row.capacity}</span>
                <span>{row.central}</span>
                <span>{row.state}</span>
                <span>{row.total}</span>
              </div>
            ))}
          </div>

          {/* EXTRA INFO STRIP TABLE */}
          <div className="hero-info-strip">
            <div className="info-item">
              <h4>7+ Years Experience</h4>
              <p>Expert rooftop solar installations across India.</p>
            </div>
            <div className="info-item">
              <h4>80+ Cities</h4>
              <p>Local teams for faster service & support.</p>
            </div>
            <div className="info-item">
              <h4>300+ Engineers</h4>
              <p>Dedicated solar professionals managing your project.</p>
            </div>
          </div>

          <button className="hero-cta">Book FREE Site Survey</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img src={heroImage} alt="Family with rooftop solar in Uttar Pradesh" />
              <div className="hero-badge">20,000+ families trust Hans Solar</div>
            </div>

            <div className="hero-trust-row">
              <div className="hero-trust-card">
                <p className="trust-heading">Listed on</p>
                <p className="trust-main">BSE SME</p>
              </div>
              <div className="hero-trust-card">
                <p className="trust-heading">Trusted by</p>
                <p className="trust-main">20,000+ Families</p>
              </div>
              <div className="hero-trust-card">
                <p className="trust-heading">Google Rating</p>
                <p className="trust-main">4.7 ★</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

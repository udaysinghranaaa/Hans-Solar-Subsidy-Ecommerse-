// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/hero-up.jpg';

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
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="hero-heading">
            Avail Subsidy of <span className="hero-highlight">₹1.08 Lakhs</span> for solar in
            <br />
            <span className="hero-highlight hero-highlight-alt">Uttar Pradesh</span>
          </h1>

          <p className="hero-subtext">
            From Lucknow to Kanpur and Prayagraj to Varanasi, families across Uttar Pradesh
            have trusted Hans Solar for rooftop solar solutions for their homes under the PM
            Surya Ghar Yojana.
          </p>

          {/* TABLE */}
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
                <span className="hero-table-total">{row.total}</span>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <button
            type="button"
            className="hero-cta-main"
            onClick={() => (window.location.href = '/#contact')}
          >
            Book FREE Site Survey
          </button>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src={heroImage}
              alt="Family with rooftop solar system in Uttar Pradesh"
              className="hero-image"
            />
          </div>

          <div className="hero-trust-row">
            <div className="hero-trust-card">
              <p className="trust-heading">Listed on</p>
              <p className="trust-main">BSE SME</p>
              <p className="trust-sub">Stock Code · 543354</p>
            </div>
            <div className="hero-trust-card">
              <p className="trust-heading">Trusted by</p>
              <p className="trust-main">20,000+ Families</p>
              <p className="trust-sub">Across North India</p>
            </div>
            <div className="hero-trust-card">
              <p className="trust-heading">Google Rating</p>
              <p className="trust-main">4.7 ★</p>
              <p className="trust-sub">Recent customer reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

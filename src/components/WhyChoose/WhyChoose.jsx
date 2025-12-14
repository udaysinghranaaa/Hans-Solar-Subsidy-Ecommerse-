// src/components/WhyChoose/WhyChoose.jsx
import React from 'react';
import './WhyChoose.css';
import team1 from '../../assets/team-1.jpg';
import team2 from '../../assets/team-2.jpg';
import partnersImg from '../../assets/partners.jpg';

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-inner">

        {/* TOP TITLE */}
        <h2 className="why-title">
          Why choose <span>Hans Solar in Uttar Pradesh?</span>
        </h2>

        <p className="why-intro">
          Hans Solar combines high-performance rooftop systems, trusted engineering teams,
          and transparent subsidy support to give Uttar Pradesh families a smooth transition
          to clean energy.
        </p>

        <p className="why-subline">
          These are the pillars that make Hans Solar a preferred choice for subsidy-based
          rooftop solar projects:
        </p>

        {/* TRUST CARD */}
        <div className="why-card">
          <div className="why-icon-wrap">
            <span className="why-icon-text">👷</span>
          </div>
          <div className="why-text-wrap">
            <h3>7+ Years of Solar Expertise</h3>
            <p>
              A seasoned team that understands state policies, DISCOM processes, and
              practical installation challenges across Uttar Pradesh.
            </p>
          </div>
        </div>

        {/* GRID 1: PRESENCE / TEAM / PEACE + IMAGES */}
        <div className="why-grid">
          <div className="why-grid-left">
            <Feature
              icon="📍"
              title="Presence in 80+ Cities Across India"
              text="Local project teams and partner network ensure faster site visits, on-ground support, and better coordination with local authorities."
            />
            <Feature
              icon="👥"
              title="300+ Strong Technical Team"
              text="Dedicated engineers, technicians, and support staff manage everything from design to commissioning."
            />
            <Feature
              icon="🧘"
              title="End-to-End Peace of Mind"
              text="From subsidy paperwork and net-metering to long-term service, you get a single point of contact for the entire journey."
            />
          </div>

          <div className="why-grid-right">
            <div className="why-photo-card">
              <img src={team1} alt="Solar installation team on rooftop" />
            </div>
            <div className="why-photo-card">
              <img src={team2} alt="Hans Solar core team group photo" />
            </div>
          </div>
        </div>

        {/* GRID 2: CHANNEL / PRODUCTS / WARRANTY + IMAGE */}
        <div className="why-grid why-grid--reverse">
          <div className="why-grid-left">
            <Feature
              icon="🤝"
              title="400+ Channel Partners Pan India"
              text="Verified partners across regions help deliver consistent quality, faster installation, and quick service turnarounds."
            />
            <Feature
              icon="✅"
              title="High-Quality Solar Products"
              text="Bankable Tier-1 panels, reliable inverters, and BIS-compliant structure hardware designed for long-term performance."
            />
            <Feature
              icon="🔒"
              title="Strong Warranty & AMC"
              text="5-year system warranty, 25-year panel performance, and optional AMC plans so your savings stay protected."
            />
          </div>

          <div className="why-grid-right">
            <div className="why-photo-card why-photo-card--wide">
              <img src={partnersImg} alt="Engineers working on solar installation" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Small reusable feature block
const Feature = ({ icon, title, text }) => (
  <div className="why-point">
    <div className="why-mini-icon">{icon}</div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
);

export default WhyChoose;

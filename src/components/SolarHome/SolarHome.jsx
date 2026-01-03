import React from 'react';
import './SolarHome.css';

const SolarHome = () => {
  return (
    <section className="solar-home" id="solar-home">
      <div className="solar-home-inner">
        <div className="solar-home-left">
          <p className="solar-home-eyebrow">Solar for Home</p>
          <h2 className="solar-home-title">
            Make your <span>Uttar Pradesh home</span> powered by the sun.
          </h2>
          <p className="solar-home-text">
            Hans Solar designs rooftop systems that match your bill, roof space and
            budget. With subsidy support, net‑metering and long‑term warranties, going
            solar at home has never been easier.
          </p>

          <ul className="solar-home-list">
            <li>Custom system sizing for 1–5 kW residential rooftops.</li>
            <li>Complete subsidy documentation and DISCOM approvals.</li>
            <li>Premium panels and inverters with 25+ year performance.</li>
            <li>Real‑time generation monitoring and dedicated service team.</li>
          </ul>
        </div>

        <div className="solar-home-right">
          <div className="solar-home-card">
            <h3>Typical Home Plans</h3>
            <div className="solar-plan">
              <p className="solar-plan-title">2–3 BHK Home</p>
              <p className="solar-plan-detail">2–3 kW System • Ideal for ₹2,000–₹3,500 bills</p>
            </div>
            <div className="solar-plan">
              <p className="solar-plan-title">3–4 BHK Home</p>
              <p className="solar-plan-detail">3–5 kW System • Ideal for ₹3,500–₹6,000 bills</p>
            </div>
            <p className="solar-plan-note">
              Exact sizing depends on your actual units consumption and roof area.
            </p>
            <a href="#contact" className="solar-home-cta">
              Get Home Solar Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarHome;

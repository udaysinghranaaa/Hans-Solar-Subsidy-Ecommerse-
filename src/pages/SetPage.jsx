// src/pages/SetPage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './SetPage.css';

const SetPage = () => {
  const { kw } = useParams();
  const prettyKw = kw?.replace('kw', ' kW') || '';

  return (
    <main className="set-page">
      {/* Hero */}
      <section className="set-hero">
        <div className="set-inner">
          <p className="set-kicker">Step 2 · Choose system type</p>
          <h1>{prettyKw} Solar Subsidy Set</h1>
          <p className="set-hero-text">
            Select between high‑value on‑grid or backup‑ready hybrid configuration for your
            {` ${prettyKw} `}rooftop system.
          </p>
        </div>
      </section>

      {/* Two professional option cards */}
      <section className="set-type-section">
        <div className="set-inner set-type-grid">
          {/* On-Grid card */}
          <Link
            to={`/solar-home/${kw}/on-grid`}
            className="type-card type-card--on"
          >
            <div className="type-card-header">
              <span className="type-chip">On‑Grid</span>
              <span className="type-label">Best ROI</span>
            </div>

            <h2 className="type-title">{prettyKw} On‑Grid Solar Subsidy Set</h2>
            <p className="type-subtitle">
              Ideal for city customers with reliable electricity supply looking for maximum
              bill savings via net‑metering.
            </p>

            <ul className="type-list">
              <li>Exports extra power to DISCOM through net‑metering.</li>
              <li>Lowest cost per kW with MNRE subsidy eligibility.</li>
              <li>Smart on‑grid inverter with mobile monitoring app.</li>
              <li>Best suited where power cuts are rare or short.</li>
            </ul>

            <div className="type-footer">
              <span className="type-footer-pill">Higher savings · Lower upfront cost</span>
              <span className="type-footer-cta">View on‑grid packages →</span>
            </div>
          </Link>

          {/* Hybrid card */}
          <Link
            to={`/solar-home/${kw}/hybrid`}
            className="type-card type-card--hybrid"
          >
            <div className="type-card-header">
              <span className="type-chip type-chip--accent">Hybrid</span>
              <span className="type-label">Backup + Savings</span>
            </div>

            <h2 className="type-title">{prettyKw} Hybrid Solar Subsidy Set</h2>
            <p className="type-subtitle">
              Designed for towns and semi‑urban areas with frequent power cuts where backup
              and bill reduction both matter.
            </p>

            <ul className="type-list">
              <li>Runs lights, fans, router and essentials during outages.</li>
              <li>Hybrid inverter managing grid, solar and battery together.</li>
              <li>Expandable battery bank for future load increase.</li>
              <li>Subsidy and documentation support where applicable.</li>
            </ul>

            <div className="type-footer">
              <span className="type-footer-pill">Comfort during power cuts</span>
              <span className="type-footer-cta">View hybrid packages →</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SetPage;

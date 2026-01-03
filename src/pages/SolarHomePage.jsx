// src/pages/SolarHomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SolarHomePage.css';

const SolarHomePage = () => {
  const packages = [
    { kw: '2kw', title: '2 kW Solar Subsidy Set', subtitle: 'Small homes · 1–2 BHK', units: 'Approx. 6–8 units/day' },
    { kw: '3kw', title: '3 kW Solar Subsidy Set', subtitle: '1–2 BHK with AC', units: 'Approx. 10–12 units/day' },
    { kw: '4kw', title: '4 kW Solar Subsidy Set', subtitle: 'Large 2 BHK homes', units: 'Approx. 14–16 units/day' },
    { kw: '5kw', title: '5 kW Solar Subsidy Set', subtitle: 'Duplex / small villa', units: 'Approx. 18–20 units/day' },
    { kw: '6kw', title: '6 kW Solar Subsidy Set', subtitle: 'High‑usage homes', units: 'Approx. 22–24 units/day' },
    { kw: '7kw', title: '7 kW Solar Subsidy Set', subtitle: 'Multiple AC + loads', units: 'Approx. 26–28 units/day' },
    { kw: '8kw', title: '8 kW Solar Subsidy Set', subtitle: 'Large villas / kothis', units: 'Approx. 30–32 units/day' },
    { kw: '9kw', title: '9 kW Solar Subsidy Set', subtitle: 'Heavy residential load', units: 'Approx. 34–36 units/day' },
    { kw: '10kw', title: '10 kW Solar Subsidy Set', subtitle: 'Premium residences', units: 'Approx. 38–40 units/day' },
  ];

  return (
    <main className="solar-home-page">
      {/* Hero */}
      <section className="solar-home-hero">
        <div className="solar-inner">
          <p className="solar-kicker">Residential Rooftop · MNRE Subsidy</p>
          <h1>Solar For Home – Fixed kW Sets</h1>
          <p className="solar-hero-text">
            Select a kW Solar Subsidy Set and explore ready on‑grid and hybrid packages with
            site survey, installation and documentation handled end‑to‑end.
          </p>
        </div>
      </section>

      {/* Compact cards grid */}
      <section className="solar-packages-grid">
        <div className="solar-inner solar-grid">
          {packages.map(({ kw, title, subtitle, units }) => (
            <Link
              to={`/solar-home/${kw}`}
              key={kw}
              className="solar-card solar-card--compact"
            >
              <div className="solar-card-image">
                <div className="solar-card-pill">
                  {kw.toUpperCase().replace('KW', ' kW')}
                </div>
                <div className="solar-card-panel" />
              </div>

              <div className="solar-card-body">
                <p className="solar-card-kicker">Subsidy eligible rooftop set</p>
                <h2 className="solar-card-title">{title}</h2>
                <p className="solar-card-subtitle">{subtitle}</p>

                <div className="solar-card-meta">
                  <span className="solar-meta-chip">{units}</span>
                  <span className="solar-meta-chip">On‑Grid & Hybrid options</span>
                </div>

                <div className="solar-card-footer">
                  <span className="solar-card-cta">View details & pricing →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SolarHomePage;

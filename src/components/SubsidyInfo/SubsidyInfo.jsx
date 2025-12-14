// src/components/SubsidyInfo/SubsidyInfo.jsx
import React from 'react';
import './SubsidyInfo.css';

const dataRows = [
  { units: '0–150', capacity: '1–2 kW', subsidy: '₹45,000–90,000' },
  { units: '150–300', capacity: '2–3 kW', subsidy: '₹90,000–1,08,000' },
  { units: '>300', capacity: 'Above 3 kW', subsidy: '₹1,08,000' },
];

const SubsidyInfo = () => {
  return (
    <section className="subsidy-info">
      <div className="subsidy-inner">
        <h2 className="subsidy-title">
          Solar <span>Subsidy in Uttar Pradesh</span> for Residential Users
        </h2>
        <p className="subsidy-subtitle-hi">
          उत्तर प्रदेश वालों, अब सोलर लगाओ – सब्सिडी पाओ और बिजली बिल पर हजारों बचाओ!
        </p>
        <p className="subsidy-subtitle-en">
          Here is the suitable rooftop solar plant capacity for households:
        </p>

        <div className="subsidy-table">
          <div className="subsidy-row subsidy-head">
            <span>Average Monthly Electricity Consumption (units)</span>
            <span>Suitable Rooftop Solar Plant Capacity</span>
            <span>Total Subsidy</span>
          </div>

          {dataRows.map((row) => (
            <div className="subsidy-row" key={row.units}>
              <span>{row.units}</span>
              <span>{row.capacity}</span>
              <span>{row.subsidy}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidyInfo;

// src/components/PresenceMap/PresenceMap.jsx
import React from 'react';
import './PresenceMap.css';

const cities = [
  'Agra',
  'Bareilly',
  'Ghazipur',
  'Ghazibad',
  'Gorakhpur',
  'Kanpur',
  'Lucknow',
  'Mau',
  'Meerut',
  'Noida',
  'Prayagraj',
  'Varanasi',
];

const PresenceMap = () => {
  return (
    <section className="presence">
      <div className="presence-inner">
        <h2 className="presence-title">
          Our Presence in <span>Uttar Pradesh</span>
        </h2>

        <p className="presence-subtitle">
          Hans Solar serves homeowners across key districts and cities in Uttar Pradesh
          with on-ground teams and channel partners.
        </p>

        {/* Cities list */}
        <div className="presence-tags">
          {cities.map((city) => (
            <span className="presence-tag" key={city}>
              {city}
            </span>
          ))}
        </div>

        {/* Google Map iframe (replace src with your My Maps / map link) */}
        <div className="presence-map-wrap">
          <div className="presence-map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424076.7799062973!2d80.138!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999594af9a9d6d3%3A0xaea3c5f0e2c9d6a9!2sUttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              title="Hans Solar presence in Uttar Pradesh"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresenceMap;

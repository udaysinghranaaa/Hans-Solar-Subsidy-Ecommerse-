import React, { useState } from 'react';
import '../SetProductsPage.css';

const PRODUCT_DATA_2KW = {
  'on-grid': {
    id: '2kw-on',
    name: '2 kW On‑Grid Residential Solar Subsidy Set',
    subtitle: 'Tier‑1 mono‑PERC rooftop solar kit with net‑metering support.',
    imageMain: '/2kw/on-grid-1.jpg',
    imageThumbs: [
      '/2kw/on-grid-1.jpg',
      '/2kw/on-grid-2.jpg',
      '/2kw/on-grid-3.jpg',
      '/2kw/on-grid-4.jpg',
      '/2kw/on-grid-5.jpg',
      '/2kw/on-grid-6.jpg',
    ],
    rating: 4.7,
    reviews: 18,
    price: '₹1,11,299.00',
    mrp: '₹1,48,099.00',
    save: '₹36,800.00',
    bullets: [
      'Tier‑1 mono‑PERC modules with hot‑dip galvanized mounting structure.',
      'High‑efficiency on‑grid inverter with Wi‑Fi mobile monitoring.',
      'Complete MNRE subsidy, net‑metering and DISCOM documentation support.',
      'Design, installation, testing and commissioning included in pricing.',
    ],
    note: 'Inclusive of standard components and GST. Final value may vary after site survey.',
    badge: 'On‑Grid · Savings Optimised',
    specs: {
      sku: 'Bi‑66‑600',
      availability: 'Product will dispatch within 72 hours',
      weight: '35.50 kg',
      width: '130.20 cm',
      height: '219.00 cm',
    },
  },
  hybrid: {
    id: '2kw-hybrid',
    name: '2 kW Hybrid Residential Solar Subsidy Set (With Backup)',
    subtitle: 'Smart hybrid rooftop solar kit with dedicated backup for essentials.',
    imageMain: '/2kw/hybrid-1.jpg',
    imageThumbs: [
      '/2kw/hybrid-1.jpg',
      '/2kw/hybrid-2.jpg',
      '/2kw/hybrid-3.jpg',
      '/2kw/hybrid-4.jpg',
      '/2kw/hybrid-5.jpg',
      '/2kw/hybrid-6.jpg',
    ],
    rating: 4.8,
    reviews: 11,
    price: '₹1,61,299.00',
    mrp: '₹1,98,099.00',
    save: '₹36,800.00',
    bullets: [
      'Hybrid inverter managing solar, grid and battery seamlessly.',
      'Backup for lights, fans, router, TV and other essential loads.',
      'Expandable lithium / lead‑acid battery bank based on requirement.',
      'End‑to‑end installation with safety protections and documentation.',
    ],
    note: 'Backup duration varies with connected load. Final proposal shared after site assessment.',
    badge: 'Hybrid · Backup + Savings',
    specs: {
      sku: 'Hy‑22‑200',
      availability: 'Product will dispatch within 96 hours',
      weight: '42.80 kg',
      width: '132.00 cm',
      height: '220.50 cm',
    },
  },
};

const TwoKwProductsPage = ({ type }) => {
  const product = PRODUCT_DATA_2KW[type];
  const [activeTab, setActiveTab] = useState('specs');
  const [activeImage, setActiveImage] = useState(product?.imageMain);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <main className="detail-page">
        <div className="detail-inner">
          <p className="detail-empty">This 2 kW configuration is not available.</p>
        </div>
      </main>
    );
  }

  const prettyType = type === 'on-grid' ? 'On‑Grid' : 'Hybrid';

  return (
    <main className="detail-page">
      {/* Breadcrumb */}
      <section className="detail-breadcrumb">
        <div className="detail-inner">
          <p className="detail-breadcrumb-text">
            Solar For Home / 2 kW / {prettyType} Solar Subsidy Set
          </p>
        </div>
      </section>

      {/* Main product detail */}
      <section className="detail-main-section">
        <div className="detail-inner detail-layout">
          {/* GALLERY */}
          <div className="detail-gallery detail-gallery--stack">
            <span className="detail-onsale">On Sale</span>

            <button
              type="button"
              className={`wishlist-btn ${wishlisted ? 'wishlist-btn--active' : ''}`}
              onClick={() => setWishlisted((w) => !w)}
              aria-label="Add to wishlist"
            >
              <span className="wishlist-heart" />
            </button>

            <div className="detail-main-image-wrapper detail-main-image-wrapper--stack">
              <img
                key={activeImage}
                src={activeImage}
                alt={product.name}
                className="detail-main-image detail-main-image--fade"
              />
            </div>

            {/* Thumbnail strip */}
            <div className="detail-thumbs-row">
              {product.imageThumbs.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className={`thumb-row-card ${
                    activeImage === src ? 'thumb-row-card--active' : ''
                  }`}
                  onClick={() => setActiveImage(src)}
                >
                  <div className="thumb-row-card-image-wrap">
                    <img
                      src={src}
                      alt={`2 kW set ${index + 1}`}
                      className="thumb-row-card-image"
                    />
                  </div>
                  <span className="thumb-row-card-label">2 kW set</span>
                </button>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="detail-info detail-info--animated">
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-subtitle">{product.subtitle}</p>

            <div className="detail-rating-row">
              <div className="detail-stars">{'★★★★★'}</div>
              <span className="detail-rating-value">{product.rating}</span>
              <button type="button" className="detail-review-link">
                {product.reviews} verified reviews
              </button>
            </div>

            <div className="detail-price-block">
              <div className="detail-price-main">
                <span className="detail-price">{product.price}</span>
                <span className="detail-mrp">MRP: {product.mrp}</span>
              </div>
              <div className="detail-save-row">
                <span className="detail-save-label">You save</span>
                <span className="detail-save-amount">{product.save}</span>
              </div>
              <p className="detail-tax-note">{product.note}</p>
            </div>

            <div className="detail-actions detail-actions--single">
              <button
                type="button"
                className="detail-primary-btn detail-primary-btn--pulse"
                onClick={() => (window.location.href = '/#contact')}
              >
                Enquire now
              </button>
            </div>

            <div className="detail-features">
              <h2 className="detail-features-title">{product.badge}</h2>
              <ul className="detail-features-list">
                {product.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="detail-benefits-row">
              <div className="benefit-card benefit-card--float">
                <div className="benefit-icon">
                  <img
                    src="https://via.placeholder.com/56x56.png?text=₹"
                    alt="Lowest Price icon"
                  />
                </div>
                <p className="benefit-text">Lowest price</p>
              </div>
              <div className="benefit-card benefit-card--float">
                <div className="benefit-icon">
                  <img
                    src="https://via.placeholder.com/56x56.png?text=100%"
                    alt="Superior Quality icon"
                  />
                </div>
                <p className="benefit-text">Superior quality</p>
              </div>
              <div className="benefit-card benefit-card--float">
                <div className="benefit-icon">
                  <img
                    src="https://via.placeholder.com/56x56.png?text=EMI"
                    alt="EMI icon"
                  />
                </div>
                <p className="benefit-text">Easy EMI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs section – same as pehle */}
      {/* ...tabs code yahan... */}
    </main>
  );
};

export default TwoKwProductsPage;

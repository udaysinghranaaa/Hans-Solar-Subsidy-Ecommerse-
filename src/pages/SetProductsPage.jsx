import React from 'react';
import { useParams } from 'react-router-dom';
import './SetProductsPage.css';

// 2 kW ka separate page
import TwoKwProductsPage from './products/TwoKwProductsPage';
// future: 3kw, 4kw pages yahan import karna

const SetProductsPage = () => {
  const { kw, type } = useParams();

  // 2 kW ke liye dedicated component
  if (kw === '2kw') {
    return <TwoKwProductsPage type={type} />;
  }

  // yahan baad me 3kw, 4kw, 5kw mapping add kar sakte ho
  // if (kw === '3kw' && type === 'on-grid') return <ThreeKwOnGridPage />;
  // if (kw === '3kw' && type === 'hybrid') return <ThreeKwHybridPage />;

  const prettyKw = kw?.replace('kw', ' kW') || '';
  const prettyType = type === 'on-grid' ? 'On‑Grid' : 'Hybrid';

  return (
    <main className="detail-page">
      <div className="detail-inner">
        <p className="detail-empty">
          {prettyKw} {prettyType} packages are being configured. Please connect with our
          team for a customised proposal.
        </p>
      </div>
    </main>
  );
};

export default SetProductsPage;

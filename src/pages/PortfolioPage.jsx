import React from 'react';
import './PortfolioPage.css';

const stats = [
  { label: 'Residential Solar Sets Installed', value: '800+' },
  { label: 'Cities Covered Across India', value: '25+' },
  { label: 'Average Customer Satisfaction Score', value: '4.9/5' },
  { label: 'Years of Combined Solar Experience', value: '10+' },
];

const testimonials = [
  {
    name: 'Sharma Family · Ghaziabad',
    kw: '5 kW On‑Grid',
    quote:
      'Monthly bill 6,000+ se 1,200–1,500 tak aa gaya. Entire documentation team handled – installation clean and on time.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+1',
  },
  {
    name: 'Patel Residence · Ahmedabad',
    kw: '8 kW Hybrid',
    quote:
      'Power cuts ke time bhi poora ghar chalta hai. Hybrid system design clearly samjhaaya, EMI option se decision easy ho gaya.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+2',
  },
  {
    name: 'Singh Villa · Lucknow',
    kw: '10 kW On‑Grid',
    quote:
      'Large rooftop ko properly utilise karke neat structure banaya. Net‑metering approval fast tha, 3rd month se credit aa raha hai.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+3',
  },
  {
    name: 'Verma Home · Delhi',
    kw: '3 kW Subsidy Set',
    quote:
      'Parents ke liye subsidy process clear tha, WhatsApp pe har step ka update mila. Site team polite and professional thi.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+4',
  },
  {
    name: 'Khan Family · Noida',
    kw: '6 kW Hybrid',
    quote:
      'Frequent power cuts ke bawajood ab basic loads kabhi band nahi hote. Battery sizing unhone future AC load ko dekh ke plan ki.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+5',
  },
  {
    name: 'Mehta Apartment · Mumbai',
    kw: '4 kW On‑Grid',
    quote:
      'Chhota terrace tha but panel layout smartly design kiya. App pe live generation dekh ke kaafi confidence feel hota hai.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+6',
  },
  {
    name: 'Gupta Home · Jaipur',
    kw: '7 kW On‑Grid',
    quote:
      'Shadow analysis properly kiya, isliye output expected se better aaya. Team ne DISCOM inspection bhi smoothly handle kiya.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+7',
  },
  {
    name: 'Rao Residence · Hyderabad',
    kw: '5 kW Hybrid',
    quote:
      'System handover ke time detailed training di. Mobile monitoring se daily saving track kar paate hain.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+8',
  },
  {
    name: 'Yadav House · Bulandshahr',
    kw: '3 kW On‑Grid',
    quote:
      'Local site conditions samajh ke design diya. Roof waterproofing and wiring finish se hum bilkul satisfied hain.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+9',
  },
  {
    name: 'Choudhary Farmhouse · Rewari',
    kw: '8 kW Hybrid',
    quote:
      'Evening gatherings ke time bhi backup strong rehta hai. Remote location ke bawajood service response acha raha.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+10',
  },
  {
    name: 'Jain Family · Bhopal',
    kw: '6 kW On‑Grid',
    quote:
      'Proposal stage pe payback, IRR sab clearly explain kiya. System commissioning ke baad bhi support active rehta hai.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+11',
  },
  {
    name: 'Srivastava Home · Kanpur',
    kw: '4 kW Subsidy Set',
    quote:
      'MNRE portal, DISCOM, sab paperwork unhone handle kiya. Hum bas meter reading dekhte hain aur saving enjoy karte hain.',
    image: 'https://via.placeholder.com/240x200.png?text=Customer+12',
  },
];

const PortfolioPage = () => {
  return (
    <main className="portfolio-page">
      {/* Hero / Deep overview */}
      <section className="portfolio-hero">
        <div className="portfolio-inner">
          <p className="portfolio-kicker">Portfolio · Residential Rooftop Solar</p>
          <h1>800+ Solar Sets Installed With Happy Homeowners</h1>
          <p className="portfolio-hero-text">
            HANS Solar focuses on clean design, disciplined execution and long‑term support
            for every residential solar set. From site survey to subsidy and net‑metering,
            the same project team stays with the customer till the system is live.
          </p>
          <p className="portfolio-hero-text">
            For each home, load pattern, roof quality and future expansion plan ko samajh
            kar kW size final kiya jata hai. Is approach ki wajah se hamare 800+ systems
            me se maximum projects bill saving, backup performance aur aesthetics ke
            hisaab se expected ya usse better perform kar rahe hain.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="portfolio-stats">
        <div className="portfolio-inner stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process / philosophy quick section */}
      <section className="portfolio-process">
        <div className="portfolio-inner process-grid">
          <div className="process-block">
            <h2>Design‑First, Vendor‑Neutral Approach</h2>
            <p>
              Panel brand ya inverter model se pehle hamara focus electrical safety, string
              design aur mounting quality pe hota hai. Uske baad market me best value
              components shortlist kiye jate hain.
            </p>
          </div>
          <div className="process-block">
            <h2>Documentation & Subsidy Ownership</h2>
            <p>
              DISCOM forms, MNRE portal uploads, net‑metering inspection – ye sab customer
              ke behalf pe handle kiya jata hai. Homeowner ko sirf final approval status
              aur bill saving dashboard dekhna padta hai.
            </p>
          </div>
          <div className="process-block">
            <h2>Service That Stays After Handover</h2>
            <p>
              Remote monitoring alerts, periodic health checks aur quick on‑site visits
              ensure karte hain ki saal‑dar‑saal generation stable rahe aur inverter uptime
              maximum ho.
            </p>
          </div>
        </div>
      </section>

      {/* Happy customers gallery + comments */}
      <section className="portfolio-testimonials">
        <div className="portfolio-inner">
          <div className="testimonials-header">
            <h2>Happy Customers, Real Rooftops</h2>
            <p>
              Ye kuch snapshots hain un 800+ kW sets me se jahan family ki daily life par
              solar ka direct positive impact dikhta hai.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <article key={t.name} className="testimonial-card">
                <div className="testimonial-image-wrapper">
                  <img src={t.image} alt={t.name} className="testimonial-image" />
                </div>
                <div className="testimonial-body">
                  <p className="testimonial-kw">{t.kw}</p>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-quote">“{t.quote}”</p>
                </div>
              </article>
            ))}
          </div>

          <p className="portfolio-footer-note">
            Portfolio me dikhaye gaye sab projects HANS Solar team ke directly executed ya
            supervised installs hain. Detailed case studies aur site visit references
            proposal stage par share kiye ja sakte hain.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;

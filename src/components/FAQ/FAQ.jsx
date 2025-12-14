// src/components/FAQ/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'How do I apply for the solar subsidy in Uttar Pradesh?',
    answer:
      'You do not need to worry. Hans Solar manages the entire subsidy application process through the government-approved PM Surya Ghar Yojana portal. You just provide basic information and documents, and our team handles the rest.',
  },
  {
    question: 'Is Net Metering available in Uttar Pradesh?',
    answer:
      'Yes. Net metering is available with most DISCOMs in Uttar Pradesh for eligible rooftop solar systems, subject to the latest state regulations and connection approvals.',
  },
  {
    question: 'What size of solar system do I need for a 2BHK or 3BHK home in Uttar Pradesh?',
    answer:
      'Typically, a 2BHK home needs around 2–3 kW and a 3BHK home around 3–5 kW, depending on your electricity usage and appliances. Hans Solar surveys your load and rooftop to suggest the right capacity.',
  },
  {
    question: 'How long does it take to install a rooftop solar system?',
    answer:
      'Once approvals are in place, installation usually takes 2–5 days for a standard residential system, followed by testing, net-meter integration, and commissioning.',
  },
  {
    question: 'What is the lifespan of the system?',
    answer:
      'Quality solar panels typically come with a 25-year performance warranty, while inverters and other components have shorter warranties. With basic care, systems can operate efficiently for 20–25+ years.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // default first one open

  const toggleIndex = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="faq">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Answers to common questions about rooftop solar subsidy in Uttar Pradesh with
          Hans Solar.
        </p>

        <div className="faq-list" role="list">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div className="faq-item" key={item.question} role="listitem">
                <button
                  className={`faq-question ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  <span>{item.question}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

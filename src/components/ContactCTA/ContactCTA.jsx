// src/components/ContactCTA/ContactCTA.jsx
import React, { useState } from 'react';
import './ContactCTA.css';

const ContactCTA = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pincode: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan tum backend API / WhatsApp link integrate kar sakte ho
    console.log('Form submitted:', form);
    alert('Thank you! Our Hans Solar team will contact you shortly.');
    setForm({ name: '', phone: '', pincode: '', message: '' });
  };

  return (
    <section className="cta">
      <div className="cta-inner">
        {/* LEFT */}
        <div className="cta-left">
          <p className="cta-eyebrow">Ready to Go Solar in Uttar Pradesh?</p>
          <h2 className="cta-title">
            Get a <span>FREE Solar Consultation</span> with Hans Solar.
          </h2>
          <p className="cta-text">
            Find out how much you can save on your electricity bills. Share a few basic
            details and our solar experts will design the right rooftop system for your
            home.
          </p>

          <a href="tel:+919358622621" className="cta-call">
            <span className="cta-call-icon">📞</span>
            <span className="cta-call-text">
              Call Us: <strong>+91 93586 22621</strong>
            </span>
          </a>
        </div>

        {/* RIGHT – FORM */}
        <div className="cta-right">
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="cta-form-row">
              <div className="cta-field">
                <label htmlFor="name">
                  Full Name <span>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="cta-field">
                <label htmlFor="phone">
                  Phone <span>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone No."
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cta-form-row">
              <div className="cta-field">
                <label htmlFor="pincode">
                  Pincode <span>*</span>
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  placeholder="Your Pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="cta-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Share your message or any specific requirements..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="cta-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

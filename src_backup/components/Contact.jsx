import React, { useState } from 'react';

const BUDGET_BANDS = [
  '< $25k',
  '$25k – $100k',
  '$100k – $500k',
  '$500k+'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    market: '',
    ambition: ''
  });
  const [selectedBudget, setSelectedBudget] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (band) => {
    setSelectedBudget(band);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API request
    setTimeout(() => {
      setFormStatus('success');
      // Reset form fields
      setFormData({
        name: '',
        company: '',
        email: '',
        market: '',
        ambition: ''
      });
      setSelectedBudget('');
    }, 1000);
  };

  return (
    <section
      id="contact"
      data-section="contact"
      data-scene="vortex"
      data-edge-chip="07 · START A PROJECT"
      className="relative py-20 lg:py-24 border-t border-line overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-30" data-parallax="0.1"></div>
      {/* <div className="ribbon" style={{ top: '6%' }} data-parallax="0.22">
        LET'S · BUILD · LET'S · BUILD · LET'S · BUILD · LET'S · BUILD · LET'S · BUILD
      </div> */}

      
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col lg:grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 drift-up card p-6 md:p-8 rounded-2xl border border-line">
          <div className="eyebrow mb-3" data-anim="fade-up">
            06 — Start a Project
          </div>
          <h2
            className="font-display text-4xl lg:text-6xl leading-[0.95] tracking-tight"
            data-split=""
            data-parallax="-0.05"
          >
            Let's <span className="italic gold-grad">build</span> the next move.
          </h2>
          <p className="text-mute mt-4 max-w-md text-sm" data-anim="fade-up">
            Tell us a little about the brand and the ambition. A partner will reply within one business day, anywhere on the network.
          </p>
          <div className="mt-10 space-y-3 text-sm" data-stagger="up">
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">◆</span>
              <div>
                <div className="text-gold-2">
                  <a href="mailto:hello@networqglobal.com">hello@networqglobal.com</a>
                </div>
                <div className="text-mute">New business · all markets</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">◆</span>
              <div>
                <div className="text-gold-2">+1 (212) 555 0144</div>
                <div className="text-mute">NYC HQ · Mon–Fri</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-gold mt-1">◆</span>
              <div>
                <div className="text-gold-2">42 markets · 14 languages</div>
                <div className="text-mute">We come to you.</div>
              </div>
            </div>
          </div>
        </div>
        
        <form
          className="lg:col-span-7 card rounded-2xl p-8 lg:p-10 tilt-card"
          data-anim="fade-up"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            <label className="block">
              <span className="eyebrow">01 / Your name</span>
              <input
                className="field"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ada Lovelace"
                required
                disabled={formStatus === 'sending'}
              />
            </label>
            <label className="block">
              <span className="eyebrow">02 / Company</span>
              <input
                className="field"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Brand or organization"
                required
                disabled={formStatus === 'sending'}
              />
            </label>
            <label className="block">
              <span className="eyebrow">03 / Work email</span>
              <input
                className="field"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@company.com"
                required
                disabled={formStatus === 'sending'}
              />
            </label>
            <label className="block">
              <span className="eyebrow">04 / Market</span>
              <input
                className="field"
                name="market"
                value={formData.market}
                onChange={handleInputChange}
                placeholder="Where are you launching?"
                disabled={formStatus === 'sending'}
              />
            </label>
          </div>
          
          <div className="mt-6">
            <span className="eyebrow">05 / What's the ambition?</span>
            <textarea
              rows="4"
              className="field"
              name="ambition"
              value={formData.ambition}
              onChange={handleInputChange}
              placeholder="A line or two is plenty — we'll take it from there."
              disabled={formStatus === 'sending'}
            ></textarea>
          </div>
          
          <div className="mt-6">
            <span className="eyebrow block mb-3">06 / Budget band</span>
            <div className="flex flex-wrap gap-2 text-sm">
              {BUDGET_BANDS.map((band) => (
                <button
                  key={band}
                  type="button"
                  onClick={() => handleBudgetSelect(band)}
                  className={`chip rounded-full px-4 py-2 transition-all duration-300 ${
                    selectedBudget === band ? 'bg-gold-2/15 border-gold-2 text-gold-2' : ''
                  }`}
                  disabled={formStatus === 'sending'}
                >
                  {band}
                </button>
              ))}
            </div>
          </div>
          
          <button
            type="submit"
            className="btn-gold mt-10 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            data-cursor="link"
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'idle' && (
              <>
                Send to Networq <span aria-hidden="true">→</span>
              </>
            )}
            {formStatus === 'sending' && 'Sending...'}
            {formStatus === 'success' && 'Sent · we\'ll be in touch ✓'}
          </button>
        </form>
      </div>
    </section>
  );
}

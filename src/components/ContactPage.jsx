import React, { useState, useEffect } from 'react';

const CONTACT_SERVICES = [
  'Brand & Creative Services',
  'Social Media Marketing',
  'Performance Marketing',
  'SEO Services',
  'Website Services',
  'Content Marketing',
  'Video & Multimedia',
  'Email & Automation',
  'Business Growth Services',
  'Local Business Marketing',
  'Emerging Services'
];

const BUDGET_RANGES = [
  '< $5,000',
  '$5,000 – $20,000',
  '$20,000 – $50,000',
  '$50,000+'
];

const CONTACT_MODES = [
  'Call',
  'Email',
  'WhatsApp'
];

export default function ContactPage({ onBackClick }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedContactMode, setSelectedContactMode] = useState('');
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(prev => prev.filter(s => s !== service));
    } else {
      setSelectedServices(prev => [...prev, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API request
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setSelectedServices([]);
      setSelectedBudget('');
      setSelectedContactMode('');
    }, 1200);
  };

  return (
    <div className="relative pt-24 pb-32 max-w-[1400px] mx-auto px-6 lg:px-10">
      {/* Back button */}
      <button
        onClick={onBackClick}
        className="mb-8 inline-flex items-center gap-2 text-xs font-mono text-gold-2 uppercase tracking-widest hover:text-gold transition-colors duration-300"
      >
        ← Back to Home
      </button>

      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 card p-8 md:p-10 rounded-3xl border border-line">
          <div className="eyebrow mb-4">Connect With Networq</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6">
            Contact <span className="italic gold-grad">Us</span>
          </h1>
          <p className="text-ink/80 text-base leading-relaxed mb-6">
            Want to talk to us or explore how we can help your business grow? Don’t wait, connect with our team now and let’s build something impactful together.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gold">◆</span>
              <span className="text-mute">Email: hello@networqglobal.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold">◆</span>
              <span className="text-mute">HQ: NYC · Dubai · Singapore · London</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <form
          className="lg:col-span-7 card rounded-3xl p-8 lg:p-10 border border-line"
          onSubmit={handleSubmit}
        >
          <h2 className="font-display text-3xl mb-6 text-gold-2">Get in Touch</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <label className="block">
              <span className="eyebrow">Full Name</span>
              <input
                type="text"
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
              <span className="eyebrow">Email Address</span>
              <input
                type="email"
                className="field"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@domain.com"
                required
                disabled={formStatus === 'sending'}
              />
            </label>
            <label className="block">
              <span className="eyebrow">Phone Number</span>
              <input
                type="tel"
                className="field"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 012-3456"
                required
                disabled={formStatus === 'sending'}
              />
            </label>
            <label className="block">
              <span className="eyebrow">Company Name (Optional)</span>
              <input
                type="text"
                className="field"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Brand or Organization"
                disabled={formStatus === 'sending'}
              />
            </label>
          </div>

          {/* Services interested in checkboxes */}
          <div className="mt-8">
            <span className="eyebrow block mb-3">Services You're Interested In</span>
            <div className="flex flex-wrap gap-2 text-xs">
              {CONTACT_SERVICES.map((serv) => {
                const isSelected = selectedServices.includes(serv);
                return (
                  <button
                    key={serv}
                    type="button"
                    onClick={() => handleServiceSelect(serv)}
                    className={`chip rounded-full px-4 py-2 transition-all duration-300 ${
                      isSelected ? 'bg-gold-2/15 border-gold-2 text-gold-2' : ''
                    }`}
                    disabled={formStatus === 'sending'}
                  >
                    {serv}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget Range */}
          <div className="mt-6">
            <span className="eyebrow block mb-3">Budget Range (Optional)</span>
            <div className="flex flex-wrap gap-2 text-xs">
              {BUDGET_RANGES.map((budg) => {
                const isSelected = selectedBudget === budg;
                return (
                  <button
                    key={budg}
                    type="button"
                    onClick={() => setSelectedBudget(budg)}
                    className={`chip rounded-full px-4 py-2 transition-all duration-300 ${
                      isSelected ? 'bg-gold-2/15 border-gold-2 text-gold-2' : ''
                    }`}
                    disabled={formStatus === 'sending'}
                  >
                    {budg}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Short Message */}
          <div className="mt-6">
            <label className="block">
              <span className="eyebrow">Short Message About You / Your Requirement</span>
              <textarea
                rows="4"
                className="field"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us a little about your project goals and deadlines..."
                required
                disabled={formStatus === 'sending'}
              ></textarea>
            </label>
          </div>

          {/* Preferred contact mode */}
          <div className="mt-6">
            <span className="eyebrow block mb-3">Preferred Mode of Contact</span>
            <div className="flex flex-wrap gap-2 text-xs">
              {CONTACT_MODES.map((mode) => {
                const isSelected = selectedContactMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setSelectedContactMode(mode)}
                    className={`chip rounded-full px-4 py-2 transition-all duration-300 ${
                      isSelected ? 'bg-gold-2/15 border-gold-2 text-gold-2' : ''
                    }`}
                    disabled={formStatus === 'sending'}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="btn-gold mt-8 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 w-full justify-center sm:w-auto"
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'idle' && (
              <>
                Send Message <span aria-hidden="true">→</span>
              </>
            )}
            {formStatus === 'sending' && 'Sending...'}
            {formStatus === 'success' && 'Message Sent ✓'}
          </button>
        </form>
      </div>
    </div>
  );
}

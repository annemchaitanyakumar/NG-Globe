import React, { useState, useEffect } from 'react';
import { serviceDetails } from '../serviceData';

export default function ServicePage({ serviceId, onBackClick, onContactClick }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);
  const data = serviceDetails[serviceId];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gold-2">
        Service not found.
      </div>
    );
  }

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
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

      {/* Hero Header */}
      <header className="card p-8 md:p-12 rounded-3xl mb-16 relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <div className="eyebrow mb-4">Services / {data.t}</div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
            {data.sub}
          </h1>
          <p className="text-ink/80 text-lg md:text-xl leading-relaxed max-w-3xl">
            {data.desc}
          </p>
          <button
            onClick={onContactClick}
            className="btn-gold mt-8 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
          >
            Connect Now <span aria-hidden="true">→</span>
          </button>
        </div>
      </header>

      {/* Importance List */}
      <section className="mb-20">
        <h2 className="font-display text-3xl md:text-4xl mb-8 border-b border-line pb-4">
          Why Is It Important for Your Business?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.importance.map((point, idx) => (
            <div key={idx} className="card p-6 rounded-xl border border-line">
              <span className="font-mono text-gold text-lg mb-4 block">0{idx + 1}</span>
              <p className="text-mute text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Content: Web Development Process */}
      {data.process && (
        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl mb-8 border-b border-line pb-4">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.process.map((step, idx) => (
              <div key={idx} className="card p-6 rounded-xl border border-line">
                <span className="font-mono text-gold text-lg mb-4 block">Step 0{idx + 1}</span>
                <h3 className="font-display text-xl mb-2">{step.t}</h3>
                <p className="text-mute text-xs leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* What We Offer / Sub-services */}
      <section className="mb-20">
        <h2 className="font-display text-3xl md:text-4xl mb-8 border-b border-line pb-4">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.offers.map((offer, idx) => (
            <div key={idx} className="card p-6 md:p-8 rounded-2xl border border-line lift flex flex-col justify-between">
              <div>
                <span className="font-mono text-gold text-xs block mb-4">SERVICE · {String(idx + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-2xl mb-3 text-gold-2">{offer.t}</h3>
                <p className="text-mute text-sm leading-relaxed">{offer.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Content: SEO Plans */}
      {data.plans && (
        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl mb-8 border-b border-line pb-4">
            Networq's SEO Plans
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {data.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`card p-8 rounded-3xl border ${
                  idx === 1 ? 'border-gold shadow-lg shadow-gold/10' : 'border-line'
                } relative`}
              >
                {idx === 1 && (
                  <span className="absolute -top-3 right-6 bg-gold text-[#1a1407] font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-3xl mb-6 text-gold-2">{plan.t}</h3>
                <ul className="space-y-4 mb-8 text-sm text-mute">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <span className="text-gold">◆</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onContactClick}
                  className={`w-full py-3 rounded-full text-sm font-medium transition-all ${
                    idx === 1 ? 'btn-gold' : 'btn-ghost'
                  }`}
                >
                  Choose {plan.t.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
          <div className="card p-6 md:p-8 rounded-2xl mt-10 text-mute text-sm leading-relaxed border border-line">
            {data.conclusion}
          </div>
        </section>
      )}

      {/* Why Choose Block */}
      {data.whyChoose && (
        <section className="mb-20 card p-8 md:p-12 rounded-3xl border border-line text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-6 text-gold-2">
            Why Choose Networq?
          </h2>
          <p className="text-mute max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-8">
            {data.whyChoose}
          </p>
          <button
            onClick={onContactClick}
            className="btn-gold px-8 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
          >
            Partner With Us
          </button>
        </section>
      )}

      {/* Why Choose Points (For Social Media Marketing) */}
      {data.whyChoosePoints && (
        <section className="mb-20">
          <h2 className="font-display text-3xl md:text-4xl mb-8 border-b border-line pb-4">
            Why Choose Networq?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.whyChoosePoints.map((point, idx) => (
              <div key={idx} className="card p-5 rounded-xl border border-line flex items-start gap-4">
                <span className="text-gold mt-1">◆</span>
                <p className="text-mute text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={onContactClick}
              className="btn-gold px-8 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              Let's Connect
            </button>
          </div>
        </section>
      )}

      {/* FAQs Specific Accordion */}
      <section className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl mb-8 border-b border-line pb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {data.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="card rounded-xl overflow-hidden border border-line">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-6 hover:bg-gold-2/5 transition-colors duration-300"
                >
                  <span className="font-display text-lg md:text-xl text-gold-2">{faq.q}</span>
                  <span className={`text-gold transition-transform duration-300 font-mono ${isOpen ? 'rotate-45' : ''}`}>
                    ＋
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] opacity-100 border-t border-line/50' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-mute text-sm leading-relaxed">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

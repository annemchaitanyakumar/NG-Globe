import React from 'react';
import { insights } from '../data';

export default function Insights() {
  return (
    <section
      id="insights"
      data-section="insights"
      data-scene="field"
      data-edge-chip="06 · FIELD NOTES"
      className="relative py-20 lg:py-24 border-t border-line overflow-hidden"
    >
      {/* <div className="ribbon" style={{ top: '6%' }} data-parallax="-0.2">
        DISPATCH · DISPATCH · DISPATCH · DISPATCH · DISPATCH · DISPATCH
      </div> */}


      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="card p-6 md:p-8 rounded-2xl mb-12 flex items-end justify-between flex-wrap gap-6" data-anim="fade-up">
          <div>
            <div className="eyebrow mb-3" data-anim="fade-up">
              05 — Field Notes
            </div>
            <h2
              className="font-display text-4xl lg:text-6xl leading-[1] tracking-tight max-w-3xl"
              data-split=""
              data-parallax="-0.06"
            >
              Signals from the <span className="italic gold-grad">network</span>.
            </h2>
          </div>
          <a href="#" data-cursor="link" className="text-xs text-gold underline-gold pb-1">
            Subscribe to the dispatch →
          </a>
        </div>

        <div id="insights-grid" className="flex flex-col md:grid md:grid-cols-3 gap-6" data-stagger="3d">
          {insights.map((p) => (
            <a key={p.t} href="#" data-cursor="link" className="card rounded-2xl overflow-hidden lift block tilt-card">
              <div className="tilt-inner">
                <div className="insight-cover aspect-[16/10] relative">
                  <div className="absolute top-4 left-4 chip rounded-full px-3 py-1 text-[11px] font-mono">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 text-[10px] font-mono text-mute">
                    {p.time}
                  </div>
                </div>
                
                <div className="p-7">
                  <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                  <p className="text-mute text-sm">{p.d}</p>
                  <div className="mt-5 text-xs font-mono uppercase tracking-widest text-gold">Read →</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

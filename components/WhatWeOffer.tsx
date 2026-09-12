"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  { icon: "fa-microphone", title: "Opening Ceremony", desc: "Address by the Vice President of Indonesia and cross-ministry keynotes." },
  { icon: "fa-briefcase", title: "Business Matching", desc: "Diaspora delegates meet local investors and business owners." },
  { icon: "fa-comments", title: "Panel Discussion", desc: "Discussions on investment, trade, and creative economy opportunities." },
  { icon: "fa-champagne-glasses", title: "Gala Dinner", desc: "Closing awards night and official reception for the Summit." },
];

export default function WhatWeOffer() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-sm font-bold tracking-widest text-brand-coral uppercase">Features</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-16">What We Offer?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col items-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-[900ms] ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="w-16 h-16 rounded-full bg-red-50 text-brand-coral flex items-center justify-center mb-5 text-2xl">
                <i className={`fa-solid ${f.icon}`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

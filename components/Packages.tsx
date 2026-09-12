"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PARTICIPANT_PACKAGES = [
  { name: "Summit Only", price: "Rp 2 Jt", features: ["Full Summit access", "Business matching session", "E-ticket + QR check-in"] },
  { name: "Gala Dinner Only", price: "Rp 2 Jt", features: ["Gala Dinner access", "Evening networking", "E-ticket + QR check-in"] },
  { name: "Full Access", price: "Rp 3.5 Jt", features: ["Full Summit access", "Gala Dinner", "Business matching session", "E-ticket + QR check-in"] },
];

export default function Packages() {
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
    <section ref={sectionRef} className="py-24 bg-white" id="packages">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-coral uppercase">Choose The Best One</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-16">Pricing Plan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTICIPANT_PACKAGES.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-[900ms] ease-out flex flex-col items-center ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="min-w-20 h-10 px-4 bg-sky-400 text-white rounded-md font-bold flex items-center justify-center mb-5 text-base">
                {pkg.price}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-7">{pkg.name}</h3>
              <ul className="text-sm text-gray-500 space-y-4 mb-10 text-left w-full pl-4">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-green-500"></i> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="mt-auto w-full py-3 bg-brand-coral hover:bg-red-500 text-white rounded-full text-sm font-semibold transition text-center"
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

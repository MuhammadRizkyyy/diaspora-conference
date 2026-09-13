"use client";

import { useEffect, useRef, useState } from "react";

const TIERS_ROW1 = [
  { icon: "fa-gem", label: "Platinum · Rp 500 Jt" },
  { icon: "fa-shapes", label: "Gold · Rp 250 Jt" },
  { icon: "fa-shield", label: "Silver · Rp 100 Jt" },
];

const TIERS_ROW2 = [
  { icon: "fa-users", label: "Corporate 10 Pax · Rp 100 Jt" },
  { icon: "fa-user-group", label: "Corporate 5 Pax · Rp 50 Jt" },
];

function useReveal<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold,
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Sponsors() {
  const header = useReveal<HTMLDivElement>();
  const row1 = useReveal<HTMLDivElement>();
  const row2 = useReveal<HTMLDivElement>();
  const cta = useReveal<HTMLAnchorElement>();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          ref={header.ref}
          className={`transition-all duration-700 ease-out ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-coral uppercase">For Company & Institution</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-12">Sponsorship Tier</h2>
        </div>

        <div ref={row1.ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-6">
          {TIERS_ROW1.map((t, i) => (
            <div
              key={t.label}
              className={`bg-gray-50 py-5 px-7 rounded-md flex items-center justify-center gap-2 text-sky-500 font-bold text-base shadow-sm transition-all duration-700 ease-out ${
                row1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: row1.visible ? `${i * 150}ms` : "0ms" }}
            >
              <i className={`fa-solid ${t.icon}`}></i> {t.label}
            </div>
          ))}
        </div>

        <div ref={row2.ref} className="flex flex-wrap justify-center gap-4 mb-12">
          {TIERS_ROW2.map((t, i) => (
            <div
              key={t.label}
              className={`bg-gray-50 py-4 px-7 rounded-md flex items-center justify-center gap-2 text-amber-500 font-bold text-base shadow-sm transition-all duration-700 ease-out ${
                row2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: row2.visible ? `${i * 150}ms` : "0ms" }}
            >
              <i className={`fa-solid ${t.icon}`}></i> {t.label}
            </div>
          ))}
        </div>

        <a
          ref={cta.ref}
          href="#contact"
          className={`inline-block px-9 py-3.5 bg-brand-coral hover:bg-red-500 text-white rounded-full text-sm font-semibold shadow transition ${
            cta.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionProperty: "background-color, opacity, transform", transitionDuration: "700ms" }}
        >
          Become A Sponsor
        </a>
      </div>
    </section>
  );
}

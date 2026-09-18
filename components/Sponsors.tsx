"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const TIERS_ROW1 = [
  {
    icon: "fa-gem",
    name: "Platinum",
    price: "Rp 500.000.000",
    featured: true,
    benefits: [
      "5 VIP seats at the Summit and Gala Dinner, seated with Indonesian government representatives. Seating will be arranged by the committee, with a limit of 2 representatives per company at each VIP table",
      "One corporate representative to join as a speaker in one dialogue session",
      "Company profile on the main backdrop and photobooth",
      "Credit title during the opening and closing of the event",
      "Company name mentioned by the MC at the opening and closing",
      "Access to the VIP room",
      "Premium logo placement across social media and all promotional materials, including flyers, booklet, e-flyers, and newsletter",
    ],
  },
  {
    icon: "fa-shapes",
    name: "Gold",
    price: "Rp 250.000.000",
    featured: false,
    benefits: [
      "3 VIP seats at the Summit and Gala Dinner, seated with Indonesian government representatives. Seating will be arranged by the committee, with a limit of 2 representatives per company at each VIP table",
      "Company profile on the main backdrop and photobooth",
      "Credit title during the opening and closing of the event",
      "Company name mentioned by the MC at the opening and closing",
      "Access to the VIP room",
      "Standard logo placement across social media and all promotional materials, including flyers, booklet, e-flyers, and newsletter",
    ],
  },
  {
    icon: "fa-shield",
    name: "Silver",
    price: "Rp 100.000.000",
    featured: false,
    benefits: [
      "3 seats at the Summit and Gala Dinner",
      "Company profile on the main backdrop and photobooth",
      "Company name mentioned by the MC at the opening and closing",
      "Logo placement across social media and all promotional materials",
    ],
  },
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
  const cta = useReveal<HTMLAnchorElement>();

  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div
          ref={header.ref}
          className={`transition-all duration-700 ease-out ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">For Company & Institution</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-12">Sponsorship Tier</h2>
        </div>

        <div ref={row1.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start mb-8 text-left">
          {TIERS_ROW1.map((t, i) => (
            <div
              key={t.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border bg-brand-ink transition-all duration-700 ease-out ${
                t.featured ? "border-brand-gold shadow-2xl shadow-brand-gold/20 md:-translate-y-3" : "border-brand-gold/30 shadow-lg"
              } ${row1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: row1.visible ? `${i * 150}ms` : "0ms" }}
            >
              {t.featured && (
                <span className="absolute top-3 right-3 z-10 text-[10px] font-bold tracking-wide uppercase bg-brand-gold text-brand-charcoal px-2.5 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-charcoal px-6 pt-6 pb-6 text-center">
                <div className="flex items-center justify-center gap-2 text-brand-gold font-extrabold text-lg md:text-xl uppercase tracking-wide">
                  <i className={`fa-solid ${t.icon}`}></i> {t.name}
                </div>
                <div className="text-white font-black text-2xl md:text-3xl mt-2 tracking-tight">{t.price}</div>
              </div>
              <ul className="flex-1 px-6 py-6 space-y-3 text-sm leading-relaxed text-white/80">
                {t.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/50 italic mb-12 max-w-xl mx-auto">
          All sponsorship packages include lunch, coffee break, and dinner for the allocated number of guests.
        </p>

        <div className="text-center mb-10">
          <p className="text-white font-bold text-base mb-1">For sponsorship inquiries, please contact:</p>
          <p className="text-brand-gold font-semibold text-lg">+62821 2288 4430</p>
          <p className="text-white/60 text-sm">(WhatsApp Available)</p>
        </div>

        <a
          ref={cta.ref}
          href="https://wa.me/6282122884430"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-9 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal rounded-full text-sm font-semibold shadow transition ${
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

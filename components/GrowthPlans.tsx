"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import NumberFlow from "@number-flow/react";

import { cn, MEGATIX_URL } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const TABS = [
  {
    id: "full-corporate",
    label: "Full Corporate",
    plans: [
      {
        name: "Full Corporate Package (10 pax)",
        note: "Available for 3 packages only",
        price: 100000000,
        perPerson: false,
        features: [
          "Seats for 10 (ten) pax for both the Summit and the Gala Dinner. Seating will be arranged by the committee, with a limit of 2 representatives per company at each VIP table",
          "Company profile in the photobooth",
          "Networking lunch, coffee break, and dinner",
        ],
      },
    ],
  },
  {
    id: "half-corporate",
    label: "Half Corporate",
    plans: [
      {
        name: "Half Corporate Package (5 pax)",
        note: "Available for 4 packages only",
        price: 50000000,
        perPerson: false,
        features: [
          "VIP seats for 5 (five) pax for both the Summit and the Gala Dinner. Seating will be arranged by the committee, with a limit of 2 representatives per company at each VIP table",
          "Company profile in the photobooth",
          "Networking lunch, coffee break, and dinner",
        ],
      },
    ],
  },
  {
    id: "individual",
    label: "Individual",
    plans: [
      {
        name: "Full Access",
        note: "Summit and Gala Dinner",
        price: 3500000,
        perPerson: true,
        features: ["One seat at the Summit and the Gala Dinner", "Networking lunch, coffee break, and dinner"],
      },
      {
        name: "Summit Only / Gala Dinner Only",
        note: null,
        price: 2000000,
        perPerson: true,
        features: ["One seat at the Summit or one seat at the Gala Dinner", "Networking lunch or dinner"],
      },
    ],
  },
];

export const GrowthPlans = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeId)!;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-charcoal" id="packages">
      <div
        className={`max-w-6xl mx-auto px-6 text-center transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">Choose The Best One</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-10">Pricing Plan</h2>

        <div
          role="tablist"
          aria-label="Package type"
          className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-brand-gold/30 bg-brand-ink p-1.5 mb-12"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={tab.id === activeId}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold transition",
                tab.id === activeId ? "bg-brand-gold text-brand-charcoal" : "text-white/70 hover:text-white",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          key={active.id}
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className={cn(
            "mx-auto grid gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500",
            active.plans.length > 1 ? "max-w-5xl md:grid-cols-2" : "max-w-2xl",
          )}
        >
          {active.plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-brand-gold/70 bg-brand-ink text-left shadow-2xl"
            >
              <div className="bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-charcoal px-6 pt-6 pb-7 text-center">
                <div className="inline-block rounded-xl bg-brand-charcoal px-5 py-2.5">
                  <h4 className="text-lg md:text-2xl font-bold text-brand-gold">{plan.name}</h4>
                  {plan.note && <p className="text-xs italic text-white/80">{plan.note}</p>}
                </div>
                <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-1 font-black text-white">
                  <span className="text-2xl md:text-3xl">Rp</span>
                  <NumberFlow value={plan.price} locales="id-ID" className="text-4xl md:text-5xl" />
                  {plan.perPerson && <span className="text-xl md:text-2xl uppercase">/person</span>}
                </div>
              </div>

              <ul className="flex-1 space-y-3 p-6 md:p-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <Button
                  asChild
                  className="w-full h-14 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-semibold"
                >
                  <a href={MEGATIX_URL}>Get Ticket</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPlans;

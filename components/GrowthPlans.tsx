"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import NumberFlow from "@number-flow/react";

import { cn, MEGATIX_URL } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Individual",
    description: "Full Access · per person",
    price: 3500000,
    features: [
      "One seat at the Summit and the Gala Dinner",
      "Networking lunch, coffee break, and dinner",
    ],
  },
  {
    name: "Half Corporate Package",
    description: "5 pax · Available for 4 packages only",
    price: 50000000,
    features: [
      "VIP seats for 5 pax at the Summit and the Gala Dinner",
      "Max 2 representatives per company at each VIP table",
      "Company profile in the photobooth",
      "Networking lunch, coffee break, and dinner",
    ],
    featured: true,
  },
  {
    name: "Full Corporate Package",
    description: "10 pax · Available for 3 packages only",
    price: 100000000,
    features: [
      "Seats for 10 pax at the Summit and the Gala Dinner",
      "Max 2 representatives per company at each VIP table",
      "Company profile in the photobooth",
      "Networking lunch, coffee break, and dinner",
    ],
  },
];

export const GrowthPlans = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-gold uppercase">
            Choose The Best One
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-16">
            Pricing Plan
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-xl p-8 flex flex-col border text-white transition-all duration-[1600ms] ease-out hover:-translate-y-1 hover:shadow-xl",
                plan.featured
                  ? "bg-brand-ink border-brand-gold shadow-2xl z-10 lg:scale-105"
                  : "bg-brand-ink/60 border-white/10",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: visible ? `${i * 300}ms` : "0ms" }}
            >
              <div className="text-left mb-8">
                <h4 className="font-bold text-lg">{plan.name}</h4>
                <p className="text-sm text-white/60">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8 text-left">
                <span className="text-lg font-medium text-white/60">Rp</span>
                <span className={cn("text-4xl font-bold", plan.featured ? "text-brand-gold" : "text-white")}>
                  <NumberFlow value={plan.price} />
                </span>
              </div>

              <Button
                asChild
                className={cn(
                  "w-full mb-10 rounded-full h-14",
                  plan.featured
                    ? "bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal"
                    : "bg-transparent border border-brand-gold/60 text-brand-gold hover:bg-brand-gold/10",
                )}
              >
                <a href={MEGATIX_URL}>Get Ticket</a>
              </Button>

              <div className="space-y-4 pt-8 border-t border-white/10 text-left">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-sm text-white/75">
                    <Check className="size-4 shrink-0 text-brand-gold" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPlans;

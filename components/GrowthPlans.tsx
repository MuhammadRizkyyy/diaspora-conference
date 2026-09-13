"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import NumberFlow from "@number-flow/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
    name: "Summit Only",
    description: "Full-day Summit sessions",
    price: 2000000,
    features: [
      "Full Summit access",
      "Business matching session",
      "E-ticket + QR check-in",
    ],
  },
  {
    name: "Full Access",
    description: "Summit + Gala Dinner",
    price: 3500000,
    features: [
      "Full Summit access",
      "Gala Dinner",
      "Business matching session",
      "E-ticket + QR check-in",
    ],
    featured: true,
  },
  {
    name: "Gala Dinner Only",
    description: "Evening reception only",
    price: 2000000,
    features: [
      "Gala Dinner access",
      "Evening networking",
      "E-ticket + QR check-in",
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
    <section ref={sectionRef} className="py-24 bg-white" id="packages">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-coral uppercase">
            Choose The Best One
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-16">
            Pricing Plan
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-xl p-8 flex flex-col border transition-all duration-[1600ms] ease-out hover:-translate-y-1 hover:shadow-xl",
                plan.featured
                  ? "bg-brand-navy text-white shadow-2xl z-10 border-transparent lg:scale-105"
                  : "bg-gray-50 border-gray-100",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: visible ? `${i * 300}ms` : "0ms" }}
            >
              <div className="text-left mb-8">
                <h4 className="font-bold text-lg">{plan.name}</h4>
                <p className={cn("text-sm", plan.featured ? "text-white/60" : "text-gray-500")}>
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8 text-left">
                <span className={cn("text-lg font-medium", plan.featured ? "text-white/60" : "text-gray-500")}>
                  Rp
                </span>
                <span className={cn("text-4xl font-bold", plan.featured ? "text-white" : "text-gray-900")}>
                  <NumberFlow value={plan.price} />
                </span>
              </div>

              <Button
                asChild
                className={cn(
                  "w-full mb-10 rounded-full h-14",
                  plan.featured
                    ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                    : "bg-brand-coral hover:bg-red-500 text-white",
                )}
              >
                <Link href="/register">Select Plan</Link>
              </Button>

              <div
                className={cn(
                  "space-y-4 pt-8 border-t text-left",
                  plan.featured ? "border-white/20" : "border-gray-200",
                )}
              >
                {plan.features.map((f) => (
                  <div
                    key={f}
                    className={cn(
                      "flex items-center gap-3 text-sm",
                      plan.featured ? "text-white/80" : "text-gray-500",
                    )}
                  >
                    <Check className="size-4 shrink-0 text-brand-coral" />
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

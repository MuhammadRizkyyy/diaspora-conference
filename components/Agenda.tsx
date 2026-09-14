"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const PHASES = [
  {
    title: "The Summit",
    time: "08.30 – 17.30",
    icon: "fa-sun",
    dark: false,
    sessions: [
      {
        time: "08.30 – 09.10",
        icon: "fa-mug-hot",
        title: "Registration & Welcome Coffee",
        desc: "Delegate check-in and morning networking. All delegates to be seated by 09.15.",
      },
      {
        time: "09.20 – 10.25",
        icon: "fa-landmark",
        title: "Opening Ceremony & Official Opening",
        desc: "Welcoming speech, keynote by the Minister of Foreign Affairs, and grand keynote and official opening by the Vice President of the Republic of Indonesia.",
      },
      {
        time: "10.25 – 11.50",
        icon: "fa-microphone-lines",
        title: "Power Introduction & “Why IDN-Preneur Global Network, Why Now”",
        desc: "Special remarks by the founder of the Indonesian Diaspora movement, followed by a moderated talk show and open Q&A.",
      },
      {
        time: "11.50 – 13.10",
        icon: "fa-utensils",
        title: "Networking Lunch & Special Address",
        desc: "Lunch followed by a special address from the Coordinating Minister for Infrastructure and Regional Development.",
      },
      {
        time: "13.10 – 15.00",
        icon: "fa-handshake",
        title: "Strategic Dialogue with Government",
        desc: "Sessions with the Minister of Trade and the Minister of Creative Economy on export channels, market access, and creative industries.",
      },
      {
        time: "15.15 – 17.30",
        icon: "fa-people-group",
        title: "Collaboration Workshops & Commitment Session",
        desc: "Sector-based workshops, report and alignment, 30-day action commitments, and closing remarks.",
      },
    ],
  },
  {
    title: "Business Gala Dinner",
    time: "“Dine & Align” · 18.00 – 21.30",
    icon: "fa-moon",
    dark: true,
    sessions: [
      {
        time: "18.00 – 19.30",
        icon: "fa-champagne-glasses",
        title: "Cocktail Reception & Welcome",
        desc: "Cocktail reception, ethnic dance performance, and keynote address by the Minister of Tourism.",
      },
      {
        time: "19.30 – 21.30",
        icon: "fa-music",
        title: "Dinner & Entertainment",
        desc: "Seated dinner accompanied by live performances.",
      },
    ],
  },
];

export default function Agenda() {
  const cardRefs = useRef(new Map<string, HTMLDivElement>());
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = (entry.target as HTMLElement).dataset.key!;
          setVisible((prev) => (prev[key] === entry.isIntersecting ? prev : { ...prev, [key]: entry.isIntersecting }));
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    cardRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-brand-cream" id="agenda">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-gold/25 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full opacity-50"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, rgba(163, 143, 98, 0.45) 0 2px, transparent 2px 12px)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-bold tracking-widest text-brand-gold-dark uppercase">
            Monday, October 12, 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Events Schedule</h2>
          <p className="mt-4 text-sm text-gray-500">
            <i className="fa-solid fa-location-dot mr-1.5 text-brand-gold-dark"></i>
            The Ritz-Carlton Jakarta, Pacific Place
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-gold/0 via-brand-gold to-brand-gold/0"
          />

          {PHASES.map((phase) => (
            <div key={phase.title} className="mb-14 last:mb-0">
              <div className="relative z-10 flex md:justify-center mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-5 py-2.5 text-sm font-semibold text-brand-gold shadow-lg">
                  <i className={`fa-solid ${phase.icon}`}></i>
                  {phase.title}
                  <span className="hidden sm:inline font-normal text-white/60">· {phase.time}</span>
                </span>
              </div>

              <ol className="space-y-8">
                {phase.sessions.map((s, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <li key={s.title} className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16">
                      <span className="absolute left-5 md:left-1/2 top-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand-charcoal text-brand-gold ring-4 ring-brand-cream shadow-md">
                        <i className={`fa-solid ${s.icon} text-sm`}></i>
                      </span>

                      <div
                        ref={(el) => {
                          if (el) cardRefs.current.set(s.title, el);
                        }}
                        data-key={s.title}
                        className={cn(
                          "relative overflow-hidden rounded-xl p-6 text-left shadow-sm transition-all duration-700 ease-out hover:shadow-xl",
                          phase.dark
                            ? "bg-brand-charcoal border border-brand-gold/30"
                            : "bg-white border border-brand-gold/15",
                          isLeft ? "md:col-start-1" : "md:col-start-2",
                          visible[s.title]
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : cn("opacity-0 translate-y-6 md:translate-y-0", isLeft ? "md:-translate-x-10" : "md:translate-x-10"),
                        )}
                      >
                        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-gold to-brand-gold-dark" />
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
                            phase.dark ? "bg-brand-gold text-brand-charcoal" : "bg-brand-charcoal text-brand-gold",
                          )}
                        >
                          <i className="fa-regular fa-clock"></i>
                          {s.time}
                        </span>
                        <h4 className={cn("mt-3 text-base font-bold", phase.dark ? "text-white" : "text-gray-900")}>
                          {s.title}
                        </h4>
                        <p className={cn("mt-2 text-sm leading-relaxed", phase.dark ? "text-white/70" : "text-gray-500")}>
                          {s.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            className="inline-flex items-center px-7 py-3 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal text-sm font-semibold shadow transition"
            href="#packages"
          >
            Book A Seat <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

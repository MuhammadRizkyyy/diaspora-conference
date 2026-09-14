"use client";

import { useEffect, useRef, useState } from "react";

const SESSIONS = [
  {
    time: "08.00 - 09.00",
    title: "Registration & Welcome Coffee",
    desc: "Delegate check-in, morning networking before the opening session begins.",
  },
  {
    time: "09.00 - 10.30",
    title: "Opening Ceremony & Keynote Speech",
    desc: "Address by the Vice President of the Republic of Indonesia and cross-ministry keynotes.",
  },
  {
    time: "10.30 - 12.00",
    title: "Panel Discussion: Investment & Trade Opportunities",
    desc: "Session with the Ministry of Trade, Ministry of Creative Economy, and diaspora business figures.",
  },
  {
    time: "13.00 - 15.00",
    title: "Business Matching & Breakout Session",
    desc: "Business meetings between diaspora delegates and local business owners and investors.",
  },
  {
    time: "19.00 - 22.00",
    title: "Gala Dinner",
    desc: "Closing awards night and official reception for the Summit.",
  },
];

export default function Agenda() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => SESSIONS.map(() => false));
  const pdfRef = useRef<HTMLDivElement>(null);
  const [pdfVisible, setPdfVisible] = useState(false);

  useEffect(() => {
    const el = pdfRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setPdfVisible(entry.isIntersecting), {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          setVisible((prev) => {
            if (prev[idx] === entry.isIntersecting) return prev;
            const next = [...prev];
            next[idx] = entry.isIntersecting;
            return next;
          });
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-brand-cream" id="agenda">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-gold-dark uppercase">
            Monday, October 12, 2026
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Events Schedule
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-12 md:gap-16">
            {SESSIONS.map((session, i) => {
              const isLeft = i % 2 === 0;
              const hasConnector = i !== SESSIONS.length - 1;
              return (
                <div
                  key={session.time}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  data-idx={i}
                  className={`relative w-full md:w-[47%] bg-white p-7 rounded-xl shadow-sm border border-gray-100 text-left transition-all duration-[800ms] ease-out ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  } ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  <span className="inline-block bg-brand-charcoal text-brand-gold text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    {session.time}
                  </span>
                  <h4 className="font-bold text-gray-900 text-base mb-2">
                    {session.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {session.desc}
                  </p>
                  {hasConnector && (
                    <span
                      className={`hidden md:block schedule-connector ${
                        isLeft ? "schedule-connector--left" : "schedule-connector--right"
                      }`}
                    ></span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              className="inline-flex items-center px-7 py-3 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal text-sm font-semibold shadow transition"
              href="#packages"
            >
              Book A Seat <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>

        <div
          ref={pdfRef}
          className={`mt-16 bg-gradient-to-r from-brand-charcoal via-brand-charcoal to-brand-gold-dark rounded-2xl p-10 text-center text-white shadow-lg transition-all duration-[400ms] ease-out ${
            pdfVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-[0.15]"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Download Events Schedule
            <br />
            as PDF
          </h3>
          <a
            className="inline-flex items-center px-7 py-2.5 bg-brand-gold hover:bg-brand-gold-light rounded-full text-sm font-semibold text-brand-charcoal mt-2 transition"
            href="#"
          >
            Download Now <i className="fa-solid fa-download ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

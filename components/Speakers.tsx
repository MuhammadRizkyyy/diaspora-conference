"use client";

import { useEffect, useRef, useState } from "react";

const SPEAKERS = [
  { role: "Vice President of the Republic of Indonesia", note: "Keynote Speaker & Opening Address" },
  { role: "Minister of Foreign Affairs of Indonesia", note: "Keynote Speaker" },
  { role: "Minister of Trade of Indonesia", note: "Keynote Speaker" },
  { role: "Minister of Creative Economy of Indonesia", note: "Keynote Speaker" },
];

// ponytail: individual speaker names not yet confirmed by client (see proposal) —
// showing titles for now, swap to name+photo once the final list is confirmed.
export default function Speakers() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => SPEAKERS.map(() => false));

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setHeaderVisible(entry.isIntersecting), {
      threshold: 0.3,
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
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gray-50" id="speakers">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-coral uppercase">Meet Our Speakers!</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Events Speakers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPEAKERS.map((speaker, i) => {
            const isLeftCol = i % 2 === 0;
            return (
            <div
              key={speaker.role}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-idx={i}
              className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6 transition-all duration-[800ms] ease-out ${
                visible[i]
                  ? "opacity-100 translate-x-0"
                  : isLeftCol
                    ? "opacity-0 translate-x-16"
                    : "opacity-0 -translate-x-16"
              }`}
            >
              <div className="w-28 h-32 shrink-0 rounded-lg bg-gradient-to-tr from-brand-coral to-sky-400 flex items-center justify-center text-white text-4xl">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div className="text-left flex-1">
                <h4 className="font-bold text-gray-900 text-base">{speaker.role}</h4>
                <span className="text-xs text-gray-400 block mb-3">{speaker.note}</span>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Photo and biography details will be shown after final confirmation from the ministry.
                </p>
                <div className="flex gap-2">
                  <a className="w-7 h-7 rounded-full bg-sky-400 text-white flex items-center justify-center text-xs" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs" href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a className="w-7 h-7 rounded-full bg-sky-400 text-white flex items-center justify-center text-xs" href="#">
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-400 text-center mt-10">
          Committee &amp; leadership of IDN-Preneur Global Network also join as panelists and moderators.
        </p>
      </div>
    </section>
  );
}

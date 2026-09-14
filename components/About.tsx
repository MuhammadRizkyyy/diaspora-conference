"use client";

import { useEffect, useRef, useState } from "react";
import { MEGATIX_URL } from "@/lib/utils";

export default function About() {
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
    <section ref={sectionRef} className="py-24 bg-white" id="about">
      <div
        className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-[1400ms] ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left: arch shape + photo + decorative shapes */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[360px] h-[470px] sm:w-[440px] sm:h-[580px]">
            {/* dotted grid, bottom-left */}
            <div
              className="absolute bottom-0 left-0 w-24 h-24"
              style={{
                backgroundImage: "radial-gradient(#22241F 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            ></div>

            {/* arch shape */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] h-[85%] bg-brand-gold rounded-t-full"></div>

            {/* photo, cropped bust, sitting on the arch */}
            <img
              alt="Featured Keynote Speaker"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[75%] object-cover object-top rounded-t-full"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
            />

            {/* decorative shapes */}
            <div
              className="absolute top-6 left-2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[16px] border-r-brand-gold"
              style={{ transform: "rotate(180deg)" }}
            ></div>
            <div className="absolute top-14 left-16 w-6 h-6 border-2 border-brand-charcoal"></div>
            <div className="absolute top-24 right-4 text-brand-charcoal text-4xl">
              <i className="fa-solid fa-bullhorn"></i>
            </div>
            <div className="absolute top-1/2 right-0 w-3 h-6 border-2 border-brand-charcoal rounded-r-full"></div>
            <div
              className="absolute bottom-16 right-6 w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[14px] border-l-brand-charcoal"
            ></div>
            <div className="absolute bottom-4 right-16 w-4 h-4 bg-brand-gold rounded-full"></div>
            <div className="absolute bottom-2 right-24 w-6 h-6 border-2 border-brand-gold rounded-full"></div>
          </div>
        </div>

        <div className="lg:col-span-6 text-left">
          <span className="text-sm font-bold tracking-widest text-brand-gold-dark uppercase">The Story</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6">About Event</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            The 1st Indonesian Diaspora Business Summit 2026 brings together Indonesian diaspora from 20+ countries
            with business owners, investors, and the Indonesian government. Organized by IDN-Preneur Global Network
            in partnership with IDN Global, opened by the Vice President of the Republic of Indonesia together with cabinet ministers.
          </p>
          <h4 className="font-bold text-gray-800 text-lg mb-3">Event Features</h4>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Cross-ministry panel discussions, business matching with investors, and a closing Gala Dinner. Targeting
            up to 1000 registrants with a projection of 200+ diaspora delegates from 20+ countries.
          </p>
          <a
            className="inline-flex items-center px-7 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal text-base font-semibold transition"
            href={MEGATIX_URL}
          >
            Get Ticket
          </a>
        </div>
      </div>
    </section>
  );
}

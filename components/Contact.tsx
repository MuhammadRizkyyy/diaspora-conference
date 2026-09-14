"use client";

import { useEffect, useRef, useState } from "react";

const COL1 = [
  {
    q: "What is the registration process?",
    a: "Fill out the registration form → receive a registration number (e.g. IDN-2026-0001) → transfer to the committee's account including the registration number → upload proof of transfer → committee verifies → e-ticket sent via email.",
  },
  { q: "Can I check my registration status?", a: null },
];

const COL2 = [
  { q: "When is the official launch?", a: null },
  {
    q: "What payment methods are available?",
    a: "Manual transfer to the BNI account under Yayasan Diaspora Indonesia Global. No payment gateway yet, verification is done manually by the committee.",
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

function FaqItem({
  q,
  a,
  defaultOpen,
  className = "",
  style,
}: {
  q: string;
  a: string | null;
  defaultOpen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  if (!a) {
    return (
      <div
        className={`bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center transition-all duration-[1000ms] ease-out ${className}`}
        style={style}
      >
        <span className="text-sm font-bold text-gray-800">{q}</span>
        <span className="text-gray-400 font-bold text-lg">+</span>
      </div>
    );
  }
  return (
    <details
      className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 group transition-all duration-[1000ms] ease-out ${className}`}
      style={style}
      open={defaultOpen}
    >
      <summary className="flex justify-between items-center cursor-pointer list-none">
        <span className="text-sm font-bold text-brand-gold-dark">{q}</span>
        <span className="text-brand-gold-dark font-bold text-lg group-open:rotate-45 transition">+</span>
      </summary>
      <p className="text-sm text-gray-500 leading-relaxed mt-4">{a}</p>
    </details>
  );
}

export default function Contact() {
  const header = useReveal<HTMLDivElement>();
  const col1 = useReveal<HTMLDivElement>();
  const col2 = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 bg-brand-cream" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            header.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-gold-dark uppercase">Questions &amp; Answers</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Mostly Asked Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div ref={col1.ref} className="space-y-4">
            {COL1.map((item, i) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                defaultOpen
                className={col1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
                style={{ transitionDelay: col1.visible ? `${i * 150}ms` : "0ms" }}
              />
            ))}
          </div>
          <div ref={col2.ref} className="space-y-4">
            {COL2.map((item, i) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                defaultOpen
                className={col2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
                style={{ transitionDelay: col2.visible ? `${i * 150}ms` : "0ms" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

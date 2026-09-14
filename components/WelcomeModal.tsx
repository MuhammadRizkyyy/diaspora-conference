"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { basePath } from "@/lib/utils";

const FEATURES = [
  "Meet Ministers & Industry Leaders",
  "Business Matching With Investors",
  "Gala Dinner & Networking Access",
];

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-brand-charcoal to-brand-ink border border-brand-gold/40 p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-charcoal"
          onClick={() => setOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_0_40px_10px_rgba(212,175,55,0.35)]">
          <Image src={`${basePath}/logo.png`} alt="" width={56} height={56} />
        </div>

        <h2 className="mb-6 text-2xl font-black leading-tight text-white">
          Don&apos;t Miss The 1st Diaspora Summit
        </h2>

        <ul className="mb-8 space-y-3 text-left">
          {FEATURES.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm font-medium text-white">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold">
                <i className="fa-solid fa-check text-xs text-brand-charcoal"></i>
              </span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#packages"
          onClick={() => setOpen(false)}
          className="mb-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold py-4 text-base font-bold text-brand-charcoal transition hover:bg-brand-gold-light"
        >
          REGISTER NOW <i className="fa-solid fa-arrow-right"></i>
        </a>

        <button
          className="text-sm text-white/70 underline"
          onClick={() => setOpen(false)}
        >
          No thanks
        </button>
      </div>
    </div>
  );
}

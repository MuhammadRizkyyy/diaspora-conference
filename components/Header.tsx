"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#agenda", label: "Agenda" },
  { href: "#speakers", label: "Speakers" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          className="flex items-center gap-2.5 text-brand-navy"
          href="#home"
        >
          <Image
            src="/logo.png"
            alt="IDN Diaspora Business Summit"
            width={36}
            height={36}
            className="shrink-0"
          />

          <span className="leading-tight text-left font-black text-base tracking-tight">
            IDN Diaspora
            <br />
            Business Summit
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-navy">
          {NAV.map((item) => (
            <a
              key={item.href}
              className="hover:text-brand-coral transition"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <Link
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-brand-coral hover:bg-red-500 text-white text-sm font-semibold shadow-lg transition duration-200"
            href="/register"
          >
            Join Now <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
          </Link>
        </div>
      </div>
    </header>
  );
}

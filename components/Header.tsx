"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { basePath } from "@/lib/utils";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#agenda", label: "Agenda" },
  { href: "#speakers", label: "Speakers" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled || menuOpen ? "bg-brand-charcoal shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between gap-2">
        <Link className="flex items-center gap-1.5 sm:gap-2.5 text-white min-w-0" href="#home">
          <Image
            src={`${basePath}/logo.png`}
            alt="IDN Diaspora Business Summit"
            width={36}
            height={36}
            className="shrink-0 w-7 h-7 sm:w-9 sm:h-9"
          />
          <Image
            src={`${basePath}/logo2.png`}
            alt=""
            width={27}
            height={36}
            className="shrink-0 w-[21px] h-7 sm:w-[27px] sm:h-9"
          />

          <span className="leading-tight text-left font-black text-xs sm:text-sm lg:text-base tracking-tight whitespace-nowrap">
            IDN Diaspora
            <br />
            Business Summit
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-3 lg:gap-8 text-xs lg:text-sm font-semibold text-white">
          {NAV.map((item) => (
            <a
              key={item.href}
              className="hover:text-brand-gold transition"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal text-xs sm:text-sm font-semibold shadow-lg transition duration-200 whitespace-nowrap"
            href="#packages"
          >
            Join Now <i className="fa-solid fa-arrow-right ml-1.5 sm:ml-2 text-xs"></i>
          </Link>
          <button
            type="button"
            className="md:hidden text-white p-1"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-brand-charcoal px-4 pb-4 flex flex-col gap-1 text-white font-semibold">
          {NAV.map((item) => (
            <a
              key={item.href}
              className="py-2.5 border-b border-white/10 hover:text-brand-gold transition"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

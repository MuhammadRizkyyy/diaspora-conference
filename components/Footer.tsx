import Image from "next/image";
import { basePath } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100" id="contact">
      <div className="relative h-[480px] w-full bg-gray-200 overflow-hidden flex items-center justify-center">
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          src="https://www.google.com/maps?q=The+Ritz-Carlton+Jakarta+Pacific+Place+SCBD+Jakarta+Selatan&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Event Venue Location"
        ></iframe>
        <div className="relative z-10 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-xl max-w-md w-full mx-4 text-left border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Event Venue</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            The Ritz-Carlton Jakarta, Pacific Place — SCBD, South Jakarta. Monday, October 12, 2026.
          </p>
          <ul className="text-sm text-gray-600 space-y-3">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-brand-gold-dark"></i> Pacific Place, SCBD, South Jakarta
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-brand-gold-dark"></i> +62 8xx-xxxx-xxxx (Committee WhatsApp)
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-brand-gold-dark"></i> info@idnpreneurglobal.org
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-globe text-brand-gold-dark"></i> www.diasporaindonesia.org
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-brand-charcoal border-b-8 border-brand-gold text-center">
        <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col items-center">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-wide text-white/70">
            <a className="hover:text-brand-gold transition" href="#home">Home</a>
            <a className="hover:text-brand-gold transition" href="#about">About</a>
            <a className="hover:text-brand-gold transition" href="#speakers">Speakers</a>
            <a className="hover:text-brand-gold transition" href="#agenda">Agenda</a>
            <a className="hover:text-brand-gold transition" href="#packages">Pricing</a>
            <a className="hover:text-brand-gold transition" href="#contact">Contact</a>
          </nav>

          <div className="w-full border-t border-white/10 mt-8 pt-10">
            <a className="flex items-center justify-center gap-2.5 text-white" href="#home">
              <Image src={`${basePath}/logo.png`} alt="IDN Diaspora Business Summit" width={36} height={36} className="shrink-0" />
              <span className="leading-tight text-left font-black text-base tracking-tight">
                IDN Diaspora
                <br />
                Business Summit
              </span>
            </a>

            <div className="flex justify-center gap-3 mt-6">
              <a
                className="w-10 h-10 rounded-md bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal flex items-center justify-center text-sm transition"
                href="#"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                className="w-10 h-10 rounded-md bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal flex items-center justify-center text-sm transition"
                href="#"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            <p className="text-[11px] text-white/50 mt-6">
              &copy; 2026 IDN-Preneur Global Network &amp; IDN Global. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

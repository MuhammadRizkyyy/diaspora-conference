import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100">
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
              <i className="fa-solid fa-location-dot text-brand-coral"></i> Pacific Place, SCBD, South Jakarta
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-brand-coral"></i> +62 8xx-xxxx-xxxx (Committee WhatsApp)
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-brand-coral"></i> info@idnpreneurglobal.org
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-globe text-brand-coral"></i> www.diasporaindonesia.org
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-100 via-purple-50 to-sky-100 text-center">
        <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col items-center">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-wide text-gray-600">
            <a className="hover:text-brand-coral transition" href="#home">Home</a>
            <a className="hover:text-brand-coral transition" href="#about">About</a>
            <a className="hover:text-brand-coral transition" href="#speakers">Speakers</a>
            <a className="hover:text-brand-coral transition" href="#agenda">Agenda</a>
            <a className="hover:text-brand-coral transition" href="#packages">Pricing</a>
            <a className="hover:text-brand-coral transition" href="#contact">Contact</a>
          </nav>

          <div className="w-full border-t border-gray-300/60 mt-8 pt-10">
            <a className="flex items-center justify-center gap-2.5 text-brand-navy" href="#home">
              <Image src="/logo.png" alt="IDN Diaspora Business Summit" width={36} height={36} className="shrink-0" />
              <span className="leading-tight text-left font-black text-base tracking-tight">
                IDN Diaspora
                <br />
                Business Summit
              </span>
            </a>

            <div className="flex justify-center gap-3 mt-6">
              <a
                className="w-10 h-10 rounded-md bg-sky-400 hover:bg-sky-500 text-white flex items-center justify-center text-sm transition"
                href="#"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                className="w-10 h-10 rounded-md bg-sky-400 hover:bg-sky-500 text-white flex items-center justify-center text-sm transition"
                href="#"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            <p className="text-[11px] text-gray-500 mt-6">
              &copy; 2026 IDN-Preneur Global Network &amp; IDN Global. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

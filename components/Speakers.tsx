"use client";

import { useEffect, useRef, useState } from "react";

const SPEAKERS = [
  {
    name: "Gibran Rakabuming Raka",
    role: "Vice President of the Republic of Indonesia",
    photo: "/speakers/WAPRES-Gibran_Rakabuming.jpg",
    instagram: "https://www.instagram.com/gibran_rakabuming/",
  },
  {
    name: "Sugiono",
    role: "Minister of Foreign Affairs of Indonesia",
    photo: "/speakers/Menteri_Luar_Negeri_IndonesiaSugiono.jpg",
    instagram: "https://www.instagram.com/sugiono_56/",
  },
  {
    name: "Budi Santoso",
    role: "Minister of Trade of Indonesia",
    photo: "/speakers/menteri-perdagangan_1_11zon.webp",
    instagram: "https://www.instagram.com/budisantosofficial/",
  },
  {
    name: "Teuku Riefky Harsya",
    role: "Minister of Creative Economy of Indonesia",
    photo: "/speakers/Menteri_Ekonomi_Kreatif_Teuku_Riefky_Harsya_3_11zon.jpg",
    instagram: "https://www.instagram.com/teukuriefky/",
  },
  {
    name: "Agus Harimurti Yudhoyono",
    role: "Coordinating Minister for Infrastructure and Regional Development",
    photo: "/speakers/Coordinating Minister for Infrastructure and Regional Development_2_11zon.jpg",
    instagram: "https://www.instagram.com/agusyudhoyono/",
  },
  {
    name: "Widiyanti Putri Wardhana",
    role: "Minister of Tourism of Indonesia",
    photo: "/speakers/Menteri_Pariwisata_Widiyanti_Putri_3_11zon.webp",
    instagram: "https://www.instagram.com/widi.wardhana/",
  },
];

export default function Speakers() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const drag = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setHeaderVisible(entry.isIntersecting), {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updateProgress = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max <= 0 ? 0 : el.scrollLeft / max);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 300) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, moved: false, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  const onCardClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="py-24 bg-white" id="speakers">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-bold tracking-widest text-brand-gold-dark uppercase">Meet Our Speakers!</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Events Speakers</h2>
        </div>

        <div
          ref={trackRef}
          onScroll={updateProgress}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onCardClickCapture}
          className="flex gap-6 overflow-x-auto pb-2 cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.name}
              className="group relative shrink-0 w-[260px] h-[340px] rounded-xl overflow-hidden"
            >
              <img
                alt={speaker.name}
                src={encodeURI(speaker.photo)}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-center transition-transform duration-300 group-hover:-translate-y-10">
                <h4 className="font-bold text-white text-base leading-snug">{speaker.name}</h4>
                <span className="text-xs text-white/70">{speaker.role}</span>
              </div>

              <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <a
                  className="w-8 h-8 rounded-full bg-white/15 backdrop-blur text-white flex items-center justify-center text-xs hover:bg-brand-gold hover:text-brand-charcoal"
                  href={speaker.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-8">
          <span className="text-sm font-semibold text-gray-400 w-8">
            {String(Math.round(scrollProgress * (SPEAKERS.length - 1)) + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-gold-dark rounded-full transition-[width] duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous speaker"
              onClick={() => scrollByCard(-1)}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
            </button>
            <button
              aria-label="Next speaker"
              onClick={() => scrollByCard(1)}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-brand-charcoal hover:text-white hover:border-brand-charcoal transition"
            >
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center mt-10">
          Committee &amp; leadership of IDN-Preneur Global Network also join as panelists and moderators.
        </p>
      </div>
    </section>
  );
}

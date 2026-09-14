"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-10-12T08:00:00+07:00").getTime();

function getRemaining() {
  const diff = Math.max(0, EVENT_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const ZERO = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function Countdown() {
  const [remaining, setRemaining] = useState(ZERO);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: remaining.days },
    { label: "Hours", value: remaining.hours },
    { label: "Min", value: remaining.minutes },
    { label: "Sec", value: remaining.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 mb-8 w-full max-w-xl">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="bg-white/10 backdrop-blur-md rounded-xl py-4 px-3 border border-brand-gold/40 shadow-sm"
        >
          <span className="block text-3xl md:text-4xl font-black text-brand-gold">{unit.value}</span>
          <span className="text-sm md:text-base font-semibold text-white/80">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const finish = () => {
      setVisible(false);
      setTimeout(() => setHidden(true), 400);
    };
    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-[400ms] ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-16 h-16 rounded-full border-4 border-t-brand-coral border-r-transparent border-b-brand-coral border-l-transparent animate-spin" />
    </div>
  );
}

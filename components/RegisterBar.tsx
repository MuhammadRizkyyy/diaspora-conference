"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterBar() {
  const router = useRouter();
  const [values, setValues] = useState({ firstName: "", lastName: "", email: "" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    });
    router.push(`/register?${params.toString()}`);
  }

  return (
    <div className="relative -mt-16 max-w-6xl mx-auto w-full px-4 z-20" id="register">
      <div
        className={`bg-brand-coral rounded-lg shadow-xl p-7 md:p-10 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={handleSubmit}>
          <input
            className="rounded-md border-0 text-base px-5 py-5 text-gray-800 focus:ring-2 focus:ring-brand-blue"
            placeholder="First Name"
            required
            type="text"
            value={values.firstName}
            onChange={(e) => setValues((v) => ({ ...v, firstName: e.target.value }))}
          />
          <input
            className="rounded-md border-0 text-base px-5 py-5 text-gray-800 focus:ring-2 focus:ring-brand-blue"
            placeholder="Last Name"
            required
            type="text"
            value={values.lastName}
            onChange={(e) => setValues((v) => ({ ...v, lastName: e.target.value }))}
          />
          <input
            className="rounded-md border-0 text-base px-5 py-5 text-gray-800 focus:ring-2 focus:ring-brand-blue"
            placeholder="example@gmail.com"
            required
            type="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
          <button
            className="w-full bg-brand-blue hover:bg-sky-500 text-brand-navy font-semibold text-base rounded-md py-5 flex items-center justify-center gap-2 transition"
            type="submit"
          >
            Register <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

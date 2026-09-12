import type { Config } from "tailwindcss";

// ponytail: palette matches code.html reference 1:1. Swap for IDN Global's
// real brand colors once client confirms (see planning doc §10).
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FF4D6D",
          coral: "#FA5252",
          blue: "#1EA7FD",
          navy: "#0E1726",
          light: "#F8F9FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

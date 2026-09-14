import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="hero-bg relative h-screen flex flex-col text-white text-center" id="home">
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight mb-4 uppercase max-w-5xl">
          The 1st Indonesian Diaspora Business Summit 2026
        </h1>
        <p className="text-lg md:text-xl font-bold tracking-wide mb-8 text-brand-gold">
          October 12, 2026 In The Ritz-Carlton Jakarta, Pacific Place
        </p>

        <Countdown />

        <a
          className="inline-block px-9 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-semibold text-base shadow-md transition"
          href="#agenda"
        >
          Get Ticket <i className="fa-solid fa-arrow-right ml-1.5 text-sm"></i>
        </a>
      </div>
    </section>
  );
}

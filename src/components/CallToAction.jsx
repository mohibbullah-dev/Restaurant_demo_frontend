import { restaurant } from "../config/restaurant";

export default function CallToAction() {
  const handleOrderClick = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReserveClick = () => {
    const message = encodeURIComponent(
      "Hello, I would like to inquire about a table reservation.",
    );
    window.open(
      `https://wa.me/${restaurant.whatsappPhone}?text=${message}`,
      "_blank",
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-32 relative group">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] border border-white/5 rounded-[10rem] rotate-12 pointer-events-none -z-10" />

      <div className="glass-gold rounded-[4rem] p-12 md:p-24 text-center border border-white/10 relative overflow-hidden shadow-3xl">
        {/* Animated Ambient Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-champagne/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-barolo/10 blur-[120px] rounded-full animate-pulse delay-700" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-champagne">
              Secure Your Experience
            </span>
            <h2 className="text-6xl md:text-8xl font-serif italic text-mist leading-[0.9] tracking-tighter">
              A Table Awaits <br />
              <span className="gold-gradient-text not-italic font-sans font-bold uppercase text-5xl md:text-6xl">
                Your Presence.
              </span>
            </h2>
          </div>

          <p className="text-smoke/80 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
            From intimate dinners to grand celebrations, allow our concierge to
            tailor an evening that transcends the ordinary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            {/* Primary Action */}
            <button
              onClick={handleOrderClick}
              className="group relative px-12 py-6 overflow-hidden rounded-2xl bg-champagne transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-champagne/20"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-obsidian font-black uppercase text-[11px] tracking-[0.4em]">
                Explore the Menu
              </span>
            </button>

            {/* Secondary Action */}
            <button
              onClick={handleReserveClick}
              className="group flex items-center gap-4 px-12 py-6 rounded-2xl border border-white/10 glass hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-mist font-black uppercase text-[11px] tracking-[0.4em]">
                Request Reservation
              </span>
              <svg
                className="w-4 h-4 text-champagne transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Availability Badge */}
          <div className="pt-8 flex items-center justify-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <p className="text-[9px] uppercase tracking-[0.3em] text-smoke">
              Concierge Online • Typical response: 5 mins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { restaurant } from "../config/restaurant";
import { useSettings } from "../context/SettingsContext";

const Footer = () => {
  const { settings } = useSettings();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-obsidian border-t border-white/5 pt-32 pb-12 overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Statement (5 Columns) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-mist uppercase italic font-serif">
                {restaurant.name}
                <span className="text-champagne">.</span>
              </h2>
              <p className="text-smoke text-lg font-light leading-relaxed max-w-sm">
                Crafting extraordinary culinary narratives where tradition meets
                the modern digital concierge.
              </p>
            </div>

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass">
              <span
                className={`h-1.5 w-1.5 rounded-full animate-pulse ${settings?.isOpen ? "bg-emerald-500" : "bg-red-500"}`}
              />
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-mist">
                Current Status:{" "}
                {settings?.isOpen ? "Accepting Orders" : "Atelier Closed"}
              </p>
            </div>
          </div>

          {/* Navigation & Services (4 Columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
                Explore
              </p>
              <ul className="space-y-4 text-smoke text-[11px] font-medium uppercase tracking-[0.2em]">
                <li>
                  <a
                    href="#menu"
                    className="hover:text-champagne transition-all duration-300"
                  >
                    The Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-champagne transition-all duration-300"
                  >
                    The Heritage
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="hover:text-champagne transition-all duration-300"
                  >
                    Private Dining
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="hover:text-champagne transition-all duration-300"
                  >
                    Guestbook
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-8">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
                Connect
              </p>
              <ul className="space-y-4 text-smoke text-[11px] font-medium uppercase tracking-[0.2em]">
                <li>
                  <a
                    href={`https://wa.me/${restaurant.whatsappPhone}`}
                    target="_blank"
                    className="hover:text-champagne transition-all"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-champagne transition-all">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-champagne transition-all">
                    Twitter / X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Top Action (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end text-left lg:text-right">
            <div className="space-y-4">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
                The Atelier
              </p>
              <p className="text-mist text-sm font-light leading-relaxed">
                {restaurant.addressLine}
                <br />
                <span className="font-bold tracking-widest">
                  {restaurant.phone}
                </span>
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-12 group flex items-center gap-4 text-mist/40 hover:text-champagne transition-all duration-500"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                Back to Top
              </span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-champagne/40 group-hover:-translate-y-1 transition-all">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transform rotate-180"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Legal & Credits Line */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[9px] text-smoke/30 uppercase tracking-[0.4em]">
              © 2026 {restaurant.name} Atelier.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[9px] text-smoke/30 uppercase tracking-[0.4em] hover:text-mist transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[9px] text-smoke/30 uppercase tracking-[0.4em] hover:text-mist transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          <p className="text-[9px] text-smoke/20 uppercase tracking-[0.5em] italic">
            Designed for the Extraordinary
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

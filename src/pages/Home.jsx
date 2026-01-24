import Section from "../components/Section";
import { restaurant } from "../config/restaurant";
import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import MenuItemCard from "../components/MenuItemCard";
import { useCart } from "../context/CartContext";
import { useSettings } from "../context/SettingsContext"; // Added this
import ReviewsDisplay from "../components/ReviewsDisplay";
import AboutSection from "../components/AboutSection";

const SLIDES = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
];

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [current, setCurrent] = useState(0);
  const cart = useCart();
  const { settings } = useSettings(); // Pulling the live status

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((s) => (s + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/api/menu?featured=true`)
      .then((r) => r.json())
      .then((d) => setFeatured(d.items || []))
      .catch(() => setFeatured([]));
  }, []);

  return (
    <div className="bg-obsidian min-h-screen text-mist">
      {/* --- PROFESSIONAL SPLIT HERO --- */}
      <div className="relative min-h-[90vh] flex flex-col justify-center">
        {/* HIGHLIGHTED ALERT: Only shows when restaurant is closed */}
        {!settings?.isOpen && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl">
            <div className="glass-gold border border-barolo/30 p-4 rounded-2xl flex items-center justify-center gap-4 animate-pulse shadow-2xl shadow-barolo/10">
              <span className="flex h-2 w-2 rounded-full bg-red-500"></span>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400">
                Notice: We are currently closed for orders
              </p>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center pt-20">
          {/* Left: Content (Clean & Sharp) */}
          <div className="space-y-10 z-10">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 border border-champagne/30 rounded-full">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-champagne">
                  Elite Dining • {restaurant.name}
                </p>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                Taste the <br />
                <span className="gold-gradient-text italic">
                  Extraordinary.
                </span>
              </h1>
              <p className="text-smoke text-lg max-w-md font-light leading-relaxed">
                Experience a curated digital menu designed for the modern
                palate. Seamlessly order your favorites directly via WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <a
                href="#menu"
                className="px-10 py-5 bg-champagne text-obsidian font-black uppercase text-[10px] tracking-widest hover:brightness-110 transition-all rounded-xl shadow-xl shadow-champagne/5"
              >
                View Collection
              </a>
              <a
                href={`https://wa.me/${restaurant.whatsappPhone}`}
                className="px-10 py-5 glass border border-white/10 text-mist font-black uppercase text-[10px] tracking-widest hover:bg-white/5 transition-all rounded-xl"
              >
                WhatsApp Concierge
              </a>
            </div>
          </div>

          {/* Right: Contained Slider (Very Clean) */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square w-full">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              {SLIDES.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                  alt="Food Presentation"
                />
              ))}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 glass px-4 py-2 rounded-full border-white/10">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-champagne" : "w-2 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl border border-white/10 hidden md:block shadow-3xl">
              <p className="text-champagne font-black text-xl">Chef's Choice</p>
              <p className="text-[9px] uppercase tracking-widest text-smoke">
                Seasonal Specialty 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- About SECTION --- */}
      <AboutSection />

      {/* --- FEATURED SECTION --- */}
      <Section
        id="menu"
        title={<span className="gold-gradient-text">Signature Collection</span>}
        subtitle="The definitive selection of our finest seasonal highlights."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((item) => (
            <MenuItemCard
              key={item._id}
              item={item}
              onAdd={(it) => {
                cart.add(it);
                cart.open();
              }}
            />
          ))}
        </div>
      </Section>

      {/* --- CLEAN INFO GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {/* Hours Card */}
          <div className="glass-gold p-12 rounded-[3.5rem] border border-white/5 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-champagne"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>

            <h3 className="text-4xl font-serif italic gold-gradient-text mb-10">
              Service Hours
            </h3>

            <div className="space-y-5">
              {restaurant.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between items-end group/item"
                >
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-smoke group-hover/item:text-champagne transition-colors">
                    {h.day}
                  </span>
                  <div className="flex-1 border-b border-white/5 border-dotted mx-4 mb-1"></div>
                  <span className="text-sm font-medium text-mist font-mono">
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[10px] text-smoke/40 uppercase tracking-widest text-center italic">
              * Reservations highly recommended for evening service
            </p>
          </div>

          {/* Location & Contact Card */}
          <div className="glass p-12 rounded-[3.5rem] border border-white/5 flex flex-col justify-between text-center md:text-left relative overflow-hidden">
            {/* Abstract gold line decoration */}
            <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-champagne/40 to-transparent" />

            <div className="space-y-6">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
                The Atelier
              </p>
              <h3 className="text-5xl font-bold tracking-tighter leading-tight text-mist">
                Find Us in the <br />
                <span className="italic font-serif gold-gradient-text">
                  Heart of the City
                </span>
              </h3>
              <p className="text-xl text-smoke/80 font-light leading-relaxed max-w-sm">
                {restaurant.addressLine}
              </p>
            </div>

            <div className="pt-12 space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <a
                  href={`tel:${restaurant.phone}`}
                  className="flex-1 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all group"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-mist group-hover:text-champagne">
                    Call Concierge
                  </span>
                </a>
                <a
                  href={restaurant.mapEmbedUrl} // or a google maps link
                  target="_blank"
                  className="flex-1 px-8 py-5 bg-champagne/10 border border-champagne/20 rounded-2xl flex items-center justify-center gap-3 hover:bg-champagne/20 transition-all group"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-champagne">
                    Get Directions
                  </span>
                </a>
              </div>

              <p className="text-[9px] text-smoke uppercase tracking-[0.4em] opacity-40">
                ESTABLISHED 2026 • CULINARY EXCELLENCE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- MINIMAL MAP --- */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative">
        <div className="relative h-[500px] rounded-[4rem] overflow-hidden glass p-3 border border-white/5 shadow-3xl group">
          {/* Decorative Corner Accents */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-champagne/30 rounded-tl-2xl z-20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-champagne/30 rounded-br-2xl z-20" />

          {/* Map Overlay for deep luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40 pointer-events-none z-10" />

          <iframe
            title="map"
            src={restaurant.mapEmbedUrl}
            className="w-full h-full rounded-[3.5rem] grayscale invert brightness-[0.4] contrast-[1.2] opacity-60 group-hover:opacity-80 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
            loading="lazy"
          />

          {/* Floating Map Card */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-md">
            <div className="glass-gold p-6 rounded-3xl border border-white/10 backdrop-blur-xl text-center shadow-2xl">
              <p className="text-[9px] font-black uppercase tracking-[0.4em] text-champagne mb-2">
                Private Parking Available
              </p>
              <p className="text-xs text-smoke">
                Valet service is provided for all dinner guests.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* review section  */}
      <ReviewsDisplay />

      {/* call-to-action */}
      {/* --- FINAL CALL TO ACTION --- */}
      <div className="max-w-5xl mx-auto px-6 mb-32">
        <div className="glass-gold rounded-[4rem] p-16 text-center border border-white/5 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-champagne/10 blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-barolo/5 blur-[100px]" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-6xl font-serif italic text-mist">
              Ready for an <br />{" "}
              <span className="gold-gradient-text">Exquisite Evening?</span>
            </h2>
            <p className="text-smoke max-w-lg mx-auto font-light">
              Whether it's a private celebration or a quiet evening of
              indulgence, our concierge is ready to accommodate your every need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <button className="px-12 py-6 bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.4em] rounded-2xl hover:scale-105 transition-transform shadow-2xl shadow-champagne/20">
                Order Delivery Now
              </button>
              <button className="px-12 py-6 glass border border-white/10 text-mist font-black uppercase text-[11px] tracking-[0.4em] rounded-2xl hover:bg-white/5 transition-all">
                Table Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

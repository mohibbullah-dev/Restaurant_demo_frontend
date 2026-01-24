import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";

export default function ReviewsDisplay() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/reviews/approved`)
      .then((r) => r.json())
      .then((data) => setReviews(data))
      .catch(() => {});
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section className="relative py-32 bg-obsidian overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight tracking-tighter mb-4 text-white">
            Patron{" "}
            <span className="gold-gradient-text italic font-serif">
              Reflections
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-champagne/30" />
            <p className="text-champagne/60 text-[10px] uppercase tracking-[0.5em] font-medium">
              The Aurelia Experience
            </p>
            <div className="h-px w-8 bg-champagne/30" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((rev) => (
            <div
              key={rev._id}
              className="group relative flex flex-col h-full glass-gold p-10 rounded-[2rem] border border-white/5 hover:border-champagne/20 transition-all duration-700 ease-out"
            >
              {/* Top Quote Icon */}
              <div className="absolute top-6 right-10 text-4xl text-champagne/10 font-serif pointer-events-none">
                &ldquo;
              </div>

              {/* Star Rating */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-[10px] ${i < rev.rating ? "text-champagne" : "text-white/5"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Comment Content - Fixed Overlap with break-words */}
              <div className="flex-grow">
                <p className="text-mist/80 text-base leading-relaxed font-light italic break-words line-clamp-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Footer / Author */}
              <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-champagne/20 to-obsidian border border-champagne/30 flex items-center justify-center text-xs text-champagne font-bold group-hover:scale-110 transition-transform duration-500">
                    {rev.customerName.charAt(0)}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-obsidian rounded-full"
                    title="Verified Guest"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-mist tracking-wide group-hover:text-champagne transition-colors">
                    {rev.customerName}
                  </span>
                  <span className="text-[9px] text-smoke uppercase tracking-widest mt-0.5">
                    Verified Patron
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

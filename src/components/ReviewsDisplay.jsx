import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../config/api";

export default function ReviewsDisplay() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/reviews/approved`)
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);

  if (reviews.length === 0) return null;
  // bg-obsidian
  return (
    <section className="py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extralight text-white tracking-tighter">
            Guest{" "}
            <span className="gold-gradient-text italic font-serif">
              Reflections
            </span>
          </h2>
          <p className="text-smoke text-[9px] uppercase tracking-[0.5em] mt-3">
            The Aurelia Legacy
          </p>
        </div>

        <Link
          to="/reviews"
          className="group flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-champagne text-[10px] uppercase tracking-[0.2em] hover:bg-champagne hover:text-obsidian transition-all duration-700"
        >
          View Full Guestbook
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
          {[...reviews, ...reviews, ...reviews].map((rev, i) => (
            <div
              key={i}
              className="w-[380px] inline-block whitespace-normal glass-gold p-10 rounded-[3rem] border border-white/5 shrink-0 group hover:border-champagne/20 transition-colors"
            >
              <div className="text-champagne text-[10px] mb-6">
                {"★".repeat(rev.rating)}
              </div>
              <p className="text-mist/70 italic text-sm leading-relaxed break-words line-clamp-3">
                "{rev.comment}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-champagne/20 to-transparent border border-champagne/20 flex items-center justify-center text-xs text-champagne font-bold">
                  {rev.customerName.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-mist tracking-wide uppercase">
                    {rev.customerName}
                  </p>
                  <p className="text-[8px] text-smoke uppercase tracking-widest mt-1">
                    Verified Patron
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

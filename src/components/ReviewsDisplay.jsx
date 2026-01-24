import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";

export default function ReviewsDisplay() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Only fetch approved reviews for the public homepage
    fetch(`${API_BASE}/api/reviews/approved`)
      .then((r) => r.json())
      .then((data) => setReviews(data))
      .catch(() => {});
  }, []);

  // If there are no approved reviews, the section stays invisible
  if (reviews.length === 0) return null;

  return (
    <div className="bg-obsidian">
      {/* This is the "max-w-7xl" wrapper that aligns it with your Hero section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Guest <span className="gold-gradient-text italic">Experiences</span>
          </h2>
          <p className="text-smoke text-[10px] uppercase tracking-[0.4em] font-black">
            Verified Patron Testimonials
          </p>
          <div className="w-12 h-px bg-champagne/30 mx-auto mt-6"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev._id}
              className="glass-gold p-10 rounded-[3rem] border border-white/5 flex flex-col justify-between hover:border-champagne/20 transition-all duration-500 group"
            >
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="text-champagne text-xs">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-mist/90 italic text-sm leading-relaxed font-light">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
                <div>
                  <p className="font-bold text-mist group-hover:text-champagne transition-colors">
                    {rev.customerName}
                  </p>
                  <p className="text-[9px] text-smoke uppercase tracking-widest mt-1">
                    Verified Guest
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-champagne font-bold">
                  {rev.customerName.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

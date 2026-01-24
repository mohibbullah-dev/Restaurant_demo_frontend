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
    <div className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-5xl font-bold tracking-tighter">
          Guest <span className="gold-gradient-text italic">Voice</span>
        </h2>
        <p className="text-smoke text-[10px] uppercase tracking-[0.4em]">
          The Aurelia Experience
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((rev) => (
          <div
            key={rev._id}
            className="glass-gold p-10 rounded-[3rem] border border-white/5 flex flex-col justify-between group"
          >
            <div>
              <div className="text-champagne text-xs mb-6">
                {"★".repeat(rev.rating)}
              </div>
              <p className="text-mist font-light italic leading-relaxed text-sm">
                "{rev.comment}"
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <p className="font-bold text-mist">{rev.customerName}</p>
              <div className="w-8 h-8 rounded-full bg-champagne text-obsidian flex items-center justify-center text-[10px] font-black">
                {rev.customerName.charAt(0)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

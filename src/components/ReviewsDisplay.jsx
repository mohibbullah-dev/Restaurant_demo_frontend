import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";

export default function ReviewsDisplay() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // We only fetch the "approved" ones for the public
    fetch(`${API_BASE}/api/reviews/approved`)
      .then((r) => r.json())
      .then((data) => setReviews(data))
      .catch(() => {});
  }, []);

  if (reviews.length === 0) return null; // Hide section if no reviews approved yet

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="gold-gradient-text text-3xl font-italic italic">
          Guest Experiences
        </h2>
        <p className="text-smoke text-sm uppercase tracking-[0.3em] mt-2">
          Verified Patron Testimonials
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 px-4">
        {reviews.map((rev) => (
          <div
            key={rev._id}
            className="glass-gold p-8 rounded-[2.5rem] border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <span key={i} className="text-champagne text-xs">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-mist/80 italic text-sm leading-relaxed">
                "{rev.comment}"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="font-bold text-mist">{rev.customerName}</p>
              <p className="text-[10px] text-champagne uppercase tracking-widest">
                Verified Guest
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

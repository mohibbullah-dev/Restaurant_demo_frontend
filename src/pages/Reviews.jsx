import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Navbar from "../components/Navbar"; // Adjust path as needed

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/reviews/approved`)
      .then((r) => r.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar /> {/* Ensure Navbar is present */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-7xl font-serif italic text-mist mb-4 text-center">
          The <span className="text-champagne">Registry</span>
        </h1>
        <p className="text-center text-white/40 max-w-2xl mx-auto mb-20 font-light">
          A curated collection of experiences from our most distinguished
          guests.
        </p>

        {/* Full Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center text-champagne font-serif italic">
                  {review.name?.charAt(0) || "G"}
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-champagne text-xs">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-mist/90 italic font-light leading-relaxed mb-6">
                "{review.comment}"
              </p>
              <p className="text-xs text-white/30 uppercase tracking-widest text-right">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

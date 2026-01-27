import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../config/api"; // Ensure this path is correct

export default function HomeReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/reviews/approved`)
      .then((r) => r.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch reviews:", err);
        setLoading(false);
      });
  }, []);

  // If loading or no reviews, we can hide the section or show a skeleton
  if (!loading && reviews.length === 0) return null;

  return (
    <section className="py-24 bg-obsidian relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-champagne">
            The Guest Registry
          </p>
          <h2 className="text-3xl md:text-5xl font-serif italic text-mist">
            Words from the{" "}
            <span className="gold-gradient-text">Connoisseurs</span>
          </h2>
        </div>

        {/* The Grid - Showing only the first 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.slice(0, 4).map((review) => (
            <div
              key={review._id}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-champagne/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < review.rating ? "text-champagne" : "text-white/10"}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                {/* Comment */}
                <p className="text-mist/80 font-light italic text-sm leading-relaxed mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs font-bold text-mist tracking-wide uppercase">
                  {review.name || "Guest"}
                </p>
                <p className="text-[10px] text-white/30 mt-1">Verified Visit</p>
              </div>
            </div>
          ))}
        </div>

        {/* "View All" Button */}
        <div className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-block border border-white/10 px-8 py-3 text-[10px] uppercase tracking-[0.3em] text-mist hover:bg-champagne hover:text-obsidian hover:border-champagne transition-all duration-300 rounded-lg"
          >
            View Full Registry
          </Link>
        </div>
      </div>
    </section>
  );
}

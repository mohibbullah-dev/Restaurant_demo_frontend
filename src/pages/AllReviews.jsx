import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Section from "../components/Section";

export default function AllReviews() {
  const [reviews, setReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/reviews/approved`)
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, []);

  // Filter logic: Search by name or comment content
  const filteredReviews = reviews.filter(
    (rev) =>
      rev.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.comment.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-obsidian pt-24">
      <Section
        title="The Guestbook"
        subtitle="A collection of shared moments and culinary reflections."
      >
        {/* Luxury Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <input
            type="text"
            placeholder="Search by guest or flavor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-8 text-sm text-mist outline-none focus:border-champagne/40 transition-all placeholder:text-smoke/30 italic"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-champagne/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {filteredReviews.length === 0 ? (
          <div className="text-center p-20 glass-gold rounded-[3rem]">
            <p className="text-mist/40 italic">
              No reflections match your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev) => (
              <div
                key={rev._id}
                className="glass-gold p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:border-champagne/20 transition-all duration-500"
              >
                <div>
                  <div className="text-champagne text-[10px] mb-4">
                    {"★".repeat(rev.rating)}
                  </div>
                  <p className="text-mist/80 italic text-sm leading-relaxed break-words">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-mist text-sm">
                      {rev.customerName}
                    </p>
                    <p className="text-[9px] text-smoke uppercase tracking-widest">
                      Verified Patron
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-champagne/10 flex items-center justify-center text-[10px] text-champagne font-black">
                    {rev.customerName.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}

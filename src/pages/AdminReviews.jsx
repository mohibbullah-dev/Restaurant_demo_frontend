import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Section from "../components/Section";
import { notify } from "../utils/toast";

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const r = await fetch(`${API_BASE}/api/reviews/admin/all`);
      const data = await r.json();
      setReviews(data);
    } catch (err) {
      notify.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const toggleApprove = async (id) => {
    await fetch(`${API_BASE}/api/reviews/admin/approve/${id}`, {
      method: "PATCH",
    });
    fetchReviews();
    notify.success("Visibility Updated");
  };

  const deleteReview = async (id) => {
    if (!window.confirm("Delete permanently?")) return;
    await fetch(`${API_BASE}/api/reviews/admin/${id}`, { method: "DELETE" });
    fetchReviews();
    notify.error("Review Deleted");
  };

  return (
    <Section
      title="Guest Feedback"
      subtitle="Moderate your restaurant testimonials."
    >
      {loading ? (
        <div className="text-center p-20 text-champagne animate-pulse">
          Syncing Registry...
        </div>
      ) : reviews.length === 0 ? (
        <div className="glass-gold p-20 rounded-[3rem] text-center border border-white/5">
          <p className="text-mist/50 italic">
            The guestbook is currently empty.
          </p>
          <p className="text-[10px] text-champagne uppercase mt-4 tracking-widest">
            Awaiting first submission
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {reviews.map((rev) => (
            <div
              key={rev._id}
              className="glass-gold p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center border border-white/5 gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${rev.isApproved ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`}
                  />
                  <h4 className="font-bold text-mist">{rev.customerName}</h4>
                  <div className="text-champagne text-xs">
                    {"★".repeat(rev.rating)}
                  </div>
                </div>
                <p className="text-smoke text-sm mt-2 font-light italic">
                  "{rev.comment}"
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleApprove(rev._id)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest ${rev.isApproved ? "bg-white/10 text-mist" : "bg-champagne text-obsidian"}`}
                >
                  {rev.isApproved ? "Hide" : "Approve"}
                </button>
                <button
                  onClick={() => deleteReview(rev._id)}
                  className="px-6 py-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/10 text-[10px] font-black uppercase tracking-widest"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

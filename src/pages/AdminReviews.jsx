import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Section from "../components/Section";
import { notify } from "../utils/toast";

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = () => {
    fetch(`${API_BASE}/api/reviews/admin/all`)
      .then((r) => r.json())
      .then(setReviews);
  };

  useEffect(() => fetchReviews(), []);

  const toggleApprove = async (id) => {
    await fetch(`${API_BASE}/api/reviews/admin/approve/${id}`, {
      method: "PATCH",
    });
    fetchReviews();
    notify.success("Status Updated");
  };

  const deleteReview = async (id) => {
    if (!window.confirm("Delete this review permanently?")) return;
    await fetch(`${API_BASE}/api/reviews/admin/${id}`, { method: "DELETE" });
    fetchReviews();
    notify.error("Review Removed");
  };

  return (
    <Section
      title="Review Moderation"
      subtitle="Approve guest feedback for the public gallery."
    >
      <div className="space-y-4">
        {reviews.map((rev) => (
          <div
            key={rev._id}
            className="glass-gold p-6 rounded-3xl flex justify-between items-center border border-white/5"
          >
            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full ${rev.isApproved ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`}
                ></span>
                <h4 className="font-bold text-mist">{rev.customerName}</h4>
                <span className="text-champagne text-xs">
                  {"★".repeat(rev.rating)}
                </span>
              </div>
              <p className="text-smoke text-sm mt-1">"{rev.comment}"</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleApprove(rev._id)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${rev.isApproved ? "bg-white/10 text-mist" : "bg-champagne text-obsidian"}`}
              >
                {rev.isApproved ? "Hide" : "Approve"}
              </button>
              <button
                onClick={() => deleteReview(rev._id)}
                className="px-4 py-2 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 text-[10px] font-black uppercase tracking-widest"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

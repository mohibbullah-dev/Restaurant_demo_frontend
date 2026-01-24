import { useState } from "react";
import { API_BASE } from "../config/api";
import { notify } from "../utils/toast";

export default function ReviewForm({ orderId, customerName }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          orderId,
          rating,
          comment,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        notify.success("Thank you! Your review is pending approval.");
      }
    } catch (err) {
      notify.error("Failed to submit review.");
    }
  };

  if (submitted)
    return (
      <div className="glass-gold p-8 rounded-3xl text-center border border-champagne/20">
        <p className="gold-gradient-text font-bold italic">
          Experience Shared.
        </p>
        <p className="text-xs text-smoke uppercase tracking-widest mt-2">
          Thank you for your feedback.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-gold p-8 rounded-[2.5rem] border border-white/5 space-y-6"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-mist">Rate your Experience</h3>
        <p className="text-[10px] text-smoke uppercase tracking-[0.2em] mt-1">
          Your feedback defines our excellence.
        </p>
      </div>

      {/* Star Selector */}
      <div className="flex justify-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-2xl transition-all ${star <= rating ? "text-champagne scale-110" : "text-white/10"}`}
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        required
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-mist outline-none focus:border-champagne/30 h-32 resize-none"
        placeholder="Share your thoughts on the flavors and service..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button className="w-full py-4 bg-champagne text-obsidian font-black uppercase text-[10px] tracking-[0.3em] rounded-xl hover:brightness-110 transition-all">
        Submit Review
      </button>
    </form>
  );
}

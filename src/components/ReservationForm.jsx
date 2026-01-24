import { useState } from "react";
import { API_BASE } from "../config/api";
import { notify } from "../utils/toast";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    guestName: "",
    phone: "",
    guests: 2,
    date: "",
    time: "",
    occasion: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // WhatsApp Integration
        const message = `*NEW RESERVATION*%0A%0A*Name:* ${formData.guestName}%0A*Guests:* ${formData.guests}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Occasion:* ${formData.occasion || "General Dining"}`;
        window.location.href = `https://wa.me/8801838153606?text=${message}`; // Using your contact [cite: 44]
        notify.success("Request Sent via WhatsApp");
      }
    } catch (err) {
      notify.error("Connection failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-gold p-8 md:p-12 rounded-[3rem] border border-white/5 space-y-6 max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-light text-white italic font-serif italic">
          Secure your <span className="gold-gradient-text">Table</span>
        </h3>
        <p className="text-[10px] text-smoke uppercase tracking-[0.4em] mt-2">
          VIP Concierge Service
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          required
          type="text"
          placeholder="Full Name"
          className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-mist outline-none focus:border-champagne/30"
          onChange={(e) =>
            setFormData({ ...formData, guestName: e.target.value })
          }
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-mist outline-none focus:border-champagne/30"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          required
          type="date"
          className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-mist outline-none focus:border-champagne/30"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          required
          type="time"
          className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-mist outline-none focus:border-champagne/30"
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
      </div>

      <select
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-mist outline-none focus:border-champagne/30"
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <option key={num} value={num} className="bg-obsidian">
            {num} Guests
          </option>
        ))}
      </select>

      <button className="w-full py-5 bg-champagne text-obsidian font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
        Confirm Reservation
      </button>
    </form>
  );
}

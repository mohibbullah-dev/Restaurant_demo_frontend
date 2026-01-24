import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Section from "../components/Section";
import { notify } from "../utils/toast";

export default function AdminReservations() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const r = await fetch(`${API_BASE}/api/reservations/admin/all`);
      const data = await r.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      notify.error("Failed to sync reservations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {
    if (!window.confirm("Remove this reservation?")) return;
    try {
      // Note: You may need to add a DELETE route in your backend reservationRoutes.js
      await fetch(`${API_BASE}/api/reservations/admin/${id}`, {
        method: "DELETE",
      });
      fetchBookings();
      notify.error("Reservation Removed");
    } catch (err) {
      notify.error("Action failed.");
    }
  };

  return (
    <Section
      title="Table Registry"
      subtitle="Manage upcoming VIP guest arrivals."
    >
      {loading ? (
        <div className="text-center p-20 text-champagne animate-pulse">
          Accessing Registry...
        </div>
      ) : bookings.length === 0 ? (
        <div className="glass-gold p-20 rounded-[3rem] text-center border border-white/5">
          <p className="text-mist/30 italic">No upcoming reservations found.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((res) => (
            <div
              key={res._id}
              className="glass-gold p-8 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center border border-white/5 gap-6 group hover:border-champagne/20 transition-all duration-500"
            >
              <div className="flex-1 flex items-center gap-6">
                <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white/5 border border-white/10 items-center justify-center flex-col">
                  <span className="text-champagne font-bold text-lg">
                    {res.guests}
                  </span>
                  <span className="text-[8px] text-smoke uppercase">
                    Guests
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-mist text-lg">
                      {res.guestName}
                    </h4>
                    <span className="px-3 py-1 bg-champagne/10 text-champagne text-[9px] rounded-full uppercase tracking-widest border border-champagne/20">
                      {res.occasion || "Dining"}
                    </span>
                  </div>
                  <p className="text-smoke text-sm mt-1 font-light italic">
                    {res.date} at {res.time} • {res.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <a
                  href={`https://wa.me/${res.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-center"
                >
                  Contact
                </a>
                <button
                  onClick={() => deleteBooking(res._id)}
                  className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/10 text-[10px] font-black uppercase tracking-widest"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

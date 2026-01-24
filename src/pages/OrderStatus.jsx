import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { formatPriceEGP } from "../utils/menu";

// Status sequence for the visual timeline
const statusSteps = [
  { id: "New", label: "Order Received", desc: "Awaiting confirmation" },
  { id: "Confirmed", label: "Confirmed", desc: "Preparing your experience" },
  {
    id: "Preparing",
    label: "In the Kitchen",
    desc: "Our artisans are at work",
  },
  { id: "Ready", label: "Ready", desc: "Prepared for service" },
  { id: "Completed", label: "Served", desc: "Enjoy your selection" },
];

export default function OrderStatus() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadOrder() {
    try {
      const res = await fetch(`${API_BASE}/api/orders/${id}`);
      const data = await res.json();
      if (res.ok) setOrder(data.order);
    } catch (err) {
      console.error("Tracking sync failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrder();
    const interval = setInterval(loadOrder, 15000); // Poll every 15s
    return () => clearInterval(interval);
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-champagne border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (!order)
    return (
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-display gold-gradient-text mb-4">
          Registry Entry Not Found
        </h2>
        <p className="text-smoke/50 text-sm mb-8">
          This reference number does not exist in our current records.
        </p>
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-champagne text-[10px] font-black uppercase tracking-widest"
        >
          Return to Atelier
        </Link>
      </div>
    );

  const currentStepIdx = statusSteps.findIndex((s) => s.id === order.status);

  return (
    <div className="pb-20 min-h-screen bg-obsidian">
      <Section
        title={
          <span className="gold-gradient-text italic font-display text-4xl">
            Live Status
          </span>
        }
        subtitle={`Reference: #${id.slice(-5).toUpperCase()}`}
      >
        {/* Progress Card */}
        <div className="glass rounded-[2.5rem] p-8 border border-white/5 shadow-2xl mb-8 relative overflow-hidden">
          {/* Pulsing Status Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-champagne/5 blur-[100px] animate-pulse" />

          <div className="relative z-10">
            <p className="text-[9px] uppercase tracking-[0.4em] text-champagne font-black mb-1">
              Current Phase
            </p>
            <h2 className="text-3xl font-bold text-mist tracking-tighter mb-10">
              {order.status === "Canceled"
                ? "Service Terminated"
                : statusSteps[currentStepIdx]?.label}
            </h2>

            {/* Visual Timeline */}
            {order.status !== "Canceled" ? (
              <div className="space-y-8">
                {statusSteps.map((step, idx) => {
                  const isPast = idx < currentStepIdx;
                  const isCurrent = idx === currentStepIdx;

                  return (
                    <div key={step.id} className="flex gap-6 items-start group">
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full border-2 transition-all duration-700 ${
                            isPast
                              ? "bg-champagne border-champagne"
                              : isCurrent
                                ? "bg-obsidian border-champagne scale-125 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                                : "bg-transparent border-white/10"
                          }`}
                        />
                        {idx !== statusSteps.length - 1 && (
                          <div
                            className={`w-[1px] h-12 transition-all duration-700 ${isPast ? "bg-champagne" : "bg-white/5"}`}
                          />
                        )}
                      </div>
                      <div
                        className={`transition-all duration-700 ${isCurrent ? "translate-x-2" : "opacity-40"}`}
                      >
                        <p
                          className={`text-[10px] font-black uppercase tracking-widest ${isCurrent ? "text-champagne" : "text-smoke"}`}
                        >
                          {step.label}
                        </p>
                        {isCurrent && (
                          <p className="text-[10px] text-smoke/50 italic mt-1">
                            {step.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-6 bg-barolo/10 border border-barolo/20 rounded-2xl">
                <p className="text-xs text-barolo font-bold uppercase tracking-widest">
                  Order Canceled
                </p>
                <p className="text-[10px] text-smoke/50 mt-1">
                  Please contact the concierge for assistance.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Order Details Accordion-style */}
        <div className="glass rounded-3xl p-6 border border-white/5 space-y-4">
          <p className="text-[9px] uppercase tracking-[0.3em] text-smoke/40 font-black">
            Selection Summary
          </p>
          <div className="space-y-3">
            {order.items.map((it) => (
              <div
                key={it._id}
                className="flex justify-between items-center text-xs"
              >
                <span className="text-smoke font-light">
                  <b className="text-champagne/80 mr-2">{it.qty}x</b> {it.name}
                </span>
                <span className="text-smoke/30 font-mono text-[10px]">
                  {formatPriceEGP(it.price * it.qty)}
                </span>
              </div>
            ))}
            <div className="pt-4 border-t border-white/5 flex justify-between">
              <span className="text-[10px] text-smoke uppercase tracking-widest font-black">
                Total Due
              </span>
              <span className="text-sm font-bold text-champagne">
                {formatPriceEGP(order.subtotal)}
              </span>
            </div>
          </div>
        </div>

        {/* Concierge Button */}
        <button
          onClick={() => window.open(`tel:${order.customerPhone}`)}
          className="w-full mt-8 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-all group"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-mist group-hover:text-champagne transition-colors">
            Contact Concierge
          </span>
        </button>
      </Section>
    </div>
  );
}

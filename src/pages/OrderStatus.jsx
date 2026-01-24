// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import Section from "../components/Section";
// import { API_BASE } from "../config/api";
// import { formatPriceEGP } from "../utils/menu";
// import ReviewForm from "../components/ReviewForm"; // Added Import

// // Status sequence for the visual timeline
// const statusSteps = [
//   { id: "New", label: "Order Received", desc: "Awaiting confirmation" },
//   { id: "Confirmed", label: "Confirmed", desc: "Preparing your experience" },
//   {
//     id: "Preparing",
//     label: "In the Kitchen",
//     desc: "Our artisans are at work",
//   },
//   { id: "Ready", label: "Ready", desc: "Prepared for service" },
//   { id: "Completed", label: "Served", desc: "Enjoy your selection" },
// ];

// export default function OrderStatus() {
//   const { id } = useParams();
//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function loadOrder() {
//     try {
//       const res = await fetch(`${API_BASE}/api/orders/${id}`);
//       const data = await res.json();
//       if (res.ok) setOrder(data.order);
//     } catch (err) {
//       console.error("Tracking sync failed");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     loadOrder();
//     const interval = setInterval(loadOrder, 15000); // Poll every 15s
//     return () => clearInterval(interval);
//   }, [id]);

//   if (loading)
//     return (
//       <div className="min-h-screen bg-obsidian flex items-center justify-center">
//         <div className="h-8 w-8 border-2 border-champagne border-t-transparent rounded-full animate-spin" />
//       </div>
//     );

//   // Replace your "if (!order)" block with this:
//   if (!order) {
//     return (
//       <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center p-6 text-center">
//         {/* 1. We show the error message */}
//         <h2 className="text-2xl gold-gradient-text mb-4 italic">
//           Registry Entry Not Found
//         </h2>

//         {/* 2. BUT we still show the form so you can TEST the feature! */}
//         <div className="w-full max-w-md mt-10 border-t border-white/5 pt-10">
//           <p className="text-[10px] text-champagne uppercase tracking-widest mb-6">
//             Submit a Test Review Below
//           </p>
//           <ReviewForm
//             orderId="65b123456789012345678901"
//             customerName="Test Guest"
//           />
//         </div>
//       </div>
//     );
//   }

//   const currentStepIdx = statusSteps.findIndex((s) => s.id === order.status);

//   return (
//     <div className="pb-20 min-h-screen bg-obsidian">
//       <Section
//         title={
//           <span className="gold-gradient-text italic font-display text-4xl">
//             Live Status
//           </span>
//         }
//         subtitle={`Reference: #${id.slice(-5).toUpperCase()}`}
//       >
//         {/* --- REVIEW FORM SECTION --- */}
//         {/* Only appears when the order is 'Completed' */}
//         {order.status === "Completed" && (
//           <div className="mb-12 animate-in fade-in slide-in-from-top-6 duration-1000">
//             <ReviewForm orderId={order._id} customerName={order.customerName} />
//           </div>
//         )}

//         {/* Progress Card */}
//         <div className="glass rounded-[2.5rem] p-8 border border-white/5 shadow-2xl mb-8 relative overflow-hidden">
//           <div className="absolute -top-24 -right-24 w-48 h-48 bg-champagne/5 blur-[100px] animate-pulse" />

//           <div className="relative z-10">
//             <p className="text-[9px] uppercase tracking-[0.4em] text-smoke font-black mb-1">
//               Current Phase
//             </p>
//             <h2 className="text-3xl font-bold text-mist tracking-tighter mb-10">
//               {order.status === "Canceled"
//                 ? "Service Terminated"
//                 : statusSteps[currentStepIdx]?.label}
//             </h2>

//             {order.status !== "Canceled" ? (
//               <div className="space-y-8">
//                 {statusSteps.map((step, idx) => {
//                   const isPast = idx < currentStepIdx;
//                   const isCurrent = idx === currentStepIdx;

//                   return (
//                     <div key={step.id} className="flex gap-6 items-start group">
//                       <div className="relative flex flex-col items-center">
//                         <div
//                           className={`w-3 h-3 rounded-full border-2 transition-all duration-700 ${
//                             isPast
//                               ? "bg-champagne border-champagne"
//                               : isCurrent
//                                 ? "bg-obsidian border-champagne scale-125 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
//                                 : "bg-transparent border-white/10"
//                           }`}
//                         />
//                         {idx !== statusSteps.length - 1 && (
//                           <div
//                             className={`w-[1px] h-12 transition-all duration-700 ${isPast ? "bg-champagne" : "bg-white/5"}`}
//                           />
//                         )}
//                       </div>
//                       <div
//                         className={`transition-all duration-700 ${isCurrent ? "translate-x-2" : "opacity-40"}`}
//                       >
//                         <p
//                           className={`text-[10px] font-black uppercase tracking-widest ${isCurrent ? "text-champagne" : "text-smoke"}`}
//                         >
//                           {step.label}
//                         </p>
//                         {isCurrent && (
//                           <p className="text-[10px] text-smoke/50 italic mt-1">
//                             {step.desc}
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="p-6 bg-barolo/10 border border-barolo/20 rounded-2xl">
//                 <p className="text-xs text-barolo font-bold uppercase tracking-widest">
//                   Order Canceled
//                 </p>
//                 <p className="text-[10px] text-smoke/50 mt-1">
//                   Please contact the concierge for assistance.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Order Details */}
//         <div className="glass rounded-3xl p-6 border border-white/5 space-y-4">
//           <p className="text-[9px] uppercase tracking-[0.3em] text-smoke/40 font-black">
//             Selection Summary
//           </p>
//           <div className="space-y-3">
//             {order.items.map((it) => (
//               <div
//                 key={it._id}
//                 className="flex justify-between items-center text-xs"
//               >
//                 <span className="text-smoke font-light">
//                   <b className="text-champagne/80 mr-2">{it.qty}x</b> {it.name}
//                 </span>
//                 <span className="text-smoke/30 font-mono text-[10px]">
//                   {formatPriceEGP(it.price * it.qty)}
//                 </span>
//               </div>
//             ))}
//             <div className="pt-4 border-t border-white/5 flex justify-between">
//               <span className="text-[10px] text-smoke uppercase tracking-widest font-black">
//                 Total Due
//               </span>
//               <span className="text-sm font-bold text-champagne">
//                 {formatPriceEGP(order.subtotal)}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Concierge Button */}
//         <button
//           onClick={() => window.open(`tel:${order.customerPhone}`)}
//           className="w-full mt-8 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-all group"
//         >
//           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-mist group-hover:text-champagne transition-colors">
//             Contact Concierge
//           </span>
//         </button>
//       </Section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { formatPriceEGP } from "../utils/menu";
import ReviewForm from "../components/ReviewForm";

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
  const [error, setError] = useState(false);

  async function loadOrder() {
    try {
      const res = await fetch(`${API_BASE}/api/orders/${id}`);
      const data = await res.json();
      if (res.ok && data.order) {
        setOrder(data.order);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrder();
    const interval = setInterval(loadOrder, 10000); // Check for updates every 10 seconds
    return () => clearInterval(interval);
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-champagne border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (error || !order)
    return (
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl gold-gradient-text mb-4 italic font-serif">
          Registry Entry Not Found
        </h2>
        <p className="text-smoke text-sm max-w-xs">
          We could not locate this order. Please ensure your link is correct or
          contact our concierge.
        </p>
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
        {/* Review Form: Only shows when order is actually Completed */}
        {order.status === "Completed" && (
          <div className="mb-12 animate-in fade-in slide-in-from-top-6 duration-1000">
            <ReviewForm orderId={order._id} customerName={order.customerName} />
          </div>
        )}

        <div className="glass rounded-[2.5rem] p-8 border border-white/5 shadow-2xl mb-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-champagne/5 blur-[100px]" />
          <div className="relative z-10 text-center sm:text-left">
            <p className="text-[9px] uppercase tracking-[0.4em] text-smoke font-black mb-1">
              Current Phase
            </p>
            <h2 className="text-3xl font-bold text-mist tracking-tighter mb-10">
              {order.status === "Canceled"
                ? "Service Terminated"
                : statusSteps[currentStepIdx]?.label}
            </h2>

            {order.status !== "Canceled" && (
              <div className="space-y-8">
                {statusSteps.map((step, idx) => {
                  const isPast = idx < currentStepIdx;
                  const isCurrent = idx === currentStepIdx;
                  return (
                    <div key={step.id} className="flex gap-6 items-start">
                      <div className="relative flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full border-2 transition-all duration-700 ${isPast ? "bg-champagne border-champagne" : isCurrent ? "bg-obsidian border-champagne shadow-[0_0_15px_rgba(212,175,55,0.5)]" : "bg-transparent border-white/10"}`}
                        />
                        {idx !== statusSteps.length - 1 && (
                          <div
                            className={`w-[1px] h-12 ${isPast ? "bg-champagne" : "bg-white/5"}`}
                          />
                        )}
                      </div>
                      <div className={isCurrent ? "opacity-100" : "opacity-40"}>
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
            )}
          </div>
        </div>

        {/* Order Items Summary */}
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
                <span className="text-smoke">
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
      </Section>
    </div>
  );
}

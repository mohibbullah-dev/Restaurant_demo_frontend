// import { useEffect, useMemo, useState } from "react";
// import Section from "../components/Section";
// import { API_BASE } from "../config/api";
// import { formatPriceEGP } from "../utils/menu";

// const statuses = [
//   "New",
//   "Confirmed",
//   "Preparing",
//   "Ready",
//   "Completed",
//   "Canceled",
// ];

// export default function AdminOrders() {
//   const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");

//   const authed = useMemo(() => token.trim().length > 0, [token]);

//   async function loadOrders(t = token) {
//     setError("");
//     const res = await fetch(`${API_BASE}/api/orders`, {
//       headers: { "x-admin-token": t },
//     });
//     const data = await res.json();
//     if (!res.ok) {
//       setError(data?.message || "Failed to load orders");
//       setOrders([]);
//       return;
//     }
//     setOrders(data.orders || []);
//   }

//   useEffect(() => {
//     if (authed) loadOrders();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [authed]);

//   async function updateStatus(id, status) {
//     const res = await fetch(`${API_BASE}/api/orders/${id}/status`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "x-admin-token": token,
//       },
//       body: JSON.stringify({ status }),
//     });
//     const data = await res.json();
//     if (!res.ok) {
//       alert(data?.message || "Failed to update status");
//       return;
//     }
//     setOrders((prev) => prev.map((o) => (o._id === id ? data.order : o)));
//   }

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section
//         title="Admin — Orders"
//         subtitle="Protected by admin token (simple demo auth)."
//       >
//         <div className="rounded-3xl border bg-white p-6">
//           <div className="flex flex-col md:flex-row gap-3 md:items-end md:justify-between">
//             <div className="flex-1">
//               <label className="text-sm text-gray-600">Admin Token</label>
//               <input
//                 value={token}
//                 onChange={(e) => setToken(e.target.value)}
//                 placeholder="Enter ADMIN_TOKEN from server .env"
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//               />
//               <div className="mt-2 flex gap-2">
//                 <button
//                   className="px-4 py-2 rounded-xl bg-black text-white"
//                   onClick={() => {
//                     localStorage.setItem("adminToken", token);
//                     loadOrders(token);
//                   }}
//                 >
//                   Save & Load
//                 </button>
//                 <button
//                   className="px-4 py-2 rounded-xl border"
//                   onClick={() => {
//                     localStorage.removeItem("adminToken");
//                     setToken("");
//                     setOrders([]);
//                   }}
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>

//             <button
//               className="px-4 py-2 rounded-xl border"
//               disabled={!authed}
//               onClick={() => loadOrders()}
//             >
//               Refresh
//             </button>
//           </div>

//           {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

//           <div className="mt-6 space-y-4">
//             {orders.length === 0 && !error && (
//               <p className="text-gray-600">No orders yet.</p>
//             )}

//             {orders.map((o) => (
//               <div key={o._id} className="rounded-2xl border p-4">
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
//                   <div>
//                     <p className="font-bold">
//                       {o.customerName} — {o.orderType}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {o.customerPhone} •{" "}
//                       {new Date(o.createdAt).toLocaleString()}
//                     </p>
//                     {o.orderType === "Delivery" && o.address && (
//                       <p className="text-sm text-gray-700 mt-1">
//                         📍 {o.address}
//                       </p>
//                     )}
//                     {o.notes && (
//                       <p className="text-sm text-gray-700 mt-1">📝 {o.notes}</p>
//                     )}
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <select
//                       value={o.status}
//                       onChange={(e) => updateStatus(o._id, e.target.value)}
//                       className="px-3 py-2 rounded-xl border"
//                     >
//                       {statuses.map((s) => (
//                         <option key={s} value={s}>
//                           {s}
//                         </option>
//                       ))}
//                     </select>
//                     <span className="font-bold">
//                       {formatPriceEGP(o.subtotal)}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-3 border-t pt-3 space-y-1">
//                   {o.items.map((it) => (
//                     <div key={it._id} className="flex justify-between text-sm">
//                       <span>
//                         {it.qty} × {it.name}
//                       </span>
//                       <span className="font-medium">
//                         {formatPriceEGP(it.qty * it.price)}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <p className="mt-2 text-xs text-gray-500">Order ID: {o._id}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import Section from "../components/Section";
// import { API_BASE } from "../config/api";
// import { authHeaders } from "../utils/auth";
// import { formatPriceEGP } from "../utils/menu";
// import { notify } from "../utils/toast";

// const statuses = [
//   "New",
//   "Confirmed",
//   "Preparing",
//   "Ready",
//   "Completed",
//   "Canceled",
// ];

// export default function AdminOrders() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");
//   const [lastCount, setLastCount] = useState(0);

//   async function loadOrders(firstLoad = false) {
//     setError("");
//     const res = await fetch(`${API_BASE}/api/orders`, {
//       headers: { ...authHeaders() },
//     });
//     const data = await res.json();

//     if (!res.ok) {
//       setError(data?.message || "Failed to load orders");
//       setOrders([]);
//       return;
//     }

//     const newOrders = data.orders || [];
//     setOrders(newOrders);

//     if (firstLoad) {
//       setLastCount(newOrders.length);
//       return;
//     }

//     // new order alert
//     if (newOrders.length > lastCount) {
//       // simple sound + title flash
//       try {
//         const audio = new Audio(
//           "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
//         );
//         audio.play();
//       } catch {}

//       document.title = "🛎 New Order!";
//       setTimeout(() => (document.title = "Admin — Orders"), 3000);
//     }

//     setLastCount(newOrders.length);
//   }

//   useEffect(() => {
//     loadOrders();
//   }, []);

//   async function updateStatus(id, status) {
//     const res = await fetch(`${API_BASE}/api/orders/${id}/status`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         ...authHeaders(),
//       },
//       body: JSON.stringify({ status }),
//     });
//     const data = await res.json();
//     if (!res.ok) return notify.error(data?.message || "Failed to update");

//     setOrders((prev) => prev.map((o) => (o._id === id ? data.order : o)));
//   }

//   useEffect(() => {
//     let timer;

//     async function init() {
//       await loadOrders(true);
//       timer = setInterval(() => loadOrders(false), 10000);
//     }

//     init();
//     return () => clearInterval(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section title="Admin — Orders" subtitle="View and update order status.">
//         <div className="rounded-3xl border bg-white p-6">
//           <div className="flex justify-end">
//             <button
//               className="px-4 py-2 rounded-xl border"
//               onClick={loadOrders}
//             >
//               Refresh
//             </button>
//           </div>

//           {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

//           <div className="mt-6 space-y-4">
//             {orders.length === 0 && !error && (
//               <p className="text-gray-600">No orders yet.</p>
//             )}

//             {orders.map((o) => (
//               <div key={o._id} className="rounded-2xl border p-4">
//                 <div className="flex flex-col md:flex-row md:justify-between gap-3">
//                   <div>
//                     <p className="font-bold">
//                       {o.customerName} — {o.orderType}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {o.customerPhone} •{" "}
//                       {new Date(o.createdAt).toLocaleString()}
//                     </p>
//                     {o.orderType === "Delivery" && o.address && (
//                       <p className="text-sm text-gray-700 mt-1">
//                         📍 {o.address}
//                       </p>
//                     )}
//                     {o.notes && (
//                       <p className="text-sm text-gray-700 mt-1">📝 {o.notes}</p>
//                     )}
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <select
//                       value={o.status}
//                       onChange={(e) => updateStatus(o._id, e.target.value)}
//                       className="px-3 py-2 rounded-xl border"
//                     >
//                       {statuses.map((s) => (
//                         <option key={s} value={s}>
//                           {s}
//                         </option>
//                       ))}
//                     </select>
//                     <span className="font-bold">
//                       {formatPriceEGP(o.subtotal)}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-3 border-t pt-3 space-y-1">
//                   {o.items.map((it) => (
//                     <div key={it._id} className="flex justify-between text-sm">
//                       <span>
//                         {it.qty} × {it.name}
//                       </span>
//                       <span className="font-medium">
//                         {formatPriceEGP(it.qty * it.price)}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <p className="mt-2 text-xs text-gray-500">Order ID: {o._id}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";
import { formatPriceEGP } from "../utils/menu";
import { notify } from "../utils/toast";

const statuses = [
  "New",
  "Confirmed",
  "Preparing",
  "Ready",
  "Completed",
  "Canceled",
];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadOrders() {
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        headers: { ...authHeaders() },
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Failed to load orders");
        setOrders([]);
        return;
      }

      setOrders(data.orders || []);
    } catch (err) {
      setError("Sync failed");
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id, status) {
    const res = await fetch(`${API_BASE}/api/orders/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (!res.ok) return notify.error(data?.message || "Update failed");

    setOrders((prev) => prev.map((o) => (o._id === id ? data.order : o)));
    notify.success(`Status: ${status}`);
  }

  useEffect(() => {
    loadOrders();
    const timer = setInterval(loadOrders, 10000);
    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (s) => {
    switch (s) {
      case "New":
        return "text-champagne border-champagne/30 bg-champagne/5";
      case "Completed":
        return "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
      case "Canceled":
        return "text-barolo border-barolo/20 bg-barolo/5";
      default:
        return "text-mist border-white/10 bg-white/5";
    }
  };

  return (
    <div className="pb-24 min-h-screen">
      <Section
        title={<span className="gold-gradient-text">Order Management</span>}
        subtitle="Real-time control of the dining floor."
      >
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-smoke font-bold">
              Live Feed
            </span>
          </div>
          <button
            className="px-5 py-2 rounded-xl glass border-white/10 text-mist text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
            onClick={loadOrders}
          >
            Refresh
          </button>
        </div>

        {error && (
          <div className="glass-gold border-barolo/30 p-4 rounded-2xl mb-8 text-center text-barolo text-sm italic">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {orders.length === 0 && !loading && (
            <div className="lg:col-span-2 py-32 text-center glass rounded-[3rem] border-dashed border-white/5">
              <p className="text-smoke italic opacity-40 tracking-wide text-lg">
                No active service records found.
              </p>
            </div>
          )}

          {orders.map((o) => (
            <div
              key={o._id}
              className="relative glass rounded-[2.5rem] p-8 border-white/5 hover:border-champagne/20 transition-all duration-700 shadow-3xl overflow-hidden group"
            >
              {/* Subtle light sweep effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-mist tracking-tight group-hover:gold-gradient-text transition-all duration-500">
                      {o.customerName}
                    </h3>
                    <div className="flex gap-3 text-[10px] uppercase tracking-widest font-bold text-smoke">
                      <span className="text-champagne/80">{o.orderType}</span>
                      <span className="opacity-30">|</span>
                      <span>
                        {new Date(o.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-obsidian/40 p-1.5 rounded-2xl border border-white/5">
                    <select
                      value={o.status}
                      onChange={(e) => updateStatus(o._id, e.target.value)}
                      className={`appearance-none bg-transparent text-[10px] font-black uppercase tracking-widest outline-none px-4 py-2 rounded-xl cursor-pointer border ${getStatusColor(o.status)}`}
                    >
                      {statuses.map((s) => (
                        <option
                          key={s}
                          value={s}
                          className="bg-obsidian text-mist"
                        >
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="text-xl font-display font-bold gold-gradient-text pr-3">
                      {formatPriceEGP(o.subtotal)}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {(o.address || o.notes) && (
                    <div className="grid gap-2 text-xs text-smoke bg-white/5 p-4 rounded-3xl border border-white/5 italic">
                      {o.address && <p>📍 {o.address}</p>}
                      {o.notes && <p>📝 {o.notes}</p>}
                    </div>
                  )}

                  <div className="bg-obsidian/60 rounded-3xl border border-white/5 overflow-hidden">
                    <div className="px-5 py-3 bg-white/5 text-[9px] uppercase tracking-[0.3em] text-smoke font-bold border-b border-white/5">
                      Collection Details
                    </div>
                    <div className="p-5 space-y-3">
                      {o.items.map((it) => (
                        <div
                          key={it._id}
                          className="flex justify-between items-center"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-champagne font-bold text-xs bg-champagne/10 w-7 h-7 flex items-center justify-center rounded-lg">
                              {it.qty}
                            </span>
                            <span className="text-mist text-sm font-medium">
                              {it.name}
                            </span>
                          </div>
                          <span className="text-smoke/50 text-xs font-mono">
                            {formatPriceEGP(it.qty * it.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[9px] text-smoke/20 uppercase tracking-[0.4em]">
                    Reference: {o._id.slice(-8)}
                  </span>
                  <div className="text-[10px] text-smoke font-bold uppercase tracking-widest">
                    {o.customerPhone}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

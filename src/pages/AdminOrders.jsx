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

import Section from "../components/Section";
import { useSettings } from "../context/SettingsContext";
import { notify } from "../utils/toast";

export default function AdminSettings() {
  const { settings, updateSettings } = useSettings();

  const handleToggle = async (key, value) => {
    try {
      await updateSettings({ [key]: value });
      notify.success("Environment Updated");
    } catch (err) {
      notify.error("Update failed");
    }
  };

  const ControlBox = ({ title, description, children }) => (
    <div className="glass-gold rounded-4xl p-8 border-white/5 relative overflow-hidden group">
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-champagne/5 blur-3xl rounded-full group-hover:bg-champagne/10 transition-all"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <h3 className="text-xl font-bold text-mist tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-smoke italic opacity-70 mt-1">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="pb-24">
      <Section
        title={<span className="gold-gradient-text">System Configuration</span>}
        subtitle="Fine-tune the operational parameters of your establishment."
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Restaurant Status */}
          <ControlBox
            title="Operational Status"
            description="Control whether guests can view the menu and place new orders."
          >
            <button
              onClick={() => handleToggle("isOpen", !settings.isOpen)}
              className={`relative flex items-center w-32 h-12 rounded-2xl transition-all duration-500 p-1 ${
                settings.isOpen
                  ? "bg-emerald-500/20 border border-emerald-500/30"
                  : "bg-barolo/20 border border-barolo/30"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 transform ${
                  settings.isOpen
                    ? "translate-x-20 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    : "translate-x-0 bg-barolo shadow-[0_0_15px_rgba(139,0,0,0.5)]"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              </div>
              <span
                className={`absolute left-0 right-0 text-center text-[10px] font-black uppercase tracking-widest ${
                  settings.isOpen
                    ? "pr-10 text-emerald-400"
                    : "pl-10 text-barolo"
                }`}
              >
                {settings.isOpen ? "Open" : "Closed"}
              </span>
            </button>
          </ControlBox>

          {/* Ordering Mode */}
          <ControlBox
            title="Service Protocol"
            description="Choose the preferred method for guests to submit their selections."
          >
            <div className="flex gap-2 p-1.5 bg-obsidian/60 rounded-2xl border border-white/5">
              {["Direct", "WhatsApp"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => handleToggle("orderMode", mode)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    settings.orderMode === mode
                      ? "bg-gradient-to-r from-champagne to-bronze text-obsidian shadow-lg"
                      : "text-smoke hover:text-mist"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </ControlBox>

          {/* Analytics/Info Footer */}
          <div className="pt-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-smoke font-bold">
                System Version 4.1.18 Stable
              </span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

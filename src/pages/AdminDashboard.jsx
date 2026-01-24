// import Section from "../components/Section";
// import { clearToken } from "../utils/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { API_BASE } from "../config/api";
// import { authHeaders } from "../utils/auth";
// import { notify } from "../utils/toast";

// export default function AdminDashboard() {
//   const nav = useNavigate();

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section
//         title="Admin"
//         subtitle="Manage menu, orders, and restaurant status."
//       >
//         <div className="rounded-3xl border bg-white p-6 space-y-4">
//           <div className="flex flex-wrap gap-2">
//             <Link className="px-4 py-2 rounded-xl border" to="/admin/menu">
//               Menu Management
//             </Link>
//             <Link className="px-4 py-2 rounded-xl border" to="/admin/orders">
//               Orders
//             </Link>
//             <Link className="px-4 py-2 rounded-xl border" to="/admin/settings">
//               Settings
//             </Link>
//           </div>

//           <button
//             className="px-4 py-2 rounded-xl border"
//             onClick={async () => {
//               if (
//                 !confirm(
//                   "Reset demo data? This deletes all orders and resets menu.",
//                 )
//               )
//                 return;

//               const res = await fetch(`${API_BASE}/api/admin/reset-demo`, {
//                 method: "POST",
//                 headers: { ...authHeaders() },
//               });
//               const data = await res.json();
//               if (!res.ok) return notify.error(data?.message || "Reset failed");
//               notify.success("Demo reset done ✅");
//             }}
//           >
//             Reset Demo Data
//           </button>

//           <button
//             className="px-4 py-2 rounded-xl border"
//             onClick={() => {
//               clearToken();
//               nav("/admin/login");
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       </Section>
//     </div>
//   );
// }

// import Section from "../components/Section";
// import { clearToken } from "../utils/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { API_BASE } from "../config/api";
// import { authHeaders } from "../utils/auth";
// import { notify } from "../utils/toast";

// export default function AdminDashboard() {
//   const nav = useNavigate();

//   const menuItems = [
//     {
//       title: "Manage Menu",
//       subtitle: "Update items & prices",
//       to: "/admin/menu",
//       icon: "🍽️",
//       color: "bg-orange-50 text-orange-600",
//     },
//     {
//       title: "Live Orders",
//       subtitle: "Track incoming requests",
//       to: "/admin/orders",
//       icon: "📥",
//       color: "bg-blue-50 text-blue-600",
//     },
//     {
//       title: "Store Settings",
//       subtitle: "Open/Close & QR Codes",
//       to: "/admin/settings",
//       icon: "⚙️",
//       color: "bg-gray-50 text-gray-600",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8F9FA] pb-24 md:pb-12">
//       <Section title="Business Hub" subtitle="Real-time restaurant management">
//         {/* Main Navigation Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//           {menuItems.map((item, idx) => (
//             <Link
//               key={idx}
//               to={item.to}
//               className="group bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all active:scale-95"
//             >
//               <div
//                 className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
//               >
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
//               <p className="text-sm text-gray-500">{item.subtitle}</p>
//             </Link>
//           ))}
//         </div>

//         {/* Quick Actions Footer */}
//         <div className="mt-8 flex flex-col md:flex-row gap-4">
//           <button
//             onClick={async () => {
//               if (!confirm("Reset demo data?")) return;
//               const res = await fetch(`${API_BASE}/api/admin/reset-demo`, {
//                 method: "POST",
//                 headers: { ...authHeaders() },
//               });
//               if (res.ok) notify.success("System Reset Complete");
//             }}
//             className="flex-1 bg-white border border-red-100 text-red-500 py-4 rounded-2xl font-semibold hover:bg-red-50 transition-colors"
//           >
//             Reset Demo Environment
//           </button>

//           <button
//             onClick={() => {
//               clearToken();
//               nav("/admin/login");
//             }}
//             className="flex-1 bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors shadow-lg"
//           >
//             Secure Logout
//           </button>
//         </div>
//       </Section>
//     </div>
//   );
// }

// import Section from "../components/Section";
// import { clearToken } from "../utils/auth";
// import { useNavigate, Link } from "react-router-dom";
// import { API_BASE } from "../config/api";
// import { authHeaders } from "../utils/auth";
// import { notify } from "../utils/toast";

// export default function AdminDashboard() {
//   const nav = useNavigate();

//   const menuCards = [
//     {
//       title: "Menu Management",
//       path: "/admin/menu",
//       desc: "Curate your collection",
//       icon: "🍴",
//     },
//     {
//       title: "Live Orders",
//       path: "/admin/orders",
//       desc: "Monitor guest requests",
//       icon: "🔔",
//     },
//     {
//       title: "System Settings",
//       path: "/admin/settings",
//       desc: "Adjust restaurant flow",
//       icon: "⚙️",
//     },
//   ];

//   return (
//     <div className="pb-24 md:pb-10 min-h-screen">
//       <Section
//         title={<span className="gold-gradient-text">Command Center</span>}
//         subtitle="Precision control over your luxury establishment."
//       >
//         {/* Main Grid Navigation */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           {menuCards.map((card) => (
//             <Link
//               key={card.path}
//               to={card.path}
//               className="group relative glass-gold p-8 rounded-4xl border-white/5 hover:border-champagne/40 transition-all duration-500 overflow-hidden"
//             >
//               {/* Decorative background glow on hover */}
//               <div className="absolute -inset-px bg-gradient-to-br from-champagne/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//               <div className="relative z-10">
//                 <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
//                   {card.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-mist mb-2 group-hover:text-champagne transition-colors">
//                   {card.title}
//                 </h3>
//                 <p className="text-sm text-smoke opacity-70 italic">
//                   {card.desc}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Action Bar: Secondary Controls */}
//         <div className="glass rounded-4xl p-8 border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 rounded-2xl bg-velvet border border-white/10 flex items-center justify-center text-champagne font-bold">
//               HQ
//             </div>
//             <div>
//               <h4 className="font-bold text-mist">System Maintenance</h4>
//               <p className="text-xs text-smoke opacity-60">
//                 Update data & sessions
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
//             <button
//               className="flex-1 md:flex-none px-8 py-3 rounded-2xl border border-barolo/30 text-barolo hover:bg-barolo/10 text-xs font-bold uppercase tracking-widest transition-all"
//               onClick={async () => {
//                 if (
//                   !confirm(
//                     "Reset demo data? This deletes all orders and resets menu.",
//                   )
//                 )
//                   return;
//                 const res = await fetch(`${API_BASE}/api/admin/reset-demo`, {
//                   method: "POST",
//                   headers: { ...authHeaders() },
//                 });
//                 const data = await res.json();
//                 if (!res.ok)
//                   return notify.error(data?.message || "Reset failed");
//                 notify.success("Environment Restored ✅");
//               }}
//             >
//               Reset Data
//             </button>

//             <button
//               className="flex-1 md:flex-none px-8 py-3 rounded-2xl bg-white/5 text-mist hover:bg-white/10 text-xs font-bold uppercase tracking-widest transition-all border border-white/5"
//               onClick={() => {
//                 clearToken();
//                 nav("/admin/login");
//               }}
//             >
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

import Section from "../components/Section";
import { clearToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";
import { notify } from "../utils/toast";

export default function AdminDashboard() {
  const nav = useNavigate();

  const menuCards = [
    {
      title: "Menu Management",
      path: "/admin/menu",
      desc: "Curate your collection",
      icon: "🍴",
    },
    {
      title: "Live Orders",
      path: "/admin/orders",
      desc: "Monitor guest requests",
      icon: "🔔",
    },
    {
      title: "Table Registry",
      path: "/admin/reservations",
      desc: "Manage VIP bookings",
      icon: "📅",
    },
    {
      title: "Guest Feedback",
      path: "/admin/reviews",
      desc: "Moderate public reviews",
      icon: "💬",
    },
    {
      title: "System Settings",
      path: "/admin/settings",
      desc: "Adjust restaurant flow",
      icon: "⚙️",
    },
  ];

  return (
    <div className="pb-24 md:pb-10 min-h-screen">
      <Section
        title={<span className="gold-gradient-text">Command Center</span>}
        subtitle="Precision control over your luxury establishment."
      >
        {/* Main Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuCards.map((card) => (
            <Link
              key={card.path}
              to={card.path}
              className="group relative glass-gold p-8 rounded-4xl border-white/5 hover:border-champagne/40 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Decorative background glow on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-champagne/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-mist mb-2 group-hover:text-champagne transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-smoke opacity-70 italic">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Bar: Secondary Controls */}
        <div className="glass rounded-4xl p-8 border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-champagne font-bold">
              HQ
            </div>
            <div>
              <h4 className="font-bold text-mist">System Maintenance</h4>
              <p className="text-xs text-smoke opacity-60">
                Update data & sessions
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <button
              className="flex-1 md:flex-none px-8 py-3 rounded-2xl border border-red-500/30 text-red-500/70 hover:bg-red-500/10 text-xs font-bold uppercase tracking-widest transition-all"
              onClick={async () => {
                if (
                  !confirm(
                    "Reset demo data? This deletes all orders and resets menu.",
                  )
                )
                  return;
                const res = await fetch(`${API_BASE}/api/admin/reset-demo`, {
                  method: "POST",
                  headers: { ...authHeaders() },
                });
                const data = await res.json();
                if (!res.ok)
                  return notify.error(data?.message || "Reset failed");
                notify.success("Environment Restored ✅");
              }}
            >
              Reset Data
            </button>

            <button
              className="flex-1 md:flex-none px-8 py-3 rounded-2xl bg-white/5 text-mist hover:bg-white/10 text-xs font-bold uppercase tracking-widest transition-all border border-white/5"
              onClick={() => {
                clearToken();
                nav("/admin/login");
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

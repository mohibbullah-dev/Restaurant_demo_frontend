// import { useEffect, useState } from "react";
// import Section from "../components/Section";
// import { API_BASE } from "../config/api";
// import { authHeaders } from "../utils/auth";
// import { notify } from "../utils/toast";

// export default function AdminSettings() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [notice, setNotice] = useState("");
//   const [deliveryFee, setDeliveryFee] = useState(0);
//   const [minimumOrder, setMinimumOrder] = useState(0);

//   async function load() {
//     try {
//       const res = await fetch(`${API_BASE}/api/settings`);
//       const data = await res.json();

//       setIsOpen(data?.settings?.isOpen ?? true);
//       setNotice(data?.settings?.notice ?? "");
//       setDeliveryFee(Number(data?.settings?.deliveryFee ?? 0));
//       setMinimumOrder(Number(data?.settings?.minimumOrder ?? 0));
//     } catch (error) {
//       notify.error("Failed to load settings");
//     }
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   async function save() {
//     try {
//       const payload = {
//         isOpen,
//         notice,
//         deliveryFee: Number(deliveryFee) || 0,
//         minimumOrder: Number(minimumOrder) || 0,
//       };

//       const res = await fetch(`${API_BASE}/api/settings`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json", ...authHeaders() },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       if (!res.ok) return notify.error(data?.message || "Save failed");

//       notify.success("Saved");
//       // optional refresh (keeps UI synced with server)
//       setDeliveryFee(
//         Number(data?.settings?.deliveryFee ?? payload.deliveryFee),
//       );
//       setMinimumOrder(
//         Number(data?.settings?.minimumOrder ?? payload.minimumOrder),
//       );
//     } catch (e) {
//       notify.error("Save failed");
//     }
//   }

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section
//         title="Admin — Settings"
//         subtitle="Control restaurant availability and notice."
//       >
//         <div className="max-w-2xl rounded-3xl border bg-white p-6 space-y-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="font-bold">Restaurant status</p>
//               <p className="text-sm text-gray-600">
//                 If closed, customers should see a clear banner.
//               </p>
//             </div>

//             <button
//               className={`px-4 py-2 rounded-xl border ${
//                 isOpen ? "bg-white" : "bg-black text-white"
//               }`}
//               onClick={() => setIsOpen((v) => !v)}
//             >
//               {isOpen ? "Open" : "Closed"}
//             </button>
//           </div>

//           <div>
//             <label className="text-sm text-gray-600">Notice (optional)</label>
//             <input
//               className="mt-1 w-full px-4 py-3 rounded-2xl border"
//               value={notice}
//               onChange={(e) => setNotice(e.target.value)}
//               placeholder="Closed for maintenance, back at 6 PM..."
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-3">
//             <div>
//               <label className="text-sm text-gray-600">Delivery Fee</label>
//               <input
//                 type="number"
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border"
//                 value={deliveryFee}
//                 onChange={(e) => setDeliveryFee(e.target.value)}
//                 placeholder="0"
//                 min="0"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">
//                 Minimum Order (Delivery)
//               </label>
//               <input
//                 type="number"
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border"
//                 value={minimumOrder}
//                 onChange={(e) => setMinimumOrder(e.target.value)}
//                 placeholder="0"
//                 min="0"
//               />
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <button
//               className="flex-1 py-3 rounded-2xl bg-black text-white"
//               onClick={save}
//             >
//               Save
//             </button>
//             <button className="flex-1 py-3 rounded-2xl border" onClick={load}>
//               Refresh
//             </button>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

// import Section from "../components/Section";
// import { useSettings } from "../context/SettingsContext";

// export default function AdminSettings() {
//   const { settings, updateSettings } = useSettings();

//   const ControlPanel = ({ title, children }) => (
//     <div className="glass-gold rounded-3xl p-6 border-white/5 mb-6">
//       <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-champagne mb-6 opacity-80">
//         {title}
//       </h3>
//       {children}
//     </div>
//   );

//   return (
//     <div className="pb-20">
//       <Section
//         title={<span className="gold-gradient-text">Settings</span>}
//         subtitle="Configure the environment and operational status."
//       >
//         <div className="max-w-3xl mx-auto">
//           {/* Operational Status */}
//           <ControlPanel title="Operations">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-mist font-bold">Restaurant Status</p>
//                 <p className="text-xs text-smoke italic">
//                   Allowing new orders to be placed
//                 </p>
//               </div>
//               <button
//                 onClick={() => updateSettings({ isOpen: !settings.isOpen })}
//                 className={`px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all ${
//                   settings.isOpen
//                     ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
//                     : "bg-barolo/10 text-barolo border border-barolo/20"
//                 }`}
//               >
//                 {settings.isOpen ? "Open for Business" : "Currently Closed"}
//               </button>
//             </div>
//           </ControlPanel>

//           {/* Ordering Mode */}
//           <ControlPanel title="Service Mode">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-mist font-bold">Dine-In Orders</p>
//                 <p className="text-xs text-smoke italic">
//                   Customers order via QR code
//                 </p>
//               </div>
//               <div className="flex gap-2 bg-obsidian/40 p-1 rounded-xl border border-white/5">
//                 {["Direct", "WhatsApp"].map((mode) => (
//                   <button
//                     key={mode}
//                     onClick={() => updateSettings({ orderMode: mode })}
//                     className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-tighter transition-all ${
//                       settings.orderMode === mode
//                         ? "bg-champagne text-obsidian shadow-lg"
//                         : "text-smoke hover:text-mist"
//                     }`}
//                   >
//                     {mode}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </ControlPanel>
//         </div>
//       </Section>
//     </div>
//   );
// }

import Section from "../components/Section";
import { useSettings } from "../context/SettingsContext";

export default function AdminSettings() {
  const { settings, updateSettings } = useSettings();

  // Safety check: if context isn't ready, show a loading state
  if (!settings)
    return (
      <div className="p-20 text-center animate-pulse text-champagne">
        Initializing Atelier...
      </div>
    );

  const ControlPanel = ({ title, children }) => (
    <div className="glass-gold rounded-3xl p-8 border-white/5 mb-8">
      <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-champagne mb-8 opacity-60">
        {title}
      </h3>
      {children}
    </div>
  );

  return (
    <div className="pb-20 min-h-screen bg-obsidian">
      <Section
        title={
          <span className="gold-gradient-text italic font-display">
            Management
          </span>
        }
        subtitle="Configure the environment and operational status."
      >
        <div className="max-w-3xl mx-auto">
          {/* Operational Status */}
          <ControlPanel title="Operations">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-mist font-bold text-lg">Restaurant Status</p>
                <p className="text-xs text-smoke italic mt-1">
                  {settings.isOpen
                    ? "Allowing new orders to be placed"
                    : "Orders are currently disabled"}
                </p>
              </div>
              <button
                // Fixed: Added safety check to ensure updateSettings is a function
                onClick={() =>
                  typeof updateSettings === "function" &&
                  updateSettings({ isOpen: !settings.isOpen })
                }
                className={`px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl ${
                  settings.isOpen
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                    : "bg-barolo/20 text-red-500 border border-barolo/40 hover:bg-barolo/30"
                }`}
              >
                {settings.isOpen ? "● Open for Business" : "○ Currently Closed"}
              </button>
            </div>
          </ControlPanel>

          {/* Ordering Mode */}
          <ControlPanel title="Service Mode">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-mist font-bold text-lg">Dine-In Orders</p>
                <p className="text-xs text-smoke italic mt-1">
                  Control how customers interact with the menu
                </p>
              </div>
              <div className="flex gap-2 bg-black/40 p-1.5 rounded-2xl border border-white/5 w-full md:w-auto">
                {["Direct", "WhatsApp"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() =>
                      typeof updateSettings === "function" &&
                      updateSettings({ orderMode: mode })
                    }
                    className={`flex-1 md:flex-none px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      settings.orderMode === mode
                        ? "bg-champagne text-obsidian shadow-lg"
                        : "text-smoke hover:text-mist hover:bg-white/5"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
          </ControlPanel>
        </div>
      </Section>
    </div>
  );
}

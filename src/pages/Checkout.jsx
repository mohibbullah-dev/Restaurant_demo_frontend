// import { useEffect, useMemo, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Section from "../components/Section";
// import { useCart } from "../context/CartContext";
// import { restaurant } from "../config/restaurant";
// import { formatPriceEGP } from "../utils/menu";
// import { buildWhatsAppOrderMessage, toWhatsAppUrl } from "../utils/whatsapp";
// import { API_BASE } from "../config/api";
// import { notify } from "../utils/toast";

// export default function Checkout() {
//   const cart = useCart();
//   const navigate = useNavigate();

//   const [customerName, setCustomerName] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [orderType, setOrderType] = useState("Pickup"); // Pickup | Delivery | Dine-in
//   const [address, setAddress] = useState("");
//   const [notes, setNotes] = useState("");

//   // ✅ settings (fetched locally so we don't touch other files)
//   const [settings, setSettings] = useState({
//     isOpen: true,
//     notice: "",
//     deliveryFee: 0,
//     minimumOrder: 0,
//   });

//   // If cart empty, push back to menu
//   useEffect(() => {
//     if (cart.items.length === 0) navigate("/menu");
//   }, [cart.items.length, navigate]);

//   // Load settings
//   useEffect(() => {
//     fetch(`${API_BASE}/api/settings`)
//       .then((r) => r.json())
//       .then((d) => {
//         const s = d?.settings || {};
//         setSettings({
//           isOpen: s.isOpen ?? true,
//           notice: s.notice ?? "",
//           deliveryFee: Number(s.deliveryFee ?? 0),
//           minimumOrder: Number(s.minimumOrder ?? 0),
//         });
//       })
//       .catch(() => {
//         // keep defaults
//       });
//   }, []);

//   const isDelivery = orderType === "Delivery";

//   const subtotal = Number(cart.subtotal || 0);
//   const deliveryFee = isDelivery ? Number(settings.deliveryFee || 0) : 0;
//   const minimumOrder = Number(settings.minimumOrder || 0);
//   const total = subtotal + deliveryFee;

//   const belowMinimum =
//     isDelivery && minimumOrder > 0 && subtotal < minimumOrder;

//   const canSend = useMemo(() => {
//     if (!customerName.trim()) return false;
//     if (!customerPhone.trim()) return false;
//     if (isDelivery && !address.trim()) return false;
//     if (belowMinimum) return false;
//     if (!settings.isOpen) return false;
//     return cart.items.length > 0;
//   }, [
//     customerName,
//     customerPhone,
//     isDelivery,
//     address,
//     cart.items.length,
//     belowMinimum,
//     settings.isOpen,
//   ]);

//   async function onSendWhatsApp() {
//     if (!settings.isOpen) {
//       notify.error("Restaurant is closed right now");
//       return;
//     }
//     if (belowMinimum) {
//       notify.error(
//         `Minimum order for delivery is ${formatPriceEGP(minimumOrder)}`,
//       );
//       return;
//     }

//     const payload = {
//       customerName: customerName.trim(),
//       customerPhone: customerPhone.trim(),
//       orderType,
//       address: address.trim(),
//       notes,
//       items: cart.items.map((i) => ({
//         _id: i._id,
//         name: i.name,
//         price: i.price,
//         qty: i.qty,
//       })),
//       subtotal,
//       // ✅ include these (good for DB + admin view later)
//       deliveryFee,
//       total,
//     };

//     // 1) Save order to DB
//     const res = await fetch(`${API_BASE}/api/orders`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     if (!res.ok) {
//       notify.error(data?.message || "Failed to create order");
//       return;
//     }

//     // 2) Build WhatsApp message (keep your existing util, append fee/total)
//     let msg =
//       buildWhatsAppOrderMessage({
//         restaurantName: restaurant.name,
//         customerName: payload.customerName,
//         customerPhone: payload.customerPhone,
//         orderType: payload.orderType,
//         address: payload.address,
//         notes: payload.notes,
//         items: cart.items,
//         subtotal,
//       }) + `\n`;

//     if (isDelivery && deliveryFee > 0) {
//       msg += `\nDelivery Fee: ${formatPriceEGP(deliveryFee)}`;
//     }
//     msg += `\nTotal: ${formatPriceEGP(total)}`;

//     msg += `\n\nOrder ID: ${data.order._id}`;

//     const url = toWhatsAppUrl(restaurant.whatsappPhone, msg);

//     // 3) Clear cart and open WhatsApp
//     cart.clear();
//     window.open(url, "_blank", "noreferrer");
//   }

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section
//         title="Checkout"
//         subtitle="Confirm details and send the order on WhatsApp."
//       >
//         {/* Closed warning */}
//         {!settings.isOpen && (
//           <div className="mb-4 rounded-2xl border bg-white p-4 text-sm">
//             <p className="font-semibold">We are currently closed.</p>
//             <p className="text-gray-600">
//               {settings.notice ? settings.notice : "Please check back soon."}
//             </p>
//           </div>
//         )}

//         <div className="grid lg:grid-cols-2 gap-6">
//           {/* FORM */}
//           <div className="rounded-3xl border bg-white p-6">
//             <h3 className="text-xl font-bold">Customer details</h3>

//             <div className="mt-4 space-y-3">
//               <div>
//                 <label className="text-sm text-gray-600">Name</label>
//                 <input
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                   placeholder="Your name"
//                   className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-600">Phone</label>
//                 <input
//                   value={customerPhone}
//                   onChange={(e) => setCustomerPhone(e.target.value)}
//                   placeholder="+20..."
//                   className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-600">Order type</label>
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {["Pickup", "Delivery", "Dine-in"].map((t) => (
//                     <button
//                       key={t}
//                       type="button"
//                       onClick={() => setOrderType(t)}
//                       className={`px-4 py-2 rounded-full border text-sm ${
//                         orderType === t ? "bg-black text-white" : "bg-white"
//                       }`}
//                     >
//                       {t}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {isDelivery && (
//                 <>
//                   <div>
//                     <label className="text-sm text-gray-600">
//                       Delivery address
//                     </label>
//                     <input
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       placeholder="Street, building, area..."
//                       className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </div>

//                   {/* Minimum order message */}
//                   {belowMinimum && (
//                     <p className="text-sm text-red-600">
//                       Minimum order for delivery is{" "}
//                       {formatPriceEGP(minimumOrder)}.
//                     </p>
//                   )}
//                 </>
//               )}

//               <div>
//                 <label className="text-sm text-gray-600">
//                   Notes (optional)
//                 </label>
//                 <textarea
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   placeholder="No onions, extra sauce, etc."
//                   rows={3}
//                   className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//                 />
//               </div>
//             </div>

//             <div className="mt-6 flex gap-2">
//               <Link
//                 to="/menu"
//                 className="flex-1 text-center py-3 rounded-2xl border font-medium"
//               >
//                 Back to menu
//               </Link>

//               <button
//                 disabled={!canSend}
//                 onClick={onSendWhatsApp}
//                 className="flex-1 py-3 rounded-2xl bg-black text-white font-medium disabled:bg-gray-300"
//               >
//                 Send on WhatsApp
//               </button>
//             </div>

//             {!canSend && (
//               <p className="mt-3 text-sm text-gray-600">
//                 Fill required fields. Delivery orders must meet minimum order.
//               </p>
//             )}
//           </div>

//           {/* ORDER SUMMARY */}
//           <div className="rounded-3xl border bg-white p-6">
//             <h3 className="text-xl font-bold">Order summary</h3>

//             <div className="mt-4 space-y-3">
//               {cart.items.map((i) => (
//                 <div
//                   key={i._id}
//                   className="flex items-start justify-between gap-3"
//                 >
//                   <div>
//                     <p className="font-semibold">
//                       {i.qty} × {i.name}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {formatPriceEGP(i.price)} each
//                     </p>
//                   </div>
//                   <p className="font-semibold">
//                     {formatPriceEGP(i.qty * i.price)}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 border-t pt-4 space-y-2">
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className="font-semibold">
//                   {formatPriceEGP(subtotal)}
//                 </span>
//               </div>

//               {isDelivery && deliveryFee > 0 && (
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-600">Delivery fee</span>
//                   <span className="font-semibold">
//                     {formatPriceEGP(deliveryFee)}
//                   </span>
//                 </div>
//               )}

//               <div className="flex items-center justify-between border-t pt-3">
//                 <span className="text-gray-600 font-semibold">Total</span>
//                 <span className="text-2xl font-bold">
//                   {formatPriceEGP(total)}
//                 </span>
//               </div>
//             </div>

//             <p className="mt-3 text-sm text-gray-600">
//               This demo sends orders via WhatsApp (fastest conversion for local
//               restaurants).
//             </p>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "../components/Section";
import { useCart } from "../context/CartContext";
import { restaurant } from "../config/restaurant";
import { formatPriceEGP } from "../utils/menu";
import { buildWhatsAppOrderMessage, toWhatsAppUrl } from "../utils/whatsapp";
import { API_BASE } from "../config/api";
import { notify } from "../utils/toast";

export default function Checkout() {
  const cart = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState("Pickup");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [settings, setSettings] = useState({
    isOpen: true,
    notice: "",
    deliveryFee: 0,
    minimumOrder: 0,
  });

  useEffect(() => {
    if (cart.items.length === 0) navigate("/menu");
  }, [cart.items.length, navigate]);

  useEffect(() => {
    fetch(`${API_BASE}/api/settings`)
      .then((r) => r.json())
      .then((d) => {
        const s = d?.settings || {};
        setSettings({
          isOpen: s.isOpen ?? true,
          notice: s.notice ?? "",
          deliveryFee: Number(s.deliveryFee ?? 0),
          minimumOrder: Number(s.minimumOrder ?? 0),
        });
      })
      .catch(() => {});
  }, []);

  const isDelivery = orderType === "Delivery";
  const subtotal = Number(cart.subtotal || 0);
  const deliveryFee = isDelivery ? Number(settings.deliveryFee || 0) : 0;
  const minimumOrder = Number(settings.minimumOrder || 0);
  const total = subtotal + deliveryFee;
  const belowMinimum =
    isDelivery && minimumOrder > 0 && subtotal < minimumOrder;

  const canSend = useMemo(() => {
    if (!customerName.trim()) return false;
    if (!customerPhone.trim()) return false;
    if (isDelivery && !address.trim()) return false;
    if (belowMinimum) return false;
    if (!settings.isOpen) return false;
    return cart.items.length > 0;
  }, [
    customerName,
    customerPhone,
    isDelivery,
    address,
    cart.items.length,
    belowMinimum,
    settings.isOpen,
  ]);

  async function onSendWhatsApp() {
    if (!settings.isOpen) return notify.error("Restaurant is closed");
    if (belowMinimum)
      return notify.error(
        `Minimum for delivery is ${formatPriceEGP(minimumOrder)}`,
      );

    const payload = {
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      orderType,
      address: address.trim(),
      notes,
      items: cart.items.map((i) => ({
        _id: i._id,
        name: i.name,
        price: i.price,
        qty: i.qty,
      })),
      subtotal,
      deliveryFee,
      total,
    };

    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Order failed");

      let msg =
        buildWhatsAppOrderMessage({
          restaurantName: restaurant.name,
          customerName: payload.customerName,
          customerPhone: payload.customerPhone,
          orderType: payload.orderType,
          address: payload.address,
          notes: payload.notes,
          items: cart.items,
          subtotal,
        }) + `\n`;

      if (isDelivery && deliveryFee > 0)
        msg += `\nDelivery Fee: ${formatPriceEGP(deliveryFee)}`;
      msg += `\nTotal: ${formatPriceEGP(total)}\n\nOrder ID: ${data.order._id}`;

      const url = toWhatsAppUrl(restaurant.whatsappPhone, msg);
      cart.clear();
      window.open(url, "_blank", "noreferrer");
    } catch (err) {
      notify.error(err.message);
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-mist placeholder:text-white/10 outline-none focus:border-champagne/40 focus:bg-white/10 transition-all";

  return (
    <div className="pb-24 bg-obsidian min-h-screen text-mist">
      <Section
        title={
          <span className="gold-gradient-text italic">Finalize Order</span>
        }
        subtitle="Review your selection and confirm your details."
      >
        {/* Closed Warning */}
        {!settings.isOpen && (
          <div className="mb-8 rounded-[2rem] border border-red-500/20 bg-red-500/5 p-6 text-center animate-pulse">
            <p className="font-bold text-red-400 uppercase tracking-widest text-xs">
              Atelier is Currently Closed
            </p>
            <p className="text-mist/60 text-sm mt-1">
              {settings.notice || "We are not accepting orders at this time."}
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* LEFT: FORM (3/5 width) */}
          <div className="lg:col-span-3 glass-gold rounded-[2.5rem] border-white/5 p-8 md:p-12 relative overflow-hidden">
            <h3 className="text-2xl font-bold tracking-tighter mb-8">
              Personal Details
            </h3>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                    Full Name
                  </label>
                  <input
                    className={inputClass}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                    Phone Number
                  </label>
                  <input
                    className={inputClass}
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+20..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                  Service Type
                </label>
                <div className="flex gap-3 p-1 bg-black/40 border border-white/5 rounded-2xl">
                  {["Pickup", "Delivery", "Dine-in"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setOrderType(t)}
                      className={`flex-1 py-3 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all ${
                        orderType === t
                          ? "bg-champagne text-obsidian shadow-lg"
                          : "text-smoke hover:text-mist"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {isDelivery && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                    Delivery Address
                  </label>
                  <input
                    className={inputClass}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Building, Street, Area..."
                  />
                  {belowMinimum && (
                    <p className="text-[10px] text-red-400 font-bold ml-2 uppercase tracking-tight">
                      * Minimum order for delivery is{" "}
                      {formatPriceEGP(minimumOrder)}
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                  Special Requests
                </label>
                <textarea
                  className={`${inputClass} h-24 resize-none`}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Allergies, door code, or extra napkins..."
                />
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY (2/5 width) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-gold rounded-[2.5rem] border-white/5 p-8 relative overflow-hidden">
              <h3 className="text-xl font-bold tracking-tighter mb-6">
                Summary
              </h3>

              <div className="space-y-4 max-h-[40vh] overflow-auto pr-2 custom-scrollbar">
                {cart.items.map((i) => (
                  <div
                    key={i._id}
                    className="flex justify-between items-center group"
                  >
                    <div>
                      <p className="text-sm font-bold text-mist group-hover:text-champagne transition-colors">
                        {i.qty} × {i.name}
                      </p>
                      <p className="text-[10px] text-smoke uppercase tracking-widest">
                        {formatPriceEGP(i.price)}
                      </p>
                    </div>
                    <span className="font-bold text-mist">
                      {formatPriceEGP(i.qty * i.price)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="flex justify-between text-xs uppercase tracking-widest text-smoke">
                  <span>Subtotal</span>
                  <span className="text-mist">{formatPriceEGP(subtotal)}</span>
                </div>
                {isDelivery && deliveryFee > 0 && (
                  <div className="flex justify-between text-xs uppercase tracking-widest text-smoke">
                    <span>Delivery Fee</span>
                    <span className="text-mist">
                      {formatPriceEGP(deliveryFee)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-end pt-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-champagne font-black">
                    Total Due
                  </span>
                  <span className="text-3xl font-bold tracking-tighter text-mist leading-none">
                    {formatPriceEGP(total)}
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  disabled={!canSend}
                  onClick={onSendWhatsApp}
                  className="w-full py-6 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.4em] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-champagne/20 disabled:opacity-20 disabled:grayscale"
                >
                  Send via WhatsApp
                </button>
                <Link
                  to="/menu"
                  className="block w-full text-center py-3 text-[10px] uppercase tracking-widest text-smoke hover:text-mist font-bold transition-colors"
                >
                  Modify Selection
                </Link>
              </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-center">
              <p className="text-[9px] uppercase tracking-[0.2em] text-smoke font-bold">
                Direct connection to our concierge
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

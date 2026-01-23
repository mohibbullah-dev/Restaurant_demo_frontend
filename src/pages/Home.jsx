// import Section from "../components/Section";
// import { restaurant } from "../config/restaurant";
// import { useEffect, useState } from "react";
// import { API_BASE } from "../config/api";
// import MenuItemCard from "../components/MenuItemCard";
// import { useCart } from "../context/CartContext";

// const featured = [
//   {
//     name: "Classic Burger",
//     desc: "Juicy beef patty, cheese, house sauce.",
//     price: "120 EGP",
//   },
//   {
//     name: "Chicken Shawarma",
//     desc: "Tender chicken, garlic sauce, pickles.",
//     price: "95 EGP",
//   },
//   {
//     name: "Margherita Pizza",
//     desc: "Tomato, mozzarella, fresh basil.",
//     price: "150 EGP",
//   },
//   {
//     name: "Fresh Lemon Mint",
//     desc: "Cold, refreshing, made to order.",
//     price: "45 EGP",
//   },
// ];

// export default function Home() {
//   const [featured, setFeatured] = useState([]);
//   const cart = useCart();

//   useEffect(() => {
//     fetch(`${API_BASE}/api/menu?featured=true`)
//       .then((r) => r.json())
//       .then((d) => setFeatured(d.items || []))
//       .catch(() => setFeatured([]));
//   }, []);

//   return (
//     <div className="pb-24 md:pb-0">
//       {/* HERO */}
//       <div className="bg-gradient-to-b from-gray-50 to-white border-b">
//         <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <p className="text-sm text-gray-600">
//                 Open today • Fast pickup • WhatsApp ordering
//               </p>

//               <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
//                 {restaurant.tagline}
//               </h1>

//               <p className="mt-4 text-gray-600 max-w-xl">
//                 A clean restaurant website + digital menu + WhatsApp ordering
//                 that brings customers from Google Maps into real orders.
//               </p>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <a
//                   href="#menu"
//                   className="px-5 py-3 rounded-2xl bg-black text-white font-medium"
//                 >
//                   View Menu
//                 </a>
//                 <a
//                   href={`https://wa.me/${restaurant.whatsappPhone}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-5 py-3 rounded-2xl border font-medium"
//                 >
//                   Order on WhatsApp
//                 </a>
//               </div>

//               <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600">
//                 <span className="px-3 py-1 rounded-full border">
//                   No apps needed
//                 </span>
//                 <span className="px-3 py-1 rounded-full border">
//                   Mobile-first
//                 </span>
//                 <span className="px-3 py-1 rounded-full border">
//                   Easy admin
//                 </span>
//               </div>
//             </div>

//             {/* Fake image block (replace later with real photos) */}
//             <div className="rounded-3xl border bg-white p-6">
//               <div className="rounded-2xl bg-gray-100 h-64 md:h-80 flex items-center justify-center text-gray-500">
//                 Food Photo / Slider
//               </div>
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 <div className="h-20 rounded-xl bg-gray-100" />
//                 <div className="h-20 rounded-xl bg-gray-100" />
//                 <div className="h-20 rounded-xl bg-gray-100" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FEATURED */}
//       <Section
//         id="menu"
//         title="Featured dishes"
//         subtitle="A quick section to hook customers before they scroll the full menu."
//       >
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {featured.map((item) => (
//             <MenuItemCard
//               key={item._id}
//               item={item}
//               onAdd={(it) => {
//                 cart.add(it);
//                 cart.open();
//               }}
//             />
//           ))}

//           {featured.length === 0 && (
//             <div className="text-gray-600">
//               No featured items yet. Mark items as featured in Admin → Menu.
//             </div>
//           )}
//         </div>
//       </Section>

//       {/* INFO STRIP */}
//       <div className="border-y bg-white">
//         <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-4">
//           <div className="rounded-2xl border p-4">
//             <p className="text-sm text-gray-600">Phone</p>
//             <a className="font-semibold" href={`tel:${restaurant.phone}`}>
//               {restaurant.phone}
//             </a>
//           </div>
//           <div className="rounded-2xl border p-4">
//             <p className="text-sm text-gray-600">Address</p>
//             <p className="font-semibold">{restaurant.addressLine}</p>
//           </div>
//           <div className="rounded-2xl border p-4">
//             <p className="text-sm text-gray-600">Order</p>
//             <a
//               className="font-semibold"
//               href={`https://wa.me/${restaurant.whatsappPhone}`}
//               target="_blank"
//               rel="noreferrer"
//             >
//               WhatsApp ordering
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* HOURS + MAP */}
//       <Section
//         title="Hours & Location"
//         subtitle="Make it easy for customers to visit or call."
//       >
//         <div className="grid lg:grid-cols-2 gap-6">
//           <div className="rounded-3xl border p-6 bg-white">
//             <h3 className="text-xl font-bold">Opening hours</h3>
//             <div className="mt-4 space-y-2">
//               {restaurant.hours.map((h) => (
//                 <div
//                   key={h.day}
//                   className="flex items-center justify-between text-sm"
//                 >
//                   <span className="text-gray-600">{h.day}</span>
//                   <span className="font-medium">{h.time}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 flex gap-3">
//               <a
//                 href={`tel:${restaurant.phone}`}
//                 className="flex-1 text-center py-3 rounded-2xl border font-medium"
//               >
//                 Call
//               </a>
//               <a
//                 href={`https://wa.me/${restaurant.whatsappPhone}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex-1 text-center py-3 rounded-2xl bg-black text-white font-medium"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </div>

//           <div className="rounded-3xl border overflow-hidden bg-white">
//             <iframe
//               title="map"
//               src={restaurant.mapEmbedUrl}
//               className="w-full h-80 lg:h-full"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </Section>

//       {/* FINAL CTA */}
//       <Section
//         title="Order in 1 minute"
//         subtitle="Customers don’t want to download apps. WhatsApp ordering converts fast."
//       >
//         <div className="rounded-3xl border p-8 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//           <div>
//             <h3 className="text-2xl font-bold">Ready to place an order?</h3>
//             <p className="mt-2 text-gray-600">
//               Send your order on WhatsApp and we’ll confirm instantly.
//             </p>
//           </div>
//           <a
//             href={`https://wa.me/${restaurant.whatsappPhone}`}
//             target="_blank"
//             rel="noreferrer"
//             className="px-6 py-3 rounded-2xl bg-black text-white font-medium"
//           >
//             Order on WhatsApp
//           </a>
//         </div>
//       </Section>
//     </div>
//   );
// }

// import Section from "../components/Section";
// import { restaurant } from "../config/restaurant";
// import { useEffect, useState } from "react";
// import { API_BASE } from "../config/api";
// import MenuItemCard from "../components/MenuItemCard";
// import { useCart } from "../context/CartContext";

// export default function Home() {
//   const [featured, setFeatured] = useState([]);
//   const cart = useCart();

//   useEffect(() => {
//     fetch(`${API_BASE}/api/menu?featured=true`)
//       .then((r) => r.json())
//       .then((d) => setFeatured(d.items || []))
//       .catch(() => setFeatured([]));
//   }, []);

//   return (
//     <div className="pb-24">
//       {/* HERO SECTION */}
//       <div className="relative overflow-hidden bg-obsidian pt-16 pb-20 md:pt-24 md:pb-32">
//         {/* Background Ambient Glows */}
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-champagne/10 blur-[120px] rounded-full"></div>
//         <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-bronze/10 blur-[100px] rounded-full"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/5">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//                 </span>
//                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-champagne/80">
//                   Open for Service • Elite Experience
//                 </p>
//               </div>

//               <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] gold-gradient-text tracking-tighter">
//                 {restaurant.tagline}
//               </h1>

//               <p className="text-mist/70 text-lg md:text-xl max-w-xl font-light leading-relaxed">
//                 Elevating the digital dining journey. Experience seamless
//                 ordering through our curated menu and direct WhatsApp concierge.
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 <a
//                   href="#menu"
//                   className="px-8 py-4 rounded-2xl bg-gradient-to-r from-champagne to-bronze text-obsidian font-black uppercase text-xs tracking-widest shadow-lg shadow-champagne/10 hover:scale-[1.05] transition-all"
//                 >
//                   Explore Collection
//                 </a>
//                 <a
//                   href={`https://wa.me/${restaurant.whatsappPhone}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-8 py-4 rounded-2xl glass border-white/10 text-mist font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all"
//                 >
//                   WhatsApp Concierge
//                 </a>
//               </div>
//             </div>

//             {/* HERO VISUAL STACK */}
//             <div className="relative">
//               <div className="glass-gold rounded-[3rem] p-4 border-white/10 shadow-3xl">
//                 <div className="rounded-[2.5rem] bg-obsidian/40 overflow-hidden h-[400px] md:h-[500px] relative group">
//                   <div className="absolute inset-0 flex items-center justify-center text-champagne/20 italic font-display text-2xl tracking-widest">
//                     Gastronomy Visuals
//                   </div>
//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
//                 </div>
//               </div>

//               {/* Floating Decorative Badge */}
//               <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl border-white/10 shadow-2xl hidden md:block animate-bounce-slow">
//                 <p className="text-champagne font-black text-2xl">100%</p>
//                 <p className="text-[8px] text-mist/50 uppercase tracking-widest">
//                   Premium Quality
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FEATURED COLLECTION */}
//       <Section
//         id="menu"
//         title={<span className="gold-gradient-text">Featured Selection</span>}
//         subtitle="A curated preview of our master chef's current seasonal highlights."
//       >
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featured.map((item) => (
//             <MenuItemCard
//               key={item._id}
//               item={item}
//               onAdd={(it) => {
//                 cart.add(it);
//                 cart.open();
//               }}
//             />
//           ))}

//           {featured.length === 0 && (
//             <div className="col-span-full py-20 text-center glass rounded-4xl border-dashed border-white/5">
//               <p className="text-smoke italic opacity-60">
//                 Preparing the collection...
//               </p>
//             </div>
//           )}
//         </div>
//       </Section>

//       {/* QUICK CONTACT STRIP */}
//       <div className="py-12 border-y border-white/5 bg-obsidian/40 backdrop-blur-md">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//           {[
//             {
//               label: "Direct Line",
//               val: restaurant.phone,
//               link: `tel:${restaurant.phone}`,
//             },
//             { label: "Our Atelier", val: restaurant.addressLine, link: null },
//             {
//               label: "Digital Order",
//               val: "WhatsApp Priority",
//               link: `https://wa.me/${restaurant.whatsappPhone}`,
//             },
//           ].map((info, i) => (
//             <div key={i} className="group cursor-default">
//               <p className="text-[10px] uppercase tracking-[0.3em] text-champagne font-bold mb-1">
//                 {info.label}
//               </p>
//               {info.link ? (
//                 <a
//                   href={info.link}
//                   className="text-mist font-medium hover:text-champagne transition-colors"
//                 >
//                   {info.val}
//                 </a>
//               ) : (
//                 <p className="text-mist font-medium">{info.val}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* HOURS & LOCATION */}
//       <Section
//         title={<span className="gold-gradient-text">Hours & Location</span>}
//         subtitle="Join us at our physical location for the full sensory experience."
//       >
//         <div className="grid lg:grid-cols-2 gap-8">
//           <div className="glass-gold rounded-[2.5rem] p-10 border-white/5 flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-bold text-mist mb-8 tracking-tight">
//                 Operating Hours
//               </h3>
//               <div className="space-y-4">
//                 {restaurant.hours.map((h) => (
//                   <div
//                     key={h.day}
//                     className="flex items-center justify-between group"
//                   >
//                     <span className="text-smoke group-hover:text-mist transition-colors">
//                       {h.day}
//                     </span>
//                     <div className="h-px flex-1 mx-4 bg-white/5"></div>
//                     <span className="font-bold text-mist">{h.time}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-12 grid grid-cols-2 gap-4">
//               <a
//                 href={`tel:${restaurant.phone}`}
//                 className="py-4 text-center rounded-2xl glass border-white/10 text-mist text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
//               >
//                 Call Now
//               </a>
//               <a
//                 href={`https://wa.me/${restaurant.whatsappPhone}`}
//                 className="py-4 text-center rounded-2xl bg-champagne text-obsidian text-[10px] font-black uppercase tracking-widest shadow-lg shadow-champagne/20 transition-all"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </div>

//           <div className="rounded-[2.5rem] glass border border-white/5 overflow-hidden h-[450px] relative">
//             <iframe
//               title="map"
//               src={restaurant.mapEmbedUrl}
//               className="absolute inset-0 w-full h-full grayscale invert opacity-70 contrast-125"
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//         </div>
//       </Section>

//       {/* FINAL CTA */}
//       <div className="max-w-6xl mx-auto px-6 mt-12 mb-20">
//         <div className="glass-gold rounded-[3rem] p-12 md:p-16 border-white/10 text-center relative overflow-hidden group">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>

//           <div className="relative z-10 max-w-2xl mx-auto space-y-6">
//             <h3 className="text-3xl md:text-5xl font-bold gold-gradient-text tracking-tighter">
//               Ready for the collection?
//             </h3>
//             <p className="text-smoke italic">
//               Skip the downloads. Order via WhatsApp in under 60 seconds.
//             </p>
//             <div className="pt-6">
//               <a
//                 href={`https://wa.me/${restaurant.whatsappPhone}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block px-12 py-5 rounded-2xl bg-gradient-to-r from-champagne to-bronze text-obsidian font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
//               >
//                 Send Order Request
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Section from "../components/Section";
// import { restaurant } from "../config/restaurant";
// import { useEffect, useState } from "react";
// import { API_BASE } from "../config/api";
// import MenuItemCard from "../components/MenuItemCard";
// import { useCart } from "../context/CartContext";

// export default function Home() {
//   const [featured, setFeatured] = useState([]);
//   const cart = useCart();

//   useEffect(() => {
//     fetch(`${API_BASE}/api/menu?featured=true`)
//       .then((r) => r.json())
//       .then((d) => setFeatured(d.items || []))
//       .catch(() => setFeatured([]));
//   }, []);

//   return (
//     <div className="pb-24 bg-obsidian text-mist">
//       {/* PROFESSIONAL CINEMATIC HERO */}
//       <div className="relative min-h-[90vh] flex items-center overflow-hidden">
//         {/* The Background Image - Use a high-quality dark restaurant/food photo */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
//             alt="Luxury Dining"
//             className="w-full h-full object-cover opacity-50 scale-105"
//           />
//           {/* Gradients to blend the image into the site colors */}
//           <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent"></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
//           <div className="max-w-3xl space-y-10">
//             {/* Status Badge */}
//             <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/10 animate-fade-in">
//               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></span>
//               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-champagne">
//                 Service Experience Live
//               </p>
//             </div>

//             {/* Typography */}
//             <div className="space-y-4">
//               <h1 className="text-6xl md:text-[7rem] font-display font-bold leading-[0.85] tracking-tighter italic">
//                 Fresh food,
//                 <br />
//                 <span className="gold-gradient-text">great taste.</span>
//               </h1>
//               <p className="text-lg md:text-xl text-smoke/80 font-light max-w-xl leading-relaxed">
//                 Experience a new era of digital gastronomy. Explore our curated
//                 collection and order directly via our WhatsApp concierge.
//               </p>
//             </div>

//             {/* Primary Action Suite */}
//             <div className="flex flex-wrap gap-5 pt-4">
//               <a
//                 href="#menu"
//                 className="group relative px-10 py-5 overflow-hidden rounded-2xl bg-champagne text-obsidian font-black uppercase text-xs tracking-widest transition-all hover:scale-105 active:scale-95"
//               >
//                 <span className="relative z-10">Explore Menu</span>
//                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//               </a>

//               <a
//                 href={`https://wa.me/${restaurant.whatsappPhone}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-10 py-5 rounded-2xl glass border-white/10 text-mist font-black uppercase text-xs tracking-widest hover:bg-white/5 transition-all flex items-center gap-3"
//               >
//                 WhatsApp Order
//               </a>
//             </div>

//             {/* Quick Metrics */}
//             <div className="flex gap-10 pt-10 border-t border-white/5 max-w-sm">
//               <div>
//                 <p className="text-xl font-bold text-mist">100%</p>
//                 <p className="text-[9px] uppercase tracking-widest text-smoke font-bold">
//                   Premium Quality
//                 </p>
//               </div>
//               <div>
//                 <p className="text-xl font-bold text-mist">15m</p>
//                 <p className="text-[9px] uppercase tracking-widest text-smoke font-bold">
//                   Average Prep
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Floating Abstract Element */}
//         <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:block">
//           <div className="h-full w-full glass border-l border-white/5 backdrop-blur-3xl flex items-center justify-center">
//             <div className="rotate-90 origin-center text-[10rem] font-black opacity-[0.02] pointer-events-none select-none">
//               GASTRONOMY
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FEATURED COLLECTION */}
//       <Section
//         id="menu"
//         title={
//           <span className="gold-gradient-text italic">Chef's Signature</span>
//         }
//         subtitle="The definitive selection of our finest seasonal items."
//       >
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {featured.map((item) => (
//             <MenuItemCard
//               key={item._id}
//               item={item}
//               onAdd={(it) => {
//                 cart.add(it);
//                 cart.open();
//               }}
//             />
//           ))}
//           {featured.length === 0 && (
//             <div className="col-span-full py-20 text-center glass rounded-[3rem] border-dashed border-white/5">
//               <p className="text-smoke italic opacity-40">
//                 Syncing the kitchen collection...
//               </p>
//             </div>
//           )}
//         </div>
//       </Section>

//       {/* INFO ARCHITECTURE */}
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 mb-20">
//         <div className="glass-gold rounded-[3rem] p-12 border-white/10 flex flex-col justify-between aspect-video">
//           <h3 className="text-3xl font-bold tracking-tight italic">
//             Our Atelier
//           </h3>
//           <p className="text-smoke text-sm mb-8 leading-relaxed">
//             {restaurant.addressLine}
//           </p>
//           <div className="flex gap-4">
//             <a
//               href={`tel:${restaurant.phone}`}
//               className="text-xs font-black uppercase tracking-widest text-champagne border-b border-champagne pb-1"
//             >
//               Call Concierge
//             </a>
//           </div>
//         </div>

//         <div className="glass rounded-[3rem] p-12 border-white/5 aspect-video overflow-hidden">
//           <h3 className="text-3xl font-bold tracking-tight italic mb-8">
//             Hours
//           </h3>
//           <div className="space-y-3">
//             {restaurant.hours.slice(0, 3).map((h) => (
//               <div
//                 key={h.day}
//                 className="flex justify-between text-xs uppercase tracking-[0.2em] text-smoke border-b border-white/5 pb-2"
//               >
//                 <span>{h.day}</span>
//                 <span className="text-mist font-bold">{h.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FOOTER CALL TO ACTION */}
//       <div className="max-w-5xl mx-auto px-6 mb-20">
//         <div className="relative glass p-16 rounded-[4rem] border-white/5 text-center overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne to-transparent opacity-50"></div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">
//             Ready to Begin?
//           </h2>
//           <p className="text-smoke mb-10 max-w-md mx-auto italic font-light">
//             Join the elite circle of diners who value precision and taste.
//           </p>
//           <a
//             href={`https://wa.me/${restaurant.whatsappPhone}`}
//             className="inline-block px-12 py-5 rounded-full bg-mist text-obsidian font-black uppercase text-[10px] tracking-[0.3em] hover:bg-champagne transition-all"
//           >
//             Start WhatsApp Order
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
import Section from "../components/Section";
import { restaurant } from "../config/restaurant";
import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import MenuItemCard from "../components/MenuItemCard";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const cart = useCart();

  useEffect(() => {
    fetch(`${API_BASE}/api/menu?featured=true`)
      .then((r) => r.json())
      .then((d) => setFeatured(d.items || []))
      .catch(() => setFeatured([]));
  }, []);

  return (
    <div className="bg-obsidian selection:bg-champagne selection:text-obsidian min-h-screen">
      {/* 1. CINEMATIC HERO WITH IMAGE BG */}
      <div className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden">
        {/* THE BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Atmosphere"
            className="w-full h-full object-cover scale-110 animate-slow-zoom brightness-[0.6]"
          />
          {/* Professional Gradient Masks */}
          {/* Left-to-Right: Darkens the text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent"></div>
          {/* Bottom-to-Top: Blends into the next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl space-y-10">
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10 backdrop-blur-md animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-pulse"></span>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-champagne">
                Now Accepting Reservations
              </p>
            </div>

            {/* Main Typography Architecture */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-[8rem] font-display font-bold leading-[0.85] tracking-tight text-mist">
                Fresh ingredients.
                <br />
                <span className="gold-gradient-text italic font-serif">
                  Masterful taste.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-smoke/90 font-light max-w-xl leading-relaxed">
                Experience a new era of digital gastronomy. Explore our curated
                collection and order directly via our WhatsApp concierge.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <a
                href="#menu"
                className="group relative px-10 py-5 overflow-hidden rounded-2xl bg-champagne text-obsidian font-black uppercase text-[10px] tracking-[0.3em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-champagne/10"
              >
                <span className="relative z-10">View Collection</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <a
                href={`https://wa.me/${restaurant.whatsappPhone}`}
                target="_blank"
                rel="noreferrer"
                className="px-10 py-5 rounded-2xl glass border-white/10 text-mist font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white/5 transition-all flex items-center gap-3"
              >
                WhatsApp Order
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="flex gap-12 pt-12 border-t border-white/5 max-w-md opacity-60">
              <div>
                <p className="text-xl font-bold text-mist">100%</p>
                <p className="text-[8px] uppercase tracking-widest text-smoke font-black">
                  Organic Source
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-mist">60m</p>
                <p className="text-[8px] uppercase tracking-widest text-smoke font-black">
                  Delivery Max
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-mist">Chef</p>
                <p className="text-[8px] uppercase tracking-widest text-smoke font-black">
                  Curated Menu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. FEATURED SECTION */}
      <Section
        id="menu"
        title={
          <span className="gold-gradient-text italic font-serif">
            Signature Dishes
          </span>
        }
        subtitle="A selection of our most celebrated culinary masterpieces."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((item) => (
            <MenuItemCard
              key={item._id}
              item={item}
              onAdd={(it) => {
                cart.add(it);
                cart.open();
              }}
            />
          ))}
          {featured.length === 0 && (
            <div className="col-span-full py-20 text-center glass rounded-[3rem] border-dashed border-white/5">
              <p className="text-smoke italic opacity-40 italic font-light tracking-widest">
                Awaiting the chef's arrival...
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* 3. EXPERIENCE ARCHITECTURE (ATELIER & HOURS) */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-20">
        <div className="glass-gold rounded-[3rem] p-12 border-white/10 flex flex-col justify-between group">
          <div className="space-y-4">
            <p className="text-champagne text-[10px] font-black uppercase tracking-[0.4em]">
              Our Location
            </p>
            <h3 className="text-4xl font-bold tracking-tight italic font-serif text-mist">
              The Atelier
            </h3>
            <p className="text-smoke text-sm leading-relaxed max-w-xs">
              {restaurant.addressLine}
            </p>
          </div>
          <div className="pt-10">
            <a
              href={`tel:${restaurant.phone}`}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-champagne border-b border-champagne pb-1 hover:gap-4 transition-all"
            >
              Call Concierge <span>→</span>
            </a>
          </div>
        </div>

        <div className="glass rounded-[3rem] p-12 border-white/5 flex flex-col justify-between">
          <div className="space-y-8">
            <p className="text-smoke text-[10px] font-black uppercase tracking-[0.4em]">
              Service Times
            </p>
            <div className="space-y-4">
              {restaurant.hours.slice(0, 4).map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-smoke border-b border-white/5 pb-2"
                >
                  <span className="font-bold">{h.day}</span>
                  <span className="text-mist">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. FINAL CTA */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="relative glass p-16 rounded-[4rem] border-white/5 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne to-transparent opacity-30"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic font-serif text-mist">
            Ready to experience?
          </h2>
          <p className="text-smoke mb-10 max-w-md mx-auto italic font-light">
            Join our elite circle of guests today.
          </p>
          <a
            href={`https://wa.me/${restaurant.whatsappPhone}`}
            className="inline-block px-12 py-5 rounded-full bg-mist text-obsidian font-black uppercase text-[10px] tracking-[0.3em] hover:bg-champagne transition-all shadow-2xl"
          >
            Open WhatsApp Concierge
          </a>
        </div>
      </div>
    </div>
  );
}

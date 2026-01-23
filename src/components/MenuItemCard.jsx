// import { formatPriceEGP } from "../utils/menu";
// import { useSettings } from "../context/SettingsContext";
// export default function MenuItemCard({ item, onAdd }) {
//   const { settings } = useSettings();
//   const closed = !settings.isOpen;
//   return (
//     <div className="rounded-2xl border bg-white p-4 flex flex-col">
//       {/* <div className="h-36 rounded-xl bg-gray-100 mb-4 flex items-center justify-center text-gray-500 text-sm">
//         Item photo
//       </div> */}
//       <div className="h-36 rounded-xl bg-gray-100 mb-4 overflow-hidden flex items-center justify-center text-gray-500 text-sm">
//         {item.imageUrl ? (
//           <img
//             src={item.imageUrl}
//             alt={item.name}
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         ) : (
//           "Item photo"
//         )}
//       </div>

//       <div className="flex items-start justify-between gap-3">
//         <h3 className="font-semibold leading-snug">{item.name}</h3>
//         <span className="font-semibold whitespace-nowrap">
//           {formatPriceEGP(item.price)}
//         </span>
//       </div>

//       <p className="mt-2 text-sm text-gray-600 flex-1">{item.desc}</p>

//       <div className="mt-3 flex flex-wrap gap-2">
//         {item.isVeg ? (
//           <span className="text-xs px-2 py-1 rounded-full border">Veg</span>
//         ) : (
//           <span className="text-xs px-2 py-1 rounded-full border">Non-Veg</span>
//         )}

//         {item.tags?.map((t) => (
//           <span key={t} className="text-xs px-2 py-1 rounded-full border">
//             {t}
//           </span>
//         ))}

//         {!item.available && (
//           <span className="text-xs px-2 py-1 rounded-full border text-gray-500">
//             Unavailable
//           </span>
//         )}
//       </div>

//       <button
//         disabled={!item.available || closed}
//         onClick={() => onAdd?.(item)}
//         className="mt-4 w-full py-2 rounded-xl bg-black text-white disabled:bg-gray-300"
//       >
//         {closed ? "Closed" : "Add to cart"}
//       </button>
//     </div>
//   );
// }

// import { formatPriceEGP } from "../utils/menu";
// import { useSettings } from "../context/SettingsContext";

// export default function MenuItemCard({ item, onAdd }) {
//   const { settings } = useSettings();
//   const closed = !settings.isOpen;

//   return (
//     <div className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-2">
//       {/* 2026 Professional Glass Container */}
//       <div className="glass rounded-3xl p-4 flex flex-col h-full border-white/5 group-hover:border-champagne/30 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.1)] transition-all">
//         {/* Image Container with Floating Effect */}
//         <div className="relative h-44 rounded-2xl bg-velvet mb-4 overflow-hidden border border-white/5">
//           {item.imageUrl ? (
//             <img
//               src={item.imageUrl}
//               alt={item.name}
//               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               loading="lazy"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center text-smoke/30 text-xs tracking-widest uppercase">
//               No Image Available
//             </div>
//           )}

//           {/* Price Badge (Inspired by the $7.00 label in your image) */}
//           <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg glass-gold border-white/10 backdrop-blur-md">
//             <span className="text-sm font-bold gold-gradient-text">
//               {formatPriceEGP(item.price)}
//             </span>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="flex-1 space-y-2">
//           <h3 className="font-display text-lg font-bold tracking-tight text-mist group-hover:text-champagne transition-colors">
//             {item.name}
//           </h3>

//           <p className="text-xs leading-relaxed text-smoke line-clamp-2 italic opacity-80">
//             {item.desc}
//           </p>

//           {/* Luxury Tags (Modern Borderless Style) */}
//           <div className="pt-2 flex flex-wrap gap-2">
//             {item.isVeg && (
//               <span className="text-[10px] uppercase tracking-widest font-black text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10">
//                 Veg
//               </span>
//             )}

//             {item.tags?.slice(0, 2).map((t) => (
//               <span
//                 key={t}
//                 className="text-[10px] uppercase tracking-widest font-bold text-smoke/60 bg-white/5 px-2 py-0.5 rounded-md"
//               >
//                 {t}
//               </span>
//             ))}

//             {!item.available && (
//               <span className="text-[10px] uppercase tracking-widest font-bold text-barolo bg-barolo/10 px-2 py-0.5 rounded-md">
//                 Sold Out
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Action Button: Matches "Add to cart" feel but with 2026 styling */}
//         <button
//           disabled={!item.available || closed}
//           onClick={() => onAdd?.(item)}
//           className={`mt-5 w-full py-3 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300
//             ${
//               closed || !item.available
//                 ? "bg-white/5 text-smoke/30 cursor-not-allowed"
//                 : "bg-gradient-to-r from-champagne to-bronze text-obsidian hover:shadow-[0_10px_20px_rgba(197,160,89,0.2)] active:scale-95"
//             }`}
//         >
//           {closed ? "Closed" : item.available ? "Add to cart" : "Unavailable"}
//         </button>
//       </div>

//       {/* Background Glow Effect on Hover (Hidden by default) */}
//       <div className="absolute -z-10 inset-0 bg-champagne/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//     </div>
//   );
// }

// import { formatPriceEGP } from "../utils/menu";
// import { useSettings } from "../context/SettingsContext";

// export default function MenuItemCard({ item, onAdd }) {
//   const { settings } = useSettings();
//   const closed = !settings.isOpen;
//   const isAvailable = item.available && !closed;

//   return (
//     <div className="group relative flex flex-col h-full bg-obsidian/40 backdrop-blur-sm rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-champagne/40 hover:-translate-y-1">
//       {/* 1. MEDIA CONTAINER */}
//       <div className="relative p-2 h-56 w-full">
//         <div className="w-full h-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 relative">
//           {item.imageUrl ? (
//             <img
//               src={item.imageUrl}
//               alt={item.name}
//               className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
//               loading="lazy"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest text-smoke/20">
//               Selection Image
//             </div>
//           )}

//           {/* Floating Availability Badge */}
//           {!item.available && (
//             <div className="absolute inset-0 bg-obsidian/60 backdrop-blur-[2px] flex items-center justify-center">
//               <span className="px-4 py-1 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-mist">
//                 Sold Out
//               </span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* 2. CONTENT ARCHITECTURE */}
//       <div className="px-6 py-4 flex flex-col flex-1">
//         <div className="flex justify-between items-start gap-4 mb-2">
//           <h3 className="font-display text-xl font-bold tracking-tight text-mist group-hover:text-champagne transition-colors">
//             {item.name}
//           </h3>
//           <span className="text-sm font-bold text-champagne whitespace-nowrap">
//             {formatPriceEGP(item.price)}
//           </span>
//         </div>

//         <p className="text-xs leading-relaxed text-smoke/70 line-clamp-2 font-light italic mb-4">
//           {item.desc}
//         </p>

//         {/* Minimal Tags */}
//         <div className="flex flex-wrap gap-2 mt-auto">
//           {item.isVeg && (
//             <span className="text-[8px] uppercase tracking-tighter font-black text-emerald-500 border border-emerald-500/20 px-2 py-0.5 rounded">
//               Plant Based
//             </span>
//           )}
//           {item.tags?.slice(0, 2).map((t) => (
//             <span
//               key={t}
//               className="text-[8px] uppercase tracking-tighter font-bold text-smoke/40 border border-white/5 px-2 py-0.5 rounded"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* 3. PROFESSIONAL ACTION BUTTON */}
//         <button
//           disabled={!isAvailable}
//           onClick={() => onAdd?.(item)}
//           className={`mt-6 w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 overflow-hidden relative group/btn
//             ${
//               !isAvailable
//                 ? "bg-white/5 text-smoke/20 cursor-not-allowed border border-white/5"
//                 : "bg-mist text-obsidian hover:bg-champagne hover:shadow-[0_10px_30px_rgba(197,160,89,0.15)] active:scale-[0.98]"
//             }`}
//         >
//           <span className="relative z-10">
//             {closed
//               ? "Atelier Closed"
//               : item.available
//                 ? "Add to Order"
//                 : "Sold Out"}
//           </span>
//           {/* Subtle reflection effect for professional feel */}
//           <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover/btn:animate-shine pointer-events-none"></div>
//         </button>
//       </div>

//       {/* Subtle Bottom Glow */}
//       <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-champagne/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//     </div>
//   );
// }

import { useSettings } from "../context/SettingsContext";

export default function MenuItemCard({ item, onAdd }) {
  const { settings } = useSettings();
  const isOpen = settings?.isOpen ?? true;

  return (
    <div
      className={`group relative glass rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 ${!isOpen ? "opacity-60 grayscale" : "hover:border-champagne/30"}`}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isOpen ? "group-hover:scale-110" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />

        {/* Price Tag */}
        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full border border-white/10">
          <p className="text-champagne font-bold text-sm">${item.price}</p>
        </div>

        {/* Closed Overlay Label */}
        {!isOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="bg-barolo/80 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-lg border border-white/20">
              Unavailable
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-mist font-bold text-lg group-hover:text-champagne transition-colors">
            {item.name}
          </h3>
          <p className="text-smoke text-xs line-clamp-2 mt-1 font-light italic">
            {item.description}
          </p>
        </div>

        <button
          onClick={() => isOpen && onAdd(item)}
          disabled={!isOpen}
          className={`w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${
            isOpen
              ? "bg-white/5 text-mist border border-white/10 hover:bg-champagne hover:text-obsidian hover:border-champagne"
              : "bg-white/5 text-smoke/50 border border-white/5 cursor-not-allowed"
          }`}
        >
          {isOpen ? "Add to Cart" : "Kitchen Closed"}
        </button>
      </div>
    </div>
  );
}

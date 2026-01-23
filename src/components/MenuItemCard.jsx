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

import { formatPriceEGP } from "../utils/menu";
import { useSettings } from "../context/SettingsContext";

export default function MenuItemCard({ item, onAdd }) {
  const { settings } = useSettings();
  const closed = !settings.isOpen;

  return (
    <div className="group relative rounded-3xl transition-all duration-500 hover:-translate-y-2">
      {/* 2026 Professional Glass Container */}
      <div className="glass rounded-3xl p-4 flex flex-col h-full border-white/5 group-hover:border-champagne/30 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.1)] transition-all">
        {/* Image Container with Floating Effect */}
        <div className="relative h-44 rounded-2xl bg-velvet mb-4 overflow-hidden border border-white/5">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-smoke/30 text-xs tracking-widest uppercase">
              No Image Available
            </div>
          )}

          {/* Price Badge (Inspired by the $7.00 label in your image) */}
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg glass-gold border-white/10 backdrop-blur-md">
            <span className="text-sm font-bold gold-gradient-text">
              {formatPriceEGP(item.price)}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-2">
          <h3 className="font-display text-lg font-bold tracking-tight text-mist group-hover:text-champagne transition-colors">
            {item.name}
          </h3>

          <p className="text-xs leading-relaxed text-smoke line-clamp-2 italic opacity-80">
            {item.desc}
          </p>

          {/* Luxury Tags (Modern Borderless Style) */}
          <div className="pt-2 flex flex-wrap gap-2">
            {item.isVeg && (
              <span className="text-[10px] uppercase tracking-widest font-black text-emerald-500/80 bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10">
                Veg
              </span>
            )}

            {item.tags?.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase tracking-widest font-bold text-smoke/60 bg-white/5 px-2 py-0.5 rounded-md"
              >
                {t}
              </span>
            ))}

            {!item.available && (
              <span className="text-[10px] uppercase tracking-widest font-bold text-barolo bg-barolo/10 px-2 py-0.5 rounded-md">
                Sold Out
              </span>
            )}
          </div>
        </div>

        {/* Action Button: Matches "Add to cart" feel but with 2026 styling */}
        <button
          disabled={!item.available || closed}
          onClick={() => onAdd?.(item)}
          className={`mt-5 w-full py-3 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300
            ${
              closed || !item.available
                ? "bg-white/5 text-smoke/30 cursor-not-allowed"
                : "bg-gradient-to-r from-champagne to-bronze text-obsidian hover:shadow-[0_10px_20px_rgba(197,160,89,0.2)] active:scale-95"
            }`}
        >
          {closed ? "Closed" : item.available ? "Add to cart" : "Unavailable"}
        </button>
      </div>

      {/* Background Glow Effect on Hover (Hidden by default) */}
      <div className="absolute -z-10 inset-0 bg-champagne/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}

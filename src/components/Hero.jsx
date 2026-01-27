import React, { useState, useEffect } from "react";
import { restaurant } from "../config/restaurant";
import { useSettings } from "../context/SettingsContext";

// High-end, cohesive culinary set (Atmospheric, Dark, Textural)
const SLIDES = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop", // Fine Dining Plating
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop", // Moody Restaurant Interior
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop", // Craft Cocktail/Atmosphere
];

// export const Hero = () => {
//   const { settings } = useSettings();
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-obsidian">
//       {/* 1. CLOSED NOTICE: Now a sophisticated top-bar reveal */}
//       {!settings?.isOpen && (
//         <div className="absolute top-32 left-1/2 -translate-x-1/2 z-50 w-full px-6 max-w-xl">
//           <div className="bg-black/40 backdrop-blur-2xl border border-red-500/20 p-4 rounded-2xl flex items-center justify-center gap-4 shadow-3xl">
//             <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
//             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-400">
//               The Atelier is currently closed for curation
//             </p>
//           </div>
//         </div>
//       )}

//       {/* 2. BACKGROUND AMBIENCE */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-champagne/[0.02] blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center pt-20 relative z-10">
//         {/* LEFT CONTENT: (7 Columns for dominance) */}
//         <div className="lg:col-span-7 space-y-12">
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-4">
//               <div className="w-10 h-px bg-champagne/40" />
//               <p className="text-[10px] font-black uppercase tracking-[0.5em] text-champagne">
//                 Est. {restaurant.year || "2026"} •{" "}
//                 {restaurant.location || "Cairo"}
//               </p>
//             </div>

//             <h1 className="text-7xl md:text-[10rem] font-serif italic gold-gradient-text leading-[0.8] tracking-tighter">
//               Taste the <br />
//               <span className="text-mist not-italic font-sans font-black uppercase text-4xl md:text-7xl block mt-4 tracking-widest">
//                 Extraordinary.
//               </span>
//             </h1>

//             <p className="text-smoke text-lg md:text-xl max-w-lg font-light leading-relaxed italic opacity-80 border-l border-white/10 pl-8">
//               Experience a curated digital menu designed for the modern palate.
//               Seamlessly order your favorites directly via our WhatsApp
//               Concierge.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-8 items-center">
//             <a
//               href="#menu"
//               className="group relative px-12 py-6 bg-champagne text-obsidian font-black uppercase text-[10px] tracking-[0.3em] overflow-hidden rounded-xl transition-all"
//             >
//               <span className="relative z-10">View Collection</span>
//               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//             </a>

//             <a
//               href={`https://wa.me/${restaurant.whatsappPhone}`}
//               className="group flex items-center gap-4 text-mist font-black uppercase text-[10px] tracking-[0.4em] hover:text-champagne transition-colors"
//             >
//               <span>WhatsApp Concierge</span>
//               <div className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-champagne transition-all" />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT MEDIA: (5 Columns - The Gallery Piece) */}
//         <div className="lg:col-span-5 relative">
//           <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group">
//             {SLIDES.map((img, i) => (
//               <div
//                 key={i}
//                 className={`absolute inset-0 transition-all duration-[2s] ease-in-out ${
//                   i === current
//                     ? "opacity-100 scale-100"
//                     : "opacity-0 scale-110"
//                 }`}
//               >
//                 <img
//                   src={img}
//                   className="w-full h-full object-cover grayscale brightness-75 contrast-125"
//                   alt="Fine Dining"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
//               </div>
//             ))}

//             {/* Pagination Lines (More premium than dots) */}
//             <div className="absolute bottom-10 left-10 right-10 flex gap-3 z-20">
//               {SLIDES.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrent(i)}
//                   className="flex-1 h-[2px] transition-all duration-700 relative overflow-hidden bg-white/10"
//                 >
//                   {i === current && (
//                     <div className="absolute inset-0 bg-champagne animate-progress" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Floating Element: Signature Taste */}
//           <div className="absolute -bottom-10 -right-10 bg-black/40 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/10 hidden xl:block shadow-3xl transform hover:-translate-y-2 transition-transform duration-700">
//             <div className="space-y-1">
//               <p className="text-champagne font-black text-[10px] uppercase tracking-[0.4em]">
//                 Chef's Choice
//               </p>
//               <p className="font-serif italic text-mist text-3xl">
//                 Seasonal Artisanal Selection
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export const Hero = () => {
  const { settings } = useSettings();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  // bg-obsidian
  return (
    // Added overflow-x-hidden to prevent the "white stripe" bug
    <section className="relative min-h-screen flex flex-col justify-center overflow-x-hidden py-10 lg:py-0">
      {/* 1. CLOSED NOTICE: Adjusted for mobile spacing */}
      {!settings?.isOpen && (
        <div className="absolute top-24 lg:top-32 left-1/2 -translate-x-1/2 z-50 w-full px-4 max-w-xl">
          <div className="bg-black/60 backdrop-blur-2xl border border-red-500/20 p-4 rounded-2xl flex items-center justify-center gap-4 shadow-3xl">
            <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-red-400 text-center">
              The Atelier is currently closed for curation
            </p>
          </div>
        </div>
      )}

      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-champagne/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* GRID ADJUSTMENT: Stack on mobile (flex-col), Grid on Desktop */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* LEFT CONTENT: Adjusted font sizes for mobile responsiveness */}
        <div className="w-full lg:col-span-7 space-y-8 lg:space-y-12 order-2 lg:order-1">
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-4">
              <div className="w-6 md:w-10 h-px bg-champagne/40" />
              <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-champagne">
                Est. {restaurant.year || "2026"} •{" "}
                {restaurant.location || "Cairo"}
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-serif italic gold-gradient-text leading-[0.9] lg:leading-[0.8] tracking-tighter">
              Taste the <br />
              <span className="text-mist not-italic font-sans font-black uppercase text-2xl md:text-4xl lg:text-7xl block mt-2 md:mt-4 tracking-widest">
                Extraordinary.
              </span>
            </h1>

            <p className="text-smoke text-base md:text-xl max-w-lg font-light leading-relaxed italic opacity-80 border-l border-white/10 pl-4 md:pl-8">
              Experience a curated digital menu designed for the modern palate.
              Seamlessly order your favorites directly via our WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
            <a
              href="#menu"
              className="w-full sm:w-auto text-center group relative px-10 py-5 bg-champagne text-obsidian font-black uppercase text-[10px] tracking-[0.3em] overflow-hidden rounded-xl transition-all"
            >
              <span className="relative z-10">View Collection</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>

            <a
              href={`https://wa.me/${restaurant.whatsappPhone}`}
              className="group flex items-center gap-4 text-mist font-black uppercase text-[10px] tracking-[0.4em] hover:text-champagne transition-colors"
            >
              <span>WhatsApp Concierge</span>
              <div className="hidden sm:block w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-champagne transition-all" />
            </a>
          </div>
        </div>

        {/* RIGHT MEDIA: Reduced rounded corners and scale for mobile */}
        <div className="w-full lg:col-span-5 relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] rounded-[2rem] lg:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl group">
            {SLIDES.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-[2s] ease-in-out ${
                  i === current
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125"
                  alt="Fine Dining"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              </div>
            ))}

            {/* Pagination */}
            <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex gap-2 lg:gap-3 z-20">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="flex-1 h-[2px] transition-all duration-700 bg-white/10 overflow-hidden"
                >
                  {i === current && (
                    <div className="absolute inset-0 bg-champagne animate-progress" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Floating Element: Hidden on small screens to prevent overflow */}
          <div className="absolute -bottom-6 -right-6 bg-black/60 backdrop-blur-3xl p-6 lg:p-10 rounded-[2rem] lg:rounded-[3rem] border border-white/10 hidden xl:block shadow-3xl">
            <div className="space-y-1">
              <p className="text-champagne font-black text-[10px] uppercase tracking-[0.4em]">
                Chef's Choice
              </p>
              <p className="font-serif italic text-mist text-xl lg:text-3xl">
                Seasonal Selection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

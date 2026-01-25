// import React from "react";
// import { restaurant } from "../config/restaurant";

// const HoursSection = () => {
//   return (
//     <div className="relative group h-full">
//       {/* Ambient Glow */}
//       <div className="absolute inset-0 bg-champagne/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

//       <div className="h-full glass-gold p-12 rounded-[3rem] border border-white/5 relative overflow-hidden flex flex-col justify-center">
//         {/* Decorative Background Dial */}
//         <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none">
//           <svg
//             width="200"
//             height="200"
//             viewBox="0 0 100 100"
//             className="animate-[spin_60s_linear_infinite]"
//           >
//             <path
//               d="M50 50 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0"
//               fill="none"
//               stroke="currentColor"
//               strokeDasharray="4 4"
//             />
//           </svg>
//         </div>

//         {/* Header with Live Badge */}
//         <div className="flex items-center justify-between mb-10">
//           <h3 className="text-2xl font-serif italic text-mist">
//             Opening Hours
//           </h3>
//           <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
//             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
//             <span className="text-[9px] uppercase tracking-widest text-mist">
//               Live
//             </span>
//           </div>
//         </div>

//         {/* Editorial List */}
//         <div className="space-y-6 relative z-10">
//           {restaurant.hours.map((h, i) => (
//             <div key={i} className="flex items-end justify-between group/line">
//               <span className="text-[11px] font-black uppercase tracking-[0.25em] text-smoke group-hover/line:text-champagne transition-colors duration-300">
//                 {h.day}
//               </span>

//               {/* The "Elite" Dotted Leader */}
//               <div className="flex-1 mx-4 border-b border-dotted border-white/10 mb-1.5 group-hover/line:border-champagne/30 transition-colors duration-300" />

//               <span className="text-sm font-medium text-mist font-mono tracking-widest">
//                 {h.time}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <div className="mt-10 pt-8 border-t border-white/5">
//           <p className="text-[10px] text-center text-smoke/60 uppercase tracking-[0.2em]">
//             * Late night service available on request
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HoursSection;

import React from "react";
import { restaurant } from "../config/restaurant";

const HoursSection = () => {
  return (
    <div className="relative group h-full">
      {/* 1. Subtle Ambient Glow: Controlled and focused */}
      <div className="absolute inset-0 bg-champagne/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      <div className="h-full glass-gold p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden flex flex-col justify-center">
        {/* 2. Professional Header with Status Badge */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-champagne font-bold mb-2 block">
              Reservations
            </span>
            <h3 className="text-3xl font-serif italic text-mist">
              Opening Hours
            </h3>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] uppercase tracking-widest text-mist font-medium">
              Live
            </span>
          </div>
        </div>

        {/* 3. The List: Fixed Widths for Perfect Alignment */}
        <div className="space-y-6 relative z-10">
          {restaurant.hours.map((h, i) => (
            <div key={i} className="flex items-baseline group/line">
              {/* FIXED WIDTH DAY: Prevents the "jagged" look */}
              <span className="w-12 md:w-16 text-[11px] font-bold uppercase tracking-[0.2em] text-smoke group-hover/line:text-champagne transition-colors duration-300">
                {h.day}
              </span>

              {/* REFINED DOTTED LEADER: Thinner and more subtle */}
              <div className="flex-1 mx-4 border-b border-dotted border-white/20 mb-1 group-hover/line:border-champagne/40 transition-colors duration-300" />

              {/* TIME: Minimalist and clear */}
              <span className="text-xs md:text-sm font-medium text-mist tracking-widest">
                {h.time}
              </span>
            </div>
          ))}
        </div>

        {/* 4. Footer & Aesthetic Detail */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <p className="text-[10px] text-smoke/60 uppercase tracking-[0.25em] italic">
            * Late night service available on request
          </p>

          {/* Subtle Decorative Accent */}
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
        </div>

        {/* Subtle Decorative Background Element (Moved to bottom left) */}
        <div className="absolute -bottom-16 -left-16 opacity-[0.03] pointer-events-none text-champagne">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              strokeDasharray="2 2"
            />
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.1"
              strokeDasharray="1 1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HoursSection;

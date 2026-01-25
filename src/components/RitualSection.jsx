// export const RitualSection = () => {
//   const steps = [
//     {
//       num: "I",
//       title: "The Selection",
//       desc: "Curate your evening by adding seasonal masterpieces to your digital collection.",
//     },
//     {
//       num: "II",
//       title: "The Connection",
//       desc: "Your preferences are transmitted to our concierge to ensure a personalized experience.",
//     },
//     {
//       num: "III",
//       title: "The Indulgence",
//       desc: "Our chefs commence preparation of your selection with uncompromising precision.",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-32 relative overflow-hidden">
//       <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//         <div className="space-y-4">
//           <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
//             The Process
//           </p>
//           <h2 className="text-5xl font-serif italic gold-gradient-text">
//             The Ritual of Dining
//           </h2>
//         </div>
//         <p className="text-smoke max-w-xs text-sm font-light leading-relaxed border-l border-white/10 pl-6">
//           A seamless transition from digital curation to culinary excellence.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className="group relative p-12 glass border border-white/5 rounded-[3rem] hover:bg-white/[0.02] transition-all duration-700"
//           >
//             {/* Roman Numeral Background */}
//             <span className="absolute top-8 right-10 text-6xl font-serif italic text-white/[0.03] group-hover:text-champagne/10 transition-colors duration-700">
//               {step.num}
//             </span>

//             <div className="space-y-6 relative z-10">
//               <div className="w-10 h-px bg-champagne/40 group-hover:w-20 transition-all duration-700" />
//               <h3 className="text-xl font-bold tracking-widest text-mist uppercase">
//                 {step.title}
//               </h3>
//               <p className="text-smoke font-light leading-relaxed text-sm">
//                 {step.desc}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React from "react";

export const RitualSection = () => {
  const steps = [
    {
      num: "I",
      title: "The Selection",
      desc: "Curate your evening by adding seasonal masterpieces to your digital collection.",
    },
    {
      num: "II",
      title: "The Connection",
      desc: "Your preferences are transmitted to our concierge to ensure a personalized experience.",
    },
    {
      num: "III",
      title: "The Indulgence",
      desc: "Our chefs commence preparation of your selection with uncompromising precision.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 relative overflow-hidden">
      {/* 1. Header Section with enhanced tracking */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="space-y-4">
          <p className="text-champagne text-[10px] font-bold uppercase tracking-[0.6em]">
            The Experience
          </p>
          <h2 className="text-5xl md:text-6xl font-serif italic gold-gradient-text leading-tight">
            The Ritual of Dining
          </h2>
        </div>
        <div className="max-w-xs border-l border-champagne/20 pl-6 mb-2">
          <p className="text-smoke text-sm font-light leading-relaxed">
            A seamless transition from digital curation to culinary excellence.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* 2. THE GOLDEN THREAD: Animated connector line (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent -translate-y-1/2 pointer-events-none" />

        {/* 3. The Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group relative p-10 rounded-[2.5rem] transition-all duration-1000 
                ${i === 1 ? "md:-translate-y-8" : "md:translate-y-8"} 
                hover:translate-y-0`}
            >
              {/* Card Background with subtle glass effect */}
              <div className="absolute inset-0 glass-gold rounded-[2.5rem] border border-white/5 group-hover:border-champagne/20 transition-all duration-700" />

              {/* Roman Numeral: Large, Elegant, and Faded */}
              <span className="absolute -top-6 -right-2 text-8xl font-serif italic text-white/[0.02] group-hover:text-champagne/[0.05] transition-all duration-1000 select-none">
                {step.num}
              </span>

              <div className="relative z-10 space-y-8">
                {/* Step Indicator Dot */}
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-champagne animate-ping opacity-20" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold tracking-[0.2em] text-mist uppercase group-hover:text-champagne transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-smoke font-light leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.desc}
                  </p>
                </div>

                {/* Interactive Link/Arrow */}
                <div className="pt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-champagne opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-700">
                  <span>Explore Detail</span>
                  <div className="w-8 h-px bg-champagne" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export const ChefSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative overflow-hidden">
//       {/* Subtle Background Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
//         {/* LEFT: Portrait Composition (5/12 Columns) */}
//         <div className="lg:col-span-5 relative group order-2 lg:order-1">
//           <div className="relative">
//             {/* Main Image */}
//             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl transform group-hover:scale-[1.01] transition-transform duration-1000">
//               <img
//                 src="https://images.unsplash.com/photo-1577214195070-36266b739501?q=80&w=1974&auto=format&fit=crop"
//                 className="w-full h-full object-cover grayscale brightness-90 contrast-110 hover:grayscale-0 transition-all duration-1000"
//                 alt="Executive Chef"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
//             </div>

//             {/* Accent Floating Image (Chef's Hands/Action) */}
//             <div className="absolute -top-12 -right-12 w-48 h-48 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hidden xl:block animate-float">
//               <img
//                 src="https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=1000&auto=format&fit=crop"
//                 className="w-full h-full object-cover grayscale"
//                 alt="Chef's Detail"
//               />
//             </div>
//           </div>

//           {/* Signature Badge */}
//           <div className="absolute -bottom-6 -left-6 glass-gold p-8 rounded-[2.5rem] border border-white/10 shadow-3xl">
//             <p className="font-serif italic text-champagne text-4xl leading-none">
//               Aurelius
//             </p>
//             <div className="h-px w-12 bg-champagne/30 mt-4" />
//           </div>
//         </div>

//         {/* RIGHT: The Narrative (7/12 Columns) */}
//         <div className="lg:col-span-7 space-y-12 lg:pl-12 order-1 lg:order-2">
//           <div className="space-y-6">
//             <div className="inline-flex items-center gap-3">
//               <span className="w-8 h-px bg-champagne/40" />
//               <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
//                 The Maestro
//               </p>
//             </div>

//             <h2 className="text-6xl md:text-8xl font-serif italic gold-gradient-text leading-[0.9] tracking-tighter">
//               Crafting <br />
//               <span className="text-mist not-italic font-sans font-bold uppercase text-4xl md:text-5xl">
//                 Culinary Landmarks.
//               </span>
//             </h2>

//             <p className="text-smoke text-xl font-light leading-relaxed max-w-2xl italic">
//               "Every plate is a canvas of heritage. We do not simply prepare
//               food; we architect memories using the primitive elements of fire,
//               salt, and seasonal soul."
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-white/5">
//             <div className="space-y-3">
//               <p className="text-mist font-bold uppercase tracking-widest text-xs">
//                 Excellence in Origin
//               </p>
//               <p className="text-smoke/60 text-sm leading-relaxed font-light">
//                 Chef Aurelius personally visits our heritage farms every Tuesday
//                 to secure the week's prime harvest.
//               </p>
//             </div>
//             <div className="space-y-3">
//               <p className="text-mist font-bold uppercase tracking-widest text-xs">
//                 The Visionary
//               </p>
//               <div className="space-y-1">
//                 <p className="text-mist text-sm font-bold">Julian Aurelius</p>
//                 <p className="text-champagne/60 text-[10px] uppercase tracking-widest">
//                   Two-Decade Culinary Veteran
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="pt-4">
//             <button className="flex items-center gap-4 text-mist font-black uppercase text-[10px] tracking-[0.4em] group">
//               Explore the Philosophy
//               <div className="h-px w-8 bg-mist group-hover:w-16 transition-all duration-500" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import React from "react";

// export const ChefSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative overflow-hidden">
//       {/* 1. Cinematic Background: Deeper blur for better text readability */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-champagne/[0.03] blur-[150px] rounded-full pointer-events-none" />

//       <div className="grid lg:grid-cols-12 gap-20 items-center relative z-10">
//         {/* LEFT: Portrait Composition (5/12 Columns) */}
//         <div className="lg:col-span-5 relative group order-2 lg:order-1">
//           <div className="relative">
//             {/* Main Image: Added a subtle gold border glow */}
//             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl transform transition-all duration-1000 group-hover:border-champagne/30">
//               <img
//                 src="https://images.unsplash.com/photo-1577214195070-36266b739501?q=80&w=1974&auto=format&fit=crop"
//                 className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
//                 alt="Executive Chef"
//               />
//               {/* Overlay for cinematic depth */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
//             </div>

//             {/* Accent Floating Image: Unified with the Glass Card style */}
//             <div className="absolute -top-8 -right-8 w-44 h-44 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hidden xl:block animate-float group-hover:scale-110 transition-transform duration-700">
//               <img
//                 src="https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=1000&auto=format&fit=crop"
//                 className="w-full h-full object-cover grayscale brightness-90"
//                 alt="Chef's Detail"
//               />
//               <div className="absolute inset-0 border-2 border-champagne/10 rounded-3xl" />
//             </div>
//           </div>

//           {/* Signature Badge: Switched to glass-gold for consistency */}
//           <div className="absolute -bottom-6 -left-6 glass-gold px-10 py-8 rounded-[2rem] border border-white/10 shadow-3xl backdrop-blur-2xl">
//             <p className="font-serif italic text-champagne text-4xl leading-none tracking-tight">
//               Aurelius
//             </p>
//             <p className="text-[10px] uppercase tracking-[0.3em] text-smoke/60 mt-2 font-bold">
//               Executive Chef
//             </p>
//           </div>
//         </div>

//         {/* RIGHT: The Narrative (7/12 Columns) */}
//         <div className="lg:col-span-7 space-y-12 lg:pl-10 order-1 lg:order-2">
//           <div className="space-y-8">
//             <div className="flex items-center gap-4">
//               <span className="w-12 h-px bg-champagne/30" />
//               <p className="text-champagne text-[10px] font-bold uppercase tracking-[0.5em]">
//                 The Visionary
//               </p>
//             </div>

//             <h2 className="text-6xl md:text-8xl font-serif italic gold-gradient-text leading-[0.85] tracking-tighter">
//               Crafting <br />
//               <span className="text-mist not-italic font-sans font-bold uppercase text-3xl md:text-5xl block mt-4 tracking-widest">
//                 Culinary Landmarks
//               </span>
//             </h2>

//             {/* The Quote: Increased size for "Elite" weight */}
//             <blockquote className="text-smoke text-xl md:text-2xl font-light leading-relaxed max-w-2xl italic border-l-2 border-champagne/20 pl-8">
//               "Every plate is a canvas of heritage. We architect memories using
//               the primitive elements of fire, salt, and seasonal soul."
//             </blockquote>
//           </div>

//           {/* Stats/Details Grid */}
//           <div className="grid sm:grid-cols-2 gap-10 pt-10 border-t border-white/5">
//             <div className="space-y-3">
//               <p className="text-champagne font-bold uppercase tracking-[0.2em] text-[10px]">
//                 Excellence in Origin
//               </p>
//               <p className="text-smoke/70 text-sm leading-relaxed font-light">
//                 Chef Aurelius personally secures the week's prime harvest from
//                 our private heritage estates every Tuesday morning.
//               </p>
//             </div>
//             <div className="space-y-3">
//               <p className="text-champagne font-bold uppercase tracking-[0.2em] text-[10px]">
//                 Global Pedigree
//               </p>
//               <div className="space-y-1">
//                 <p className="text-mist text-base font-bold">Julian Aurelius</p>
//                 <p className="text-smoke/50 text-[9px] uppercase tracking-widest leading-loose">
//                   Michelin Guest — Paris & Tokyo
//                   <br />
//                   22 Years Culinary Architecture
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* CTA: Refined Arrow interaction */}
//           <div className="pt-6">
//             <button className="group flex items-center gap-4 text-mist font-bold uppercase text-[10px] tracking-[0.4em] hover:text-champagne transition-colors duration-300">
//               Read the Philosophy
//               <div className="relative overflow-hidden w-10 h-px">
//                 <div className="absolute inset-0 bg-mist group-hover:translate-x-full transition-transform duration-500" />
//                 <div className="absolute inset-0 bg-champagne -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";

export const ChefSection = () => {
  // Stable, high-resolution Unsplash IDs for luxury culinary vibes
  const chefImage =
    "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1200&auto=format&fit=crop";
  const detailImage =
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop";

  return (
    <section className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5 relative overflow-hidden">
      {/* 1. Ambient Background */}
      <div className="absolute top-0 left-1/4 w-full h-full bg-champagne/[0.03] blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        {/* LEFT: Portrait Composition */}
        <div className="lg:col-span-5 relative group">
          <div className="relative z-20">
            {/* Main Image */}
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transform transition-all duration-[1.5s] ease-out group-hover:border-champagne/30 group-hover:scale-[1.02] bg-obsidian">
              <img
                src={chefImage}
                className="w-full h-full object-cover grayscale brightness-75 contrast-[1.1] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[1.5s] ease-out"
                alt="Executive Chef"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Accent Detail Image */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl hidden xl:block animate-float bg-obsidian transition-transform duration-1000 group-hover:translate-x-2">
              <img
                src={detailImage}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                alt="Culinary Detail"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-champagne/10 mix-blend-overlay" />
            </div>
          </div>

          {/* Signature Badge */}
          <div className="absolute -bottom-8 -left-8 z-30 bg-black/60 backdrop-blur-3xl px-10 py-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <div className="space-y-1">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-champagne font-black">
                The Master
              </span>
              <p className="font-serif italic text-mist text-4xl leading-tight">
                Aurelius
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: The Narrative */}
        <div className="lg:col-span-7 space-y-16 lg:pl-6">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-champagne/40" />
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.6em]">
                Culinary Maestro
              </p>
            </div>

            <h2 className="text-6xl md:text-8xl font-serif italic gold-gradient-text leading-[0.85] tracking-tighter">
              The Art of <br />
              <span className="text-mist not-italic font-sans font-black uppercase text-3xl md:text-5xl block mt-6 tracking-[0.15em]">
                Curated Essence.
              </span>
            </h2>

            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-champagne via-champagne/20 to-transparent" />
              <blockquote className="text-smoke text-xl md:text-2xl font-light leading-relaxed italic max-w-2xl">
                "We do not simply prepare food; we architect memories using the
                primitive elements of fire, salt, and seasonal soul."
              </blockquote>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-champagne shadow-[0_0_8px_rgba(197,160,89,0.4)]" />
                <p className="text-mist font-black uppercase tracking-[0.2em] text-xs">
                  Excellence in Origin
                </p>
              </div>
              <p className="text-smoke/70 text-sm leading-relaxed font-light pl-4">
                Chef Aurelius personally secures the week's prime harvest from
                our private heritage estates every Tuesday morning.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-champagne shadow-[0_0_8px_rgba(197,160,89,0.4)]" />
                <p className="text-mist font-black uppercase tracking-[0.2em] text-xs">
                  The Pedigree
                </p>
              </div>
              <div className="pl-4 space-y-2">
                <p className="text-mist text-base font-bold">Julian Aurelius</p>
                <p className="text-smoke/50 text-[10px] uppercase tracking-[0.2em] leading-loose">
                  Michelin Guest — Paris & Tokyo <br />
                  22 Years Culinary Architecture
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <button className="group flex items-center gap-6 text-mist font-black uppercase text-[10px] tracking-[0.5em] hover:text-champagne transition-all duration-500">
              <span>Our Philosophy</span>
              <div className="relative w-16 h-px overflow-hidden bg-white/10">
                <div className="absolute inset-0 bg-champagne -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

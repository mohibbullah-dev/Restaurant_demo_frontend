// import { restaurant } from "../config/restaurant";
// import { useSettings } from "../context/SettingsContext";

// const Footer = () => {
//   const { settings } = useSettings();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-obsidian border-t border-white/5 pt-32 pb-12 overflow-hidden">
//       {/* Decorative Gold Radial Glow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-12 gap-16 mb-24">
//           {/* Brand & Statement (5 Columns) */}
//           <div className="lg:col-span-5 space-y-12">
//             <div className="space-y-6">
//               <h2 className="text-3xl font-bold tracking-tighter text-mist uppercase italic font-serif">
//                 {restaurant.name}
//                 <span className="text-champagne">.</span>
//               </h2>
//               <p className="text-smoke text-lg font-light leading-relaxed max-w-sm">
//                 Crafting extraordinary culinary narratives where tradition meets
//                 the modern digital concierge.
//               </p>
//             </div>

//             {/* Live Status Badge */}
//             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 glass">
//               <span
//                 className={`h-1.5 w-1.5 rounded-full animate-pulse ${settings?.isOpen ? "bg-emerald-500" : "bg-red-500"}`}
//               />
//               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-mist">
//                 Current Status:{" "}
//                 {settings?.isOpen ? "Accepting Orders" : "Atelier Closed"}
//               </p>
//             </div>
//           </div>

//           {/* Navigation & Services (4 Columns) */}
//           <div className="lg:col-span-4 grid grid-cols-2 gap-8">
//             <div className="space-y-8">
//               <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
//                 Explore
//               </p>
//               <ul className="space-y-4 text-smoke text-[11px] font-medium uppercase tracking-[0.2em]">
//                 <li>
//                   <a
//                     href="#menu"
//                     className="hover:text-champagne transition-all duration-300"
//                   >
//                     The Collection
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#about"
//                     className="hover:text-champagne transition-all duration-300"
//                   >
//                     The Heritage
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#events"
//                     className="hover:text-champagne transition-all duration-300"
//                   >
//                     Private Dining
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#reviews"
//                     className="hover:text-champagne transition-all duration-300"
//                   >
//                     Guestbook
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="space-y-8">
//               <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
//                 Connect
//               </p>
//               <ul className="space-y-4 text-smoke text-[11px] font-medium uppercase tracking-[0.2em]">
//                 <li>
//                   <a
//                     href={`https://wa.me/${restaurant.whatsappPhone}`}
//                     target="_blank"
//                     className="hover:text-champagne transition-all"
//                   >
//                     WhatsApp
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-champagne transition-all">
//                     Instagram
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-champagne transition-all">
//                     Twitter / X
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Contact & Top Action (3 Columns) */}
//           <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end text-left lg:text-right">
//             <div className="space-y-4">
//               <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em]">
//                 The Atelier
//               </p>
//               <p className="text-mist text-sm font-light leading-relaxed">
//                 {restaurant.addressLine}
//                 <br />
//                 <span className="font-bold tracking-widest">
//                   {restaurant.phone}
//                 </span>
//               </p>
//             </div>

//             <button
//               onClick={scrollToTop}
//               className="mt-12 group flex items-center gap-4 text-mist/40 hover:text-champagne transition-all duration-500"
//             >
//               <span className="text-[10px] font-black uppercase tracking-[0.4em]">
//                 Back to Top
//               </span>
//               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-champagne/40 group-hover:-translate-y-1 transition-all">
//                 <svg
//                   width="12"
//                   height="12"
//                   viewBox="0 0 12 12"
//                   fill="none"
//                   className="transform rotate-180"
//                 >
//                   <path
//                     d="M1 1L6 6L11 1"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                   />
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Legal & Credits Line */}
//         <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
//             <p className="text-[9px] text-smoke/30 uppercase tracking-[0.4em]">
//               © 2026 {restaurant.name} Atelier.
//             </p>
//             <div className="flex gap-6">
//               <a
//                 href="#"
//                 className="text-[9px] text-smoke/30 uppercase tracking-[0.4em] hover:text-mist transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-[9px] text-smoke/30 uppercase tracking-[0.4em] hover:text-mist transition-colors"
//               >
//                 Terms of Service
//               </a>
//             </div>
//           </div>

//           <p className="text-[9px] text-smoke/20 uppercase tracking-[0.5em] italic">
//             Designed for the Extraordinary
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { restaurant } from "../config/restaurant";
import { useSettings } from "../context/SettingsContext";

const Footer = () => {
  const { settings } = useSettings();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-obsidian border-t border-white/5 pt-40 pb-12 overflow-hidden">
      {/* 1. Cinematic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-champagne/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          {/* BRAND COLUMN: The 'Letterhead' Look */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif italic gold-gradient-text tracking-tighter">
                {restaurant.name}
                <span className="text-mist">.</span>
              </h2>
              <p className="text-smoke text-lg font-light leading-relaxed max-w-sm italic opacity-80">
                "Crafting extraordinary culinary narratives where tradition
                meets the modern digital concierge."
              </p>
            </div>

            {/* Enhanced Live Status Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
              <div className="relative">
                <span
                  className={`block h-2 w-2 rounded-full ${settings?.isOpen ? "bg-emerald-500 shadow-[0_0_10px_#10b981]" : "bg-red-500"}`}
                />
                {settings?.isOpen && (
                  <span className="absolute inset-0 h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                )}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-mist/60">
                Atelier Status:{" "}
                <span
                  className={
                    settings?.isOpen ? "text-emerald-400" : "text-red-400"
                  }
                >
                  {settings?.isOpen
                    ? "Accepting Orders"
                    : "Closed for Curation"}
                </span>
              </p>
            </div>
          </div>

          {/* NAV COLUMN: Minimalist Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.6em]">
                Discover
              </p>
              <ul className="space-y-5">
                {["Collection", "Heritage", "Private Dining", "Guestbook"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "")}`}
                        className="text-smoke/60 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-champagne hover:translate-x-2 transition-all duration-500 block"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="space-y-8">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.6em]">
                Social
              </p>
              <ul className="space-y-5">
                {["Instagram", "WhatsApp", "Twitter / X"].map((social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="text-smoke/60 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-mist hover:translate-x-2 transition-all duration-500 block"
                    >
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT COLUMN: The Address Card */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end">
            <div className="space-y-6 lg:text-right">
              <p className="text-champagne text-[10px] font-black uppercase tracking-[0.6em]">
                Location
              </p>
              <p className="text-mist text-sm font-light leading-loose tracking-wide">
                {restaurant.addressLine} <br />
                <span className="text-champagne font-bold tracking-[0.2em]">
                  {restaurant.phone}
                </span>
              </p>
            </div>

            {/* Professional Scroll To Top */}
            <button
              onClick={scrollToTop}
              className="group mt-12 flex items-center gap-6 text-mist/30 hover:text-champagne transition-all duration-700"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.6em]">
                Top
              </span>
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-champagne translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="relative z-10 group-hover:text-obsidian group-hover:-translate-y-1 transition-all duration-500"
                >
                  <path
                    d="M7 13V1M7 1L1 7M7 1L13 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* 2. LEGAL FOOTNOTE: Ultra-wide tracking */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <p className="text-[8px] text-smoke/20 uppercase tracking-[0.6em]">
              © 2026 {restaurant.name} Atelier.
            </p>
            <div className="flex gap-10">
              <a
                href="#"
                className="text-[8px] text-smoke/20 uppercase tracking-[0.6em] hover:text-champagne transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[8px] text-smoke/20 uppercase tracking-[0.6em] hover:text-champagne transition-colors"
              >
                Terms
              </a>
            </div>
          </div>

          <p className="text-[8px] text-champagne/30 uppercase tracking-[0.8em] font-black">
            Designed for the Extraordinary
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

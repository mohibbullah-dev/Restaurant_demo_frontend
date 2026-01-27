// import { useMemo, useState } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import { restaurant } from "../config/restaurant";
// import CartButton from "./CartButton";
// import CartDrawer from "./CartDrawer";
// import { getToken } from "../utils/auth";

// export default function Layout() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const isAdmin = useMemo(() => !!getToken(), []);
//   const isAdminPage = location.pathname.startsWith("/admin");

//   const closeMobile = () => setMobileOpen(false);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* HEADER */}
//       <header className="sticky top-0 z-50 border-b bg-white">
//         <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//           {/* Left: Brand */}
//           <div className="flex items-center gap-4">
//             <Link
//               to="/"
//               className="font-bold text-lg tracking-tight"
//               onClick={closeMobile}
//             >
//               {restaurant.name}
//             </Link>

//             {/* Desktop nav links */}
//             <nav className="hidden md:flex items-center gap-4 text-sm text-gray-700">
//               {!isAdminPage && (
//                 <>
//                   <Link to="/menu" className="hover:text-black">
//                     Menu
//                   </Link>
//                   <Link to="/qr" className="hover:text-black">
//                     QR
//                   </Link>
//                 </>
//               )}

//               {/* Admin links visible only when admin */}
//               {isAdmin && (
//                 <Link to="/admin" className="hover:text-black font-medium">
//                   Dashboard
//                 </Link>
//               )}
//             </nav>
//           </div>

//           {/* Right: Actions */}
//           <div className="flex items-center gap-2">
//             {/* Desktop actions */}
//             <div className="hidden md:flex items-center gap-2">
//               {!isAdminPage && <CartButton />}

//               <a
//                 href={`tel:${restaurant.phone}`}
//                 className="px-3 py-2 rounded-lg border text-sm"
//               >
//                 Call
//               </a>

//               <a
//                 href={`https://wa.me/${restaurant.whatsappPhone}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-3 py-2 rounded-lg bg-black text-white text-sm"
//               >
//                 WhatsApp
//               </a>

//               {/* If not admin logged in, show Admin Login */}
//               {!isAdmin && (
//                 <Link
//                   to="/admin/login"
//                   className="px-3 py-2 rounded-lg border text-sm"
//                 >
//                   Admin
//                 </Link>
//               )}
//             </div>

//             {/* Mobile: hamburger */}
//             <button
//               className="md:hidden px-3 py-2 rounded-lg border text-sm"
//               onClick={() => setMobileOpen((v) => !v)}
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? "Close" : "Menu"}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE MENU PANEL */}
//         {mobileOpen && (
//           <div className="md:hidden border-t bg-white">
//             <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
//               {/* Customer links */}
//               {!isAdminPage && (
//                 <>
//                   <Link to="/menu" onClick={closeMobile} className="py-2">
//                     Menu
//                   </Link>
//                   <Link to="/qr" onClick={closeMobile} className="py-2">
//                     QR
//                   </Link>

//                   <div className="py-2">
//                     <CartButton />
//                   </div>

//                   <a href={`tel:${restaurant.phone}`} className="py-2">
//                     Call
//                   </a>
//                   <a
//                     href={`https://wa.me/${restaurant.whatsappPhone}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="py-2"
//                   >
//                     WhatsApp
//                   </a>
//                 </>
//               )}

//               {/* Admin area */}
//               {isAdmin ? (
//                 <Link
//                   to="/admin"
//                   onClick={closeMobile}
//                   className="py-2 font-medium"
//                 >
//                   Dashboard
//                 </Link>
//               ) : (
//                 <Link
//                   to="/admin/login"
//                   onClick={closeMobile}
//                   className="py-2 font-medium"
//                 >
//                   Admin Login
//                 </Link>
//               )}
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Page content */}
//       <main className="max-w-6xl mx-auto px-4">
//         <Outlet />
//       </main>

//       {/* Cart Drawer (only relevant for customer side) */}
//       {!isAdminPage && <CartDrawer />}
//     </div>
//   );
// }

// import { useMemo, useState } from "react";
// import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
// import { restaurant } from "../config/restaurant";
// import CartButton from "./CartButton";
// import CartDrawer from "./CartDrawer";
// import { getToken } from "../utils/auth";
// import { Phone } from "lucide-react";
// import FloatingConcierge from "./FloatingConcierge";
// import EliteBackground from "./EliteBackground";

// export default function Layout() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const isAdmin = useMemo(() => !!getToken(), []);
//   const isAdminPage = location.pathname.startsWith("/admin");

//   const closeMobile = () => setMobileOpen(false);

//   return (
//     <div className="min-h-screen bg-transparent text-mist font-display selection:bg-champagne/30">
//       <EliteBackground />
//       <header className="sticky top-0 z-50 transition-all duration-500">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <div className="relative group">
//             {/* Outer Glow Effect on Hover */}
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-champagne/20 to-bronze/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>

//             <div className="relative glass-gold rounded-3xl px-8 py-4 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl">
//               {/* Left: Brand Identity */}
//               <div className="flex items-center gap-10">
//                 <Link
//                   to="/"
//                   className="font-serif italic text-2xl tracking-tighter gold-gradient-text hover:brightness-125 transition-all"
//                   onClick={closeMobile}
//                 >
//                   {restaurant.name}
//                 </Link>

//                 {/* Desktop Nav: Architectural Spacing */}
//                 <nav className="hidden lg:flex items-center gap-1">
//                   {!isAdminPage && (
//                     <>
//                       <Link to="/menu" label="Menu" />
//                       <Link to="/qr" label="Digital QR" />
//                       <Link to="/reviews" label="Reviews" />
//                       <Link to="/book" label="Reservations" />
//                     </>
//                   )}
//                   {isAdmin && (
//                     <Link
//                       to="/admin"
//                       className="ml-4 px-5 py-2 bg-champagne text-obsidian rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-2"
//                     >
//                       <span className="w-1 h-1 rounded-full bg-obsidian animate-pulse" />
//                       Command Center
//                     </Link>
//                   )}
//                 </nav>
//               </div>

//               {/* Right: Premium Action Suite */}
//               <div className="flex items-center gap-4">
//                 <div className="hidden md:flex items-center gap-4">
//                   {!isAdminPage && <CartButton />}
//                   {/* Icon Actions */}
//                   <div className="h-8 w-px bg-white/10 mx-2" /> {/* Divider */}
//                   <a
//                     href={`tel:${restaurant.phone}`}
//                     className="p-2.5 rounded-full border border-white/5 hover:border-champagne/50 hover:bg-white/5 text-mist transition-all"
//                     title="Call Concierge"
//                   >
//                     <Phone size={16} />
//                   </a>
//                   <a
//                     href={`https://wa.me/${restaurant.whatsappPhone}`}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="px-6 py-2.5 rounded-full bg-gradient-to-tr from-champagne to-bronze text-obsidian text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-champagne/10"
//                   >
//                     WhatsApp
//                   </a>
//                   {!isAdmin && (
//                     <Link
//                       to="/admin/login"
//                       className="p-2.5 rounded-full border border-white/5 hover:bg-white/5 text-smoke hover:text-champagne transition-all"
//                       title="Staff Portal"
//                     >
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="1.5"
//                           d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                         />
//                       </svg>
//                     </Link>
//                   )}
//                 </div>

//                 {/* Mobile: Hamburger with Animation */}
//                 <button
//                   className="md:hidden group/btn relative w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 overflow-hidden"
//                   onClick={() => setMobileOpen((v) => !v)}
//                 >
//                   <div
//                     className={`space-y-1.5 transition-all duration-300 ${mobileOpen ? "rotate-90" : ""}`}
//                   >
//                     <span
//                       className={`block w-6 h-0.5 bg-champagne transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
//                     />
//                     <span
//                       className={`block w-4 h-0.5 bg-champagne ml-auto transition-all ${mobileOpen ? "opacity-0" : ""}`}
//                     />
//                     <span
//                       className={`block w-6 h-0.5 bg-champagne transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
//                     />
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Panel: The Drawer Look */}
//         {mobileOpen && (
//           <div className="md:hidden fixed inset-x-4 top-28 z-50">
//             <div className="glass-gold rounded-[2rem] p-8 border border-white/10 shadow-3xl animate-in slide-in-from-top-4 duration-500">
//               <div className="flex flex-col gap-6">
//                 <MobileLink
//                   to="/menu"
//                   label="Menu"
//                   sub="View our culinary collection"
//                   onClick={closeMobile}
//                 />
//                 <MobileLink
//                   to="/qr"
//                   label="Digital QR"
//                   sub="Instant table ordering"
//                   onClick={closeMobile}
//                 />
//                 <MobileLink
//                   to="/reviews"
//                   label="Guest Registry"
//                   sub="What they say about us"
//                   onClick={closeMobile}
//                 />
//                 <MobileLink
//                   to="/book"
//                   label="Reservations"
//                   sub="Secure your table"
//                   onClick={closeMobile}
//                 />

//                 <div className="h-px bg-white/5 my-2" />

//                 <div className="grid grid-cols-2 gap-4">
//                   <a
//                     href={`tel:${restaurant.phone}`}
//                     className="flex items-center justify-center py-4 rounded-2xl bg-white/5 border border-white/10 font-bold uppercase text-[10px] tracking-widest text-mist"
//                   >
//                     Direct Call
//                   </a>
//                   <a
//                     href={`https://wa.me/${restaurant.whatsappPhone}`}
//                     className="flex items-center justify-center py-4 rounded-2xl bg-champagne text-obsidian font-bold uppercase text-[10px] tracking-widest"
//                   >
//                     WhatsApp
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       <main className="max-w-7xl mx-auto px-4 relative z-10">
//         <Outlet />
//       </main>

//       {!isAdminPage && <CartDrawer />}
//       <FloatingConcierge phone={restaurant.whatsappPhone} />
//     </div>
//   );
// }

// export default function Layout() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const isAdmin = useMemo(() => !!getToken(), []);
//   const isAdminPage = location.pathname.startsWith("/admin");

//   const closeMobile = () => setMobileOpen(false);
//   // bg-obsidian

//   return (
//     <div className="min-h-screen bg-transparent text-mist font-display selection:bg-champagne/30">
//       {/* HEADER: Professional Glassmorphism Sticky Bar */}
//       <EliteBackground />
//       <header className="sticky top-0 z-50 transition-all duration-300">
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <div className="glass-gold rounded-3xl px-6 py-3 flex items-center justify-between border-white/5 shadow-2xl">
//             {/* Left: Brand with Gold Gradient */}
//             <div className="flex items-center gap-8">
//               <Link
//                 to="/"
//                 className="font-bold text-xl tracking-tighter gold-gradient-text"
//                 onClick={closeMobile}
//               >
//                 {restaurant.name}
//               </Link>

//               {/* Desktop Nav: Clean & Minimalist */}
//               <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
//                 {!isAdminPage && (
//                   <>
//                     <Link
//                       to="/menu"
//                       className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"
//                     >
//                       Menu
//                     </Link>
//                     <Link
//                       to="/qr"
//                       className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"
//                     >
//                       Digital QR
//                     </Link>
//                     // Find your links array or HTML list in Navbar.jsx
//                     <Link
//                       to="/reviews"
//                       className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"
//                     >
//                       Reviews
//                     </Link>
//                     <Link
//                       to="/book"
//                       className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"
//                     >
//                       Reservations
//                     </Link>
//                   </>
//                 )}
//                 {isAdmin && (
//                   <Link
//                     to="/admin"
//                     className="px-6 py-2 border border-champagne/30 rounded-full text-obsidian text-[10px] uppercase tracking-widest hover:bg-white bg-champagne transition-all"

//                     // className="text-champagne hover:brightness-125 flex items-center gap-2"
//                   >
//                     <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
//                     Dashboard
//                   </Link>
//                 )}
//               </nav>
//             </div>

//             {/* Right: Modern Action Buttons */}
//             <div className="flex items-center gap-3">
//               <div className="hidden md:flex items-center gap-3">
//                 {!isAdminPage && <CartButton />}

//                 <a
//                   href={`tel:${restaurant.phone}`}
//                   // className="px-4 py-2 rounded-xl glass border border-champagne/30 text-xs uppercase font-bold tracking-widest hover:bg-white/5 transition-all"
//                   className="relative px-3 py-2 rounded-lg border border-champagne/30 text-smoke hover:text-mist transition-colors text-sm "
//                 >
//                   <Phone size={17} />
//                 </a>

//                 <a
//                   href={`https://wa.me/${restaurant.whatsappPhone}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="px-5 py-2 rounded-xl bg-gradient-to-r from-champagne to-bronze text-obsidian text-xs uppercase font-black tracking-widest hover:scale-105 transition-all shadow-lg shadow-champagne/10"
//                 >
//                   WhatsApp
//                 </a>

//                 {!isAdmin && (
//                   <Link
//                     to="/admin/login"
//                     className="p-1 rounded-xl border border-white/5 text-smoke hover:text-mist transition-colors"
//                     title="Staff Portal"
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.5"
//                         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                       />
//                     </svg>
//                   </Link>
//                 )}
//               </div>

//               {/* Mobile: Minimalist Hamburger */}
//               <button
//                 className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass border-white/10"
//                 onClick={() => setMobileOpen((v) => !v)}
//               >
//                 <div className="space-y-1.5">
//                   <span
//                     className={`block w-5 h-0.5 bg-champagne transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
//                   ></span>
//                   <span
//                     className={`block w-3 h-0.5 bg-champagne ml-auto transition-all ${mobileOpen ? "opacity-0" : ""}`}
//                   ></span>
//                   <span
//                     className={`block w-5 h-0.5 bg-champagne transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
//                   ></span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* MOBILE MENU PANEL: Blurred Overlay */}
//         {mobileOpen && (
//           <div className="md:hidden fixed inset-x-4 top-24 z-50">
//             <div className="glass-gold rounded-4xl p-6 border-white/10 shadow-3xl flex flex-col gap-4 animate-in fade-in zoom-in duration-300">
//               {!isAdminPage && (
//                 <>
//                   <Link
//                     to="/menu"
//                     onClick={closeMobile}
//                     className="text-xl font-bold py-2 border-b border-white/5"
//                   >
//                     Menu
//                   </Link>
//                   <Link
//                     to="/qr"
//                     onClick={closeMobile}
//                     className="text-xl font-bold py-2 border-b border-white/5"
//                   >
//                     Digital QR
//                   </Link>
//                   <div className="flex items-center justify-between py-2">
//                     <span className="text-smoke">Your Order</span>
//                     <CartButton />
//                   </div>
//                 </>
//               )}
//               <div className="grid grid-cols-2 gap-3 pt-2">
//                 <a
//                   href={`tel:${restaurant.phone}`}
//                   className="flex items-center justify-center py-4 rounded-2xl glass border-white/10 font-bold uppercase text-xs tracking-widest"
//                 >
//                   Call
//                 </a>
//                 <a
//                   href={`https://wa.me/${restaurant.whatsappPhone}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center py-4 rounded-2xl bg-champagne text-obsidian font-bold uppercase text-xs tracking-widest"
//                 >
//                   WhatsApp
//                 </a>
//               </div>

//               <Link
//                 to={isAdmin ? "/admin" : "/admin/login"}
//                 onClick={closeMobile}
//                 className="text-center py-3 text-smoke text-sm"
//               >
//                 {isAdmin ? "Go to Dashboard" : "Staff Login"}
//               </Link>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* MAIN CONTENT AREA */}
//       <main className="max-w-6xl mx-auto px-4 relative z-10">
//         <Outlet />
//       </main>

//       {/* Cart Drawer Overlay */}
//       {!isAdminPage && <CartDrawer />}

//       {/* Decorative Background Elements (Reference Image Style) */}
//       {/* <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-champagne/5 blur-[120px] rounded-full"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-barolo/5 blur-[120px] rounded-full"></div>
//       </div> */}
//       <FloatingConcierge phone={restaurant.whatsappPhone} />
//     </div>
//   );
// }

// latest version

import { useMemo, useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { restaurant } from "../config/restaurant";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import { getToken } from "../utils/auth";
import { Phone } from "lucide-react";
import FloatingConcierge from "./FloatingConcierge";
import EliteBackground from "./EliteBackground";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isAdmin = useMemo(() => !!getToken(), []);
  const isAdminPage = location.pathname.startsWith("/admin");

  const closeMobile = () => setMobileOpen(false);

  // High-end scroll effect: Header becomes more compact on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-mist font-display selection:bg-champagne/30">
      <EliteBackground />

      <header
        className={`sticky top-0 z-50 transition-all duration-700 ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative group">
            {/* Architectural Outer Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-champagne/20 to-bronze/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />

            <div
              className={`relative glass-gold rounded-3xl px-8 transition-all duration-500 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl ${
                isScrolled ? "py-3 bg-obsidian/40" : "py-5"
              }`}
            >
              {/* Left: Brand Identity */}
              <div className="flex items-center gap-10">
                <Link
                  to="/"
                  className="font-serif italic text-2xl tracking-tighter gold-gradient-text hover:brightness-125 transition-all"
                  onClick={closeMobile}
                >
                  {restaurant.name}
                </Link>

                {/* Desktop Nav: Rendered via Helper Component */}
                <nav className="hidden lg:flex items-center gap-1">
                  {!isAdminPage && (
                    <>
                      <NavLink to="/menu" label="Menu" />
                      <NavLink to="/qr" label="Digital QR" />
                      <NavLink to="/reviews" label="Reviews" />
                      <NavLink to="/book" label="Reservations" />
                    </>
                  )}
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="ml-4 px-5 py-2 bg-champagne text-obsidian rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-obsidian animate-pulse" />
                      Command Center
                    </Link>
                  )}
                </nav>
              </div>

              {/* Right: Premium Action Suite */}
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4">
                  {!isAdminPage && <CartButton />}

                  <div className="h-8 w-px bg-white/10 mx-2" />

                  <a
                    href={`tel:${restaurant.phone}`}
                    className="p-2.5 rounded-full border border-white/5 hover:border-champagne/50 hover:bg-white/5 text-mist transition-all"
                    title="Call Concierge"
                  >
                    <Phone size={16} />
                  </a>

                  <a
                    href={`https://wa.me/${restaurant.whatsappPhone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-tr from-champagne to-bronze text-obsidian text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-champagne/10"
                  >
                    WhatsApp
                  </a>

                  {!isAdmin && (
                    <Link
                      to="/admin/login"
                      className="p-2.5 rounded-full border border-white/5 hover:bg-white/5 text-smoke hover:text-champagne transition-all"
                      title="Staff Portal"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </Link>
                  )}
                </div>

                {/* Mobile: Animated Hamburger Toggle */}
                <button
                  className="md:hidden group/btn relative w-12 h-12 flex items-center justify-center rounded-2xl border border-white/10 overflow-hidden"
                  onClick={() => setMobileOpen((v) => !v)}
                >
                  <div
                    className={`space-y-1.5 transition-all duration-300 ${mobileOpen ? "rotate-90" : ""}`}
                  >
                    <span
                      className={`block w-6 h-0.5 bg-champagne transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                      className={`block w-4 h-0.5 bg-champagne ml-auto transition-all ${mobileOpen ? "opacity-0" : ""}`}
                    />
                    <span
                      className={`block w-6 h-0.5 bg-champagne transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Panel: The Drawer View */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-x-4 top-28 z-50 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="glass-gold rounded-[2.5rem] p-8 border border-white/10 shadow-3xl">
              <div className="flex flex-col gap-6">
                <MobileLink
                  to="/menu"
                  label="Menu"
                  sub="View our culinary collection"
                  onClick={closeMobile}
                />
                <MobileLink
                  to="/qr"
                  label="Digital QR"
                  sub="Instant table ordering"
                  onClick={closeMobile}
                />
                <MobileLink
                  to="/reviews"
                  label="Guest Registry"
                  sub="What they say about us"
                  onClick={closeMobile}
                />
                <MobileLink
                  to="/book"
                  label="Reservations"
                  sub="Secure your table"
                  onClick={closeMobile}
                />

                <div className="h-px bg-white/5 my-2" />

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="flex items-center justify-center py-4 rounded-2xl bg-white/5 border border-white/10 font-bold uppercase text-[10px] tracking-widest text-mist"
                  >
                    Call Center
                  </a>
                  <a
                    href={`https://wa.me/${restaurant.whatsappPhone}`}
                    className="flex items-center justify-center py-4 rounded-2xl bg-champagne text-obsidian font-bold uppercase text-[10px] tracking-widest"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content: Width-aligned with header */}
      <main className="max-w-7xl mx-auto px-4 relative z-10">
        <Outlet />
      </main>

      {!isAdminPage && <CartDrawer />}
      <FloatingConcierge phone={restaurant.whatsappPhone} />
    </div>
  );
}

// --- HELPER COMPONENTS (The Missing Pieces) ---

/**
 * Custom NavLink for Desktop
 */
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="px-5 py-2 text-[10px] uppercase tracking-[0.2em] text-mist/60 hover:text-champagne hover:bg-white/[0.03] rounded-full transition-all duration-300"
    >
      {label}
    </Link>
  );
}

/**
 * Custom Link for Mobile Drawer
 */
function MobileLink({ to, label, sub, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="group block no-underline">
      <p className="text-xl font-serif italic text-mist group-hover:text-champagne transition-colors m-0">
        {label}
      </p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 m-0 mt-1">
        {sub}
      </p>
    </Link>
  );
}

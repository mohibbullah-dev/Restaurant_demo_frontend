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

import { useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { restaurant } from "../config/restaurant";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import { getToken } from "../utils/auth";
import { Phone } from "lucide-react";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isAdmin = useMemo(() => !!getToken(), []);
  const isAdminPage = location.pathname.startsWith("/admin");

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-obsidian text-mist font-display selection:bg-champagne/30">
      {/* HEADER: Professional Glassmorphism Sticky Bar */}
      <header className="sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="glass-gold rounded-3xl px-6 py-3 flex items-center justify-between border-white/5 shadow-2xl">
            {/* Left: Brand with Gold Gradient */}
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="font-bold text-xl tracking-tighter gold-gradient-text"
                onClick={closeMobile}
              >
                {restaurant.name}
              </Link>

              {/* Desktop Nav: Clean & Minimalist */}
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wide">
                {!isAdminPage && (
                  <>
                    <Link
                      to="/menu"
                      className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"
                    >
                      Menu
                    </Link>
                    <Link
                      to="/qr"
                      className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"
                    >
                      Digital QR
                    </Link>
                    <Link
                      to="/book"
                      className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"
                    >
                      Reservations
                    </Link>
                  </>
                )}
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="px-6 py-2 border border-champagne/30 rounded-full text-champagne text-[10px] uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all"

                    // className="text-champagne hover:brightness-125 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
                    Dashboard
                  </Link>
                )}
              </nav>
            </div>

            {/* Right: Modern Action Buttons */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-3">
                {!isAdminPage && <CartButton />}

                <a
                  href={`tel:${restaurant.phone}`}
                  // className="px-4 py-2 rounded-xl glass border border-champagne/30 text-xs uppercase font-bold tracking-widest hover:bg-white/5 transition-all"
                  className="relative px-3 py-2 rounded-lg border border-champagne/30 text-smoke hover:text-mist transition-colors text-sm text-xs"
                >
                  <Phone size={20} />
                </a>

                <a
                  href={`https://wa.me/${restaurant.whatsappPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-champagne to-bronze text-obsidian text-xs uppercase font-black tracking-widest hover:scale-105 transition-all shadow-lg shadow-champagne/10"
                >
                  WhatsApp
                </a>

                {!isAdmin && (
                  <Link
                    to="/admin/login"
                    className="p-1 rounded-xl border border-white/5 text-smoke hover:text-mist transition-colors"
                    title="Staff Portal"
                  >
                    <svg
                      className="w-5 h-5"
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

              {/* Mobile: Minimalist Hamburger */}
              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass border-white/10"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <div className="space-y-1.5">
                  <span
                    className={`block w-5 h-0.5 bg-champagne transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                  ></span>
                  <span
                    className={`block w-3 h-0.5 bg-champagne ml-auto transition-all ${mobileOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-champagne transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU PANEL: Blurred Overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-x-4 top-24 z-50">
            <div className="glass-gold rounded-4xl p-6 border-white/10 shadow-3xl flex flex-col gap-4 animate-in fade-in zoom-in duration-300">
              {!isAdminPage && (
                <>
                  <Link
                    to="/menu"
                    onClick={closeMobile}
                    className="text-xl font-bold py-2 border-b border-white/5"
                  >
                    Menu
                  </Link>
                  <Link
                    to="/qr"
                    onClick={closeMobile}
                    className="text-xl font-bold py-2 border-b border-white/5"
                  >
                    Digital QR
                  </Link>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-smoke">Your Order</span>
                    <CartButton />
                  </div>
                </>
              )}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${restaurant.phone}`}
                  className="flex items-center justify-center py-4 rounded-2xl glass border-white/10 font-bold uppercase text-xs tracking-widest"
                >
                  Call
                </a>
                <a
                  href={`https://wa.me/${restaurant.whatsappPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center py-4 rounded-2xl bg-champagne text-obsidian font-bold uppercase text-xs tracking-widest"
                >
                  WhatsApp
                </a>
              </div>

              <Link
                to={isAdmin ? "/admin" : "/admin/login"}
                onClick={closeMobile}
                className="text-center py-3 text-smoke text-sm"
              >
                {isAdmin ? "Go to Dashboard" : "Staff Login"}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 relative z-10">
        <Outlet />
      </main>

      {/* Cart Drawer Overlay */}
      {!isAdminPage && <CartDrawer />}

      {/* Decorative Background Elements (Reference Image Style) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-champagne/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-barolo/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}

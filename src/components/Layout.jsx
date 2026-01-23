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
import {
  LayoutDashboard,
  Menu as MenuIcon,
  QrCode,
  Phone,
  MessageCircle,
  Shield,
} from "lucide-react";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isAdmin = useMemo(() => !!getToken(), []);
  const isAdminPage = location.pathname.startsWith("/admin");

  const closeMobile = () => setMobileOpen(false);

  return (
    /* Change background to your custom Obsidian color */
    <div className="min-h-screen bg-obsidian text-mist selection:bg-champagne selection:text-obsidian">
      {/* HEADER: Upgraded to Floating Glass Style */}
      <header className="sticky top-0 z-50 glass border-b-0 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-display italic text-2xl tracking-tighter text-champagne flex items-center gap-2"
              onClick={closeMobile}
            >
              <div className="w-8 h-8 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center">
                <span className="text-xs font-black">S</span>
              </div>
              {restaurant.name}
            </Link>

            {/* Desktop nav links with Hover Effects */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              {!isAdminPage && (
                <>
                  <Link
                    to="/menu"
                    className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
                  >
                    <MenuIcon size={16} className="text-champagne" /> Menu
                  </Link>
                  <Link
                    to="/qr"
                    className="px-4 py-2 rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
                  >
                    <QrCode size={16} className="text-champagne" /> QR
                  </Link>
                </>
              )}

              {isAdmin && (
                <Link
                  to="/admin"
                  className="px-4 py-2 rounded-full glass-interactive flex items-center gap-2 text-champagne border-champagne/20"
                >
                  <LayoutDashboard size={16} /> Dashboard
                </Link>
              )}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              {!isAdminPage && <CartButton />}

              <a
                href={`tel:${restaurant.phone}`}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-all"
              >
                <Phone size={18} />
              </a>

              <a
                href={`https://wa.me/${restaurant.whatsappPhone}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-champagne text-obsidian font-bold text-sm hover:brightness-110 transition-all shadow-glow-blue"
              >
                WhatsApp
              </a>

              {!isAdmin && (
                <Link
                  to="/admin/login"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-champagne/50 transition-all"
                >
                  <Shield size={18} />
                </Link>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass border-white/10"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {mobileOpen && (
          <div className="md:hidden glass border-t border-white/5 animate-in slide-in-from-top-4 duration-300">
            <div className="px-4 py-6 flex flex-col gap-4">
              {!isAdminPage && (
                <>
                  <Link
                    to="/menu"
                    onClick={closeMobile}
                    className="text-lg font-medium flex items-center gap-3 border-b border-white/5 pb-2"
                  >
                    <MenuIcon className="text-champagne" /> Menu
                  </Link>
                  <Link
                    to="/qr"
                    onClick={closeMobile}
                    className="text-lg font-medium flex items-center gap-3 border-b border-white/5 pb-2"
                  >
                    <QrCode className="text-champagne" /> QR
                  </Link>
                  <div className="py-2">
                    <CartButton />
                  </div>
                </>
              )}
              {isAdmin ? (
                <Link
                  to="/admin"
                  onClick={closeMobile}
                  className="text-lg font-bold text-champagne"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/admin/login"
                  onClick={closeMobile}
                  className="text-lg font-medium"
                >
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Page content with more breathing room */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {!isAdminPage && <CartDrawer />}
    </div>
  );
}

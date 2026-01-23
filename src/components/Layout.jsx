import { useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { restaurant } from "../config/restaurant";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import { getToken } from "../utils/auth";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isAdmin = useMemo(() => !!getToken(), []);
  const isAdminPage = location.pathname.startsWith("/admin");

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="font-bold text-lg tracking-tight"
              onClick={closeMobile}
            >
              {restaurant.name}
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-4 text-sm text-gray-700">
              {!isAdminPage && (
                <>
                  <Link to="/menu" className="hover:text-black">
                    Menu
                  </Link>
                  <Link to="/qr" className="hover:text-black">
                    QR
                  </Link>
                </>
              )}

              {/* Admin links visible only when admin */}
              {isAdmin && (
                <Link to="/admin" className="hover:text-black font-medium">
                  Dashboard
                </Link>
              )}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-2">
              {!isAdminPage && <CartButton />}

              <a
                href={`tel:${restaurant.phone}`}
                className="px-3 py-2 rounded-lg border text-sm"
              >
                Call
              </a>

              <a
                href={`https://wa.me/${restaurant.whatsappPhone}`}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-lg bg-black text-white text-sm"
              >
                WhatsApp
              </a>

              {/* If not admin logged in, show Admin Login */}
              {!isAdmin && (
                <Link
                  to="/admin/login"
                  className="px-3 py-2 rounded-lg border text-sm"
                >
                  Admin
                </Link>
              )}
            </div>

            {/* Mobile: hamburger */}
            <button
              className="md:hidden px-3 py-2 rounded-lg border text-sm"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU PANEL */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
              {/* Customer links */}
              {!isAdminPage && (
                <>
                  <Link to="/menu" onClick={closeMobile} className="py-2">
                    Menu
                  </Link>
                  <Link to="/qr" onClick={closeMobile} className="py-2">
                    QR
                  </Link>

                  <div className="py-2">
                    <CartButton />
                  </div>

                  <a href={`tel:${restaurant.phone}`} className="py-2">
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${restaurant.whatsappPhone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2"
                  >
                    WhatsApp
                  </a>
                </>
              )}

              {/* Admin area */}
              {isAdmin ? (
                <Link
                  to="/admin"
                  onClick={closeMobile}
                  className="py-2 font-medium"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/admin/login"
                  onClick={closeMobile}
                  className="py-2 font-medium"
                >
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="max-w-6xl mx-auto px-4">
        <Outlet />
      </main>

      {/* Cart Drawer (only relevant for customer side) */}
      {!isAdminPage && <CartDrawer />}
    </div>
  );
}

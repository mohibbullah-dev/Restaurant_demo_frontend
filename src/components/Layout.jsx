import { Outlet, Link } from "react-router-dom";
import { restaurant } from "../config/restaurant";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">
            {restaurant.name}
          </Link>
          <Link to="/menu" className="text-sm text-gray-700 hover:text-black">
            Menu
          </Link>

          <div className="flex items-center gap-2">
            <CartButton />
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
          </div>
          <CartDrawer />
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          © {new Date().getFullYear()} {restaurant.name} — Built for client demo
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2">
          <a
            className="flex-1 text-center py-3 rounded-xl border font-medium"
            href={`tel:${restaurant.phone}`}
          >
            Call
          </a>
          <a
            className="flex-1 text-center py-3 rounded-xl bg-black text-white font-medium"
            href={`https://wa.me/${restaurant.whatsappPhone}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

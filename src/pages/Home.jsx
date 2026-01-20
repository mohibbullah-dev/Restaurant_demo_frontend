import Section from "../components/Section";
import { restaurant } from "../config/restaurant";
import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import MenuItemCard from "../components/MenuItemCard";
import { useCart } from "../context/CartContext";

const featured = [
  {
    name: "Classic Burger",
    desc: "Juicy beef patty, cheese, house sauce.",
    price: "120 EGP",
  },
  {
    name: "Chicken Shawarma",
    desc: "Tender chicken, garlic sauce, pickles.",
    price: "95 EGP",
  },
  {
    name: "Margherita Pizza",
    desc: "Tomato, mozzarella, fresh basil.",
    price: "150 EGP",
  },
  {
    name: "Fresh Lemon Mint",
    desc: "Cold, refreshing, made to order.",
    price: "45 EGP",
  },
];

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const cart = useCart();

  useEffect(() => {
    fetch(`${API_BASE}/api/menu?featured=true`)
      .then((r) => r.json())
      .then((d) => setFeatured(d.items || []))
      .catch(() => setFeatured([]));
  }, []);

  return (
    <div className="pb-24 md:pb-0">
      {/* HERO */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-gray-600">
                Open today • Fast pickup • WhatsApp ordering
              </p>

              <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
                {restaurant.tagline}
              </h1>

              <p className="mt-4 text-gray-600 max-w-xl">
                A clean restaurant website + digital menu + WhatsApp ordering
                that brings customers from Google Maps into real orders.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="px-5 py-3 rounded-2xl bg-black text-white font-medium"
                >
                  View Menu
                </a>
                <a
                  href={`https://wa.me/${restaurant.whatsappPhone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-2xl border font-medium"
                >
                  Order on WhatsApp
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="px-3 py-1 rounded-full border">
                  No apps needed
                </span>
                <span className="px-3 py-1 rounded-full border">
                  Mobile-first
                </span>
                <span className="px-3 py-1 rounded-full border">
                  Easy admin
                </span>
              </div>
            </div>

            {/* Fake image block (replace later with real photos) */}
            <div className="rounded-3xl border bg-white p-6">
              <div className="rounded-2xl bg-gray-100 h-64 md:h-80 flex items-center justify-center text-gray-500">
                Food Photo / Slider
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-xl bg-gray-100" />
                <div className="h-20 rounded-xl bg-gray-100" />
                <div className="h-20 rounded-xl bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED */}
      <Section
        id="menu"
        title="Featured dishes"
        subtitle="A quick section to hook customers before they scroll the full menu."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((item) => (
            <MenuItemCard
              key={item._id}
              item={item}
              onAdd={(it) => {
                cart.add(it);
                cart.open();
              }}
            />
          ))}

          {featured.length === 0 && (
            <div className="text-gray-600">
              No featured items yet. Mark items as featured in Admin → Menu.
            </div>
          )}
        </div>
      </Section>

      {/* INFO STRIP */}
      <div className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border p-4">
            <p className="text-sm text-gray-600">Phone</p>
            <a className="font-semibold" href={`tel:${restaurant.phone}`}>
              {restaurant.phone}
            </a>
          </div>
          <div className="rounded-2xl border p-4">
            <p className="text-sm text-gray-600">Address</p>
            <p className="font-semibold">{restaurant.addressLine}</p>
          </div>
          <div className="rounded-2xl border p-4">
            <p className="text-sm text-gray-600">Order</p>
            <a
              className="font-semibold"
              href={`https://wa.me/${restaurant.whatsappPhone}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ordering
            </a>
          </div>
        </div>
      </div>

      {/* HOURS + MAP */}
      <Section
        title="Hours & Location"
        subtitle="Make it easy for customers to visit or call."
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border p-6 bg-white">
            <h3 className="text-xl font-bold">Opening hours</h3>
            <div className="mt-4 space-y-2">
              {restaurant.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-600">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`tel:${restaurant.phone}`}
                className="flex-1 text-center py-3 rounded-2xl border font-medium"
              >
                Call
              </a>
              <a
                href={`https://wa.me/${restaurant.whatsappPhone}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3 rounded-2xl bg-black text-white font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border overflow-hidden bg-white">
            <iframe
              title="map"
              src={restaurant.mapEmbedUrl}
              className="w-full h-80 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section
        title="Order in 1 minute"
        subtitle="Customers don’t want to download apps. WhatsApp ordering converts fast."
      >
        <div className="rounded-3xl border p-8 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to place an order?</h3>
            <p className="mt-2 text-gray-600">
              Send your order on WhatsApp and we’ll confirm instantly.
            </p>
          </div>
          <a
            href={`https://wa.me/${restaurant.whatsappPhone}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl bg-black text-white font-medium"
          >
            Order on WhatsApp
          </a>
        </div>
      </Section>
    </div>
  );
}

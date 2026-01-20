import { useMemo, useState, useEffect } from "react";
import Section from "../components/Section";
import MenuItemCard from "../components/MenuItemCard";
// import { menuItems } from "../data/menu";
import { getCategories } from "../utils/menu";
import { useCart } from "../context/CartContext";

import { API_BASE } from "../config/api";

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const cart = useCart();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/menu`)
      .then((r) => r.json())
      .then((d) => setMenuItems(d.items || []))
      .catch(() => setMenuItems([]));
  }, []);

  const categories = useMemo(() => getCategories(menuItems), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return menuItems.filter((item) => {
      const matchCategory = category === "All" || item.category === category;
      const matchQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchCategory && matchQuery;
    });
  }, [category, query]);

  return (
    <div className="pb-24 md:pb-0">
      <Section
        title="Menu"
        subtitle="Search items, filter categories, and add to cart. (Cart comes next step.)"
      >
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
                  category === c ? "bg-black text-white" : "bg-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="md:w-80">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu..."
              className="w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <MenuItemCard
              key={item._id}
              item={item}
              onAdd={(it) => {
                cart.add(it);
                cart.open();
              }}
            />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-10 text-center text-gray-600">
            No items found. Try another search.
          </div>
        )}
      </Section>
    </div>
  );
}

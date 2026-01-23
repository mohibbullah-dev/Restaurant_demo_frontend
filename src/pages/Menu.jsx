// import { useMemo, useState, useEffect } from "react";
// import Section from "../components/Section";
// import MenuItemCard from "../components/MenuItemCard";
// import { getCategories } from "../utils/menu";
// import { useCart } from "../context/CartContext";
// import { API_BASE } from "../config/api";

// export default function Menu() {
//   const [category, setCategory] = useState("All");
//   const [query, setQuery] = useState("");
//   const [menuItems, setMenuItems] = useState([]);
//   const cart = useCart();

//   useEffect(() => {
//     fetch(`${API_BASE}/api/menu`)
//       .then((r) => r.json())
//       .then((d) => setMenuItems(d.items || []))
//       .catch(() => setMenuItems([]));
//   }, []);

//   // ✅ must depend on menuItems
//   const categories = useMemo(() => getCategories(menuItems), [menuItems]);

//   // ✅ if current category disappears (after fetch), reset to All
//   useEffect(() => {
//     if (!categories.includes(category)) setCategory("All");
//   }, [categories, category]);

//   // ✅ must depend on menuItems too
//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();

//     return menuItems.filter((item) => {
//       const matchCategory = category === "All" || item.category === category;

//       const name = (item.name || "").toLowerCase();
//       const desc = (item.desc || "").toLowerCase();
//       const cat = (item.category || "").toLowerCase();

//       const matchQuery =
//         !q || name.includes(q) || desc.includes(q) || cat.includes(q);

//       return matchCategory && matchQuery;
//     });
//   }, [menuItems, category, query]);

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section
//         title="Menu"
//         subtitle="Search items, filter categories, and add to cart."
//       >
//         {/* Controls */}
//         <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
//           <div className="flex gap-2 overflow-x-auto pb-1">
//             {categories.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => setCategory(c)}
//                 className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
//                   category === c ? "bg-black text-white" : "bg-white"
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>

//           <div className="md:w-80">
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search menu..."
//               className="w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filtered.map((item) => (
//             <MenuItemCard
//               key={item._id}
//               item={item}
//               onAdd={(it) => {
//                 cart.add(it);
//                 cart.open();
//               }}
//             />
//           ))}
//         </div>

//         {/* Empty state */}
//         {filtered.length === 0 && (
//           <div className="mt-10 text-center text-gray-600">
//             No items found. Try another search.
//           </div>
//         )}
//       </Section>
//     </div>
//   );
// }

import { useEffect, useState, useRef } from "react";
import { API_BASE } from "../config/api";
import MenuItemCard from "../components/MenuItemCard";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const cart = useCart();

  // Ref for the category bar to handle smooth scrolling
  const sectionRefs = useRef({});

  useEffect(() => {
    fetch(`${API_BASE}/api/menu`)
      .then((r) => r.json())
      .then((data) => {
        // We group items by their category field
        const grouped = data.items.reduce((acc, item) => {
          const cat = item.category || "General";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(item);
          return acc;
        }, {});

        // Convert object to array for easier mapping
        const categoryArray = Object.keys(grouped).map((name) => ({
          name,
          items: grouped[name],
        }));

        setCategories(categoryArray);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const scrollToCategory = (name) => {
    sectionRefs.current[name]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (loading)
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-champagne/20 border-t-champagne rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="bg-obsidian min-h-screen pb-20">
      {/* 1. MINIMAL MENU HEADER */}
      <div className="pt-32 pb-12 px-6 text-center">
        <p className="text-champagne text-[10px] font-black uppercase tracking-[0.5em] mb-4">
          The Collection
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-bold gold-gradient-text tracking-tighter italic">
          Digital Atelier
        </h1>
      </div>

      {/* 2. STICKY CATEGORY NAV (Professional & Functional) */}
      <div className="sticky top-0 z-30 bg-obsidian/80 backdrop-blur-xl border-y border-white/5 py-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => scrollToCategory(cat.name)}
              className="text-[10px] font-black uppercase tracking-widest text-smoke hover:text-champagne transition-colors"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. GROUPED SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 space-y-24 pt-16">
        {categories.map((cat) => (
          <div
            key={cat.name}
            ref={(el) => (sectionRefs.current[cat.name] = el)}
            className="scroll-mt-24" // Prevents the sticky nav from covering the title
          >
            {/* Category Title Architecture */}
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl font-display font-bold text-mist tracking-tight whitespace-nowrap uppercase">
                {cat.name}
              </h2>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            {/* Grid for this specific category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {cat.items.map((item) => (
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
          </div>
        ))}
      </div>

      {/* 4. NO ITEMS FALLBACK */}
      {categories.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-smoke/40 font-serif italic text-xl">
            The menu is being curated. Please check back shortly.
          </p>
        </div>
      )}
    </div>
  );
}

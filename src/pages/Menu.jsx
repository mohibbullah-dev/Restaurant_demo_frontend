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

// import { useEffect, useState, useRef } from "react";
// import { API_BASE } from "../config/api";
// import MenuItemCard from "../components/MenuItemCard";
// import { useCart } from "../context/CartContext";

// export default function Menu() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const cart = useCart();
//   const sectionRefs = useRef({});

//   useEffect(() => {
//     fetch(`${API_BASE}/api/menu`)
//       .then((r) => r.json())
//       .then((data) => {
//         // Grouping items by category for professional organization
//         const grouped = data.items.reduce((acc, item) => {
//           const cat = item.category || "General";
//           if (!acc[cat]) acc[cat] = [];
//           acc[cat].push(item);
//           return acc;
//         }, {});

//         const categoryArray = Object.keys(grouped).map((name) => ({
//           name,
//           items: grouped[name],
//         }));

//         setCategories(categoryArray);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const scrollToCategory = (name) => {
//     sectionRefs.current[name]?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen  flex items-center justify-center">
//         <div className="w-10 h-10 border-2 border-champagne/10 border-t-champagne rounded-full animate-spin"></div>
//       </div>
//     );

//   return (
//     <div className="pb-24">
//       {/* --- PAGE HEADER --- */}
//       <div className="pt-32 pb-16 px-6 text-center">
//         <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-6">
//           <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
//           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-champagne/80">
//             Curated Menu
//           </p>
//         </div>
//         <h1 className="text-5xl md:text-7xl font-display font-bold gold-gradient-text tracking-tighter italic">
//           The Collection
//         </h1>
//       </div>

//       {/* --- STICKY CATEGORY NAV --- */}
//       {/* bg-obsidian/60 */}
//       <div className="sticky top-[72px] z-30  backdrop-blur-xl border-y border-white/5 py-4 overflow-x-auto no-scrollbar">
//         {/* <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10 whitespace-nowrap"> */}
//         <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10">
//           {categories.map((cat) => (
//             <button
//               key={cat.name}
//               onClick={() => scrollToCategory(cat.name)}
//               className="text-[10px] font-black uppercase tracking-[0.3em] text-smoke hover:text-champagne transition-all relative group"
//             >
//               {cat.name}
//               <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne transition-all group-hover:w-full"></span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* --- MENU SECTIONS --- */}
//       <div className="max-w-7xl mx-auto px-6 space-y-32 pt-20">
//         {categories.map((cat) => (
//           <div
//             key={cat.name}
//             ref={(el) => (sectionRefs.current[cat.name] = el)}
//             className="scroll-mt-32"
//           >
//             {/* Minimalist Category Header */}
//             <div className="flex items-center gap-8 mb-12">
//               <h2 className="text-2xl font-display font-bold text-mist tracking-widest uppercase italic">
//                 {cat.name}
//               </h2>
//               <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
//             </div>

//             {/* Optimized Grid for MenuItemCards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {cat.items.map((item) => (
//                 <MenuItemCard
//                   key={item._id}
//                   item={item}
//                   onAdd={(it) => {
//                     cart.add(it);
//                     cart.open();
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* --- EMPTY STATE --- */}
//       {categories.length === 0 && (
//         <div className="py-40 text-center opacity-40">
//           <p className="font-serif italic text-xl tracking-widest text-smoke">
//             The kitchen is preparing new selections...
//           </p>
//         </div>
//       )}
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
  const [activeCat, setActiveCat] = useState("");
  const cart = useCart();
  const sectionRefs = useRef({});

  // 1. Fetch and Group Menu Items
  useEffect(() => {
    fetch(`${API_BASE}/api/menu`)
      .then((r) => r.json())
      .then((data) => {
        const grouped = data.items.reduce((acc, item) => {
          const cat = item.category || "General";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(item);
          return acc;
        }, {});

        const categoryArray = Object.keys(grouped).map((name) => ({
          name,
          items: grouped[name],
        }));

        setCategories(categoryArray);
        if (categoryArray.length > 0) setActiveCat(categoryArray[0].name);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 2. Active Section Tracking (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Triggers when section is in upper-middle of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCat(entry.target.id);
        }
      });
    }, observerOptions);

    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToCategory = (name) => {
    sectionRefs.current[name]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-champagne/10 border-t-champagne rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="pb-32">
      {/* --- PAGE HEADER --- */}
      <div className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-champagne/80">
            Epicurean Selections
          </p>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif italic gold-gradient-text tracking-tighter mb-4">
          The Collection
        </h1>
        <p className="text-smoke/40 text-[10px] uppercase tracking-[0.5em]">
          Handcrafted • Seasonal • Refined
        </p>
      </div>

      {/* --- PREMIUM STICKY CATEGORY NAV --- */}
      <div className="sticky top-[90px] z-30 transition-all duration-500">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative glass-gold border border-white/10 rounded-full shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Mobile Scroll Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-obsidian/40 to-transparent z-10 md:hidden pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-obsidian/40 to-transparent z-10 md:hidden pointer-events-none" />

            <div className="flex items-center md:justify-center gap-2 overflow-x-auto no-scrollbar py-3 px-6 scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => scrollToCategory(cat.name)}
                  className={`
                    flex-shrink-0 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500
                    ${
                      activeCat === cat.name
                        ? "bg-champagne text-obsidian shadow-lg shadow-champagne/20 scale-105"
                        : "text-smoke/60 hover:text-mist hover:bg-white/5"
                    }
                  `}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MENU SECTIONS --- */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 pt-24">
        {categories.map((cat) => (
          <div
            key={cat.name}
            id={cat.name}
            ref={(el) => (sectionRefs.current[cat.name] = el)}
            className="scroll-mt-40"
          >
            {/* Minimalist Category Header */}
            <div className="flex items-center gap-8 mb-16">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] text-champagne mb-2">
                  Chapter
                </span>
                <h2 className="text-3xl md:text-4xl font-serif italic text-mist tracking-tight">
                  {cat.name}
                </h2>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-champagne/30 via-white/5 to-transparent"></div>
            </div>

            {/* Grid for MenuItemCards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
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

      {/* --- EMPTY STATE --- */}
      {categories.length === 0 && (
        <div className="py-40 text-center">
          <div className="w-12 h-px bg-champagne/30 mx-auto mb-8" />
          <p className="font-serif italic text-xl tracking-widest text-smoke/50">
            The kitchen is preparing new masterpieces...
          </p>
        </div>
      )}
    </div>
  );
}

// import { useEffect, useMemo, useState } from "react";
// import Section from "../components/Section";
// import { API_BASE } from "../config/api";
// import { authHeaders } from "../utils/auth";
// import { uploadMenuImage } from "../utils/uploadImage";
// import { notify } from "../utils/toast";

// const emptyForm = {
//   name: "",
//   desc: "",
//   price: 0,
//   category: "",
//   isVeg: false,
//   available: true,
//   featured: false,
//   imageUrl: "",
// };

// export default function AdminMenu() {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState(emptyForm);
//   const [editingId, setEditingId] = useState(null);
//   const [q, setQ] = useState("");
//   const [uploading, setUploading] = useState(false);

//   const filtered = useMemo(() => {
//     const s = q.trim().toLowerCase();
//     if (!s) return items;
//     return items.filter((i) =>
//       [i.name, i.desc, i.category].some((x) =>
//         (x || "").toLowerCase().includes(s),
//       ),
//     );
//   }, [items, q]);

//   async function load() {
//     const res = await fetch(`${API_BASE}/api/menu`);
//     const data = await res.json();
//     setItems(data.items || []);
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   function startEdit(item) {
//     setEditingId(item._id);
//     setForm({
//       name: item.name || "",
//       desc: item.desc || "",
//       price: item.price || 0,
//       category: item.category || "",
//       isVeg: !!item.isVeg,
//       available: item.available !== false,
//       featured: !!item.featured,
//       imageUrl: item.imageUrl || "",
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function reset() {
//     setEditingId(null);
//     setForm(emptyForm);
//   }

//   async function save() {
//     const payload = {
//       ...form,
//       price: Number(form.price),
//     };

//     const isEdit = !!editingId;
//     const url = isEdit
//       ? `${API_BASE}/api/menu/${editingId}`
//       : `${API_BASE}/api/menu`;
//     const method = isEdit ? "PUT" : "POST";

//     const res = await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json", ...authHeaders() },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     if (!res.ok) return notify.error(data?.message || "Save failed");

//     await load();
//     reset();
//   }

//   async function del(id) {
//     if (!confirm("Delete this item?")) return;

//     const res = await fetch(`${API_BASE}/api/menu/${id}`, {
//       method: "DELETE",
//       headers: { ...authHeaders() },
//     });
//     const data = await res.json();
//     if (!res.ok) return notify.error(data?.message || "Delete failed");

//     await load();
//   }

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section title="Admin — Menu" subtitle="Add, edit, delete menu items.">
//         {/* Form */}
//         <div className="rounded-3xl border bg-white p-6">
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <h3 className="text-xl font-bold">
//                 {editingId ? "Edit item" : "Add new item"}
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 Keep it simple for restaurant owners.
//               </p>
//             </div>
//             {editingId && (
//               <button className="px-4 py-2 rounded-xl border" onClick={reset}>
//                 Cancel edit
//               </button>
//             )}
//           </div>

//           <div className="mt-4 grid md:grid-cols-2 gap-3">
//             <div>
//               <label className="text-sm text-gray-600">Name</label>
//               <input
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, name: e.target.value }))
//                 }
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Category</label>
//               <input
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border"
//                 value={form.category}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, category: e.target.value }))
//                 }
//                 placeholder="Burgers, Pizza, Drinks..."
//               />
//             </div>

//             <div className="md:col-span-2">
//               <label className="text-sm text-gray-600">Description</label>
//               <input
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border"
//                 value={form.desc}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, desc: e.target.value }))
//                 }
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-600">Price</label>
//               <input
//                 type="number"
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border"
//                 value={form.price}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, price: e.target.value }))
//                 }
//               />
//             </div>
//             <div>
//               <label className="text-sm text-gray-600">Image</label>

//               <div className="mt-1 flex flex-col gap-2">
//                 {/* Preview */}
//                 <div className="h-24 rounded-2xl border bg-gray-50 overflow-hidden flex items-center justify-center text-sm text-gray-500">
//                   {form.imageUrl ? (
//                     <img
//                       src={form.imageUrl}
//                       alt="preview"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     "No image"
//                   )}
//                 </div>

//                 {/* Upload */}
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="block w-full text-sm"
//                   onChange={async (e) => {
//                     const file = e.target.files?.[0];
//                     if (!file) return;

//                     try {
//                       setUploading(true);
//                       const uploaded = await uploadMenuImage(file);

//                       setForm((p) => ({
//                         ...p,
//                         imageUrl: uploaded.imageUrl,
//                         imagePublicId: uploaded.publicId,
//                       }));
//                     } catch (err) {
//                       notify.error(err.message);
//                     } finally {
//                       setUploading(false);
//                       e.target.value = ""; // reset input
//                     }
//                   }}
//                   disabled={uploading}
//                 />

//                 {/* Optional: clear image */}
//                 {form.imageUrl && (
//                   <button
//                     type="button"
//                     className="px-4 py-2 rounded-xl border"
//                     onClick={() =>
//                       setForm((p) => ({
//                         ...p,
//                         imageUrl: "",
//                         imagePublicId: "",
//                       }))
//                     }
//                   >
//                     Remove image from item
//                   </button>
//                 )}

//                 {uploading && (
//                   <p className="text-sm text-gray-600">Uploading...</p>
//                 )}
//               </div>
//             </div>

//             <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
//               <label className="flex items-center gap-2 text-sm">
//                 <input
//                   type="checkbox"
//                   checked={form.available}
//                   onChange={(e) =>
//                     setForm((p) => ({ ...p, available: e.target.checked }))
//                   }
//                 />
//                 Available
//               </label>
//               <label className="flex items-center gap-2 text-sm">
//                 <input
//                   type="checkbox"
//                   checked={form.isVeg}
//                   onChange={(e) =>
//                     setForm((p) => ({ ...p, isVeg: e.target.checked }))
//                   }
//                 />
//                 Veg
//               </label>
//               <label className="flex items-center gap-2 text-sm">
//                 <input
//                   type="checkbox"
//                   checked={form.featured}
//                   onChange={(e) =>
//                     setForm((p) => ({ ...p, featured: e.target.checked }))
//                   }
//                 />
//                 Featured
//               </label>
//             </div>

//             <div className="md:col-span-2 flex gap-2">
//               <button
//                 className="flex-1 py-3 rounded-2xl bg-black text-white"
//                 onClick={save}
//               >
//                 {editingId ? "Update" : "Create"}
//               </button>
//               <button className="flex-1 py-3 rounded-2xl border" onClick={load}>
//                 Refresh
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* List */}
//         <div className="mt-6 rounded-3xl border bg-white p-6">
//           <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
//             <h3 className="text-xl font-bold">Menu items</h3>
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search..."
//               className="md:w-80 px-4 py-3 rounded-2xl border"
//             />
//           </div>

//           <div className="mt-4 space-y-3">
//             {filtered.map((i) => (
//               <div
//                 key={i._id}
//                 className="rounded-2xl border p-4 flex flex-col md:flex-row md:items-start md:justify-between gap-3"
//               >
//                 <div>
//                   <p className="font-bold">
//                     {i.name}{" "}
//                     <span className="text-sm text-gray-600">
//                       ({i.category})
//                     </span>
//                   </p>
//                   <p className="text-sm text-gray-600">{i.desc}</p>
//                   <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600">
//                     <span className="px-2 py-1 rounded-full border">
//                       {i.price} EGP
//                     </span>
//                     <span className="px-2 py-1 rounded-full border">
//                       {i.isVeg ? "Veg" : "Non-Veg"}
//                     </span>
//                     <span className="px-2 py-1 rounded-full border">
//                       {i.available ? "Available" : "Unavailable"}
//                     </span>
//                     {i.featured && (
//                       <span className="px-2 py-1 rounded-full border">
//                         Featured
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <button
//                     className="px-4 py-2 rounded-xl border"
//                     onClick={() => startEdit(i)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="px-4 py-2 rounded-xl border"
//                     onClick={() => del(i._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {filtered.length === 0 && (
//               <p className="text-gray-600">No items.</p>
//             )}
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

// import { useEffect, useMemo, useState } from "react";
// import Section from "../components/Section";
// import { API_BASE } from "../config/api";
// import { authHeaders } from "../utils/auth";
// import { uploadMenuImage } from "../utils/uploadImage";
// import { notify } from "../utils/toast";

// const emptyForm = {
//   name: "",
//   desc: "",
//   price: 0,
//   category: "",
//   isVeg: false,
//   available: true,
//   featured: false,
//   imageUrl: "",
// };

// export default function AdminMenu() {
//   const [items, setItems] = useState([]);
//   const [form, setForm] = useState(emptyForm);
//   const [editingId, setEditingId] = useState(null);
//   const [q, setQ] = useState("");
//   const [uploading, setUploading] = useState(false);

//   const filtered = useMemo(() => {
//     const s = q.trim().toLowerCase();
//     if (!s) return items;
//     return items.filter((i) =>
//       [i.name, i.desc, i.category].some((x) =>
//         (x || "").toLowerCase().includes(s),
//       ),
//     );
//   }, [items, q]);

//   async function load() {
//     const res = await fetch(`${API_BASE}/api/menu`);
//     const data = await res.json();
//     setItems(data.items || []);
//   }

//   useEffect(() => {
//     load();
//   }, []);

//   function startEdit(item) {
//     setEditingId(item._id);
//     setForm({
//       name: item.name || "",
//       desc: item.desc || "",
//       price: item.price || 0,
//       category: item.category || "",
//       isVeg: !!item.isVeg,
//       available: item.available !== false,
//       featured: !!item.featured,
//       imageUrl: item.imageUrl || "",
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function reset() {
//     setEditingId(null);
//     setForm(emptyForm);
//   }

//   async function save() {
//     const payload = {
//       ...form,
//       price: Number(form.price),
//     };

//     const isEdit = !!editingId;
//     const url = isEdit
//       ? `${API_BASE}/api/menu/${editingId}`
//       : `${API_BASE}/api/menu`;
//     const method = isEdit ? "PUT" : "POST";

//     const res = await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json", ...authHeaders() },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     if (!res.ok) return notify.error(data?.message || "Save failed");

//     await load();
//     reset();
//   }

//   async function del(id) {
//     if (!confirm("Delete this item?")) return;

//     const res = await fetch(`${API_BASE}/api/menu/${id}`, {
//       method: "DELETE",
//       headers: { ...authHeaders() },
//     });
//     const data = await res.json();
//     if (!res.ok) return notify.error(data?.message || "Delete failed");

//     await load();
//   }

//   return (
//     <div className="pb-24 md:pb-10 font-display">
//       <Section
//         title={<span className="gold-gradient-text">Admin — Menu</span>}
//         subtitle={
//           <span className="text-smoke italic">
//             Manage your 2026 digital experience.
//           </span>
//         }
//       >
//         {/* Form Container */}
//         <div className="glass-gold rounded-4xl p-8 mb-10 overflow-hidden relative">
//           {/* Decorative Glow */}
//           <div className="absolute -top-20 -right-20 w-40 h-40 bg-champagne/10 blur-3xl rounded-full"></div>

//           <div className="flex items-start justify-between gap-4 relative z-10">
//             <div>
//               <h3 className="text-2xl font-bold text-mist tracking-tight">
//                 {editingId ? "Refine Selection" : "Add to Collection"}
//               </h3>
//               <p className="text-sm text-smoke mt-1">
//                 Luxury is in the details.
//               </p>
//             </div>
//             {editingId && (
//               <button
//                 className="px-6 py-2 rounded-xl border border-champagne/30 text-champagne hover:bg-champagne/10 transition-all"
//                 onClick={reset}
//               >
//                 Cancel
//               </button>
//             )}
//           </div>

//           <div className="mt-8 grid md:grid-cols-2 gap-6 relative z-10">
//             {/* Input Groups */}
//             <div className="space-y-1">
//               <label className="text-xs uppercase tracking-widest text-champagne font-bold ml-2">
//                 Name
//               </label>
//               <input
//                 className="w-full bg-obsidian/40 border border-white/5 px-5 py-4 rounded-2xl text-mist focus:border-champagne/50 outline-none transition-all placeholder:text-smoke/30"
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, name: e.target.value }))
//                 }
//                 placeholder="Ex: Black Truffle Risotto"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="text-xs uppercase tracking-widest text-champagne font-bold ml-2">
//                 Category
//               </label>
//               <input
//                 className="w-full bg-obsidian/40 border border-white/5 px-5 py-4 rounded-2xl text-mist focus:border-champagne/50 outline-none transition-all placeholder:text-smoke/30"
//                 value={form.category}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, category: e.target.value }))
//                 }
//                 placeholder="Main Course, Dessert, Aperitif..."
//               />
//             </div>

//             <div className="md:col-span-2 space-y-1">
//               <label className="text-xs uppercase tracking-widest text-champagne font-bold ml-2">
//                 Description
//               </label>
//               <textarea
//                 className="w-full bg-obsidian/40 border border-white/5 px-5 py-4 rounded-2xl text-mist focus:border-champagne/50 outline-none transition-all h-24 resize-none"
//                 value={form.desc}
//                 onChange={(e) =>
//                   setForm((p) => ({ ...p, desc: e.target.value }))
//                 }
//                 placeholder="Describe the flavor journey..."
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="text-xs uppercase tracking-widest text-champagne font-bold ml-2">
//                 Price
//               </label>
//               <div className="relative">
//                 <input
//                   type="number"
//                   className="w-full bg-obsidian/40 border border-white/5 px-5 py-4 rounded-2xl text-mist focus:border-champagne/50 outline-none transition-all"
//                   value={form.price}
//                   onChange={(e) =>
//                     setForm((p) => ({ ...p, price: e.target.value }))
//                   }
//                 />
//                 <span className="absolute right-5 top-4 text-smoke">EGP</span>
//               </div>
//             </div>

//             <div className="space-y-1">
//               <label className="text-xs uppercase tracking-widest text-champagne font-bold ml-2">
//                 Visual Presentation
//               </label>
//               <div className="flex items-center gap-4">
//                 <div className="w-20 h-20 rounded-2xl border border-white/5 bg-obsidian/40 overflow-hidden flex-shrink-0">
//                   {form.imageUrl ? (
//                     <img
//                       src={form.imageUrl}
//                       alt="preview"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-[10px] text-smoke uppercase text-center p-2">
//                       No Image
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="block w-full text-xs text-smoke file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-champagne/10 file:text-champagne hover:file:bg-champagne/20 transition-all"
//                     onChange={async (e) => {
//                       const file = e.target.files?.[0];
//                       if (!file) return;
//                       try {
//                         setUploading(true);
//                         const uploaded = await uploadMenuImage(file);
//                         setForm((p) => ({
//                           ...p,
//                           imageUrl: uploaded.imageUrl,
//                           imagePublicId: uploaded.publicId,
//                         }));
//                       } catch (err) {
//                         notify.error(err.message);
//                       } finally {
//                         setUploading(false);
//                         e.target.value = "";
//                       }
//                     }}
//                     disabled={uploading}
//                   />
//                   {uploading && (
//                     <p className="text-[10px] text-champagne animate-pulse mt-2 uppercase tracking-tighter">
//                       Uploading to Cloudinary...
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="md:col-span-2 flex flex-wrap gap-6 py-2 border-t border-white/5 mt-2">
//               {[
//                 { label: "Available", key: "available" },
//                 { label: "Vegetarian", key: "isVeg" },
//                 { label: "Featured Selection", key: "featured" },
//               ].map((opt) => (
//                 <label
//                   key={opt.key}
//                   className="flex items-center gap-3 cursor-pointer group"
//                 >
//                   <div className="relative flex items-center">
//                     <input
//                       type="checkbox"
//                       className="sr-only peer"
//                       checked={form[opt.key]}
//                       onChange={(e) =>
//                         setForm((p) => ({ ...p, [opt.key]: e.target.checked }))
//                       }
//                     />
//                     <div className="w-5 h-5 border border-white/20 rounded-md peer-checked:bg-champagne peer-checked:border-champagne transition-all"></div>
//                     <svg
//                       className="absolute w-3 h-3 text-obsidian left-1 opacity-0 peer-checked:opacity-100 transition-all"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </div>
//                   <span className="text-sm text-mist group-hover:text-champagne transition-all">
//                     {opt.label}
//                   </span>
//                 </label>
//               ))}
//             </div>

//             <div className="md:col-span-2 flex gap-4 mt-4">
//               <button
//                 className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-champagne to-bronze text-obsidian font-bold shadow-[0_10px_30px_rgba(197,160,89,0.2)] hover:scale-[1.02] transition-all disabled:opacity-50"
//                 onClick={save}
//                 disabled={uploading}
//               >
//                 {editingId ? "Update Item" : "Create Item"}
//               </button>
//               <button
//                 className="px-8 py-4 rounded-2xl glass text-mist border-white/10 hover:bg-white/10 transition-all"
//                 onClick={load}
//               >
//                 Refresh
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* List Section */}
//         <div className="glass rounded-4xl p-8">
//           <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between mb-8">
//             <h3 className="text-2xl font-bold gold-gradient-text">
//               Menu Collection
//             </h3>
//             <div className="relative">
//               <input
//                 value={q}
//                 onChange={(e) => setQ(e.target.value)}
//                 placeholder="Search menu..."
//                 className="md:w-80 px-6 py-4 rounded-2xl bg-obsidian/50 border border-white/5 text-mist focus:border-champagne/30 outline-none"
//               />
//               <div className="absolute right-5 top-4 text-smoke/50">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-4">
//             {filtered.map((i) => (
//               <div
//                 key={i._id}
//                 className="group glass border-white/5 hover:border-champagne/20 rounded-3xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:translate-x-1"
//               >
//                 <div className="flex items-center gap-5">
//                   <div className="w-20 h-20 rounded-2xl bg-velvet overflow-hidden flex-shrink-0 border border-white/5">
//                     {i.imageUrl ? (
//                       <img
//                         src={i.imageUrl}
//                         alt={i.name}
//                         className="w-full h-full object-cover transition-transform group-hover:scale-110"
//                       />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center text-sm text-smoke">
//                         No Img
//                       </div>
//                     )}
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-mist group-hover:text-champagne transition-colors">
//                       {i.name}{" "}
//                       <span className="text-sm text-smoke/50 font-normal ml-2">
//                         | {i.category}
//                       </span>
//                     </h4>
//                     <p className="text-sm text-smoke line-clamp-1 max-w-md mt-1">
//                       {i.desc}
//                     </p>
//                     <div className="mt-3 flex flex-wrap gap-2">
//                       <span className="px-3 py-1 rounded-full bg-champagne/5 border border-champagne/20 text-champagne text-[10px] uppercase font-bold tracking-widest">
//                         {i.price} EGP
//                       </span>
//                       {i.isVeg && (
//                         <span className="px-3 py-1 rounded-full bg-green-500/5 border border-green-500/20 text-green-400 text-[10px] uppercase font-bold tracking-widest">
//                           Veg
//                         </span>
//                       )}
//                       {i.featured && (
//                         <span className="px-3 py-1 rounded-full bg-barolo/20 border border-barolo/50 text-mist text-[10px] uppercase font-bold tracking-widest">
//                           Featured
//                         </span>
//                       )}
//                       {!i.available && (
//                         <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-smoke text-[10px] uppercase font-bold tracking-widest">
//                           Out of Stock
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   <button
//                     className="p-4 rounded-2xl glass hover:bg-champagne/10 hover:text-champagne transition-all border-white/10"
//                     onClick={() => startEdit(i)}
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
//                         strokeWidth="2"
//                         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     className="p-4 rounded-2xl glass hover:bg-barolo/20 hover:text-red-400 transition-all border-white/10"
//                     onClick={() => del(i._id)}
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
//                         strokeWidth="2"
//                         d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {filtered.length === 0 && (
//               <div className="py-20 text-center glass rounded-3xl border-dashed border-white/10">
//                 <p className="text-smoke italic">
//                   Your menu is currently empty.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";
import { uploadMenuImage } from "../utils/uploadImage";
import { notify } from "../utils/toast";

const emptyForm = {
  name: "",
  desc: "",
  price: "",
  category: "",
  isVeg: false,
  available: true,
  featured: false,
  imageUrl: "",
};

export default function AdminMenu() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [q, setQ] = useState("");
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(""); // For instant local preview

  // Define your 5 categories here
  const categories = ["Appetizers", "Mains", "Desserts", "Drinks", "Specials"];

  const existingCategories = useMemo(() => {
    const cats = items.map((i) => i.category).filter(Boolean);
    return [...new Set(cats)];
  }, [items]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) =>
      [i.name, i.desc, i.category].some((x) =>
        (x || "").toLowerCase().includes(s),
      ),
    );
  }, [items, q]);

  async function load() {
    try {
      const res = await fetch(`${API_BASE}/api/menu`);
      const data = await res.json();
      setItems(data.items || data || []); // Handle different API response shapes
    } catch (err) {
      console.error("Failed to load menu:", err);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(item) {
    setEditingId(item._id);
    setPreviewUrl(item.imageUrl);
    setForm({
      name: item.name || "",
      desc: item.desc || "",
      price: item.price || "",
      category: item.category || "",
      isVeg: !!item.isVeg,
      available: item.available !== false,
      featured: !!item.featured,
      imageUrl: item.imageUrl || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setEditingId(null);
    setForm(emptyForm);
    setPreviewUrl("");
  }

  async function save() {
    if (!form.name || !form.category || !form.price) {
      return notify.error("Name, Category, and Price are required");
    }

    if (uploading)
      return notify.error("Please wait for image upload to finish");

    const payload = { ...form, price: Number(form.price) };
    const isEdit = !!editingId;
    const url = isEdit
      ? `${API_BASE}/api/menu/${editingId}`
      : `${API_BASE}/api/menu`;

    try {
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Save failed");

      notify.success(isEdit ? "Item updated" : "Item created");
      await load();
      reset();
    } catch (err) {
      notify.error(err.message);
    }
  }

  async function del(id) {
    if (!confirm("Delete this item?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/menu/${id}`, {
        method: "DELETE",
        headers: { ...authHeaders() },
      });
      if (res.ok) {
        notify.success("Removed from menu");
        await load();
      }
    } catch (err) {
      notify.error("Delete failed");
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-mist placeholder:text-white/10 outline-none focus:border-champagne/40 focus:bg-white/10 transition-all cursor-pointer";

  return (
    <div className="pb-24 bg-obsidian min-h-screen text-mist">
      <Section
        title={
          <span className="gold-gradient-text italic">Atelier Control</span>
        }
      >
        <div className="glass-gold rounded-[2.5rem] border-white/5 p-10 mb-16 relative overflow-hidden">
          <h3 className="text-3xl font-bold tracking-tighter mb-10">
            {editingId ? "Edit Selection" : "New Creation"}
          </h3>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-champagne font-black mb-4 block">
                Presentation
              </label>
              <div className="aspect-[4/5] rounded-[2rem] border-2 border-dashed border-white/10 bg-black/20 flex flex-col items-center justify-center relative overflow-hidden group">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    className="w-full h-full object-cover"
                    alt="Local preview"
                  />
                ) : (
                  <div className="text-center opacity-30">
                    <span className="text-4xl block mb-2">📸</span>
                    <p className="text-[10px] uppercase tracking-widest font-bold">
                      Upload Image
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setPreviewUrl(URL.createObjectURL(file));
                    setUploading(true);
                    try {
                      const uploaded = await uploadMenuImage(file);
                      setForm((p) => ({ ...p, imageUrl: uploaded.imageUrl }));
                    } catch (err) {
                      notify.error("Image upload failed");
                    } finally {
                      setUploading(false);
                    }
                  }}
                />
              </div>
              {uploading && (
                <p className="text-center text-[10px] text-champagne animate-pulse mt-4 font-bold tracking-widest">
                  SYNCING TO CLOUD...
                </p>
              )}
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                  Item Name
                </label>
                <input
                  className={inputClass}
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="e.g. Wagyu Ribeye"
                />
              </div>

              {/* Category Select Tag */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                  Category
                </label>
                <select
                  className={inputClass}
                  value={form.category}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, category: e.target.value }))
                  }
                >
                  <option value="" disabled className="bg-obsidian">
                    Select a category
                  </option>
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-obsidian text-mist">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                  Description
                </label>
                <textarea
                  className={`${inputClass} h-32 resize-none`}
                  value={form.desc}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, desc: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-smoke ml-2 font-bold">
                  Price (EGP)
                </label>
                <input
                  type="number"
                  className={inputClass}
                  value={form.price}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, price: e.target.value }))
                  }
                />
              </div>

              <div className="flex items-center gap-6 pt-8">
                {[
                  { k: "available", l: "Stock" },
                  { k: "isVeg", l: "Veg" },
                  { k: "featured", l: "Gold" },
                ].map((opt) => (
                  <label
                    key={opt.k}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={form[opt.k]}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, [opt.k]: e.target.checked }))
                      }
                      className="w-5 h-5 rounded accent-champagne border-white/20 bg-white/5"
                    />
                    <span className="text-[10px] uppercase tracking-widest font-bold group-hover:text-champagne transition-colors">
                      {opt.l}
                    </span>
                  </label>
                ))}
              </div>

              <button
                onClick={save}
                disabled={uploading}
                className="md:col-span-2 py-6 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.4em] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-champagne/20 mt-4 disabled:opacity-50"
              >
                {uploading
                  ? "Uploading Image..."
                  : editingId
                    ? "Update Selection"
                    : "Commit to Menu"}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-white/5 pb-8">
            <h4 className="text-2xl font-bold tracking-tighter">
              Live Inventory
            </h4>
            <input
              className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-xs outline-none focus:border-champagne/40 w-full md:w-80"
              placeholder="Filter items..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="grid gap-4">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <div
                  key={item._id}
                  className="glass p-5 rounded-[2rem] border-white/5 flex items-center justify-between group hover:border-champagne/30 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                      <img
                        src={item.imageUrl}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-champagne font-black mb-1">
                        {item.category}
                      </p>
                      <h5 className="text-xl font-bold">{item.name}</h5>
                      <p className="text-sm text-smoke opacity-60 italic">
                        {item.price} EGP
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => startEdit(item)}
                      className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] uppercase font-bold tracking-widest transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => del(item._id)}
                      className="px-6 py-3 rounded-xl bg-red-500/5 hover:bg-red-500/20 text-red-400 text-[10px] uppercase font-bold tracking-widest transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 opacity-20 italic">
                No items found in the collection.
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}

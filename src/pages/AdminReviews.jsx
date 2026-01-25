// import { useEffect, useState } from "react";
// import { API_BASE } from "../config/api";
// import Section from "../components/Section";
// import { notify } from "../utils/toast";

// export default function AdminReviews() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchReviews = async () => {
//     try {
//       const r = await fetch(`${API_BASE}/api/reviews/admin/all`);
//       const data = await r.json();
//       setReviews(data);
//     } catch (err) {
//       notify.error("Failed to load reviews");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const toggleApprove = async (id) => {
//     await fetch(`${API_BASE}/api/reviews/admin/approve/${id}`, {
//       method: "PATCH",
//     });
//     fetchReviews();
//     notify.success("Visibility Updated");
//   };

//   const deleteReview = async (id) => {
//     if (!window.confirm("Delete permanently?")) return;
//     await fetch(`${API_BASE}/api/reviews/admin/${id}`, { method: "DELETE" });
//     fetchReviews();
//     notify.error("Review Deleted");
//   };

//   return (
//     <Section
//       title="Guest Feedback"
//       subtitle="Moderate your restaurant testimonials."
//     >
//       {loading ? (
//         <div className="text-center p-20 text-champagne animate-pulse">
//           Syncing Registry...
//         </div>
//       ) : reviews.length === 0 ? (
//         <div className="glass-gold p-20 rounded-[3rem] text-center border border-white/5">
//           <p className="text-mist/50 italic">
//             The guestbook is currently empty.
//           </p>
//           <p className="text-[10px] text-champagne uppercase mt-4 tracking-widest">
//             Awaiting first submission
//           </p>
//         </div>
//       ) : (
//         <div className="grid gap-6">
//           {reviews.map((rev) => (
//             <div
//               key={rev._id}
//               className="glass-gold p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center border border-white/5 gap-4"
//             >
//               <div className="flex-1">
//                 <div className="flex items-center gap-3">
//                   <span
//                     className={`w-2 h-2 rounded-full ${rev.isApproved ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`}
//                   />
//                   <h4 className="font-bold text-mist">{rev.customerName}</h4>
//                   <div className="text-champagne text-xs">
//                     {"★".repeat(rev.rating)}
//                   </div>
//                 </div>
//                 <p className="text-smoke text-sm mt-2 font-light italic">
//                   "{rev.comment}"
//                 </p>
//               </div>
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => toggleApprove(rev._id)}
//                   className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest ${rev.isApproved ? "bg-white/10 text-mist" : "bg-champagne text-obsidian"}`}
//                 >
//                   {rev.isApproved ? "Hide" : "Approve"}
//                 </button>
//                 <button
//                   onClick={() => deleteReview(rev._id)}
//                   className="px-6 py-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/10 text-[10px] font-black uppercase tracking-widest"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// }

// import { useEffect, useState } from "react";
// import { API_BASE } from "../config/api";
// import Section from "../components/Section";
// import { notify } from "../utils/toast";

// export default function AdminReviews() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchReviews = async () => {
//     try {
//       const r = await fetch(`${API_BASE}/api/reviews/admin/all`);
//       const data = await r.json();
//       setReviews(data);
//     } catch (err) {
//       notify.error("Failed to load reviews");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const toggleApprove = async (id) => {
//     await fetch(`${API_BASE}/api/reviews/admin/approve/${id}`, {
//       method: "PATCH",
//     });
//     fetchReviews();
//     notify.success("Visibility Updated");
//   };

//   const deleteReview = async (id) => {
//     if (!window.confirm("Delete permanently?")) return;
//     await fetch(`${API_BASE}/api/reviews/admin/${id}`, { method: "DELETE" });
//     fetchReviews();
//     notify.error("Review Deleted");
//   };

//   return (
//     <Section
//       title="Guestbook Registry"
//       subtitle="Curate the testimonials displayed in your digital atelier."
//     >
//       {loading ? (
//         <div className="flex flex-col items-center justify-center p-20 space-y-4">
//           <div className="w-8 h-8 border-2 border-champagne/30 border-t-champagne rounded-full animate-spin" />
//           <p className="text-[10px] uppercase tracking-[0.4em] text-champagne animate-pulse">
//             Syncing Registry...
//           </p>
//         </div>
//       ) : reviews.length === 0 ? (
//         <div className="glass-gold p-12 md:p-20 rounded-[2rem] md:rounded-[3rem] text-center border border-white/5">
//           <p className="text-mist/50 italic font-light">
//             The guestbook is currently empty.
//           </p>
//           <p className="text-[10px] text-champagne uppercase mt-4 tracking-[0.4em]">
//             Awaiting first submission
//           </p>
//         </div>
//       ) : (
//         <div className="grid gap-4 md:gap-6">
//           {reviews.map((rev) => (
//             <div
//               key={rev._id}
//               className="group relative glass-gold p-5 md:p-8 rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-champagne/20"
//             >
//               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//                 {/* 1. GUEST INFO & RATING */}
//                 <div className="flex-1 space-y-3">
//                   <div className="flex flex-wrap items-center gap-3">
//                     <div className="relative flex items-center justify-center">
//                       <span
//                         className={`w-2 h-2 rounded-full ${rev.isApproved ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]"}`}
//                       />
//                     </div>
//                     <h4 className="font-serif italic text-xl text-mist tracking-tight">
//                       {rev.customerName}
//                     </h4>
//                     <div className="flex text-champagne text-[10px] gap-0.5 ml-auto lg:ml-0">
//                       {[...Array(5)].map((_, i) => (
//                         <span
//                           key={i}
//                           className={
//                             i < rev.rating ? "opacity-100" : "opacity-20"
//                           }
//                         >
//                           ★
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <blockquote className="text-smoke/80 text-sm leading-relaxed font-light italic border-l border-white/10 pl-4 py-1">
//                     "{rev.comment}"
//                   </blockquote>

//                   {/* Mobile-only date or ID if available */}
//                   <p className="text-[8px] uppercase tracking-widest text-smoke/30 block lg:hidden">
//                     Ref: {rev._id.slice(-6)}
//                   </p>
//                 </div>

//                 {/* 2. ACTION CONTROLS - Full width on mobile */}
//                 <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-32">
//                   <button
//                     onClick={() => toggleApprove(rev._id)}
//                     className={`flex-1 py-3 lg:py-2.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300
//                       ${
//                         rev.isApproved
//                           ? "bg-white/5 text-mist border border-white/10 hover:bg-white/10"
//                           : "bg-champagne text-obsidian shadow-lg shadow-champagne/10 hover:brightness-110"
//                       }`}
//                   >
//                     {rev.isApproved ? "Hide" : "Approve"}
//                   </button>
//                   <button
//                     onClick={() => deleteReview(rev._id)}
//                     className="flex-1 py-3 lg:py-2.5 rounded-xl bg-red-500/5 text-red-500/60 border border-red-500/10 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all duration-300"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>

//               {/* Decorative Corner Index for Desktop */}
//               <span className="absolute top-4 right-8 text-[40px] font-serif italic text-white/[0.02] pointer-events-none hidden lg:block">
//                 {rev.rating}.0
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// }

// import { useEffect, useState } from "react";
// import { API_BASE } from "../config/api";
// import Section from "../components/Section";
// import { notify } from "../utils/toast";

// export default function AdminReviews() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchReviews = async () => {
//     try {
//       const r = await fetch(`${API_BASE}/api/reviews/admin/all`);
//       const data = await r.json();
//       setReviews(data || []);
//     } catch (err) {
//       notify.error("Failed to load reviews");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const toggleApprove = async (id) => {
//     try {
//       await fetch(`${API_BASE}/api/reviews/admin/approve/${id}`, {
//         method: "PATCH",
//       });
//       fetchReviews();
//       notify.success("Visibility Updated");
//     } catch (e) {
//       notify.error("Update failed");
//     }
//   };

//   const deleteReview = async (id) => {
//     if (!window.confirm("Delete permanently?")) return;
//     try {
//       await fetch(`${API_BASE}/api/reviews/admin/${id}`, { method: "DELETE" });
//       fetchReviews();
//       notify.error("Review Deleted");
//     } catch (e) {
//       notify.error("Delete failed");
//     }
//   };

//   return (
//     <Section title="Guest Feedback" subtitle="Moderate your testimonials.">
//       {loading ? (
//         <div className="text-center p-20 text-champagne animate-pulse tracking-[0.3em] text-xs">
//           SYNCING REGISTRY...
//         </div>
//       ) : reviews.length === 0 ? (
//         <div className="glass-gold p-10 md:p-20 rounded-[2rem] text-center border border-white/5">
//           <p className="text-mist/50 italic">
//             The guestbook is currently empty.
//           </p>
//         </div>
//       ) : (
//         <div className="grid gap-4 md:gap-6">
//           {reviews.map((rev) => (
//             <div
//               key={rev._id}
//               className="glass-gold p-6 md:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden transition-all duration-500 hover:border-champagne/20"
//             >
//               {/* Grid Layout: Stacks on mobile, Side-by-side on large screens */}
//               <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-8 items-start lg:items-center">
//                 {/* LEFT: Content Area */}
//                 <div className="space-y-4 min-w-0">
//                   {" "}
//                   {/* min-w-0 is CRITICAL to stop text from breaking grid */}
//                   <div className="flex flex-wrap items-center gap-3">
//                     <span
//                       className={`w-2 h-2 rounded-full flex-shrink-0 ${rev.isApproved ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-amber-500 animate-pulse"}`}
//                     />
//                     <h4 className="font-serif italic text-xl text-mist truncate">
//                       {rev.customerName}
//                     </h4>
//                     <div className="flex text-champagne text-[10px] tracking-widest ml-auto lg:ml-0">
//                       {"★".repeat(rev.rating)}
//                     </div>
//                   </div>
//                   <div className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5">
//                     <p className="text-smoke text-sm font-light leading-relaxed italic break-words">
//                       "{rev.comment}"
//                     </p>
//                   </div>
//                 </div>

//                 {/* RIGHT: Action Buttons */}
//                 <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
//                   <button
//                     onClick={() => toggleApprove(rev._id)}
//                     className={`flex-1 py-4 lg:py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all
//             ${
//               rev.isApproved
//                 ? "bg-white/5 text-mist border border-white/10 hover:bg-white/10"
//                 : "bg-champagne text-obsidian shadow-lg shadow-champagne/10 hover:brightness-110"
//             }`}
//                   >
//                     {rev.isApproved ? "Hide" : "Approve"}
//                   </button>
//                   <button
//                     onClick={() => deleteReview(rev._id)}
//                     className="flex-1 py-4 lg:py-3 rounded-xl bg-red-500/5 text-red-500/60 border border-red-500/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>

//               {/* Decorative Background Element */}
//               <span className="absolute -bottom-4 -right-2 text-8xl font-serif italic text-white/[0.02] pointer-events-none select-none">
//                 {rev.rating}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// }

import { useEffect, useState } from "react";
import { API_BASE } from "../config/api";
import Section from "../components/Section";
import { notify } from "../utils/toast";

export default function AdminReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Search State

  const fetchReviews = async () => {
    try {
      const r = await fetch(`${API_BASE}/api/reviews/admin/all`);
      const data = await r.json();
      setReviews(data || []);
    } catch (err) {
      notify.error("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Filter Logic: Matches name or comment
  const filteredReviews = reviews.filter(
    (rev) =>
      rev.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rev.comment.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleApprove = async (id) => {
    try {
      await fetch(`${API_BASE}/api/reviews/admin/approve/${id}`, {
        method: "PATCH",
      });
      fetchReviews();
      notify.success("Visibility Updated");
    } catch (e) {
      notify.error("Update failed");
    }
  };

  const deleteReview = async (id) => {
    if (!window.confirm("Delete permanently?")) return;
    try {
      await fetch(`${API_BASE}/api/reviews/admin/${id}`, { method: "DELETE" });
      fetchReviews();
      notify.error("Review Deleted");
    } catch (e) {
      notify.error("Delete failed");
    }
  };

  return (
    <Section
      title="Guest Feedback"
      subtitle="Moderate your restaurant testimonials."
    >
      {/* 1. SEARCH ARCHITECTURE */}
      <div className="mb-10 max-w-2xl mx-auto">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search Registry by Name or Content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-8 text-mist text-xs tracking-widest uppercase focus:outline-none focus:border-champagne/40 focus:bg-white/[0.05] transition-all placeholder:text-smoke/20"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <svg
              className="w-4 h-4 text-smoke/20 group-focus-within:text-champagne transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {searchTerm && (
          <p className="text-[9px] text-champagne uppercase tracking-[0.3em] mt-4 ml-2 animate-pulse">
            Filtering: {filteredReviews.length} results found
          </p>
        )}
      </div>

      {loading ? (
        <div className="text-center p-20 text-champagne animate-pulse tracking-[0.3em] text-xs">
          SYNCING REGISTRY...
        </div>
      ) : filteredReviews.length === 0 ? (
        <div className="glass-gold p-10 md:p-20 rounded-[2rem] text-center border border-white/5">
          <p className="text-mist/50 italic">
            {searchTerm
              ? "No matches found in the archive."
              : "The guestbook is currently empty."}
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 text-[10px] text-champagne underline tracking-widest uppercase"
            >
              Clear Search
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-4 md:gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev._id}
              className="glass-gold p-6 md:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden transition-all duration-500 hover:border-champagne/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-8 items-start lg:items-center">
                {/* LEFT: Content Area */}
                <div className="space-y-4 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${rev.isApproved ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-amber-500 animate-pulse"}`}
                    />
                    <h4 className="font-serif italic text-xl text-mist truncate">
                      {rev.customerName}
                    </h4>
                    <div className="flex text-champagne text-[10px] tracking-widest ml-auto lg:ml-0">
                      {"★".repeat(rev.rating)}
                    </div>
                  </div>

                  <div className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <p className="text-smoke text-sm font-light leading-relaxed italic break-words">
                      "{rev.comment}"
                    </p>
                  </div>
                </div>

                {/* RIGHT: Action Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
                  <button
                    onClick={() => toggleApprove(rev._id)}
                    className={`flex-1 py-4 lg:py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all
                      ${
                        rev.isApproved
                          ? "bg-white/5 text-mist border border-white/10 hover:bg-white/10"
                          : "bg-champagne text-obsidian shadow-lg shadow-champagne/10 hover:brightness-110"
                      }`}
                  >
                    {rev.isApproved ? "Hide" : "Approve"}
                  </button>
                  <button
                    onClick={() => deleteReview(rev._id)}
                    className="flex-1 py-4 lg:py-3 rounded-xl bg-red-500/5 text-red-500/60 border border-red-500/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-500 hover:text-white transition-all"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Decorative Background Element */}
              <span className="absolute -bottom-4 -right-2 text-8xl font-serif italic text-white/[0.02] pointer-events-none select-none">
                {rev.rating}
              </span>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

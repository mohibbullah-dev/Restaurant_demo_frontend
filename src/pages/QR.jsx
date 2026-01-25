// import Section from "../components/Section";
// import { restaurant } from "../config/restaurant";
// import { QRCodeSVG } from "qrcode.react";
// import { useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// export default function QR() {
//   const menuUrl = `${restaurant.publicSiteUrl}/menu`;
//   const reviewUrl = restaurant.googleReviewUrl;

//   const posterRef = useRef(null);

//   async function downloadPDF() {
//     if (!posterRef.current) return;

//     const canvas = await html2canvas(posterRef.current, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pageWidth = pdf.internal.pageSize.getWidth();
//     const pageHeight = pdf.internal.pageSize.getHeight();

//     // Fit image within A4
//     const imgProps = pdf.getImageProperties(imgData);
//     const imgRatio = imgProps.width / imgProps.height;

//     let w = pageWidth;
//     let h = w / imgRatio;
//     if (h > pageHeight) {
//       h = pageHeight;
//       w = h * imgRatio;
//     }

//     const x = (pageWidth - w) / 2;
//     const y = (pageHeight - h) / 2;

//     pdf.addImage(imgData, "PNG", x, y, w, h);
//     pdf.save(`${restaurant.name}-QR-Poster.pdf`);
//   }

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section
//         title="QR Codes"
//         subtitle="Print these for tables, takeaway bags, posters, and cashier desk."
//       >
//         <div className="grid md:grid-cols-2 gap-6">
//           <div ref={posterRef} className="bg-white p-6 md:p-10">
//             <button
//               onClick={downloadPDF}
//               className="mb-4 px-5 py-3 rounded-2xl bg-black text-white font-medium"
//             >
//               Download QR Poster (PDF)
//             </button>

//             <div className="rounded-3xl border bg-white p-6">
//               <h3 className="text-xl font-bold">Menu QR</h3>
//               <p className="mt-2 text-gray-600 text-sm">
//                 Scan to open the online menu instantly.
//               </p>

//               <div className="mt-6 flex justify-center">
//                 <div className="p-4 rounded-2xl border">
//                   <QRCodeSVG value={menuUrl} size={220} />
//                 </div>
//               </div>

//               <p className="mt-4 text-center text-sm text-gray-600 break-all">
//                 {menuUrl}
//               </p>
//             </div>

//             <div className="rounded-3xl border bg-white p-6">
//               <h3 className="text-xl font-bold">Google Review QR</h3>
//               <p className="mt-2 text-gray-600 text-sm">
//                 Scan to leave a Google review (boosts ranking on Google Maps).
//               </p>

//               <div className="mt-6 flex justify-center">
//                 <div className="p-4 rounded-2xl border">
//                   <QRCodeSVG value={reviewUrl} size={220} />
//                 </div>
//               </div>

//               <p className="mt-4 text-center text-sm text-gray-600 break-all">
//                 {reviewUrl}
//               </p>
//             </div>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

import Section from "../components/Section";
import { restaurant } from "../config/restaurant";
// import { QRCodeSVG } from "qrcode.react";
// import { useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// export default function QR() {
//   const menuUrl = `${restaurant.publicSiteUrl}/menu`;
//   const reviewUrl = restaurant.googleReviewUrl;
//   const posterRef = useRef(null);

//   async function downloadPDF() {
//     if (!posterRef.current) return;
//     // We target the white poster specifically for the PDF
//     const canvas = await html2canvas(posterRef.current, {
//       scale: 3,
//       backgroundColor: "#ffffff",
//     });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pageWidth = pdf.internal.pageSize.getWidth();
//     const pageHeight = pdf.internal.pageSize.getHeight();

//     const imgProps = pdf.getImageProperties(imgData);
//     const imgRatio = imgProps.width / imgProps.height;

//     let w = pageWidth - 20; // Margin
//     let h = w / imgRatio;

//     if (h > pageHeight - 20) {
//       h = pageHeight - 20;
//       w = h * imgRatio;
//     }

//     const x = (pageWidth - w) / 2;
//     const y = (pageHeight - h) / 2;

//     pdf.addImage(imgData, "PNG", x, y, w, h);
//     pdf.save(`${restaurant.name}-QR-Poster.pdf`);
//   }

//   return (
//     <div className="pb-24 bg-obsidian min-h-screen text-mist">
//       <Section
//         title={
//           <span className="gold-gradient-text italic">Digital Touchpoints</span>
//         }
//         subtitle="Generate premium QR assets for your tables and marketing materials."
//       >
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* LEFT: Poster Preview (The part that gets printed) */}
//           <div className="relative group">
//             <div
//               ref={posterRef}
//               className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-obsidian flex flex-col items-center border-[12px] border-obsidian/5"
//             >
//               <div className="text-center mb-10">
//                 <h2 className="text-4xl font-black tracking-tighter uppercase italic">
//                   {restaurant.name}
//                 </h2>
//                 <div className="h-1 w-12 bg-champagne mx-auto mt-2" />
//                 <p className="mt-4 text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">
//                   Atelier Experience
//                 </p>
//               </div>

//               {/* Menu QR Section */}
//               <div className="w-full bg-obsidian/5 rounded-[2rem] p-8 mb-8 flex flex-col items-center">
//                 <h3 className="text-sm uppercase tracking-[0.2em] font-black mb-6">
//                   Scan for Menu
//                 </h3>
//                 <div className="bg-white p-4 rounded-3xl shadow-lg border border-obsidian/10">
//                   <QRCodeSVG value={menuUrl} size={200} fgColor="#0F0F0F" />
//                 </div>
//                 <p className="mt-6 text-[9px] font-mono opacity-40">
//                   {menuUrl}
//                 </p>
//               </div>

//               {/* Review QR Section */}
//               <div className="w-full border-2 border-dashed border-obsidian/10 rounded-[2rem] p-8 flex flex-col items-center">
//                 <h3 className="text-sm uppercase tracking-[0.2em] font-black mb-6">
//                   Leave a Review
//                 </h3>
//                 <div className="bg-white p-4 rounded-3xl shadow-lg border border-obsidian/10">
//                   <QRCodeSVG value={reviewUrl} size={140} fgColor="#0F0F0F" />
//                 </div>
//                 <p className="mt-4 text-[8px] text-center opacity-40 max-w-[200px] leading-relaxed">
//                   Your feedback helps our artisans perfect their craft.
//                 </p>
//               </div>
//             </div>

//             {/* Download Overlay */}
//             <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all rounded-[2.5rem] flex items-center justify-center">
//               <button
//                 onClick={downloadPDF}
//                 className="px-8 py-4 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-champagne/20"
//               >
//                 Download PDF Poster
//               </button>
//             </div>
//           </div>

//           {/* RIGHT: Info and Manual Links */}
//           <div className="space-y-8">
//             <div className="glass-gold rounded-[2.5rem] border-white/5 p-10">
//               <h3 className="text-2xl font-bold tracking-tighter mb-6">
//                 QR Strategy
//               </h3>
//               <p className="text-smoke italic text-sm leading-relaxed mb-8">
//                 "Place the menu QR on every table to reduce wait times. Use the
//                 review QR at the exit or on takeaway bags to boost your Google
//                 Maps ranking."
//               </p>

//               <div className="space-y-4">
//                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-champagne/40 transition-all">
//                   <label className="text-[10px] uppercase tracking-widest text-champagne font-black">
//                     Live Menu Link
//                   </label>
//                   <div className="flex items-center justify-between mt-2 gap-4">
//                     <span className="text-xs truncate opacity-60 font-mono">
//                       {menuUrl}
//                     </span>
//                     <button
//                       onClick={() => {
//                         navigator.clipboard.writeText(menuUrl);
//                         alert("Copied!");
//                       }}
//                       className="text-[10px] font-bold hover:text-champagne underline transition-colors"
//                     >
//                       COPY
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-champagne/40 transition-all">
//                   <label className="text-[10px] uppercase tracking-widest text-champagne font-black">
//                     Google Review Link
//                   </label>
//                   <div className="flex items-center justify-between mt-2 gap-4">
//                     <span className="text-xs truncate opacity-60 font-mono">
//                       {reviewUrl}
//                     </span>
//                     <button
//                       onClick={() => {
//                         navigator.clipboard.writeText(reviewUrl);
//                         alert("Copied!");
//                       }}
//                       className="text-[10px] font-bold hover:text-champagne underline transition-colors"
//                     >
//                       COPY
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-10 p-6 rounded-2xl bg-champagne/10 border border-champagne/20">
//                 <p className="text-[10px] text-champagne font-black tracking-widest uppercase mb-2">
//                   Printing Tip
//                 </p>
//                 <p className="text-xs text-mist/70 leading-relaxed">
//                   For the best results, print on **300gsm Matte cardstock**. The
//                   PDF is sized for A4 but can be scaled to A5 for table tents.
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={downloadPDF}
//               className="lg:hidden w-full py-6 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.4em]"
//             >
//               Generate PDF
//             </button>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

import Section from "../components/Section";
import { restaurant } from "../config/restaurant";
import { QRCodeSVG } from "qrcode.react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function QR() {
  const menuUrl = `${restaurant.publicSiteUrl}/menu`;
  const reviewUrl = restaurant.googleReviewUrl;
  const posterRef = useRef(null);

  async function downloadPDF() {
    if (!posterRef.current) return;
    const canvas = await html2canvas(posterRef.current, {
      scale: 4, // Ultra-high resolution for printing
      backgroundColor: "#ffffff",
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Padding for the A4 sheet
    const margin = 15;
    const w = pageWidth - margin * 2;
    const h = (canvas.height * w) / canvas.width;

    pdf.addImage(imgData, "PNG", margin, margin, w, h);
    pdf.save(`${restaurant.name.replace(/\s+/g, "-")}-Brand-QR.pdf`);
  }

  return (
    <div className="pb-24 bg-obsidian min-h-screen text-mist">
      <Section
        title={<span className="gold-gradient-text italic">Brand Assets</span>}
        subtitle="Generate high-fidelity QR touchpoints for your physical atelier."
      >
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: The Poster Canvas (8 Columns) */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-champagne/5 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-duration-700" />

            <div
              ref={posterRef}
              className="relative bg-white p-16 md:p-24 rounded-[3rem] shadow-3xl text-obsidian flex flex-col items-center border-[1px] border-obsidian/5 overflow-hidden"
            >
              {/* Subtle Texture/Pattern Background for the PDF */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
                  size: "20px 20px",
                }}
              />

              <div className="relative z-10 text-center mb-16">
                <p className="text-[10px] tracking-[0.6em] font-black uppercase mb-4 opacity-40">
                  Welcome to
                </p>
                <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-none mb-6">
                  {restaurant.name}
                </h2>
                <div className="h-px w-24 bg-obsidian/20 mx-auto" />
              </div>

              <div className="relative z-10 w-full grid grid-cols-1 gap-12">
                {/* Main Menu QR */}
                <div className="flex flex-col items-center">
                  <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-obsidian/5 mb-6">
                    <QRCodeSVG
                      value={menuUrl}
                      size={240}
                      fgColor="#0F0F0F"
                      level="H"
                    />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-2">
                    Digital Menu
                  </h3>
                  <p className="text-[10px] font-serif italic opacity-50">
                    Scan to explore our seasonal collection
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-obsidian/10 to-transparent my-4" />

                {/* Feedback QR */}
                <div className="flex flex-col items-center">
                  <div className="bg-white p-4 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-obsidian/5 mb-6">
                    <QRCodeSVG
                      value={reviewUrl}
                      size={120}
                      fgColor="#0F0F0F"
                      level="H"
                    />
                  </div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-1">
                    Guest Feedback
                  </h3>
                  <p className="text-[9px] opacity-40 max-w-[180px] text-center leading-relaxed">
                    Share your experience with the culinary community
                  </p>
                </div>
              </div>

              <div className="mt-20 pt-8 border-t border-obsidian/5 w-full text-center">
                <p className="text-[9px] uppercase tracking-[0.5em] font-bold opacity-30">
                  {restaurant.location || "Luxury Dining Group"} • 2026
                </p>
              </div>
            </div>

            {/* Floating Action (Hidden on PDF) */}
            <div className="absolute inset-0 flex items-center justify-center bg-obsidian/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[3rem]">
              <button
                onClick={downloadPDF}
                className="bg-champagne text-obsidian px-10 py-5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-transform"
              >
                Download Print-Ready PDF
              </button>
            </div>
          </div>

          {/* RIGHT: Management & Manual Controls (4 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-gold p-10 rounded-[2.5rem] border border-white/5 space-y-10">
              <div>
                <h3 className="text-xl font-bold tracking-tight mb-4">
                  Registry Management
                </h3>
                <p className="text-smoke text-sm font-light leading-relaxed">
                  These codes are dynamically linked to your live platform. Any
                  changes to your menu will reflect instantly.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Menu Access", url: menuUrl },
                  { label: "Google Business", url: reviewUrl },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(item.url);
                      notify.success("Link Copied");
                    }}
                  >
                    <label className="text-[9px] font-black uppercase tracking-[0.3em] text-champagne block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </label>
                    <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 p-4 rounded-xl group-hover:border-champagne/30 transition-all">
                      <span className="text-[10px] font-mono truncate opacity-40 group-hover:opacity-100">
                        {item.url}
                      </span>
                      <svg
                        className="w-3 h-3 text-champagne"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-champagne text-xs">!</span>
                  </div>
                  <p className="text-[11px] text-smoke/60 leading-relaxed italic">
                    For a truly elite presentation, display these in silver or
                    matte black frames on your host stand.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={downloadPDF}
              className="lg:hidden w-full py-5 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[10px] tracking-widest"
            >
              Generate Assets
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

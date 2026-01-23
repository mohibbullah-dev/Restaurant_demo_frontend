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
    // We target the white poster specifically for the PDF
    const canvas = await html2canvas(posterRef.current, {
      scale: 3,
      backgroundColor: "#ffffff",
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgRatio = imgProps.width / imgProps.height;

    let w = pageWidth - 20; // Margin
    let h = w / imgRatio;

    if (h > pageHeight - 20) {
      h = pageHeight - 20;
      w = h * imgRatio;
    }

    const x = (pageWidth - w) / 2;
    const y = (pageHeight - h) / 2;

    pdf.addImage(imgData, "PNG", x, y, w, h);
    pdf.save(`${restaurant.name}-QR-Poster.pdf`);
  }

  return (
    <div className="pb-24 bg-obsidian min-h-screen text-mist">
      <Section
        title={
          <span className="gold-gradient-text italic">Digital Touchpoints</span>
        }
        subtitle="Generate premium QR assets for your tables and marketing materials."
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Poster Preview (The part that gets printed) */}
          <div className="relative group">
            <div
              ref={posterRef}
              className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-obsidian flex flex-col items-center border-[12px] border-obsidian/5"
            >
              <div className="text-center mb-10">
                <h2 className="text-4xl font-black tracking-tighter uppercase italic">
                  {restaurant.name}
                </h2>
                <div className="h-1 w-12 bg-champagne mx-auto mt-2" />
                <p className="mt-4 text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">
                  Atelier Experience
                </p>
              </div>

              {/* Menu QR Section */}
              <div className="w-full bg-obsidian/5 rounded-[2rem] p-8 mb-8 flex flex-col items-center">
                <h3 className="text-sm uppercase tracking-[0.2em] font-black mb-6">
                  Scan for Menu
                </h3>
                <div className="bg-white p-4 rounded-3xl shadow-lg border border-obsidian/10">
                  <QRCodeSVG value={menuUrl} size={200} fgColor="#0F0F0F" />
                </div>
                <p className="mt-6 text-[9px] font-mono opacity-40">
                  {menuUrl}
                </p>
              </div>

              {/* Review QR Section */}
              <div className="w-full border-2 border-dashed border-obsidian/10 rounded-[2rem] p-8 flex flex-col items-center">
                <h3 className="text-sm uppercase tracking-[0.2em] font-black mb-6">
                  Leave a Review
                </h3>
                <div className="bg-white p-4 rounded-3xl shadow-lg border border-obsidian/10">
                  <QRCodeSVG value={reviewUrl} size={140} fgColor="#0F0F0F" />
                </div>
                <p className="mt-4 text-[8px] text-center opacity-40 max-w-[200px] leading-relaxed">
                  Your feedback helps our artisans perfect their craft.
                </p>
              </div>
            </div>

            {/* Download Overlay */}
            <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all rounded-[2.5rem] flex items-center justify-center">
              <button
                onClick={downloadPDF}
                className="px-8 py-4 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-champagne/20"
              >
                Download PDF Poster
              </button>
            </div>
          </div>

          {/* RIGHT: Info and Manual Links */}
          <div className="space-y-8">
            <div className="glass-gold rounded-[2.5rem] border-white/5 p-10">
              <h3 className="text-2xl font-bold tracking-tighter mb-6">
                QR Strategy
              </h3>
              <p className="text-smoke italic text-sm leading-relaxed mb-8">
                "Place the menu QR on every table to reduce wait times. Use the
                review QR at the exit or on takeaway bags to boost your Google
                Maps ranking."
              </p>

              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-champagne/40 transition-all">
                  <label className="text-[10px] uppercase tracking-widest text-champagne font-black">
                    Live Menu Link
                  </label>
                  <div className="flex items-center justify-between mt-2 gap-4">
                    <span className="text-xs truncate opacity-60 font-mono">
                      {menuUrl}
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(menuUrl);
                        alert("Copied!");
                      }}
                      className="text-[10px] font-bold hover:text-champagne underline transition-colors"
                    >
                      COPY
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group hover:border-champagne/40 transition-all">
                  <label className="text-[10px] uppercase tracking-widest text-champagne font-black">
                    Google Review Link
                  </label>
                  <div className="flex items-center justify-between mt-2 gap-4">
                    <span className="text-xs truncate opacity-60 font-mono">
                      {reviewUrl}
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(reviewUrl);
                        alert("Copied!");
                      }}
                      className="text-[10px] font-bold hover:text-champagne underline transition-colors"
                    >
                      COPY
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-champagne/10 border border-champagne/20">
                <p className="text-[10px] text-champagne font-black tracking-widest uppercase mb-2">
                  Printing Tip
                </p>
                <p className="text-xs text-mist/70 leading-relaxed">
                  For the best results, print on **300gsm Matte cardstock**. The
                  PDF is sized for A4 but can be scaled to A5 for table tents.
                </p>
              </div>
            </div>

            <button
              onClick={downloadPDF}
              className="lg:hidden w-full py-6 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.4em]"
            >
              Generate PDF
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

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
    const element = posterRef.current;
    const overlay = element.querySelector(".group-hover\\:opacity-100"); // Targeted overlay

    if (overlay) overlay.style.display = "none"; // Hide UI elements

    const canvas = await html2canvas(element, {
      scale: 4,
      backgroundColor: "#ffffff",
    });

    if (overlay) overlay.style.removeProperty("display"); // Show UI back

    // ... rest of your PDF logic
  }
  // bg-obsidian
  return (
    <div className="pb-24 min-h-screen text-mist">
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

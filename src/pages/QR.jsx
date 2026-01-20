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

    const canvas = await html2canvas(posterRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Fit image within A4
    const imgProps = pdf.getImageProperties(imgData);
    const imgRatio = imgProps.width / imgProps.height;

    let w = pageWidth;
    let h = w / imgRatio;
    if (h > pageHeight) {
      h = pageHeight;
      w = h * imgRatio;
    }

    const x = (pageWidth - w) / 2;
    const y = (pageHeight - h) / 2;

    pdf.addImage(imgData, "PNG", x, y, w, h);
    pdf.save(`${restaurant.name}-QR-Poster.pdf`);
  }

  return (
    <div className="pb-24 md:pb-0">
      <Section
        title="QR Codes"
        subtitle="Print these for tables, takeaway bags, posters, and cashier desk."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div ref={posterRef} className="bg-white p-6 md:p-10">
            <button
              onClick={downloadPDF}
              className="mb-4 px-5 py-3 rounded-2xl bg-black text-white font-medium"
            >
              Download QR Poster (PDF)
            </button>

            <div className="rounded-3xl border bg-white p-6">
              <h3 className="text-xl font-bold">Menu QR</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Scan to open the online menu instantly.
              </p>

              <div className="mt-6 flex justify-center">
                <div className="p-4 rounded-2xl border">
                  <QRCodeSVG value={menuUrl} size={220} />
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-gray-600 break-all">
                {menuUrl}
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6">
              <h3 className="text-xl font-bold">Google Review QR</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Scan to leave a Google review (boosts ranking on Google Maps).
              </p>

              <div className="mt-6 flex justify-center">
                <div className="p-4 rounded-2xl border">
                  <QRCodeSVG value={reviewUrl} size={220} />
                </div>
              </div>

              <p className="mt-4 text-center text-sm text-gray-600 break-all">
                {reviewUrl}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

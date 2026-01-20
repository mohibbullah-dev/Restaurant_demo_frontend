import Section from "../components/Section";
import { restaurant } from "../config/restaurant";
import QRCode from "qrcode.react";

export default function QR() {
  const menuUrl = `${restaurant.publicSiteUrl}/menu`;
  const reviewUrl = restaurant.googleReviewUrl;

  return (
    <div className="pb-24 md:pb-0">
      <Section
        title="QR Codes"
        subtitle="Print these for tables, takeaway bags, posters, and cashier desk."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border bg-white p-6">
            <h3 className="text-xl font-bold">Menu QR</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Scan to open the online menu instantly.
            </p>

            <div className="mt-6 flex justify-center">
              <div className="p-4 rounded-2xl border">
                <QRCode value={menuUrl} size={220} />
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
                <QRCode value={reviewUrl} size={220} />
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-600 break-all">
              {reviewUrl}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

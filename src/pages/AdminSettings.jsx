import { useEffect, useState } from "react";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";
import { notify } from "../utils/toast";

export default function AdminSettings() {
  const [isOpen, setIsOpen] = useState(true);
  const [notice, setNotice] = useState("");
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [minimumOrder, setMinimumOrder] = useState(0);

  async function load() {
    try {
      const res = await fetch(`${API_BASE}/api/settings`);
      const data = await res.json();

      setIsOpen(data?.settings?.isOpen ?? true);
      setNotice(data?.settings?.notice ?? "");
      setDeliveryFee(Number(data?.settings?.deliveryFee ?? 0));
      setMinimumOrder(Number(data?.settings?.minimumOrder ?? 0));
    } catch (error) {
      notify.error("Failed to load settings");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function save() {
    try {
      const payload = {
        isOpen,
        notice,
        deliveryFee: Number(deliveryFee) || 0,
        minimumOrder: Number(minimumOrder) || 0,
      };

      const res = await fetch(`${API_BASE}/api/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) return notify.error(data?.message || "Save failed");

      notify.success("Saved");
      // optional refresh (keeps UI synced with server)
      setDeliveryFee(
        Number(data?.settings?.deliveryFee ?? payload.deliveryFee),
      );
      setMinimumOrder(
        Number(data?.settings?.minimumOrder ?? payload.minimumOrder),
      );
    } catch (e) {
      notify.error("Save failed");
    }
  }

  return (
    <div className="pb-24 md:pb-0">
      <Section
        title="Admin — Settings"
        subtitle="Control restaurant availability and notice."
      >
        <div className="max-w-2xl rounded-3xl border bg-white p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">Restaurant status</p>
              <p className="text-sm text-gray-600">
                If closed, customers should see a clear banner.
              </p>
            </div>

            <button
              className={`px-4 py-2 rounded-xl border ${
                isOpen ? "bg-white" : "bg-black text-white"
              }`}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? "Open" : "Closed"}
            </button>
          </div>

          <div>
            <label className="text-sm text-gray-600">Notice (optional)</label>
            <input
              className="mt-1 w-full px-4 py-3 rounded-2xl border"
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              placeholder="Closed for maintenance, back at 6 PM..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-600">Delivery Fee</label>
              <input
                type="number"
                className="mt-1 w-full px-4 py-3 rounded-2xl border"
                value={deliveryFee}
                onChange={(e) => setDeliveryFee(e.target.value)}
                placeholder="0"
                min="0"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Minimum Order (Delivery)
              </label>
              <input
                type="number"
                className="mt-1 w-full px-4 py-3 rounded-2xl border"
                value={minimumOrder}
                onChange={(e) => setMinimumOrder(e.target.value)}
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="flex-1 py-3 rounded-2xl bg-black text-white"
              onClick={save}
            >
              Save
            </button>
            <button className="flex-1 py-3 rounded-2xl border" onClick={load}>
              Refresh
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

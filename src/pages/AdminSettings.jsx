import { useEffect, useState } from "react";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";

export default function AdminSettings() {
  const [isOpen, setIsOpen] = useState(true);
  const [notice, setNotice] = useState("");

  async function load() {
    const res = await fetch(`${API_BASE}/api/settings`);
    const data = await res.json();
    setIsOpen(data?.settings?.isOpen ?? true);
    setNotice(data?.settings?.notice ?? "");
  }

  useEffect(() => {
    load();
  }, []);

  async function save() {
    const res = await fetch(`${API_BASE}/api/settings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify({ isOpen, notice }),
    });
    const data = await res.json();
    if (!res.ok) return alert(data?.message || "Save failed");
    alert("Saved");
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
              className={`px-4 py-2 rounded-xl border ${isOpen ? "bg-white" : "bg-black text-white"}`}
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

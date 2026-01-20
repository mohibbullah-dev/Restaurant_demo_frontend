import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { formatPriceEGP } from "../utils/menu";

const statuses = [
  "New",
  "Confirmed",
  "Preparing",
  "Ready",
  "Completed",
  "Canceled",
];

export default function AdminOrders() {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const authed = useMemo(() => token.trim().length > 0, [token]);

  async function loadOrders(t = token) {
    setError("");
    const res = await fetch(`${API_BASE}/api/orders`, {
      headers: { "x-admin-token": t },
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data?.message || "Failed to load orders");
      setOrders([]);
      return;
    }
    setOrders(data.orders || []);
  }

  useEffect(() => {
    if (authed) loadOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed]);

  async function updateStatus(id, status) {
    const res = await fetch(`${API_BASE}/api/orders/${id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": token,
      },
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data?.message || "Failed to update status");
      return;
    }
    setOrders((prev) => prev.map((o) => (o._id === id ? data.order : o)));
  }

  return (
    <div className="pb-24 md:pb-0">
      <Section
        title="Admin — Orders"
        subtitle="Protected by admin token (simple demo auth)."
      >
        <div className="rounded-3xl border bg-white p-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-end md:justify-between">
            <div className="flex-1">
              <label className="text-sm text-gray-600">Admin Token</label>
              <input
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Enter ADMIN_TOKEN from server .env"
                className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
              />
              <div className="mt-2 flex gap-2">
                <button
                  className="px-4 py-2 rounded-xl bg-black text-white"
                  onClick={() => {
                    localStorage.setItem("adminToken", token);
                    loadOrders(token);
                  }}
                >
                  Save & Load
                </button>
                <button
                  className="px-4 py-2 rounded-xl border"
                  onClick={() => {
                    localStorage.removeItem("adminToken");
                    setToken("");
                    setOrders([]);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>

            <button
              className="px-4 py-2 rounded-xl border"
              disabled={!authed}
              onClick={() => loadOrders()}
            >
              Refresh
            </button>
          </div>

          {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

          <div className="mt-6 space-y-4">
            {orders.length === 0 && !error && (
              <p className="text-gray-600">No orders yet.</p>
            )}

            {orders.map((o) => (
              <div key={o._id} className="rounded-2xl border p-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <p className="font-bold">
                      {o.customerName} — {o.orderType}
                    </p>
                    <p className="text-sm text-gray-600">
                      {o.customerPhone} •{" "}
                      {new Date(o.createdAt).toLocaleString()}
                    </p>
                    {o.orderType === "Delivery" && o.address && (
                      <p className="text-sm text-gray-700 mt-1">
                        📍 {o.address}
                      </p>
                    )}
                    {o.notes && (
                      <p className="text-sm text-gray-700 mt-1">📝 {o.notes}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={o.status}
                      onChange={(e) => updateStatus(o._id, e.target.value)}
                      className="px-3 py-2 rounded-xl border"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <span className="font-bold">
                      {formatPriceEGP(o.subtotal)}
                    </span>
                  </div>
                </div>

                <div className="mt-3 border-t pt-3 space-y-1">
                  {o.items.map((it) => (
                    <div key={it._id} className="flex justify-between text-sm">
                      <span>
                        {it.qty} × {it.name}
                      </span>
                      <span className="font-medium">
                        {formatPriceEGP(it.qty * it.price)}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-2 text-xs text-gray-500">Order ID: {o._id}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

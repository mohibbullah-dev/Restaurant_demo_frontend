import Section from "../components/Section";
import { clearToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";
import { notify } from "../utils/toast";

export default function AdminDashboard() {
  const nav = useNavigate();

  return (
    <div className="pb-24 md:pb-0">
      <Section
        title="Admin"
        subtitle="Manage menu, orders, and restaurant status."
      >
        <div className="rounded-3xl border bg-white p-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            <Link className="px-4 py-2 rounded-xl border" to="/admin/menu">
              Menu Management
            </Link>
            <Link className="px-4 py-2 rounded-xl border" to="/admin/orders">
              Orders
            </Link>
            <Link className="px-4 py-2 rounded-xl border" to="/admin/settings">
              Settings
            </Link>
          </div>

          <button
            className="px-4 py-2 rounded-xl border"
            onClick={async () => {
              if (
                !confirm(
                  "Reset demo data? This deletes all orders and resets menu.",
                )
              )
                return;

              const res = await fetch(`${API_BASE}/api/admin/reset-demo`, {
                method: "POST",
                headers: { ...authHeaders() },
              });
              const data = await res.json();
              if (!res.ok) return notify.error(data?.message || "Reset failed");
              notify.success("Demo reset done ✅");
            }}
          >
            Reset Demo Data
          </button>

          <button
            className="px-4 py-2 rounded-xl border"
            onClick={() => {
              clearToken();
              nav("/admin/login");
            }}
          >
            Logout
          </button>
        </div>
      </Section>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { setToken } from "../utils/auth";

export default function AdminLogin() {
  const nav = useNavigate();
  const [email, setEmail] = useState("admin@demo.com");
  const [password, setPassword] = useState("Admin@123");
  const [err, setErr] = useState("");

  async function onLogin() {
    setErr("");
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) return setErr(data?.message || "Login failed");

    setToken(data.token);
    nav("/admin");
  }

  return (
    <div className="pb-24 md:pb-0">
      <Section title="Admin Login" subtitle="JWT based login (demo).">
        <div className="max-w-lg rounded-3xl border bg-white p-6">
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {err && <p className="text-sm text-red-600">{err}</p>}

            <button
              onClick={onLogin}
              className="w-full py-3 rounded-2xl bg-black text-white font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

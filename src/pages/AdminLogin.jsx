// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Section from "../components/Section";
// import { API_BASE } from "../config/api";
// import { setToken } from "../utils/auth";
// import { notify } from "../utils/toast";

// export default function AdminLogin() {
//   const nav = useNavigate();
//   const [email, setEmail] = useState("admin@demo.com");
//   const [password, setPassword] = useState("Admin@123");
//   const [err, setErr] = useState("");

//   async function onLogin() {
//     setErr("");
//     const res = await fetch(`${API_BASE}/api/auth/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     const data = await res.json();
//     if (!res.ok) return setErr(data?.message || "Login failed");
//     notify.success("admin login success");

//     setToken(data.token);
//     nav("/admin");
//   }

//   return (
//     <div className="pb-24 md:pb-0">
//       <Section title="Admin Login" subtitle="JWT based login (demo).">
//         <div className="max-w-lg rounded-3xl border bg-white p-6">
//           <div className="space-y-3">
//             <div>
//               <label className="text-sm text-gray-600">Email</label>
//               <input
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label className="text-sm text-gray-600">Password</label>
//               <input
//                 type="password"
//                 className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             {err && <p className="text-sm text-red-600">{err}</p>}

//             <button
//               onClick={onLogin}
//               className="w-full py-3 rounded-2xl bg-black text-white font-medium"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </Section>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { setToken } from "../utils/auth";
import { notify } from "../utils/toast";

export default function AdminLogin() {
  const nav = useNavigate();
  // Keeping your original demo credentials and state
  const [email, setEmail] = useState("admin@demo.com");
  const [password, setPassword] = useState("Admin@123");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function onLogin() {
    setErr("");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErr(data?.message || "Login failed");
        return;
      }

      notify.success("Admin login success");
      setToken(data.token);
      nav("/admin");
    } catch (error) {
      setErr("Server connection failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Section
        title={<span className="gold-gradient-text">Staff Portal</span>}
        subtitle="Authorized Access Only"
      >
        <div className="max-w-md mx-auto relative group">
          {/* Decorative Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-champagne/20 to-bronze/20 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative glass-gold rounded-4xl p-8 md:p-10 border-white/5 shadow-3xl">
            <div className="space-y-6">
              <div className="text-center space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-champagne font-bold">
                  Identity Verification
                </p>
                <div className="h-px w-12 bg-champagne/30 mx-auto mt-4"></div>
              </div>

              <div className="space-y-5 pt-4">
                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-smoke font-bold ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-obsidian/60 border border-white/5 px-5 py-4 rounded-2xl text-mist focus:border-champagne/50 outline-none transition-all placeholder:text-smoke/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@restaurant.com"
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-smoke font-bold ml-2">
                    Security Key
                  </label>
                  <input
                    type="password"
                    className="w-full bg-obsidian/60 border border-white/5 px-5 py-4 rounded-2xl text-mist focus:border-champagne/50 outline-none transition-all placeholder:text-smoke/20"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    onKeyDown={(e) => e.key === "Enter" && onLogin()}
                  />
                </div>

                {/* Error Message */}
                {err && (
                  <div className="bg-barolo/10 border border-barolo/20 rounded-xl p-3 animate-in fade-in zoom-in duration-300">
                    <p className="text-xs text-barolo text-center font-medium">
                      {err}
                    </p>
                  </div>
                )}

                {/* Login Button */}
                <button
                  onClick={onLogin}
                  disabled={loading}
                  className="w-full py-4 mt-4 rounded-2xl bg-gradient-to-r from-champagne to-bronze text-obsidian font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-champagne/10 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Authenticating..." : "Authorize Access"}
                </button>
              </div>

              <p className="text-[10px] text-center text-smoke/40 pt-4 italic">
                Secure Session Encryption Active
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

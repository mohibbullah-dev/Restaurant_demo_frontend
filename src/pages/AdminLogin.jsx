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
import { API_BASE } from "../config/api";
import { setToken } from "../utils/auth";
import { notify } from "../utils/toast";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function login() {
    const res = await fetch(`${API_BASE}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (!res.ok) return notify.error(data.message);
    setToken(data.token);
    nav("/admin");
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="glass-gold w-full max-w-md rounded-4xl p-10 relative overflow-hidden shadow-3xl">
        {/* Decorative Internal Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-champagne/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-display font-bold gold-gradient-text tracking-tighter">
              Staff Portal
            </h2>
            <p className="text-smoke text-sm italic opacity-70">
              Please enter your access key to manage the collection.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="relative group">
              <input
                type="password"
                placeholder="Access Key"
                className="w-full bg-obsidian/60 border border-white/5 rounded-2xl px-6 py-4 text-mist text-center tracking-[0.5em] focus:border-champagne/40 focus:ring-0 outline-none transition-all placeholder:text-smoke/20 placeholder:tracking-normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
              />
            </div>

            <button
              onClick={login}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-champagne to-bronze text-obsidian font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-champagne/10 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Authorize Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

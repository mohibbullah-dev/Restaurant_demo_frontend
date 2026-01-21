import React, { useState } from "react";
import { restaurantData } from "../data/restaurantData";
import { notify } from "../utils/toast";

export default function Admin() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [pass, setPass] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="h-screen bg-[#0B0C10] flex items-center justify-center p-6">
        <div className="bg-[#1F2833] p-8 rounded-3xl border border-gold/20 w-full max-w-sm text-center">
          <h2 className="text-gold font-black uppercase tracking-widest mb-6">
            Staff Access
          </h2>
          <input
            type="password"
            placeholder="Passcode"
            className="w-full bg-black/40 border border-gold/20 rounded-xl p-4 text-white mb-4 outline-none focus:border-gold"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            onClick={() =>
              pass === "1234" ? setLoggedIn(true) : notify.error("Wrong Pass")
            }
            className="w-full bg-gold text-black font-black py-4 rounded-xl uppercase tracking-widest"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-black uppercase">Menu Manager</h1>
          <button
            onClick={() => setLoggedIn(false)}
            className="text-xs text-zinc-500 hover:text-white"
          >
            Logout
          </button>
        </header>

        <div className="bg-zinc-800 rounded-2xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-700 text-[10px] uppercase tracking-widest text-zinc-400">
              <tr>
                <th className="p-4">Item</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {restaurantData.menu.map((item) => (
                <tr key={item.id} className="border-t border-white/5">
                  <td className="p-4 font-bold">{item.name}</td>
                  <td className="p-4 text-zinc-400">{item.cat}</td>
                  <td className="p-4 text-gold">£{item.price}</td>
                  <td className="p-4">
                    <button className="text-blue-400 mr-4">Edit</button>
                    <button className="text-red-400">Hide</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

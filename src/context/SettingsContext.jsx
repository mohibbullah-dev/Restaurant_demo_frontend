import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    isOpen: true,
    notice: "",
    orderMode: "WhatsApp",
  });

  async function refresh() {
    try {
      const res = await fetch(`${API_BASE}/api/settings`);
      const data = await res.json();
      const s = data.settings || (Array.isArray(data) ? data[0] : data);
      setSettings(s || { isOpen: true, notice: "", orderMode: "Direct" });
    } catch (err) {
      console.error("Failed to fetch settings", err);
    }
  }

  async function updateSettings(newFields) {
    try {
      const res = await fetch(`${API_BASE}/api/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeaders() },
        body: JSON.stringify(newFields),
      });
      if (res.ok) {
        setSettings((prev) => ({ ...prev, ...newFields }));
        return true;
      }
    } catch (err) {
      console.error("Update failed", err);
    }
    return false;
  }

  useEffect(() => {
    refresh();
  }, []);

  const value = useMemo(
    () => ({ settings, refresh, updateSettings }),
    [settings],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}

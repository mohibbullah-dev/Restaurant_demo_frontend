import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { API_BASE } from "../config/api";

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({ isOpen: true, notice: "" });

  async function refresh() {
    try {
      const res = await fetch(`${API_BASE}/api/settings`);
      const data = await res.json();
      setSettings(data.settings || { isOpen: true, notice: "" });
    } catch {
      // keep defaults
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  const value = useMemo(() => ({ settings, refresh }), [settings]);

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

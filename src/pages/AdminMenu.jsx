import { useEffect, useMemo, useState } from "react";
import Section from "../components/Section";
import { API_BASE } from "../config/api";
import { authHeaders } from "../utils/auth";

const emptyForm = {
  name: "",
  desc: "",
  price: 0,
  category: "",
  isVeg: false,
  available: true,
  featured: false,
  imageUrl: "",
};

export default function AdminMenu() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) =>
      [i.name, i.desc, i.category].some((x) =>
        (x || "").toLowerCase().includes(s),
      ),
    );
  }, [items, q]);

  async function load() {
    const res = await fetch(`${API_BASE}/api/menu`);
    const data = await res.json();
    setItems(data.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(item) {
    setEditingId(item._id);
    setForm({
      name: item.name || "",
      desc: item.desc || "",
      price: item.price || 0,
      category: item.category || "",
      isVeg: !!item.isVeg,
      available: item.available !== false,
      featured: !!item.featured,
      imageUrl: item.imageUrl || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setEditingId(null);
    setForm(emptyForm);
  }

  async function save() {
    const payload = {
      ...form,
      price: Number(form.price),
    };

    const isEdit = !!editingId;
    const url = isEdit
      ? `${API_BASE}/api/menu/${editingId}`
      : `${API_BASE}/api/menu`;
    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) return alert(data?.message || "Save failed");

    await load();
    reset();
  }

  async function del(id) {
    if (!confirm("Delete this item?")) return;

    const res = await fetch(`${API_BASE}/api/menu/${id}`, {
      method: "DELETE",
      headers: { ...authHeaders() },
    });
    const data = await res.json();
    if (!res.ok) return alert(data?.message || "Delete failed");

    await load();
  }

  return (
    <div className="pb-24 md:pb-0">
      <Section title="Admin — Menu" subtitle="Add, edit, delete menu items.">
        {/* Form */}
        <div className="rounded-3xl border bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">
                {editingId ? "Edit item" : "Add new item"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Keep it simple for restaurant owners.
              </p>
            </div>
            {editingId && (
              <button className="px-4 py-2 rounded-xl border" onClick={reset}>
                Cancel edit
              </button>
            )}
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                className="mt-1 w-full px-4 py-3 rounded-2xl border"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Category</label>
              <input
                className="mt-1 w-full px-4 py-3 rounded-2xl border"
                value={form.category}
                onChange={(e) =>
                  setForm((p) => ({ ...p, category: e.target.value }))
                }
                placeholder="Burgers, Pizza, Drinks..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Description</label>
              <input
                className="mt-1 w-full px-4 py-3 rounded-2xl border"
                value={form.desc}
                onChange={(e) =>
                  setForm((p) => ({ ...p, desc: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Price</label>
              <input
                type="number"
                className="mt-1 w-full px-4 py-3 rounded-2xl border"
                value={form.price}
                onChange={(e) =>
                  setForm((p) => ({ ...p, price: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Image URL (optional)
              </label>
              <input
                className="mt-1 w-full px-4 py-3 rounded-2xl border"
                value={form.imageUrl}
                onChange={(e) =>
                  setForm((p) => ({ ...p, imageUrl: e.target.value }))
                }
              />
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.available}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, available: e.target.checked }))
                  }
                />
                Available
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.isVeg}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, isVeg: e.target.checked }))
                  }
                />
                Veg
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, featured: e.target.checked }))
                  }
                />
                Featured
              </label>
            </div>

            <div className="md:col-span-2 flex gap-2">
              <button
                className="flex-1 py-3 rounded-2xl bg-black text-white"
                onClick={save}
              >
                {editingId ? "Update" : "Create"}
              </button>
              <button className="flex-1 py-3 rounded-2xl border" onClick={load}>
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="mt-6 rounded-3xl border bg-white p-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <h3 className="text-xl font-bold">Menu items</h3>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search..."
              className="md:w-80 px-4 py-3 rounded-2xl border"
            />
          </div>

          <div className="mt-4 space-y-3">
            {filtered.map((i) => (
              <div
                key={i._id}
                className="rounded-2xl border p-4 flex flex-col md:flex-row md:items-start md:justify-between gap-3"
              >
                <div>
                  <p className="font-bold">
                    {i.name}{" "}
                    <span className="text-sm text-gray-600">
                      ({i.category})
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">{i.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-600">
                    <span className="px-2 py-1 rounded-full border">
                      {i.price} EGP
                    </span>
                    <span className="px-2 py-1 rounded-full border">
                      {i.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                    <span className="px-2 py-1 rounded-full border">
                      {i.available ? "Available" : "Unavailable"}
                    </span>
                    {i.featured && (
                      <span className="px-2 py-1 rounded-full border">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 rounded-xl border"
                    onClick={() => startEdit(i)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 rounded-xl border"
                    onClick={() => del(i._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <p className="text-gray-600">No items.</p>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}

import { API_BASE } from "../config/api";
import { authHeaders } from "./auth";

export async function uploadMenuImage(file) {
  const form = new FormData();
  form.append("image", file);

  const res = await fetch(`${API_BASE}/api/upload/image`, {
    method: "POST",
    headers: { ...authHeaders() }, // DO NOT set Content-Type for FormData
    body: form,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Upload failed");
  return data; // { imageUrl, publicId, ... }
}

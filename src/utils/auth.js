const KEY = "jwtToken";

export function setToken(token) {
  localStorage.setItem(KEY, token);
}
export function getToken() {
  return localStorage.getItem(KEY) || "";
}
export function clearToken() {
  localStorage.removeItem(KEY);
}
export function authHeaders() {
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
}

import { Navigate } from "react-router-dom";
import { getToken } from "../utils/auth";

export default function AdminGuard({ children }) {
  const token = getToken();
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}

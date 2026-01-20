import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Checkout from "./pages/Checkout.jsx";
import AdminOrders from "./pages/AdminOrders.jsx";

import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminMenu from "./pages/AdminMenu.jsx";
import AdminSettings from "./pages/AdminSettings.jsx";
// import AdminOrders from "./pages/AdminOrders.jsx";
import AdminGuard from "./components/AdminGuard.jsx";
import QR from "./pages/QR.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminGuard>
              <AdminDashboard />
            </AdminGuard>
          }
        />

        <Route
          path="/admin/menu"
          element={
            <AdminGuard>
              <AdminMenu />
            </AdminGuard>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <AdminGuard>
              <AdminSettings />
            </AdminGuard>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <AdminGuard>
              <AdminOrders />
            </AdminGuard>
          }
        />
      </Route>
      <Route path="/qr" element={<QR />} />
    </Routes>
  );
}

// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout.jsx";
// import Home from "./pages/Home.jsx";
// import Menu from "./pages/Menu.jsx";
// import Checkout from "./pages/Checkout.jsx";
// import AdminOrders from "./pages/AdminOrders.jsx";

// import AdminLogin from "./pages/AdminLogin.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";
// import AdminMenu from "./pages/AdminMenu.jsx";
// import AdminSettings from "./pages/AdminSettings.jsx";
// // import AdminOrders from "./pages/AdminOrders.jsx";
// import AdminGuard from "./components/AdminGuard.jsx";
// import QR from "./pages/QR.jsx";

// export default function App() {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/admin/orders" element={<AdminOrders />} />
//         <Route path="/admin/login" element={<AdminLogin />} />

//         <Route
//           path="/admin"
//           element={
//             <AdminGuard>
//               <AdminDashboard />
//             </AdminGuard>
//           }
//         />

//         <Route
//           path="/admin/menu"
//           element={
//             <AdminGuard>
//               <AdminMenu />
//             </AdminGuard>
//           }
//         />

//         <Route
//           path="/admin/settings"
//           element={
//             <AdminGuard>
//               <AdminSettings />
//             </AdminGuard>
//           }
//         />

//         <Route
//           path="/admin/orders"
//           element={
//             <AdminGuard>
//               <AdminOrders />
//             </AdminGuard>
//           }
//         />
//       </Route>
//       <Route path="/qr" element={<QR />} />
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext"; // Added this
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Checkout from "./pages/Checkout.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminMenu from "./pages/AdminMenu.jsx";
import AdminSettings from "./pages/AdminSettings.jsx";
import AdminOrders from "./pages/AdminOrders.jsx";
import AdminGuard from "./components/AdminGuard.jsx";
import QR from "./pages/QR.jsx";
import OrderStatus from "./pages/OrderStatus";

export default function App() {
  return (
    <SettingsProvider>
      <Routes>
        {/* Public & Admin Pages with Header/Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/status/:id" element={<OrderStatus />} />

          {/* Admin Login - Usually looks better inside the layout or a dedicated clean layout */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
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

        {/* Full-screen pages (No Header/Footer) */}
        <Route path="/qr" element={<QR />} />

        {/* 404 - Redirect back to home or a custom Not Found page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </SettingsProvider>
  );
}

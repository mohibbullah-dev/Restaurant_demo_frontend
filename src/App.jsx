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

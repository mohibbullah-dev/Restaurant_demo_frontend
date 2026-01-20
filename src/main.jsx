import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

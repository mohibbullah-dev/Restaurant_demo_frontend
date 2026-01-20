import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Section from "../components/Section";
import { useCart } from "../context/CartContext";
import { restaurant } from "../config/restaurant";
import { formatPriceEGP } from "../utils/menu";
import { buildWhatsAppOrderMessage, toWhatsAppUrl } from "../utils/whatsapp";

export default function Checkout() {
  const cart = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderType, setOrderType] = useState("Pickup"); // Pickup | Delivery | Dine-in
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // If cart empty, push back to menu
  useEffect(() => {
    if (cart.items.length === 0) navigate("/menu");
  }, [cart.items.length, navigate]);

  const isDelivery = orderType === "Delivery";

  const canSend = useMemo(() => {
    if (!customerName.trim()) return false;
    if (!customerPhone.trim()) return false;
    if (isDelivery && !address.trim()) return false;
    return cart.items.length > 0;
  }, [customerName, customerPhone, isDelivery, address, cart.items.length]);

  function onSendWhatsApp() {
    const msg = buildWhatsAppOrderMessage({
      restaurantName: restaurant.name,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      orderType,
      address: address.trim(),
      notes,
      items: cart.items,
      subtotal: cart.subtotal,
    });

    const url = toWhatsAppUrl(restaurant.whatsappPhone, msg);

    // Optional: clear cart after clicking send
    cart.clear();

    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className="pb-24 md:pb-0">
      <Section
        title="Checkout"
        subtitle="Confirm details and send the order on WhatsApp."
      >
        <div className="grid lg:grid-cols-2 gap-6">
          {/* FORM */}
          <div className="rounded-3xl border bg-white p-6">
            <h3 className="text-xl font-bold">Customer details</h3>

            <div className="mt-4 space-y-3">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+20..."
                  className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Order type</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Pickup", "Delivery", "Dine-in"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setOrderType(t)}
                      className={`px-4 py-2 rounded-full border text-sm ${
                        orderType === t ? "bg-black text-white" : "bg-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {isDelivery && (
                <div>
                  <label className="text-sm text-gray-600">
                    Delivery address
                  </label>
                  <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street, building, area..."
                    className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              )}

              <div>
                <label className="text-sm text-gray-600">
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="No onions, extra sauce, etc."
                  rows={3}
                  className="mt-1 w-full px-4 py-3 rounded-2xl border outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Link
                to="/menu"
                className="flex-1 text-center py-3 rounded-2xl border font-medium"
              >
                Back to menu
              </Link>

              <button
                disabled={!canSend}
                onClick={onSendWhatsApp}
                className="flex-1 py-3 rounded-2xl bg-black text-white font-medium disabled:bg-gray-300"
              >
                Send on WhatsApp
              </button>
            </div>

            {!canSend && (
              <p className="mt-3 text-sm text-gray-600">
                Fill the required fields to send the order.
              </p>
            )}
          </div>

          {/* ORDER SUMMARY */}
          <div className="rounded-3xl border bg-white p-6">
            <h3 className="text-xl font-bold">Order summary</h3>

            <div className="mt-4 space-y-3">
              {cart.items.map((i) => (
                <div
                  key={i._id}
                  className="flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="font-semibold">
                      {i.qty} × {i.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {formatPriceEGP(i.price)} each
                    </p>
                  </div>
                  <p className="font-semibold">
                    {formatPriceEGP(i.qty * i.price)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-2xl font-bold">
                {formatPriceEGP(cart.subtotal)}
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-600">
              This demo sends orders via WhatsApp (fastest conversion for local
              restaurants).
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

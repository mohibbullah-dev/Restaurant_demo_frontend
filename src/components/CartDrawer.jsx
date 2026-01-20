import { useCart } from "../context/CartContext";
import { formatPriceEGP } from "../utils/menu";
import { Link, useNavigate } from "react-router-dom";
export default function CartDrawer() {
  const cart = useCart();
  const navigate = useNavigate();

  if (!cart.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={cart.close} />

      {/* panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Your Cart</h3>
            <p className="text-sm text-gray-600">{cart.count} items</p>
          </div>
          <button onClick={cart.close} className="px-3 py-2 rounded-lg border">
            Close
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-3">
          {cart.items.length === 0 ? (
            <div className="text-center text-gray-600 mt-10">
              Cart is empty.
              <div className="mt-3">
                <Link to="/menu" onClick={cart.close} className="underline">
                  Browse menu
                </Link>
              </div>
            </div>
          ) : (
            cart.items.map((item) => (
              <div key={item._id} className="rounded-2xl border p-4 bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {formatPriceEGP(item.price)} each
                    </p>
                  </div>
                  <button
                    onClick={() => cart.remove(item._id)}
                    className="text-sm underline text-gray-600"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => cart.dec(item._id)}
                      className="w-10 h-10 rounded-xl border"
                    >
                      -
                    </button>
                    <div className="w-10 text-center font-semibold">
                      {item.qty}
                    </div>
                    <button
                      onClick={() => cart.inc(item._id)}
                      className="w-10 h-10 rounded-xl border"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-semibold">
                    {formatPriceEGP(item.price * item.qty)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">{formatPriceEGP(cart.subtotal)}</span>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={cart.clear}
              disabled={cart.items.length === 0}
              className="flex-1 py-3 rounded-2xl border disabled:opacity-50"
            >
              Clear
            </button>
            <button
              disabled={cart.items.length === 0}
              className="flex-1 py-3 rounded-2xl bg-black text-white disabled:bg-gray-300"
              onClick={() => {
                cart.close();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

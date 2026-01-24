import { useCart } from "../context/CartContext";

export default function CartButton() {
  const cart = useCart();

  return (
    <button
      onClick={cart.toggle}
      className="relative px-3 py-2 rounded-lg border border-champagne/30 text-smoke hover:text-mist transition-colors text-sm "
      // border border-champagne/30 text-smoke hover:text-mist transition-colors"
    >
      Cart
      {cart.count > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-2 py-0.5">
          {cart.count}
        </span>
      )}
    </button>
  );
}

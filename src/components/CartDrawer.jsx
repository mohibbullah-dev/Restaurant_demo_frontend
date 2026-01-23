// import { useCart } from "../context/CartContext";
// import { formatPriceEGP } from "../utils/menu";
// import { Link, useNavigate } from "react-router-dom";
// export default function CartDrawer() {
//   const cart = useCart();
//   const navigate = useNavigate();

//   if (!cart.isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100]">
//       {/* backdrop */}
//       <div className="absolute inset-0 bg-black/40" onClick={cart.close} />

//       {/* panel */}
//       <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
//         <div className="p-4 border-b flex items-center justify-between">
//           <div>
//             <h3 className="font-bold text-lg">Your Cart</h3>
//             <p className="text-sm text-gray-600">{cart.count} items</p>
//           </div>
//           <button onClick={cart.close} className="px-3 py-2 rounded-lg border">
//             Close
//           </button>
//         </div>

//         <div className="flex-1 overflow-auto p-4 space-y-3">
//           {cart.items.length === 0 ? (
//             <div className="text-center text-gray-600 mt-10">
//               Cart is empty.
//               <div className="mt-3">
//                 <Link to="/menu" onClick={cart.close} className="underline">
//                   Browse menu
//                 </Link>
//               </div>
//             </div>
//           ) : (
//             cart.items.map((item) => (
//               <div key={item._id} className="rounded-2xl border p-4 bg-white">
//                 <div className="flex items-start justify-between gap-3">
//                   <div>
//                     <p className="font-semibold">{item.name}</p>
//                     <p className="text-sm text-gray-600">
//                       {formatPriceEGP(item.price)} each
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => cart.remove(item._id)}
//                     className="text-sm underline text-gray-600"
//                   >
//                     Remove
//                   </button>
//                 </div>

//                 <div className="mt-3 flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => cart.dec(item._id)}
//                       className="w-10 h-10 rounded-xl border"
//                     >
//                       -
//                     </button>
//                     <div className="w-10 text-center font-semibold">
//                       {item.qty}
//                     </div>
//                     <button
//                       onClick={() => cart.inc(item._id)}
//                       className="w-10 h-10 rounded-xl border"
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className="font-semibold">
//                     {formatPriceEGP(item.price * item.qty)}
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="border-t p-4">
//           <div className="flex items-center justify-between">
//             <span className="text-gray-600">Subtotal</span>
//             <span className="font-bold">{formatPriceEGP(cart.subtotal)}</span>
//           </div>

//           <div className="mt-4 flex gap-2">
//             <button
//               onClick={cart.clear}
//               disabled={cart.items.length === 0}
//               className="flex-1 py-3 rounded-2xl border disabled:opacity-50"
//             >
//               Clear
//             </button>
//             <button
//               disabled={cart.items.length === 0}
//               className="flex-1 py-3 rounded-2xl bg-black text-white disabled:bg-gray-300"
//               onClick={() => {
//                 cart.close();
//                 navigate("/checkout");
//               }}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useCart } from "../context/CartContext";
import { formatPriceEGP } from "../utils/menu";
import { Link, useNavigate } from "react-router-dom";

export default function CartDrawer() {
  const cart = useCart();
  const navigate = useNavigate();

  if (!cart.isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop: Darker and blurred for focus */}
      <div
        className="absolute inset-0 bg-obsidian/60 backdrop-blur-sm transition-opacity"
        onClick={cart.close}
      />

      {/* Panel: Dark obsidian glass effect */}
      <div className="relative h-full w-full max-w-md bg-obsidian border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between bg-black/20">
          <div>
            <h3 className="font-bold text-2xl tracking-tighter text-mist">
              Your <span className="gold-gradient-text italic">Selection</span>
            </h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-smoke font-bold mt-1">
              {cart.count} curated items
            </p>
          </div>
          <button
            onClick={cart.close}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-mist hover:bg-white/5 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-auto p-6 space-y-4 custom-scrollbar">
          {cart.items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-10">
              <span className="text-4xl mb-4 opacity-20">🍽️</span>
              <p className="text-smoke text-sm italic opacity-50">
                Your collection is currently empty.
              </p>
              <Link
                to="/menu"
                onClick={cart.close}
                className="mt-6 text-[10px] uppercase tracking-[0.3em] text-champagne font-black hover:underline"
              >
                Explore Menu
              </Link>
            </div>
          ) : (
            cart.items.map((item) => (
              <div
                key={item._id}
                className="glass-gold rounded-3xl p-5 border border-white/5 group hover:border-champagne/20 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    {/* Tiny Image Preview */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/40 border border-white/5">
                      <img
                        src={item.imageUrl}
                        className="w-full h-full object-cover"
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className="font-bold text-mist text-lg leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-champagne/60 font-bold tracking-widest mt-1">
                        {formatPriceEGP(item.price)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => cart.remove(item._id)}
                    className="text-[10px] uppercase tracking-widest text-red-400/50 hover:text-red-400 font-bold transition-colors"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center bg-black/40 rounded-xl p-1 border border-white/5">
                    <button
                      onClick={() => cart.dec(item._id)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-mist hover:bg-white/5 active:scale-90 transition-all"
                    >
                      —
                    </button>
                    <div className="w-10 text-center font-bold text-sm text-mist">
                      {item.qty}
                    </div>
                    <button
                      onClick={() => cart.inc(item._id)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-mist hover:bg-white/5 active:scale-90 transition-all"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-black text-mist tracking-tight">
                    {formatPriceEGP(item.price * item.qty)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        <div className="bg-black/40 border-t border-white/10 p-8 backdrop-blur-md">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-smoke font-black">
              Subtotal
            </span>
            <span className="text-2xl font-bold text-mist tracking-tighter">
              {formatPriceEGP(cart.subtotal)}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button
              disabled={cart.items.length === 0}
              onClick={() => {
                cart.close();
                navigate("/checkout");
              }}
              className="w-full py-5 rounded-2xl bg-champagne text-obsidian font-black uppercase text-[11px] tracking-[0.4em] hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-champagne/10 disabled:opacity-30"
            >
              Continue to Checkout
            </button>

            <button
              onClick={cart.clear}
              disabled={cart.items.length === 0}
              className="w-full py-3 rounded-xl text-[10px] uppercase tracking-[0.2em] text-smoke hover:text-mist font-bold transition-colors disabled:hidden"
            >
              Clear Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

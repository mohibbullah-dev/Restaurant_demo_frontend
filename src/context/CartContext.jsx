import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const item = action.payload;
      const existing = state.items.find((x) => x._id === item._id);

      if (existing) {
        return {
          ...state,
          items: state.items.map((x) =>
            x._id === item._id ? { ...x, qty: x.qty + 1 } : x,
          ),
        };
      }

      return { ...state, items: [...state.items, { ...item, qty: 1 }] };
    }

    case "INC": {
      const id = action.payload;
      return {
        ...state,
        items: state.items.map((x) =>
          x._id === id ? { ...x, qty: x.qty + 1 } : x,
        ),
      };
    }

    case "DEC": {
      const id = action.payload;
      return {
        ...state,
        items: state.items
          .map((x) => (x._id === id ? { ...x, qty: x.qty - 1 } : x))
          .filter((x) => x.qty > 0),
      };
    }

    case "REMOVE": {
      const id = action.payload;
      return { ...state, items: state.items.filter((x) => x._id !== id) };
    }

    case "CLEAR":
      return { ...state, items: [] };

    case "TOGGLE_OPEN":
      return { ...state, isOpen: !state.isOpen };

    case "OPEN":
      return { ...state, isOpen: true };

    case "CLOSE":
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

const initialState = { items: [], isOpen: false };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const subtotal = useMemo(
    () => state.items.reduce((sum, x) => sum + x.price * x.qty, 0),
    [state.items],
  );

  const count = useMemo(
    () => state.items.reduce((sum, x) => sum + x.qty, 0),
    [state.items],
  );

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      subtotal,
      count,
      add: (item) => dispatch({ type: "ADD", payload: item }),
      inc: (id) => dispatch({ type: "INC", payload: id }),
      dec: (id) => dispatch({ type: "DEC", payload: id }),
      remove: (id) => dispatch({ type: "REMOVE", payload: id }),
      clear: () => dispatch({ type: "CLEAR" }),
      open: () => dispatch({ type: "OPEN" }),
      close: () => dispatch({ type: "CLOSE" }),
      toggle: () => dispatch({ type: "TOGGLE_OPEN" }),
    }),
    [state.items, state.isOpen, subtotal, count],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

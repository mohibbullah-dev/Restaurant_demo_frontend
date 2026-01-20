import { formatPriceEGP } from "../utils/menu";

export default function MenuItemCard({ item, onAdd }) {
  return (
    <div className="rounded-2xl border bg-white p-4 flex flex-col">
      <div className="h-36 rounded-xl bg-gray-100 mb-4 flex items-center justify-center text-gray-500 text-sm">
        Item photo
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug">{item.name}</h3>
        <span className="font-semibold whitespace-nowrap">
          {formatPriceEGP(item.price)}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-600 flex-1">{item.desc}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {item.isVeg ? (
          <span className="text-xs px-2 py-1 rounded-full border">Veg</span>
        ) : (
          <span className="text-xs px-2 py-1 rounded-full border">Non-Veg</span>
        )}

        {item.tags?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full border">
            {t}
          </span>
        ))}

        {!item.available && (
          <span className="text-xs px-2 py-1 rounded-full border text-gray-500">
            Unavailable
          </span>
        )}
      </div>

      <button
        disabled={!item.available}
        onClick={() => onAdd?.(item)}
        className="mt-4 w-full py-2 rounded-xl bg-black text-white disabled:bg-gray-300"
      >
        Add to cart
      </button>
    </div>
  );
}

export function getCategories(items) {
  const set = new Set(items.map((i) => i.category));
  return ["All", ...Array.from(set)];
}

export function formatPriceEGP(price) {
  return `${price} EGP`;
}

import { formatPriceEGP } from "./menu";

export function buildWhatsAppOrderMessage({
  restaurantName,
  customerName,
  customerPhone,
  orderType,
  address,
  notes,
  items,
  subtotal,
}) {
  const lines = [];

  lines.push(`🍽️ New Order — ${restaurantName}`);
  lines.push(``);
  lines.push(`Customer: ${customerName}`);
  lines.push(`Phone: ${customerPhone}`);
  lines.push(`Order Type: ${orderType}`);

  if (orderType === "Delivery") {
    lines.push(`Address: ${address || "-"}`);
  }

  if (notes?.trim()) {
    lines.push(`Notes: ${notes.trim()}`);
  }

  lines.push(``);
  lines.push(`Items:`);
  items.forEach((i) => {
    lines.push(`- ${i.qty} x ${i.name} = ${formatPriceEGP(i.qty * i.price)}`);
  });

  lines.push(``);
  lines.push(`Subtotal: ${formatPriceEGP(subtotal)}`);
  lines.push(``);
  lines.push(`Please confirm the order. ✅`);

  return lines.join("\n");
}

export function toWhatsAppUrl(phoneDigitsOnly, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneDigitsOnly}?text=${encoded}`;
}

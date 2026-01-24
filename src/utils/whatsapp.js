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
  deliveryFee, // Added this
  total, // Added this
}) {
  const lines = [];

  lines.push(`*🍽️ NEW ORDER — ${restaurantName.toUpperCase()}*`);
  lines.push(``);
  lines.push(`*Customer:* ${customerName}`);
  lines.push(`*Phone:* ${customerPhone}`);
  lines.push(`*Type:* ${orderType}`);

  if (orderType === "Delivery" && address) {
    lines.push(`*Address:* ${address}`);
  }

  if (notes?.trim()) {
    lines.push(`*Notes:* _${notes.trim()}_`);
  }

  lines.push(``);
  lines.push(`*Items:*`);
  items.forEach((i) => {
    lines.push(`• ${i.qty} x ${i.name} (${formatPriceEGP(i.price)})`);
  });

  lines.push(``);
  lines.push(`*Subtotal:* ${formatPriceEGP(subtotal)}`);

  if (orderType === "Delivery" && deliveryFee > 0) {
    lines.push(`*Delivery Fee:* ${formatPriceEGP(deliveryFee)}`);
  }

  lines.push(`*Total Due: ${formatPriceEGP(total)}*`);
  lines.push(``);
  lines.push(`Please confirm this order. ✅`);

  return lines.join("\n");
}

export function toWhatsAppUrl(phone, message) {
  // 1. Force the phone to be ONLY digits (removes any accidentally added '+' or spaces)
  const cleanPhone = phone.replace(/\D/g, "");

  // 2. Encode message
  const encoded = encodeURIComponent(message);

  // 3. 'api.whatsapp.com' is more reliable than 'wa.me' for deep-linking from async JS
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}`;
}


import { Product } from "../data/products";

export const formatWhatsAppMessage = (cart: { product: Product; quantity: number }[], total: number) => {
  const phoneNumber = "258840000000"; // Substitua pelo seu número da Beira
  
  let message = `🚀 *NOVO PEDIDO - ET TOY'S BEIRA*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  
  cart.forEach((item, index) => {
    message += `*${index + 1}. ${item.product.name}*\n`;
    message += `   - Quantidade: ${item.quantity}\n`;
    message += `   - Preço: ${item.product.price * item.quantity} MT\n\n`;
  });
  
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL: ${total} MT*\n\n`;
  message += `📍 *Local: Beira, Moçambique*\n`;
  message += `Por favor, confirme a disponibilidade e o prazo de entrega.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

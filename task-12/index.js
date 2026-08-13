function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  return `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
}

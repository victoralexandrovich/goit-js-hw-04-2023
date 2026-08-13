function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line

  const totalPrice = pricePerDroid * orderedQuantity;

  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    const creditsLeft = customerCredits - totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
  }

  // Change code above this line
  return message;
}

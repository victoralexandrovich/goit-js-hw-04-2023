function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message =
    ordered > available
      ? "Not enough goods in stock!"
      : "The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}

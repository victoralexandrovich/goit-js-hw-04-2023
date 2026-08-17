function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  // Change code above this line
  return totalPrice;
}

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Change code below this line

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

function Orders(name) {
  this.customerName = name
  this.order = [];
};

Orders.prototype.addPizza = function (pizza) {
  this.order.push(pizza);
};

function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};












var order = new Orders('Josh');
var pizza = new Pizza('large');

order.addPizza(pizza);

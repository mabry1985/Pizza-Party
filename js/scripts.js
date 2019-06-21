function Orders() {
  this.order = [];
};

Orders.prototype.addPizza = function (pizza) {
  this.order.push(pizza);
};

function Pizza() {
  this.size = med;
  this.toppings = [];
};

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};

var pizza()

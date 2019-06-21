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

function Meat() {
  this.cost = 1;
}

function Veggie() {
  this.cost = .5;
}

function Novelty() {
  this.cost = 5;
}

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};

var small = 10;
var medium = 12;
var large = 14;
var pepperoni = new Meat();
var sausage = new Meat();
var ham = new Meat();
var onion = new Veggie();
var redPepper = new Veggie();
var mushroom = new Veggie();
var garlic = new Veggie();
var pineapple = new Veggie();
var jalepeno = new Veggie();

var order = new Orders('Josh');
var pizza1 = new Pizza(large);

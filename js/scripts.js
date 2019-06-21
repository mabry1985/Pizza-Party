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

function Meat(name) {
  this.name = name;
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
var cheese = new Meat('Extra Cheese');
var sauce = new Veggie('Extra Sauce');
var pepperoni = new Meat('Pepperoni');
var sausage = new Meat('Sausage');
var ham = new Meat('Ham');
var onion = new Veggie('Onions');
var redPepper = new Veggie('Red Peppers');
var mushroom = new Veggie('Mushrooms');
var garlic = new Veggie('Crushed Garlic');
var pineapple = new Veggie('Pineapple');
var jalepeno = new Veggie('Jalepeno');
var tomato = new Veggie('Tomatoes');

var order = new Orders('Josh');
var pizza1 = new Pizza(large);

$(document).ready(function () {
  $('.form-one').submit(function (event) {
    event.preventDefault();
    var nameInput = $('input.name').val();
    var sizeInput = $('input:radio[name=size]:checked').val();
    console.log(nameInput);
    console.log(sizeInput);
    $('input:checkbox[name=topping]:checked').each(function () {
        var toppingInput = $(this).val();

        console.log(toppingInput);
      });
  });
});

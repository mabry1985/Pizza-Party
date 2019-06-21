function Orders(name) {
  this.customerName = name;
  this.order = [];
};

Orders.prototype.addPizza = function (pizza) {
  this.order.push(pizza);
};

function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.cost = function () {
  var sizeInput = parseInt($('input:radio[name=size]:checked').val());

  toppingsArr = [];
  $('input:checkbox[name=topping]:checked').each(function () {
      var toppingInput = parseInt($(this).val());
      toppingsArr.push(toppingInput);
    });

  var total = sizeInput;

  toppingsArr.forEach(function (topping) {
    total += topping;
  });

  return total;
};

var order1 = new Orders('Josh');
var pizza1 = new Pizza();
order1.addPizza(pizza1);

$(document).ready(function () {
  $('.form-one').submit(function (event) {
    event.preventDefault();
    var nameInput = $('input.name').val();
    $('.output').html(nameInput + ' your total is $' + pizza1.cost() + '<br>PARTY ON!!!!!!');
  });
});

function Orders(name) {
  this.customerName = name;
  this.order = [];
};

function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Orders.prototype.addPizza = function (pizza) {
  this.order.push(pizza);
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

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
};

function easterEgg(name) {
  if (name === 'Raphael' || name === 'Donatello' ||
   name === 'Leonardo' || name === 'Michealangelo') {
    $('.main').fadeOut();
    $('body').removeClass('backdrop');
    $('body').addClass('black');
    $('.easter-egg').fadeIn(3000);
    var music = document.createElement('audio');
    music.setAttribute('src', './easter-egg/tmnt.wav');
    music.volume = 0.1;
    music.play();
  }
};

var order1 = new Orders('Josh');
var pizza1 = new Pizza();
order1.addPizza(pizza1);

$(document).ready(function () {
  $('.form-one').submit(function (event) {
    event.preventDefault();
    var nameInput = $('input.name').val();
    easterEgg(nameInput);
    $('.output').css('visibility', 'visible');
    $('.output').html(nameInput + ' Your total is: <br> <strong>$ '
    + pizza1.cost() + '</strong><br>PARTY ON!!!!!!');

  });
});

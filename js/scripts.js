function Orders(name) {
  this.customerName = name;
  this.order = [];
};

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
  this.total = 0;
};

Orders.prototype.addPizza = function (pizza) {
  this.order.push(pizza);
};

Pizza.prototype.cost = function (size) {
  var toppingTotal = 0;
  this.toppings.forEach(function (topping) {
    toppingTotal += topping;
  });

  this.total = toppingTotal + size;
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
  } else {
    $('#modal').modal('show');
  }
};

var order1 = new Orders('Josh');
var pizza1 = new Pizza();
order1.addPizza(pizza1);

$(document).ready(function () {
  $('.form-one').submit(function (event) {
    event.preventDefault();
    $('input:checkbox[name=topping]:checked').each(function () {
      var toppingInput = parseInt($(this).val());
      pizza1.toppings.push(toppingInput);
    });

    var sizeInput = parseInt($('input:radio[name=size]:checked').val());
    var nameInput = $('input.name').val();
    pizza1.cost(sizeInput);
    easterEgg(nameInput);

    $('.output').html(nameInput + '<br>Your total is: <br> <strong>$'
    + pizza1.total + '</strong>');
  });

});

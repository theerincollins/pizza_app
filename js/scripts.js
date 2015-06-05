function Pizza(toppings, size, quantity) {
  this.toppings = toppings;
  this.size = size;
  this.quantity = quantity;
}

Pizza.prototype.addToppings = function(toppings) {
  this.toppings = toppings;
}

Pizza.prototype.selectSize = function(size) {
  this.size = size;
}

Pizza.prototype.selectQuantity = function(quantity) {
  this.quantity = quantity;
}

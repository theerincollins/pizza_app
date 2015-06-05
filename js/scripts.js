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

var pizzaCost = function(pizza) {
  var toppingsCost = 0;
  var toppingsHash = pizza.toppings;
  for (var topping in toppingsHash) {
    toppingsCost = toppingsCost + toppingsHash[topping]
  }

  var sizeCost = 0;
  var sizeHash = pizza.size;
  for (var size in sizeHash) {
    sizeCost = sizeCost + sizeHash[size]
  }

  return (sizeCost + toppingsCost) * pizza.quantity;

}

function Order(items, totalCost) {
  this.items = items;
  this.totalCost = totalCost;
}

Order.prototype.addToOrder = function(pizza) {
  if (this.items === undefined) {
    this.items = [];
    this.items.push(pizza);
  } else {
    this.items.push(pizza);
  }
}

Order.prototype.calculateTotal = function() {
  var totalCost = 0;
  var itemArray = this.items;
  itemArray.forEach(function(pizza) {
    totalCost = totalCost + pizzaCost(pizza);
  });
  this.totalCost = totalCost;
};

// I am realizeing now that using a hash for the toppings may have not been the
// best way to go, but due to time contstraints, I'm going to keep going with it.

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

$(document).ready(function() {
  $("#start-order").click(function() {
    newOrder = new Order();
    $("#build-pizza-container").show()
    $("#intro").hide()
    return newOrder;
  });


  $("form#pizzaForm").submit(function() {
    event.preventDefault();
    var pizzaToppings = [];
    $(':checkbox:checked').each(function(i){
      pizzaToppings[i] = parseInt($(this).val());
    });

    var pizzaToppingsHash = {};
    pizzaToppings.forEach(function(toppingPrice) {
      if (toppingPrice === 1) {
        pizzaToppingsHash["Sausage"] = 1
      } else if (toppingPrice === 15) {
        pizzaToppingsHash["Brownies"] = 15
      } else if (toppingPrice === 2) {
        pizzaToppingsHash["Liquid Gold"] = 2
      } else if (toppingPrice === 20) {
        pizzaToppingsHash["Pepperoni"] = 20
      } else if (toppingPrice === 12) {
        pizzaToppingsHash["Goat Cheese"] = 12
      } else if (toppingPrice === 3) {
        pizzaToppingsHash["Basil"] = 3
      } else if (toppingPrice === 199) {
        pizzaToppingsHash["Diamond Crusted Shrimp"] = 199
      } else if (toppingPrice === 200) {
        pizzaToppingsHash["Platinum Crusted Mushrooms"] = 200
      } else if (toppingPrice === 8) {
        pizzaToppingsHash["Onion"] = 8
      } else if (toppingPrice === 9) {
        pizzaToppingsHash["Candied Apples"] = 9
      }
    });

    var pizzaSizeHash = {};
    var pizzaSize = parseInt($("#size-select").val());
    if (pizzaSize === 50) {
      pizzaSizeHash["Itty Bitty"] = 50
    } else if (pizzaSize === 100) {
      pizzaSizeHash["Small"] = 100
    } else if (pizzaSize === 200) {
      pizzaSizeHash["Medium"] = 200
    } else if (pizzaSize === 400) {
      pizzaSizeHash["Large"] = 400
    } else if (pizzaSize === 800) {
      pizzaSizeHash["X-Large"] = 800
    } else if (pizzaSize === 1600) {
      pizzaSizeHash["Super Gigantic"] = 1600
    }

    var quantity = parseInt($("#quantity-input").val());
    var newPizza = new Pizza(pizzaToppingsHash, pizzaSizeHash, quantity)
    newOrder.addToOrder(newPizza);
    newOrder.calculateTotal();

    $("#total").text(newOrder.totalCost)
    var index = newOrder.items.length-1;
    var pizzaLabel = index + 1;
    lastPizza = newOrder.items[newOrder.items.length-1]
    $("#order-list-div").append("<ul id='order-list_" + index + "' >Pizza " + pizzaLabel + "</ul>")
    toppings = lastPizza.toppings;
    for (var topping in toppings) {
      $("#order-list_" + index).append("<li>" + topping + "</li>")
    }

  });

  $(".order-pizza").click(function() {
    $("#build-pizza-container").hide()
    $("#delivery").show()
  });
});

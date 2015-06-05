describe('Pizza', function() {
  it("will return the toppings of a pizza", function() {
    var testToppings = {"pepperoni": 5.00, "gold": 20.00, "ice cream": 5.00};
    var testPizza = new Pizza();
    testPizza.addToppings(testToppings);
    expect(testPizza.toppings).to.eql(testToppings);
  });

  it("will return the size of a pizza", function() {
    var testSize = {"x-large": 6000};
    var testPizza = new Pizza();
    testPizza.selectSize(testSize);
    expect(testPizza.size).to.eql(testSize);
  });

  it("will return the quantity of a pizza", function() {
    var testQuantity = 3;
    var testPizza = new Pizza();
    testPizza.selectQuantity(testQuantity);
    expect(testPizza.quantity).to.eql(testQuantity);
  });

  it("will return the cost of one type of pizza including with a quantity more than one", function() {
    var testToppings = {"pepperoni": 5, "gold": 20, "ice cream": 5};
    var testSize = {"large": 5000}
    var testQuantity = 3;
    var testPizza = new Pizza(testToppings, testSize, testQuantity)
    expect(pizzaCost(testPizza)).to.equal(15090)
  });
});

describe('Order', function() {
  it("will return items and costs of all pizzas in an order", function() {
    var testOrder = new Order ()
    var testToppings = {"pepperoni": 5.00, "gold": 20.00, "ice cream": 5.00};
    var testSize = {"large": 5000}
    var testQuantity = 3;
    var testPizza1 = new Pizza(testToppings, testSize, testQuantity)

    var testToppings = {"sausage": 7.00, "gold": 20.00, "ice": 8.00};
    var testSize = {"x-small": 2000}
    var testQuantity = 3;
    var testPizza2 = new Pizza(testToppings, testSize, testQuantity)
    testOrder.addToOrder(testPizza1)
    testOrder.addToOrder(testPizza2)
    expect(testOrder.items).to.eql([testPizza1, testPizza2])
  });

  it("will return items and costs of all pizzas in an order", function() {
    var testOrder = new Order ()
    var testToppings = {"pepperoni": 5.00, "gold": 20.00, "ice cream": 5.00};
    var testSize = {"large": 5000}
    var testQuantity = 3;
    var testPizza1 = new Pizza(testToppings, testSize, testQuantity)

    var testToppings = {"sausage": 7.00, "gold": 20.00, "ice": 8.00};
    var testSize = {"x-small": 2000}
    var testQuantity = 3;
    var testPizza2 = new Pizza(testToppings, testSize, testQuantity)
    testOrder.addToOrder(testPizza1);
    testOrder.addToOrder(testPizza2);
    testOrder.calculateTotal();
    expect(testOrder.totalCost).to.eql(21195)
  });
});

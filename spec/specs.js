describe('Pizza', function() {
  it("will return the toppings of a pizza", function() {
    var testToppings = {"pepperoni": 5.00, "gold": 20.00, "ice cream": 5.00};
    var testPizza = new Pizza();
    testPizza.addToppings(testToppings);
    expect(testPizza.toppings).to.eql(testToppings);
  });

  it("will return the size of a pizza", function() {
    var testSize = {"x-large": 6000, "large": 5000, "medium": 4000, "small": 3000, "x-small": 2000};
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
});

describe('Order', function() {
  it("will return the cost of one type of pizza in an order", function() {

  });
});

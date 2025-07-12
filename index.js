const menu = [
  {
    name: "Margherita",
    price: 10,
  },
  {
    name: "Napoli",
    price: 8,
  },
  {
    name: "Roman",
    price: 9,
  },
  {
    name: "Vesuvio",
    price: 12,
  },
];

let cashInRegister = 100;
const orderQueue = [];

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizzaName) {
  menu.push(pizzaName);
  return menu;
}

addNewPizza({ name: "Caprese", price: 15 });

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
  const orderItem = menu.find((item) => item.name === pizzaName);

  if (!orderItem) {
    console.log("No Pizza Founds!");
    return;
  }

  cashInRegister += orderItem.price;

  const order = {
    pizza: orderItem,
    status: "ordered",
  };

  orderQueue.push(order);

  return order;
}


console.log(placeOrder("Vesuvio"));

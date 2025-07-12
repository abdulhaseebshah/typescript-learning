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

const cashInRegister = 100;
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

console.log(menu);
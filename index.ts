type MenuType = { id: number; name: string; price: number };

type OrderType = {
  id: number;
  pizza: MenuType;
  status: "ordered" | "completed";
};

const menu: MenuType[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 10 },
  { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister: number = 100;
const orderQueue: OrderType[] = [];
let nextOrderId: number = 1;

function addNewPizza(pizza: MenuType): MenuType[] {
  menu.push(pizza);
  return menu;
}

addNewPizza({ id: 5, name: "Caprese", price: 15 });

function placeOrder(pizzaName: string) {
  const orderItem = menu.find((item) => item.name === pizzaName);
  if (!orderItem) {
    console.log("No Pizza Found!");
    return null;
  }
  cashInRegister += orderItem.price;
  const order: OrderType = {
    id: nextOrderId++,
    pizza: orderItem,
    status: "ordered",
  };
  orderQueue.push(order);
  return order;
}

function completeOrder(orderId: number): OrderType | null {
  const findOrder = orderQueue.find((item) => item.id === orderId);
  if (!findOrder) {
    console.log("Order not found!");
    return null;
  }
  findOrder.status = "completed";
  return findOrder;
}

/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 *
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */

function getPizzaDetail(identifier: string | number) {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase()
    );
  } else {
    return menu.find((pizza) => pizza.id === identifier);
  }
}

placeOrder("Vesuvio");
placeOrder("Roman");
console.log(completeOrder(1));
console.log(orderQueue);

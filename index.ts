type MenuType = { name: string; price: number };

type OrderType = {
  id: number;
  pizza: MenuType;
  status: "ordered" | "completed";
};

const menu: MenuType[] = [
  { name: "Margherita", price: 10 },
  { name: "Napoli", price: 8 },
  { name: "Roman", price: 9 },
  { name: "Vesuvio", price: 12 },
];

let cashInRegister: number = 100;
const orderQueue: OrderType[] = [];
let nextOrderId: number = 1;

function addNewPizza(pizza: MenuType): MenuType[] {
  menu.push(pizza);
  return menu;
}

addNewPizza({ name: "Caprese", price: 15 });

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

placeOrder("Vesuvio");
placeOrder("Roman");
console.log(completeOrder(1));
console.log(orderQueue);

"use strict";
const menu = [
    { name: "Margherita", price: 10 },
    { name: "Napoli", price: 8 },
    { name: "Roman", price: 9 },
    { name: "Vesuvio", price: 12 },
];
let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;
function addNewPizza(pizza) {
    menu.push(pizza);
    return menu;
}
addNewPizza({ name: "Caprese", price: 15 });
function placeOrder(pizzaName) {
    const orderItem = menu.find((item) => item.name === pizzaName);
    if (!orderItem) {
        console.log("No Pizza Found!");
        return null;
    }
    cashInRegister += orderItem.price;
    const order = {
        id: nextOrderId++,
        pizza: orderItem,
        status: "ordered",
    };
    orderQueue.push(order);
    return order;
}
function completeOrder(orderId) {
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

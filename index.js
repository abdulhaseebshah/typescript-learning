var menu = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 1;
function addNewPizza(pizza) {
    menu.push(pizza);
    return menu;
}
addNewPizza({ id: 5, name: "Caprese", price: 15 });
function placeOrder(pizzaName) {
    var orderItem = menu.find(function (item) { return item.name === pizzaName; });
    if (!orderItem) {
        console.log("No Pizza Found!");
        return null;
    }
    cashInRegister += orderItem.price;
    var order = {
        id: nextOrderId++,
        pizza: orderItem,
        status: "ordered",
    };
    orderQueue.push(order);
    return order;
}
function completeOrder(orderId) {
    var findOrder = orderQueue.find(function (item) { return item.id === orderId; });
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
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
}
placeOrder("Vesuvio");
placeOrder("Roman");
console.log(completeOrder(1));
console.log(orderQueue);

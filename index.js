const menu = [
    {
        id: 1,
        name: "Margherita",
        price: 10,
    },
    {
        id: 2,
        name: "Napoli",
        price: 8,
    },
    {
        id: 3,
        name: "Roman",
        price: 9,
    },
    {
        id: 4,
        name: "Vesuvio",
        price: 12,
    },
];

let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(pizzaName) {
    menu.push(pizzaName);
    return menu;
}

addNewPizza({ id: 5, name: "Caprese", price: 15 });

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
        id: nextOrderId++,
        pizza: orderItem,
        status: "ordered",
    };

    orderQueue.push(order);

    return order;
}

placeOrder("Vesuvio");
/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

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

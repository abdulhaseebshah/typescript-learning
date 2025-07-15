var nextUserId = 1;
var users = [
    {
        id: nextUserId++,
        name: "Osama",
        address: "Rajasthan",
    },
];
// addNewUser Funtion
function addNewUser(userObj) {
    users.push(userObj);
    return users;
}
var user = addNewUser({ id: nextUserId++, name: "Aboul", address: "Malegaon" });
console.log(user);

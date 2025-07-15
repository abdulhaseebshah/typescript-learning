type Users = {
  id: number;
  name: string;
  address: string;
};

let nextUserId = 1;

const users: Users[] = [
  {
    id: nextUserId++,
    name: "Osama",
    address: "Rajasthan",
  },
];

// addNewUser Funtion

function addNewUser(userObj: Users): Users[] {
  users.push(userObj);
  return users;
}

let user = addNewUser({ id: nextUserId++, name: "Aboul", address: "Malegaon" });

console.log(user);

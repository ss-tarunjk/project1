const data = new Object()

data.name = "John Doe"


console.log(JSON.stringify(data))
console.log(typeof data)


let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

// for (let key in user) {
//     // keys
//     alert(key);  // name, age, isAdmin
//     // values for the keys
//     alert(user[key]); // John, 30, true
// }


let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    alert(+code); // 49, 41, 44, 1
}


let name1 = "John"

let name2 = name1;

name1 = "TEST"

console.log(name1, name2)


let user1 = {
    name: "John",
    age: 30,
    isAdmin: true
}

let user2 = user1;
let user3 = JSON.parse(JSON.stringify(user1));
let user4 = { ...user1 };

user1.name = "TEST"

console.log(user1, user2, user3, user4)
// let user = {
//     name: "John"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(JSON.stringify(descriptor, null, 2));

let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
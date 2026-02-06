let user = {}; // user has no address

alert(user?.address?.street === undefined); // undefined (no error)


const val = Symbol("value");

console.log(val)
console.log(val.toString())
console.log(val.description)
console.log(val.valueOf())

console.log(typeof val)
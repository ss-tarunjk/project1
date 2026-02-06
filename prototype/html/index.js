console.log("Hi")

const user = {
    name: "John",
    age: 30,
    isAdmin: true
}

const obj = {};
const name = "John";
const num = 10;


console.log(obj.__proto__)
console.log(name.__proto__)
console.log(num.__proto__)


Promise.resolve(user).then(data => {
    setTimeout(() => {
        alert(JSON.stringify(user))

    }, 1000)
})

console.log(user)
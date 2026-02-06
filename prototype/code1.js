const arr = [1, 2, 3, 4, 5];

console.log(arr.toString())

function User(name) {
    this.name = name
}

User.prototype.sayHi = function () {
    console.log("Hi " + this.name)
}

User.prototype.changeUserName = function (name) {
    this.name = name
}

const u1 = new User("Tarun")
const u2 = new User("ss")
u1.sayHi()
u2.sayHi()
u1.changeUserName("Tarun 2")
u1.sayHi()
u2.changeUserName("ss 2")
u2.sayHi()
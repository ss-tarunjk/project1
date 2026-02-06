// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(this.name);
//     }
// }


// Above code is equivalent to the following code:
function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    console.log(this.name);
};



const user = new User("John");
user.sayHi();
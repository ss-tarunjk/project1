class User {

    constructor(name, age = 18) {
        // invokes the setter
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("Age is not valid");
            return;
        }
        this._age = value;
    }

}

let user = new User("John", 20);
console.log(user.name); // John

console.log(user._age)
console.log(user.age)

user = new User("", -1); // Name is too short.
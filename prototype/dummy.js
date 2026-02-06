const obj = {

    name: "John",
    age: 30,
    isAdmin: true,
    getName: () => {
        return this.name;
    },



    getAge() {
        return this.name;
    }
}

obj.prototype = {

    getIsAdmin: () => {
        return this.isAdmin;
    }
}


console.log(Object.getPrototypeOf(obj))
function greet() {
    console.log(this.name);
}

const user = { name: "Tarun" };

greet.call(user);


const person1 = {
    name: "Tarun",
    intro(age) {
        console.log(`${this.name} is ${age} years old`);
    }
};

const person2 = {
    name: "Rahul"
};

person1.intro.call(person2, 25);

console.log(person1.intro.name)
class Animal {

    speak() {

        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    speak() {

        console.log("Dog barks");
    }
}

class Puppy extends Dog {
    speak() {
        super.super.speak(); // parent method
        console.log("Puppy barks");
    }
}

const p = new Puppy();
p.speak(); // Puppy barks
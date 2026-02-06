const animal = {
    eats: false
};

const dog = {
    barks: true
};

dog.__proto__ = animal;

console.log(dog.eats)
console.log(dog.barks)

// OR

const dog2 = Object.create(animal);
dog2.barks = !true;

console.log(dog2.eats)
console.log(dog2.barks)
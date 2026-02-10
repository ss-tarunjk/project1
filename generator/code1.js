function* generateSequence() {
    yield { name: "tarun", age: 20 };
    yield { name: "jaikishan", age: 21 };
    return { name: "jai", age: 22 };
}

const generator1 = generateSequence();
// const generator2 = generateSequence();


console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());



// console.log(generator2.next().value);
// console.log(generator2.next().value);


for (const num of generateSequence()) {
    console.log("here")
    console.log(num);
}
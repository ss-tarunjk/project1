// a number in JSON is just a number
console.log(JSON.stringify(1)) // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify('test')) // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]


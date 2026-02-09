// setTimeout(() => console.log('timeout'), 0);
// setImmediate(() => console.log('immediate'));

console.log('A');

setTimeout(() => console.log('B'), 0);

(async () => {
    console.log('C');
    await Promise.resolve();
    console.log('D');
    console.log("first")
})();

Promise.resolve().then(() => console.log('E'));

console.log('F');


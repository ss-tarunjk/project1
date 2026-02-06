const add = (a) => (b) => (c) => a + b + c;

console.log(add(1)(2)(3));



const generateId = (prefix) => (id) => `${prefix}-${id}`;

const irctcIdGenerator = generateId("IRCTC");
const rapidoIdGenerator = generateId("RAPIDO");
const olaIdGenerator = generateId("OLA");

console.log(irctcIdGenerator("1"));
console.log(rapidoIdGenerator("1"));
console.log(olaIdGenerator("1"));
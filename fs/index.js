import fs from "fs";

fs.writeFileSync("test.txt", "Hello World");

console.log("Write done")

const data = fs.readFileSync("test.txt", "utf-8");
console.log("sync data", data);

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log("async data", data);
    }
});

console.log("Done")
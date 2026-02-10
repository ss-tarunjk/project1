import fs from "fs";

// const data = fs.readFileSync("users.csv", "utf-8");
// console.log(data);




const stream = fs.createReadStream("users.csv")

stream.on("data", chunk => {
    // chunk is small (64KB-ish)
    console.log(chunk);
    console.log(chunk.length);
    console.log(chunk.toString());
})

stream.on("end", () => {
    console.log("done")
})

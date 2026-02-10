import fs from "fs";

// const data = fs.readFileSync("users.csv", "utf-8");
// console.log(data);




// const stream = fs.createReadStream("users.csv")

// stream.on("data", chunk => {
//     // chunk is small (64KB-ish)
//     console.log(chunk);
//     console.log(chunk.length);
//     console.log(chunk.toString());
// })

// stream.on("end", () => {
//     console.log("done")
// })


async function* csvRowGenerator(filePath) {
    const stream = fs.createReadStream(filePath, {
        encoding: "utf-8"
    });

    let buffer = "";

    for await (const chunk of stream) {
        buffer += chunk;

        console.log("buffer before split", buffer)

        const lines = buffer.split("\n");
        buffer = lines.pop();

        console.log("buffer after split", buffer)

        for (const line of lines) {
            yield line;
        }
    }

    if (buffer.length > 0) {
        yield buffer;
    }
}


for await (const row of csvRowGenerator("users.csv")) {
    console.log("ROW:", row.split(","));
}

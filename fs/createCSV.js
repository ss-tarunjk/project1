import fs from "fs";
import { faker } from "@faker-js/faker";

const TOTAL_RECORDS = 9_000_000;
const OUTPUT_FILE = "users.csv";

const stream = fs.createWriteStream(OUTPUT_FILE);

// CSV header
stream.write("name,age,rollnum,email\n");

let i = 0;

function write() {
    let ok = true;

    while (i < TOTAL_RECORDS && ok) {
        const name = faker.person.fullName();
        const age = faker.number.int({ min: 18, max: 60 });
        const rollnum = (i * 1000) + 1;
        const email = faker.internet.email();

        const row = `"${name}",${age},${rollnum},${email}\n`;
        ok = stream.write(row);
        i++;
    }

    // Backpressure handling
    if (i < TOTAL_RECORDS) {
        stream.once("drain", write);
    } else {
        stream.end();
        console.log("✅ CSV generation completed!");
    }
}

write();

// loadTest.js
const http = require("http");

function hitAPI(label) {
    const start = Date.now();

    http.get("http://localhost:8080/test/test1", (res) => {
        res.on("data", () => { });
        res.on("end", () => {
            console.log(
                `${label} finished in ${Date.now() - start} ms`
            );
        });
    }).on("error", (err) => {
        console.error(`${label} error`, err.message);
    });
}

console.log("Sending first request...");
hitAPI("Request 1");

// Fire second request shortly after first
setTimeout(() => {
    console.log("Sending second request...");
    hitAPI("Request 2");
}, 50);

const cluster = require("cluster");
const os = require("os");

const numWorkers = 3; // or os.cpus().length

if (cluster.isPrimary) {
    console.log(`Master process ${process.pid} running`);

    for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

} else {
    // Each worker runs this file
    require("./worker1.js");
}

async function run() {
    for (let i = 0; i < 3; i++) {
        console.log("first")
        await Promise.resolve().then(() => console.log("p"));
        console.log(i);
    }
}
run();

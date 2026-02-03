console.log("Console log 1")

setTimeout(() => {
    console.log("Settimeout log")
    Promise.resolve().then(() => {
        console.log("Promise log 1")
    })
}, 0)

Promise.resolve().then(() => {
    console.log("Promise log 2")
})

console.log("Console log 2")
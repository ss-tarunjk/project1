async function test() {
    console.log("start")

    setTimeout(() => console.log("timeout"), 0)

    await Promise.resolve()

    console.log("end")
}

test()
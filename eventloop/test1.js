async function normalFn() {
    return new Promise((resolve, reject) => {
        console.log("normal fn runs");
        resolve(42);
    });

}

async function test() {
    console.log("before await");
    const result = await normalFn();
    console.log("after await", result);
}

test();
function test1() {

    process.nextTick(() => console.log(0));

    Promise.resolve()
        .then(() => console.log(1));

    setTimeout(() => console.log(2), 10);

    queueMicrotask(() => {
        console.log(3);
        queueMicrotask(() => console.log(4));
    });

    process.nextTick(() => console.log(110));

    console.log(5);
}

async function test2() {

    const promise = await Promise.resolve()
        .then(() => 1);

    console.log(promise)

    setTimeout(() => console.log(2), 0);

    queueMicrotask(() => {
        console.log(3);
        queueMicrotask(() => console.log(4));
    });

    console.log(5);
}

test1();
// test2();
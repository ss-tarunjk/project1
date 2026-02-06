function getNumbers() {
    const arr = [];
    for (let i = 1; i <= 1_000_000; i++) {
        arr.push(i);
    }
    return arr;
}

for (const n of getNumbers()) {
    console.log(n);
}
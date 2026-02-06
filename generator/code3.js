function* getNumbers() {
    for (let i = 1; i <= 1_000_000; i++) {
        yield i;
    }
}

for (const n of getNumbers()) {
    console.log(n);
}

function func() {

    try {
        return 1;

    } catch (err) {
        /* ... */
    } finally {
        alert('finally');
    }
}

console.log(func())
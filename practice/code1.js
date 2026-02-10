function outer(initialValue = 0) {
    let count = initialValue;

    function inc() {
        count++;
    }

    function dec() {
        count--;
    }

    function getValue() {
        return count
    }



    return { inc, dec, getValue };
}

const counter1 = outer(10);
const counter2 = outer(100);


counter1.inc();
counter1.inc();
counter1.dec();

console.log(counter1.getValue())


counter2.dec();
counter2.dec();
counter2.dec();

console.log(counter2.getValue())

let b;
let c = 5;

console.log(b, c)

    (function () {
        console.log(b, c)
    })()

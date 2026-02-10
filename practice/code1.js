function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter1 = outer();
const counter2 = outer();


counter1();
counter1();
counter1();


counter2();
counter2();
counter2(); 
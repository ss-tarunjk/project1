function sayHi() {
    console.log("hi")
}

window.sayHi()


// document.body.style.backgroundColor = "red"

for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(i)
    console.log(document.body.childNodes[i])
}


iframe.onload = function () {
    // just do anything
    iframe.contentDocument.body.prepend("Hello, worldss!");
};

let blob = new Blob(["Hello, world!", "tests"], { type: 'text/plain' });

console.log(blob)

link.href = URL.createObjectURL(blob);
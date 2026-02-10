console.log("Hello World")

const btn = document.getElementById("btn")
const mydiv = document.getElementById("mydiv")

btn.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("btn clicked")
})
mydiv.addEventListener("click", () => console.log("mydiv clicked"))
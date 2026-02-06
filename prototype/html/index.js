console.log("Hi")

const user = {
    name: "John",
    age: 30,
    isAdmin: true
}


Promise.resolve(user).then(data => {
    setTimeout(() => {
        alert(JSON.stringify(user))

    }, 1000)
})

console.log(user)
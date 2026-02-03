import userFunctions from "./userFunctions.js";


userFunctions.addUser({ id: 1, name: "John Doe", email: "john.doe@example.com" })
userFunctions.addUser({ id: 2, name: "Jane Doe", email: "jane.doe@example.com" })
userFunctions.addUser({ id: 3, name: "Jim Doe", email: "jim.doe@example.com" })
userFunctions.addUser({ id: 3, name: "Jim Does", email: "jim.does@example.com" })

console.log(userFunctions.getUsers())
console.log(userFunctions.getUser(1))
console.log(userFunctions.deleteUser(10))
console.log(userFunctions.getUsers())

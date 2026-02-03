const users = []

const addUser = (user) => {
    try {
        users.push(user)
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}

const Function = { addUser }

export default Function;
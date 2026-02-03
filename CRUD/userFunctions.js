let users = []

const addUser = (newUser) => {
    try {
        const existingUser = users.find(user => user.id === newUser.id)
        if (existingUser) {
            return false
        }


        users.push(newUser)
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}

const deleteUser = (id) => {
    try {
        const user = users.find(user => user.id === id)
        if (!user) {
            return false
        }

        users = users.filter(user => user.id !== id)
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}

const getUser = (id) => {
    try {
        const user = users.find(user => user.id === id)
        return user
    } catch (err) {
        console.error(err)
        return null
    }
}

const getUsers = () => {
    try {
        return users
    } catch (err) {
        console.error(err)
        return []
    }
}

const updateUser = (id, data) => {
    try {
        users = users.filter(user => user.id === id ? { ...user, ...data } : user)
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}

const userFunctions = { addUser, deleteUser, getUser, getUsers, updateUser }

export default userFunctions;
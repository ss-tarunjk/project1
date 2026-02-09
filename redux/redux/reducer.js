export default function reducer(state = [], action) {
    switch (action.type) {
        case "PUSH":
            return [...state, action.payload]

        case "REMOVE":
            if (action.payload && typeof action.payload) {
                return state.filter((val) => val !== action.payload)
            }

            state.pop()
            return state

        case "APPEND":
            return [action.payload, ...state,]

        default:
            return state
    }
}


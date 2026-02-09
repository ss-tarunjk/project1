import * as ACTIONS from "./actionType";

export function push(payload) {
    return {
        type: ACTIONS.PUSH,
        payload
    }
}

export function remove(payload) {
    return {
        type: ACTIONS.REMOVE,
        payload
    }
}

export function append(payload) {
    return {
        type: ACTIONS.APPEND,
        payload
    }
}
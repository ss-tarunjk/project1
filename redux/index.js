import * as actions from "./redux/action";
import store from "./redux/store";

store.dispatch(actions.push(1))
store.dispatch(actions.push(2))
store.dispatch(actions.push(3))

store.dispatch(actions.append(300))


store.dispatch(actions.remove(2))
store.dispatch(actions.remove())

console.log(store.getState())
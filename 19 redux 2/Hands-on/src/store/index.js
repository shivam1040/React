import {createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counter"
import authSlice from "./auth"

//commenting this to make use of redux toolkit 
// const counterReducer = (state= initialState, action) => {
//     if(action.type === "INCREMENT")
//     //all this new state overwrites the existing, it doesn't merge it with the exisiting stater so ensure to pass value for all the entitites of object
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         }
//     else if(action.type === "DECREMENT")
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     else if(action.type === "TOGGLE")
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     return state
// }
// const store = createStore(counterReducer)
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer    
    }
})
//this action prop on slice gives us the pointer to reducer functions defined above in slice, redux-toolkit automatically generates unique identifiers for the methods so we don't need to do mapping by if-else conditions
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store
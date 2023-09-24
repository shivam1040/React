import {createSlice} from "@reduxjs/toolkit"

const initialState = {counter: 0, showCounter: true}
//used to create slice of different redux states
const counterSlice = createSlice({
    name: "counter",
    //defifing initial state
    initialState: initialState,
    //defining all the reducers logic/functions here, similar to what's there in countReducer fucntion
    reducers: {
        increment(state){
            //though this is against the no mutability rule of redux but bts redux changes the state immutable like how we do below in counterReducer function
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        inrease(state, action){
            state.counter=state.counter+action.payload
        },
        toggle(state){
            state.showCounter=!state.showCounter
        }
    }
})

export default counterSlice
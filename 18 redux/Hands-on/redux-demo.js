const redux = require("redux")

//reducer function for redux context
//setting a default value for state when it's un for first time
const counterReducer = (state = {
    counter: 0
}, action) => {
    if(action.type === "INCREMENT")
    return {
        counter: state.counter+1
    }
    return state
}
//passing the reducer funtion to redux context which ensures working on data whenever new data is recieved
const store = redux.createStore(counterReducer)

//creating a subscriber function which runs everytime a new data is recvived
const counterSubscriber = () => {
    const state = store.getState()
    console.log(state)
}

//passing the subscriber functionn to redux context
store.subscribe(counterSubscriber)

//this function of redux context triggers reducer function and runs subscriber function
store.dispatch({
    type: "INCREMENT"
})

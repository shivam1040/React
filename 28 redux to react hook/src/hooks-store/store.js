import { useEffect } from 'react'
import {useState, usee} from 'react'

let globalState = {}
let listeners = []
let actions = {}

export const useStore = (shouldListen = true) => {
    const setState = useState(globalState)[1]
    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload)
        //updating state after executing actions
        globalState = {...globalState, ...newState}

        for(const listener of listeners){
            //by doing so we update the compoenents using this state from new state
            listener(globalState)
        }
    }

    useEffect(() => {
        if(shouldListen)
        //adding the state used by the component which called it so on any update in the sate used by it refreshes the compinenentb
            listeners.push(setState)
        //this helps to remove the listerner whenever componenent unmounts or gets removed
        //so this is applicable to every componenent which uses this store
        return () => {
            listeners = listeners.filter(li => li != setState)
        }
    }, [setState, shouldListen])

    return [globalState, dispatch]
}

export const initStore = (userActions, initialState) => {
    if(initialState){
        globalState = {...globalState, ...initialState}
    }
    actions = {...actions, ...userActions}
} 
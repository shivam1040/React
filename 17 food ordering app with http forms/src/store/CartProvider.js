import CartContext from './cart-context'
import {useReducer} from 'react'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
// this is created outside beacse it wont need any data from cart provider and also this reducer function should not get updated every time the below componenent is reevaluated
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        // concat gives a new copy array else we would be changing the current state
        const existingCartItemIndex = state.items.findIndex(item => item.id===action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems
        
        if(existingCartItem){
           const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount+action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex]=updatedItem
        }
        else{
            updatedItems = state.items.concat(action.item)
        }

        const updatedTotalAmount = state.totalAmount+action.item.price*action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount-existingCartItem.price
        let updatedItems
        
        if(existingCartItem.amount===1){
            updatedItems=state.items.filter(item => item.id!==action.id)
        }
        else{
            const updatedItem = {...existingCartItem, amount:existingCartItem.amount-1}
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === "CLEAR")
        return defaultCartState

    return defaultCartState
}

//this will manage the cart context data and provide that data to all componenet that want access to it
const CartProvider = props => {
    //calling a reducer fucntion with default value
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }
    const clearCartHandler = () => {
        dispatchCartAction({
            type: "CLEAR"
        })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    // setting cartContext object as value for this Provider, now this component can be used anywhere which needs access to the cart
    return <CartContext.Provider value={cartContext}>
        {/* wrapping any componenet that should get accessed when using this context, we can also provide logic to manage the content/data */}
                {props.children}
           </CartContext.Provider>
}

export default CartProvider
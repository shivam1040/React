import {createSlice} from "@reduxjs/toolkit"


const cartSlice=createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQty: 0,
        changed: false
    },
    reducers: {
        addItem(state, action){
            const newItem=action.payload
            const existingItem=state.items.find(item=>item.id===newItem.id)
            state.totalQty++;
            state.changed=true

            if(!existingItem)
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                })
            else{
                existingItem.qty++;
                existingItem.totalPrice=existingItem.totalPrice+newItem.price
            }
        },
        removeItem(state, action){
            const id=action.payload
            const existingItem=state.items.find(item=>item.id===id)
            state.totalQty--
            state.changed=true

            if(existingItem.qty===1)
                state.items=state.items.filter(item=>item.id!==id)
            else{
                existingItem.qty--
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price
            }
        },
        replace(state, action){
            state.totalQty=action.payload.totalQty
            state.items=action.payload.items
        }
    }
})




export const cartActions=cartSlice.actions
export default cartSlice
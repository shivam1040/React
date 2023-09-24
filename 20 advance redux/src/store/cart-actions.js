import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slics";

//this is basically a thunk implementation also known as action-creator function
//so basically when we call this by dispactch in other componenets then the first return function is executed along with the remaining lines of code below
export const sendCartData=cart=>{
    return async dispatch=>{
        dispatch(uiActions.showNotification({
            status: "pending",
            title: "Send cart",
            message: "Sending"
          }))

          const sendRequest=async()=>{
            const response=await fetch("https://sapient-pen-311710-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart)
              })
          
              if(!response.ok)
                throw Error("Send failed")
          }

          try{
          await sendRequest()
          dispatch(uiActions.showNotification({
            status: "success",
            title: "Send cart",
            message: "sent"
          }))
          }
          catch(e){
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Send cart",
                message: "fail"
              }))
          }
    }
}
export const fetchCartData=()=>{
    return async dispatch=>{
        const fetchData=async()=>{const response=await fetch("https://sapient-pen-311710-default-rtdb.firebaseio.com/cart.json")

        if(!response.ok)
            throw new Error("Error fetching")
        const data=await response.json()
        return data
    }
    try{
     const data=await fetchData()
     dispatch(cartActions.replace({
        //some validTION here to ensure that we don't send undefined
        items:data.items||[],
        totalQty:data.totalQty
     }))
    }
    catch(e){
        dispatch(uiActions.showNotification({
            status: "error",
            title: "Send cart",
            message: "fail"
          }))
    }
    }
}

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { uiActions } from './store/ui-slics';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial=true
function App() {
  const showCart=useSelector(state=>state.ui.cartIsVisible)
  const cart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const notification=useSelector(state=>state.ui.notification)

  useEffect(()=>{
    //commeting this to use Thunk as implemented in cart-actions.js

    // const sendCart=async() => { 
      // dispatch(uiActions.showNotification({
      //   status: "pending",
      //   title: "Send cart",
      //   message: "Sending"
      // }))
    //   const response=await fetch("https://sapient-pen-311710-default-rtdb.firebaseio.com/cart.json", {
    //   method: "PUT",
    //   body: JSON.stringify(cart)
    // })

    // if(!response.ok)
    //   throw Error("Send failed")
    
  //   dispatch(uiActions.showNotification({
  //     status: "success",
  //     title: "Send cart",
  //     message: "sent"
  //   }))
  // }
  // if(isInitial){
  //   isInitial=false
  //   return
  // }
  // sendCart().catch(()=>{
  //   dispatch(uiActions.showNotification({
  //     status: "error",
  //     title: "Send cart",
  //     message: "fail"
  //   }))
  // })

  if(isInitial){
    isInitial=false
    return
  }
  //this is to avoid sedning cart whenever we load page for the first time and data gets fetched from backedn
  if(cart.changed)
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  useEffect(()=>{
    dispatch(fetchCartData())
  }, [dispatch])

  return (
    <Fragment>
      {notification&& <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;

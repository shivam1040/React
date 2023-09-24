import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import React, {useContext, useState} from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
    const [isCheckout, setIsCheckOut] = useState(false)
    const [isSumbit, setIsSumbit] = useState(false)
    const [submitDone, setSubmitDone] = useState(false)
    const cartCtx = useContext(CartContext)
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }
    // this bind method ensures parameter is passed statically before the function executin
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>)}</ul>
    const orderHandler = () => {
        setIsCheckOut(true)
    }
    const submitOrderHandler = async userData => {
        setIsSumbit(true)
        await fetch("https://sapient-pen-311710-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSumbit(false)
        setSubmitDone(true)
        //clearing the existing data post submission
        cartCtx.clearCart()
    }
    const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
</div>
const cartModal = <React.Fragment>{/* rendering an element stored in var */}
{cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler}></Checkout>}
    {!isCheckout && modalActions}
    </React.Fragment>
    const submitDoneModal = <React.Fragment>
        <p>Sent order</p>
        <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
</div>
    </React.Fragment>
    return <Modal onClose={props.onClose}>
    {!isSumbit && !submitDone && cartModal}
    {isSumbit && <p>Sending order</p>}
    {submitDone && submitDoneModal}
           </Modal>
}

export default Cart

import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import {useContext, useEffect, useState} from 'react'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
    //this componenet reevaluated  when cart context changes, the change happens in CartProvider
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    //in reduce what is happening is that we are getting the total qty of items in cart, so basically currNumber is the counter here which is set to zero initially now for every item present in items array it will get it qty add it to currNumber and for next item currNumber will be last value of currNumber
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber+item.amount
    }, 0)
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
    const {items} = cartCtx

    useEffect(() => {
        if(items.length === 0)
            return
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)
        // this always runs as a clenup function for useEffect, so basically in this case the timeout will get cleared if new useEffect iterations comes in play
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
}

export default HeaderCartButton
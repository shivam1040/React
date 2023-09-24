import { uiActions } from '../../store/ui-slics';
import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux"

const CartButton = (props) => {
  const dispatch=useDispatch()
  const qty=useSelector(state=>state.cart.totalQty)
  const toggleHandler=()=>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{qty}</span>
    </button>
  );
};

export default CartButton;

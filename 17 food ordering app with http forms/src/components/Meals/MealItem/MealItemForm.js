import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react';

const MealItemForm = props => {
    // by making use of ref here we can have a refrence to the input tag of Input componenent and acess its value
    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)
    const submitHandler = event => {
        event.preventDefault()
        //.current is neeeded for refs created using useRefs, rememenfer this value is always string no matter what type entered
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return
        }
        //this method comes from MealItem
        props.onAddToCart(enteredAmountNumber)
    }

    return <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{id: 'amount_' + props.id, type: 'number', min:'1', max: '5', step:'1', defaultValue:'1'}}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Invalid amount</p>}
           </form>
}

export default MealItemForm
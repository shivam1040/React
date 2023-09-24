import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, seTitle] = useState('')
    const [enteredAmount, setAmount] = useState()
    const [enteredDate, setDate] = useState('')

    const titleChange = (event) => {
        seTitle(event.target.value)
    }
    const amountChange = (event) => {
        setAmount(event.target.value)
    }
    const dateChange = (event) => {
        setDate(event.target.value)       
    }

    /* //multi state approach
    const [userInput, setInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    //way to use to multi state in one, just ensure to update the other values too while making changes for one state in mutli else they will become null
    const multiStateInOne = (event) => {
        setInput({
            ...userInput, //getting all the old values for not overriding them to null
            title: event.target.value //setting the value for property needed
        })
    }

    // whenever using multi state use this to get the last state as this guarnatees it, using above we may get statle state due to scheduling state update nature of React stateg
    const recomWayForMultiStateChange = (event) => {
        setInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }
    */

    const submit = (event) => {
        event.preventDefault()
        //getting the entered data on submit passed from NewExpense component
        const expenseData = {
            title: enteredTitle,
            //forcing conversion of string to number
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // passing it to the parameter of fucntion recieved in props from NewExpense and calling it
        props.onSaveExpenseData(expenseData)
        //clearing inputs to default
        // these values are captured value using HTML attribute
        seTitle('')
        setDate('')
        setAmount('')
    }

    return <form onSubmit={submit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChange}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChange}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' max='2023-04-04' onChange={dateChange}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm
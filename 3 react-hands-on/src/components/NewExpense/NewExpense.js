import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import React, { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return  <div className='new-expense'>
        {/* returning second statement when first is true and conditionally render the form when someone cxlicks it */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
}

export default NewExpense
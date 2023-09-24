import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
   const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  //filter expense array by year
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expense = <p>No expenses</p>
  if (filteredExpenses.length > 0) {
    expense = filteredExpenses.map(e => <ExpenseItem key={e.id} title={e.title}
      amount={e.amount}
      date={e.date}></ExpenseItem>)
  }


  return (
    <div>
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
       {/* way to access an array and map it to elements */}
       {/* conditional rendering */}
       
       {/* {filteredExpenses.length === 0 ? <p>No expenses</p> : filteredExpenses.map(e => <ExpenseItem key={e.id} title={e.title}
        amount={e.amount}
        date={e.date}></ExpenseItem>)} */}
        {/* another way */}
        {/* {expense} */}
        <ExpensesChart filteredExpense={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>

    </Card>
    </div>
  );
}

export default Expenses;
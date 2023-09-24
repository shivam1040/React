import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY=[
  {
    id: '1',
    title: 'T1',
    amount: 1.0,
    date: new Date(2020, 7, 14)
  },
  {
    id: '2',
    title: 'T2',
    amount: 2.0,
    date: new Date(2021, 7, 14)
  },
  {
    id: '3',
    title: 'T3',
    amount: 3.0,
    date: new Date(2022, 7, 14)
  }
]

function App() {
  /* //imperative approach, giving clear instruction what to do
  const para=document.createElement('p');
  para.textContent="let's do"
  document.getElementsByTagName("root").append(para)
*/

//defining a dummy state expense for first run
const [expense, setExpense]=useState(DUMMY)

const addExpenseHandler = (expenseInput) => {
  //way to append recieved input to last state of expense
  setExpense(prevExpense => { return [expenseInput, ...prevExpense]})
  console.log(expense)
}

//if we don't use jsx then we gotta create elements like this which is unreadable, also when we use JSX this is how transforamation happens under the hood
//return React.createElement('div', {}, "Start")

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {/* passing data by making use of props feature, notice is ExpenseItem.js how this field is getting used */}
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem> */}
      <Expenses items={expense}></Expenses>
    </div>
    // use Caps for jsx and small for html
  );
}

export default App;

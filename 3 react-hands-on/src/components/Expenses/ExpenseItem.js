//this useState hook from react is needed to make the pages render more than once at will beacause by default the page gets rendered only once
//import React, { useState } from 'react';
import './ExpenseItem.css' //since react doesnt load all the files so wee need to import the files to use in here
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    //creating a dynamic state on title props, using setitle we can update this value
    //also these states are at per component level/use
    // these states keep track of last value so only refresh puts this value to initial value else every render of this component the value is fed by state which keeps track of last value
    
    // const [title, setTitle] = useState(props.title)

    /*
    const click = () => {
        setTitle('New Title')
        //this will still show the old value 'cause state update is a scheduled task
        console.log('Clicked')
    }
    */

    //by default if a component is used in JSX the attributes like classname etc. are not passed or applied to it, to pass that we need to make use of className value in props which is paased to Card component whenever we use it, refer to Card.js to see how to use it
    return <Card className="expense-item">
        {/* way to use vars by using braces*/}
        {/* this props contains key value pairs of all the data passed to this function/component, props.date accesses data data passed from App.js by making use of props feature of react*/}
    {/* this date gets encapsulated into props which can be accessed in ExpenseDate component by props.date, the names can be according to our needs */}
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* a way to add event listener to elements, notice how function is just pointed and not being called her by adding parentheses */}
        {/* <button onClick={click}>Ch</button> */}
    </Card>
//in react class of HTML is className

//using a component here in JSX directly will not work but it works for built in html tags
}

//in JSX two root elements are not allowed to be returned

export default ExpenseItem; //if don't export then this function can't be used outside this scope
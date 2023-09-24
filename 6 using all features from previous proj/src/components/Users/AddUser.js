import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './AddUser.module.css';
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const [enteredUsername, setUsername] = useState('')
    const [enteredAge, setAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = event => {
        event.preventDefault();
        //some basic validation
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid',
                message: 'Enter valid name/age'
            })
            return
        }
        //casting to number
        if(+enteredAge < 1){
            setError({
                title: 'Invalid',
                message: 'Enter valid age'
            })
            return
        }
    
        props.onAddUser(enteredUsername, enteredAge)
        setUsername('')
        setAge('')
    }

    const usernameChangeHandler = event =>{
        //accessing the tag and then its value
        setUsername(event.target.value)
    }

    const ageChangeHandler = event=> {
        setAge(event.target.value)
    }

    const errorHandler = () => {
        setError(undefined)
    }

    return (
        //applying the css class here needs to be also carried to the source componenet and be clubbed with any css class/style being used there since this Card is a custom componennt and defining an attribute/prop here isnot understood by react. but for all other pre available tags like form input etc. reacts takes care of applying the attributes and properties since they have attributes available like className etc.
        <div>
        {/* conditionally rendering ErrorModal if erro iundefined */}
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
        {/* adding attributes such as id and for for user accessibility. Notice htmlFor is tag for 'for' since it is reserved by react */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor="age">Age(years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
    )
}

export default AddUser
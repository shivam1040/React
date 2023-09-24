import React, { useState, Fragment, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

  //creating pointer to username input below, this can be manipulated anytime and we dont need to update it everytime like how we do with state
  const nameRef = useRef();
  const ageRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //accesiing value attribute of refrenced dom element
    console.log(nameRef.current.value)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername(''); //we can also use ref here to do the same but not recommended
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    //making use of this component to not return div for requirement of only one jsx return element, see the Wrapper code to see that it doesnt have any div or something but rather it returns the children elements which are by deafault passed as props. so in turn the only elelemnts inside this wrapper component get rendered not any extra div or something
    <Wrapper>
       {/* passing empty tags also works for redudnsant dive replacement */}
       
      <></>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </Wrapper>

// this fragment also works as replacement for redudndnant div
//       <Fragment>
//         <div></div>
//       </Fragment>
  );
};

export default AddUser;

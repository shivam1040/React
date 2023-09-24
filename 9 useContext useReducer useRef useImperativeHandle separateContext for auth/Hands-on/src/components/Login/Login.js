import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context'
import Input from '../UI/Input/Input'

//keeping this outside since it wont interact or get changed because of anything inside Login
const emailReducer = (state, action) => {
  // wheneve the dispacther is caller this reducer kicks in and then checks if recieed action object is of type userInput as defined in the object below when calling dispactcher
  if (action.type === "userInput")
    return {value: action.val, isValid: action.val.includes("@")}
  if(action.type === "blur")
    return {value: state.value, isValid: state.value.includes("@")}
  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  if (action.type === "userInput")
    return {value: action.val, isValid: action.val.trim().length > 6}
  if(action.type === "blur")
  return {value: state.value, isValid: state.value.trim().length > 6}
  return {value: '', isValid: false}  
}

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //making use of useReducer for statemanagement
  const[emailState, dispatchEmail] = useReducer(emailReducer, {
    //setting initial state
    value: '',
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  const authCtx = useContext(AuthContext)

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  //this is the preferred way when we want useEfffect to run on specific value change
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  //using reducer with effect here ensures this block only runs when there is a state change for isValid
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    //calling this would trigger reducer funtion i.e emailreducer above
    dispatchEmail({
      type: 'userInput',
      val: event.target.value
    })

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

    dispatchPassword({type: 'userInput', val: event.target.value})

    // setFormIsValid(
    //   // enteredEmail.includes('@') && event.target.value.trim().length > 6
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
     //setEmailIsValid(enteredEmail.includes('@'));
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({type: "blur"})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: "blur"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // props.onLogin(emailState.value, passwordState.value);
    //making use of auth context here, passing the values
    if(formIsValid)
      authCtx.onLogin(emailState.value, passwordState.value);
    else if(!emailIsValid){
      emailInputRef.current.focus()
    }
    else
      passwordInputRef.current.focus()

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
      <Input ref={emailInputRef} id="email" label="E-mail" isValid={emailIsValid} value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}></Input>
        {/* <div
          className={`${classes.control} ${
            // passwordIsValid === false ? classes.invalid : ''
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        {/* making use of single component to spawn repititive component, this also shows when we should use props, in this the props properities are configurable as compared to context where same input is given to all accessing componenents */}
        <Input ref={passwordInputRef} id="password" label="Password" isValid={passwordIsValid} value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}></Input>
        <div className={classes.actions}>
          {/* <Button type="submit" className={classes.btn} disabled={!formIsValid}> */}
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

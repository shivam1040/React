import { useRef, useState, useEffect } from "react"
import useInput from "../hooks/use-input"

const SimpleInput = (props) => {
  //creates refrence to an ellement below in html
  //over here ref can be used to validate the date at the end
  const nameInputRef = useRef()
  //we can use state to do validation during input entering
  // const [enteredName, setEnteredName] = useState("")
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false)
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  // const enteredNameIsValid = enteredName.trim() !== ""
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  // const enteredEmailIsValid = enteredEmail.includes("@")
  // const enteredEmailIsINvalid = !enteredEmailIsValid && enteredEmailTouched

  //making use of custom hook to to do name validation and commenting all the validation logic above
  const {value: enteredName, isValid: enteredNameIsValid, hasError: nameInputHasError, valueInputChangeHandler: nameInputChangeHandler, valueInputBlurHandler: nameInputBlurHandler, reset} = useInput(value => value.trim()!=="")
  const {value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputHasError, valueInputChangeHandler: emailInputChangeHandler, valueInputBlurHandler: emailInputBlurHandler, reset: emailReset} = useInput(value => value.includes("@"))

  // useEffect(() => {
  //   if(enteredNameIsValid)
  //     setFormIsValid(true)
  //   elsex
  //     setFormIsValid(false)
  // }, [enteredNameIsValid])

  let formIsValid = false

  //way to avoid useEffect
  if(enteredNameIsValid && enteredEmailIsValid)
    formIsValid=true

  // const nameInputBlurHandler = event => {
  //   setEnteredNameTouched(true)
  // }
  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value)
  //   // //this takes care of removing error as soon as input is valid
  //   // if(event.target.value.trim() !== ""){
  //   //   setEnteredNameIsValid(true)
  //   //   return
  //   // }
  // }
  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };
  const formSubmissionHandler = event => {
    event.preventDefault()
    // setEnteredNameTouched(true)
    if(!enteredNameIsValid)
      return
    //resetting when submission is valid
    reset()
    emailReset()
    console.log(nameInputRef.current.value)
    console.log(enteredName)
  }

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control"
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* blur is used when losing focus, when user stops entering input */}
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
        {/* {nameInputIsInvalid && <p className="error-text">Name empty</p>} */}
        {nameInputHasError && <p className="error-text">Name empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

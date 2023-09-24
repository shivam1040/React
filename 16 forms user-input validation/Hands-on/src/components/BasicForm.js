import useInput from "../hooks/use-input"

const isNotEmpty = value => value.trim() !== ""

const BasicForm = (props) => {
  const {value: firstName, isValid: firstNameIsValid, hasError: firstNameHasError, valueInputChangeHandler: firstNameChangeHandler, valueInputBlurHandler: firstNameBlurHandler, reset: firstNameReset} = useInput(isNotEmpty)
  const {value: lastName, isValid: lastNameIsValid, hasError: lastNameHasError, valueInputChangeHandler: lastNameChangeHandler, valueInputBlurHandler: lastNameBlurHandler, reset: lastNameReset} = useInput(isNotEmpty)
  const {value: email, isValid: emailIsValid, hasError: emailHasError, valueInputChangeHandler: emailChangeHandler, valueInputBlurHandler: emailBlurHandler, reset: emailNameReset} = useInput(value => value.includes("@"))

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control'
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

  let formIsValid = false

  if(firstNameIsValid && lastNameIsValid && emailIsValid)
    formIsValid = true
  
  const submitHandler = event => {
    event.preventDefault()

    if(!formIsValid)
      return
    console.log("Submitted")
    firstNameReset()
    lastNameReset()
    emailNameReset()
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
          {firstNameHasError && <p>Enter name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameHasError && <p>Enter last</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailHasError && <p>Enter email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

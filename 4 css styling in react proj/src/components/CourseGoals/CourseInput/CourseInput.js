import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const FormControl = styled.div`
  margin: 0.5rem 0;
/* one can use ampersand to not type the identifier name repeatedly */

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  /*making use of props passed when this component is invoked, refer to the component below*/
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

@media (min-width: 768px) {
  width: auto
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {
  border-color: red;
  background: #ffd7d7;
}

&.invalid label{
  color: red;
}
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0)
      setValid(true)
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setValid(false)
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* dynamically passing styling class based on condition */}
      {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
      {/* making use of css styling sheet feature of react */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      {/* making use of styled-components to create a div which has scoped style */}
      {/* <FormControl className={!isValid ? 'invalid' : ''} invalid={!isValid}> */}
        {/* conditional atyling  since this is inline styling so it takes the first precedence in css and all other styling will be not applied*/}
        {/* <label style={{color : !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor : !isValid ? 'red' : 'black', backgroundColor : !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} /> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

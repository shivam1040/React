
// useImperativeHandle hook allows us to use the properties/functions of this component imperatively i.e not by statandard react state management or props method but rather calling something inside the component or tweaking it programmatically
import React, {useRef, useEffect, useImperativeHandle} from 'react'
import classes from './Input.module.css'

//here React.forwardRef is used to expose componenents internal fucntionality to parent component, so in this case the ref in params is binded to the refs passed to this component in Login component
const Input = React.forwardRef((props, ref) => {
    //this hook creates a refrence to the component so we can use it anywhere
    const inputRef = useRef()

    // useEffect(() => {
    //     //like in this case componenent is being focuesd using the ref in useEffect i.e at the end of rendering
    //     inputRef.current.focus()
    // }, [])

    const activate = () => {
        inputRef.current.focus()
    }

    //this hook is used to tie ref to properties and method of this componenet so that they can be called in the parent component, notice how in Login's submit handler focus is being called to trigger activate function
    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    })
   return <div
    className={`${classes.control} ${
      // emailIsValid === false ? classes.invalid : ''
      //making use of useReducer
      props.isValid === false ? classes.invalid : ''
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
    ref={inputRef}
      type={props.type}
      id={props.id}
      // value={enteredEmail}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
})

export default Input


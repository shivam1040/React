import { useReducer, useState } from "react"

const initialState = {
  value: "",
  isTouched: false
}
const inputStateReducer = (prev, action) => {
  if(action.type === "INPUT")
    return {value: action.value, isTouched: prev.isTouched}
  else if(action.type === "BLUR")
    return {isTouched: true, value: prev.value}
  return {
    value: "",
    siTouched: false
  }
}
const useInput = (validateFunction) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialState)
    //commenting useState related code to make use of useReducer
    // const [enteredValue, setEnteredValue] = useState("")
    // const [enteredValueTouched, setEnteredValueTouched] = useState(false)

    const enteredValueIsValid = validateFunction(inputState.value)
    const hasError = !enteredValueIsValid && inputState.isTouched

    const valueInputChangeHandler = event => {
      dispatch({
        type: "INPUT",
        value: event.target.value
      })
        // setEnteredValue(event.target.value)
      }
    const valueInputBlurHandler = event => {
      dispatch({
        type: "BLUR"
      })
        // setEnteredValueTouched(true)
      }
    const reset = () => {
        dispatch({type: "RESET"})
        // setEnteredValue("")
        // setEnteredValueTouched(false)
    }

    return {
        value: inputState.value,
        isValid: enteredValueIsValid,
        hasError: hasError,
        valueInputChangeHandler: valueInputChangeHandler,
        valueInputBlurHandler: valueInputBlurHandler,
        reset: reset
    }
}

export default useInput
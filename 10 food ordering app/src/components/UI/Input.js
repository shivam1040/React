import classes from './Input.module.css'
import React from 'react'

//way to use ref in custom conponent
const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* over here spread operater on input props ensure that every attribute value inside the prop should get mapped to input's attribute, like props.input can be {type: "text"} then react will map text to type attribute of this input tag */}
            {/* now this ref comes from where this componenent is being used, so in this case MealItemForm */}
            <input ref={ref} id={props.input.id} {...props.input}/>
           </div>
})

export default Input
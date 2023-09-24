import {useRef, useContext} from 'react'
import classes from './NewTodo.module.css'
import { TodosContext } from '../store/todos-context'

//way to declare function as props attribute
const NewTodo: React.FC = () => {
    //passing null since there's no default value or connected to any ecsisitong htmlinputtype element
    const todosContext = useContext(TodosContext)
    const textRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const entered = textRef.current!.value

        if(entered.trim().length === 0)
            return
        // props.onAddTodo(entered)
        todosContext.addTodo(entered)
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Text</label>
        {/* this ref needs to be explicityly types as to what kind of element or entitiy it is referring to, see the ref init above */}
        <input type="text" id="text" ref={textRef}></input>
        <button>Add</button>
    </form>
}

export default NewTodo
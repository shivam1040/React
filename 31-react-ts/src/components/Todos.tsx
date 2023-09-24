//this react React.FC means that this var is react functional componenent which is easy for auto completion
//a generic definition so that final props also includes what we expect out of props including the children attrib

import Todo from "../models/todo"
import TodoItem from "./TodoItem"
import classes from './Todos.module.css'
import React, {useContext} from "react"
import { TodosContext } from "../store/todos-context"

//React.FC<{items?: string[]}> question mark is placed when we want the expected attrib to be optional
const Todos: React.FC = () => {
    const todosContext = useContext(TodosContext)

    return <ul className={classes.todos}>
        {/* bind creates a function of exact same definition but with extra params, useful in scenarios where we don't wanna define params in every componenents's function definition */}
        {/* {props.items.map(i => <TodoItem key={i.id} text={i.text} onRemoveTodo={props.onRemoveTodo.bind(null, i.id)}></TodoItem>)} */}
        {todosContext.items.map(i => <TodoItem key={i.id} text={i.text} onRemoveTodo={todosContext.removeTodo.bind(null, i.id)}></TodoItem>)}
    </ul>
}

export default Todos

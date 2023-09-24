//other attribs like key and children are automatically added to the final prop when using this generic type var
//see Todos.tsx, how key is passed
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
}

export default TodoItem
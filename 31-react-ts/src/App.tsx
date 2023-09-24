import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import {useState} from 'react'
import TodosContextProvider from './store/todos-context';

function App() {
  //way to define type of state with default empty array value
  // const [todos, setTodos] = useState<Todo[]>([])
  // const addToDoHandler = (entered: string) => {
  //   setTodos((prev) => {
  //     return prev.concat(new Todo(entered))
  //   })
  // }
  // const removeTodoHandler = (id: string) => {
  //   setTodos((prev) => {
  //     return prev.filter(t => t.id!==id)
  //   })
  // }

  return (
    //commenting all prop based  declarations to use react context in TS 
    // <div>
      <TodosContextProvider>
      {/* <NewTodo onAddTodo={addToDoHandler}></NewTodo> */}
      <NewTodo></NewTodo>
      {/* <Todos items={todos} onRemoveTodo={removeTodoHandler}></Todos> */}
      <Todos></Todos>
      </TodosContextProvider>
    // </div>
  );
}

export default App;
import {Todo} from "./index"

const ShowTodoList = ({ todos, setTodos, switch_text}) => {
  const new_todos = todos.filter((todo) => todo.check === switch_text);
  return (
    
    new_todos.map((todo) => <Todo key={todo.id}
    todos={todos} 
    todo={todo} 
    setTodos={setTodos}
    switch_text={switch_text}
    />)
  )
}

export default ShowTodoList

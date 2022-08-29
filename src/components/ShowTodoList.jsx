import Todo from "./Todo"

const ShowTodoList = ({ todos, setTodos, switchText}) => {
  const new_todos = todos.filter((todo) => todo.check === switchText);
  return (
    new_todos.map((todo) => <Todo key={todo.id}
    todos={todos} 
    todo={todo} 
    setTodos={setTodos}
    switchText={switchText}
    />)
  )
}

export default ShowTodoList

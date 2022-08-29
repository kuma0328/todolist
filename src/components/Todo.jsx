import { Edit, Complete, Delete } from "./Button/index"

const Todo = ({ todos, todo, setTodos, switchText }) => {
  return (
    <div className="flex mb-4 items-center border-b-4 py-4">
      <Edit 
      todo={todo}
      todos={todos}
      setTodos={setTodos}
      />
      <Complete 
      todo={todo}
      todos={todos}
      setTodos={setTodos}
      switchText={switchText}
      />
      <Delete 
      todo={todo}
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  )
}

export default Todo

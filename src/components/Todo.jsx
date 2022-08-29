import { Edit, Complete, Delete } from "./Button/index"

const Todo = ({ todos, todo, setTodos, switchText}) => {
  return (
    <div className="flex flex-row py-6 text-xl border-b-4">
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

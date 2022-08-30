import { useState } from "react";
import { History, Add } from "./Button/index"
import ShowTodoList from "./ShowTodoList"

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [switchText, setSwitchText] = useState(true);

  return (
    <div>
      <Add 
      setTodos={setTodos}
      />
      <History
      switchText={switchText}
      setSwitchText={setSwitchText}
      />
      <ShowTodoList
      todos={todos}
      setTodos={setTodos}
      switchText={switchText}
      />
    </div>
  )
}

export default Todolist

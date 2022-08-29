import { useState } from "react";
import { History, Add } from "./Button/index"

const Todolists = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Add 
      setTodos={setTodos}
      />
      <History
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  )
}

export default Todolists

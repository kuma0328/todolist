import { useState, useRef} from "react"
import { ShowTodoList } from "./index"
import { v4 as uuidv4 } from "uuid"

const Todolists = () => {

  const [todos, setTodos] = useState([]);
  const [switch_text, set_switch_text] = useState(true);

  const todoNameRef = useRef();
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id : uuidv4(), name : name, check : true}];
    });
    todoNameRef.current.value = null;
  };

  const handleHistory = () => {
    const tmp_switch = switch_text;
    set_switch_text(!tmp_switch);
  };

  return (
    <div>
      <div className="text-2xl">
        <input type="text" ref={todoNameRef} placeholder="タスクを入力してください" className="border border-black"/>
        <button onClick={handleAddTodo} className="hover:opacity-50 pl-1 pr-1 border border-black">
          追加</button>
      </div>
      <div className="text-xl flex justify-center py-12 border-b-4 border-slate-500">
        <button
        onClick={handleHistory}
        ><div> {
          switch_text ? <div className="px-2 py-2 text-blue-600 hover:opacity-50 border border-blue-600">履歴 OFF</div> : 
          <div className=" px-2 py-2 text-red-600 hover:opacity-50 border border-red-600">履歴 ON</div>
          }
          </div></button>
      </div>
      <ShowTodoList 
      todos={todos}
      setTodos={setTodos}
      switch_text={switch_text}
      />
    </div>
  )
}

export default Todolists

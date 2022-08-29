import { v4 as uuidv4 } from "uuid"
import { useRef } from "react"

const Add = ({setTodos}) => {
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id : uuidv4(), name : name, check : true}];
    });
    todoNameRef.current.value = null;
  };

  return (
    <>
      <div className="text-2xl">
        <input type="text" ref={todoNameRef} placeholder="タスクを入力してください" className="border border-black"/>
        <button onClick={handleAddTodo} className="hover:opacity-50 pl-1 pr-1 border border-black">
          追加</button>
      </div>
    </>
  )
}

export default Add

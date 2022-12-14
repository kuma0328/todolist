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
      <div className="mb-4 flex mt-4">
        <input type="text" ref={todoNameRef} placeholder="Add Todo" 
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"/>
        <button onClick={handleAddTodo} 
        className="flex-no-shrink p-2 border-2 rounded text-red-800 border-gray-200 hover:text-white hover:bg-gray-300">
          Add</button>
      </div>
    </>
  )
}

export default Add

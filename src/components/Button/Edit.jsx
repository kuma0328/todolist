import React, { useState, useRef } from "react";
import ShowText from "../ShowText";

const Edit = ({ todo, todos, setTodos, switchText }) => {
  const [edit, setEdit] = useState(false);
  const todoNameRef = useRef();

  const handleChangeText = () => {
    const new_Todos = [...todos];
    const new_todo = new_Todos.find((Todo) => Todo === todo)
    new_todo.name = todoNameRef.current.value;
    setTodos(new_Todos);
    handleEdit();
  };

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <>
      <button onClick={handleEdit} 
      className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">
        Edit</button>
          <div>
          { edit ? 
          <React.Fragment>
            <div className="flex flex-row">
            <input type="text" name="" id="" ref={todoNameRef} placeholder={todo.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            />
            <button onClick={handleChangeText}
            className="flex-no-shrink border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            >EditDone
            </button>
            </div>
          </React.Fragment>
          :
          <ShowText 
          switchText={switchText}
          text={todo.name}
          />
      }</div>
    </>
  )
}

export default Edit

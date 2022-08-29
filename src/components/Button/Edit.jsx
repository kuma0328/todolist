import React, { useState, useRef } from "react";

const Edit = ({ todo, todos, setTodos }) => {
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
      <button onClick={handleEdit} className="border border-black hover:opacity-50 px-1">編集</button>
        <div className="px-2"></div>
          <div>
          { edit ? 
          <React.Fragment>
            <input type="text" name="" id="" ref={todoNameRef} placeholder={todo.name}/>
            <button onClick={handleChangeText} className="border border-black hover:opacity-50 px-1"
            >編集完了
            </button>
          </React.Fragment>
          :
          <div>{todo.name}</div>
          }</div>
      <div className="px-2"></div>
    </>
  )
}

export default Edit

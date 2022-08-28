import React, { useState, useRef } from "react";

const Todo = ({ todos, todo, setTodos, switch_text}) => {
  const [edit, setEdit] = useState(false);
  const todoNameRef = useRef();
  
  const handleCheck = () => {
    const new_Todos = [...todos];
    const new_todo = new_Todos.find((Todo) => Todo === todo)
    new_todo.check = false;
    setTodos(new_Todos);
  };

  const handleClear = () => {
    const new_Todos = todos.filter((Todo) => Todo !== todo);
    setTodos(new_Todos);
  };

  const handleEdit = () => {
    const new_edit = edit;
    setEdit(!new_edit);
  };

  const handleChangeText = () => {
    const new_Todos = [...todos];
    const new_todo = new_Todos.find((Todo) => Todo === todo)
    new_todo.name = todoNameRef.current.value;
    setTodos(new_Todos);
    handleEdit();
  };
  return (
    <div className="flex flex-row py-6 text-xl border-b-4">
      <button onClick={handleEdit} className="border border-black hover:opacity-50 px-1">編集</button>
      <div className="px-2"></div>
      <div>{ edit ? 
        <React.Fragment>
          <input type="text" name="" id="" ref={todoNameRef} placeholder={todo.name}/>
          <button onClick={handleChangeText} className="border border-black hover:opacity-50 px-1"
          >編集完了</button>
        </React.Fragment>
        : 
        <div>{todo.name}</div>
      }</div>
      <div className="px-2"></div>
      <div>{ switch_text ? 
      <button onClick={handleCheck} className="border border-black hover:opacity-50 px-1"
      >完了</button> : <div></div>
      }</div>
      <div className="px-2"></div>
      <button onClick={handleClear} className="border border-black hover:opacity-50 px-1"
      >削除</button>
    </div>
  )
}

export default Todo


const Complete = ({ todo, todos, setTodos, switchText }) => {
  const handleCheck = () => {
    const new_Todos = [...todos];
    const new_todo = new_Todos.find((Todo) => Todo === todo)
    new_todo.check = false;
    setTodos(new_Todos);
  };

  return (
    <>
      <div>{ switchText ? 
      <button onClick={handleCheck} className="border border-black hover:opacity-50 px-1"
      >完了</button> : <div></div>
      }</div>
      <div className="px-2"></div>
    </>
  )
}

export default Complete

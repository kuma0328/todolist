
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
      <button onClick={handleCheck} 
      className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
      >Done</button> : <div></div>
      }</div>
    </>
  )
}

export default Complete

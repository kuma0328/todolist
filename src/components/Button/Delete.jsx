
const Delete = ({ todo, todos, setTodos }) => {
  const handleClear = () => {
    const new_Todos = todos.filter((Todo) => Todo !== todo);
    setTodos(new_Todos);
  };

  return (
    <>
      <button onClick={handleClear}
      className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-200 hover:text-white hover:bg-red-200"
      >Remove</button>
    </>
  )
}

export default Delete


const Delete = ({ todo, todos, setTodos }) => {
  const handleClear = () => {
    const new_Todos = todos.filter((Todo) => Todo !== todo);
    setTodos(new_Todos);
  };

  return (
    <>
      <button onClick={handleClear}
      className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
      >Remove</button>
    </>
  )
}

export default Delete

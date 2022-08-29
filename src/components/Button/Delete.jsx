
const Delete = ({todo, todos, setTodos}) => {
  const handleClear = () => {
    const new_Todos = todos.filter((Todo) => Todo !== todo);
    setTodos(new_Todos);
  };

  return (
    <>
      <button onClick={handleClear} className="border border-black hover:opacity-50 px-1"
      >削除</button>
    </>
  )
}

export default Delete

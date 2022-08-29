import { useState } from "react";
import ShowTodoList from "../ShowTodoList"

const History = ({todos, setTodos}) => {
  const [switchText, setSwitchText] = useState(true);

  const handleHistory = () => {
    setSwitchText(!switchText);
  };

  return (
    <div>
      <div className="text-xl flex justify-center py-12 border-b-4 border-slate-500">
        <button
        onClick={handleHistory}
        ><div> {
          switchText ? <div className="px-2 py-2 text-blue-600 hover:opacity-50 border border-blue-600">履歴 OFF</div> : 
          <div className=" px-2 py-2 text-red-600 hover:opacity-50 border border-red-600">履歴 ON</div>
          }
          </div>
        </button>
      </div>
      <ShowTodoList 
      todos={todos}
      setTodos={setTodos}
      switchText={switchText}
      />
    </div>
  )
}

export default History

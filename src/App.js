import { Todolist, Title } from "./components/index"

function App() {
  return (
    <div>
      <Title />
      <div className="p-12 flex justify-center">
        <Todolist />
      </div>
    </div>
  );
}

export default App;

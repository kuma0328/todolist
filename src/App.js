import { Todolist, Title } from "./components/index"

function App() {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <Title />
        <Todolist />
      </div>
    </div>
  );
}

export default App;

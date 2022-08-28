import {Todolists} from './components/index' 

function App() {
  return (
    <div>
      <h1 className="text-8xl pl-6 pt-4 flex justify-center">Todo List</h1>
      <div className="p-12 flex justify-center">
        <Todolists />
      </div>
    </div>
  );
}

export default App;

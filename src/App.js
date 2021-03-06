import "./App.css";
import TableOfData from "./components/DataLayer/TableOfData";
import FormAddTask from "./components/FormLayer/FormAddTask";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React is here!</h1>
      </div>
      <TableOfData />
      <FormAddTask />
    </div>
  );
}

export default App;

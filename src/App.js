import "./App.css";
import Todo from "./components/todos/Todo";
import Card from "./components/UI/Card";

function App() {
  return (
    <div className="App">
      <Card>
        <Todo />
      </Card>
    </div>
  );
}

export default App;

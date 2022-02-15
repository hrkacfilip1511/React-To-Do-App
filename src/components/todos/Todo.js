import { useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  COMPLETE_TODO: "complete-todo",
  DELETE_TODO: "delete-todo",
};
function reducer(todos, action) {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, setNewToDo(action.connection.name)];
  }
  if (action.type === ACTIONS.COMPLETE_TODO) {
    return todos.map((todo) => {
      if (todo.id === action.connection.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  }
  if (action.type === ACTIONS.DELETE_TODO) {
    return todos.filter((todo) => todo.id !== action.connection.id);
  }
}
function setNewToDo(todo) {
  return {
    id: Math.random() * 10,
    todoItem: todo,
    complete: false,
  };
}

function Todo() {
  const [isSuccess, setSuccessfully] = useState(true);
  const [todos, dispatcher] = useReducer(reducer, []);
  const [todo_item, setTodoItem] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    dispatcher({ type: ACTIONS.ADD_TODO, connection: { name: todo_item } });
    setTodoItem("");
    setSuccessfully(true);
  }
  function errorHandler(e) {
    e.preventDefault();
    alert("Insert something");
    setSuccessfully(false);
  }
  return (
    <div>
      <form className={classes.form}>
        <label>Enter ToDo: </label>
        <input
          className={!isSuccess ? classes.error : classes.input}
          type="text"
          value={todo_item}
          onChange={(e) => setTodoItem(e.target.value)}
        />
      </form>
      <div className={classes.todos}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} props={todo} dispatch={dispatcher} />;
        })}
      </div>
      <button
        className={classes.addBtn}
        onClick={todo_item.trim().length === 0 ? errorHandler : submitHandler}
      >
        +
      </button>
    </div>
  );
}

export default Todo;

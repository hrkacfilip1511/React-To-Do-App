import { ACTIONS } from "./Todo";
import classes from "./TodoItem.module.css";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
function TodoItem({ props, dispatch }) {
  function deleteItemHandler() {
    dispatch({ type: ACTIONS.DELETE_TODO, connection: { id: props.id } });
  }
  function completeItemHandler() {
    dispatch({
      type: ACTIONS.COMPLETE_TODO,
      connection: { id: props.id },
    });
  }

  return (
    <div className={classes.item}>
      <button className={classes.complete} onClick={completeItemHandler}>
        <FaCheck />
      </button>
      <span
        style={{
          textDecoration: props.complete ? "line-through" : "none",
          textDecorationColor: props.complete ? "green" : "none",
          textDecorationThickness: props.complete ? "3px" : "0px",
          background: props.complete ? "black" : "rgb(124, 118, 110)",
        }}
      >
        {props.todoItem}
      </span>
      <button className={classes.trash} onClick={deleteItemHandler}>
        <FaTrash />
      </button>
    </div>
  );
}
export default TodoItem;

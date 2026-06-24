import { useTaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();

  const editTask = () => {
    const newText = prompt("Edit Task", task.text);

    if (!newText) return;

    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: task.id,
        text: newText,
      },
    });
  };

  return (
    <li className={task.completed ? "completed" : ""}>
      
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            dispatch({
              type: "TOGGLE_TASK",
              payload: task.id,
            })
          }
        />

        <span>{task.text}</span>
      </div>

      <div className="button-group">
        <button onClick={editTask}>Edit</button>

        <button
          onClick={() =>
            dispatch({
              type: "DELETE_TASK",
              payload: task.id,
            })
          }
        >
          Delete
        </button>
      </div>

    </li>
  );
}

export default TaskItem;
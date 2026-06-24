import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskInput() {

  const [task, setTask] = useState("");

  const { dispatch } = useTaskContext();

  const addTask = () => {

    if (!task.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: task
    });

    setTask("");
  };

  return (
    <div className="input-section">

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
      />

      <button onClick={addTask}>
        Add Task
      </button>

    </div>
  );
}

export default TaskInput;
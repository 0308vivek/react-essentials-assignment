import { useTaskContext } from "../context/TaskContext";

function TaskSummary() {

  const { state } = useTaskContext();

  const completed =
    state.tasks.filter(
      task => task.completed
    ).length;

  return (
    <div className="summary">

      <h3>
        Total Tasks: {state.tasks.length}
      </h3>

      <h3>
        Completed Tasks: {completed}
      </h3>

    </div>
  );
}

export default TaskSummary;
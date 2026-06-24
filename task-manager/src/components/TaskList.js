import { useTaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {

  const { state } = useTaskContext();

  return (
    <ul>

      {state.tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}

    </ul>
  );
}

export default TaskList;
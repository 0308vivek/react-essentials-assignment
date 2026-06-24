import {
  createContext,
  useContext,
  useReducer
} from "react";

import {
  taskReducer,
  initialState
} from "../reducer/taskReducer";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    taskReducer,
    initialState
  );

  return (
    <TaskContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () =>
  useContext(TaskContext);
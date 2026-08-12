import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import TaskReducer from "../Reducers/TaskReducer";
let TaskContext = createContext({
  tasks: [],
  achievedTasks: [],
  notAchievedTasks: [],
  addTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  handleCompleted: () => {},
});
export const TaskProvider = ({ children }) => {
  console.log("TaskReducer :", TaskReducer);
  const [tasks, dispatch] = useReducer(TaskReducer, []);

  useEffect(() => {
    dispatch({ type: "SET_TASKS" });
  }, []);

  function addTask(taskName) {
    dispatch({ type: "ADD_TASK", payload: { taskName } });
  }

  function deleteTask(id) {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  }
  function editTask(id, newTitle) {
    dispatch({ type: "EDIT_TASK", payload: { id, newTitle } });
  }

  function handleCompleted(id, isCompleted) {
    dispatch({ type: "HANDLE_COMPLETED", payload: { id, isCompleted } });
  }
  const achievedTasks = useMemo(() => {
    console.log("calling achievedTasks filter");
    return tasks.filter((task) => task.isComplete);
  }, [tasks]);
  const notAchievedTasks = useMemo(() => {
    console.log("calling notAchievedTasks filter");
    return tasks.filter((task) => !task.isComplete);
  }, [tasks]);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        achievedTasks,
        notAchievedTasks,
        addTask,
        deleteTask,
        editTask,
        handleCompleted,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export const useTaskContext = () => {
  return useContext(TaskContext);
};

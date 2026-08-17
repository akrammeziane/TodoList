import { createContext, useContext, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux-features/todosSlice";

let TaskContext = createContext({
  // achievedTasks: [],
  // notAchievedTasks: [],
});
export const TaskProvider = ({ children }) => {
  const tasks = useSelector((state) => state.todos.todos) || [];
  console.log("tasks in TaskProvider:", tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos());
  }, []);

  // const achievedTasks = useMemo(() => {
  //   console.log("calling achievedTasks filter");
  //   return tasks.filter((task) => task.isComplete);
  // }, [tasks]);
  // const notAchievedTasks = useMemo(() => {
  //   console.log("calling notAchievedTasks filter");
  //   return tasks.filter((task) => !task.isComplete);
  // }, [tasks]);
  return (
    <TaskContext.Provider
      value={
        {
          // achievedTasks,
          // notAchievedTasks,
        }
      }
    >
      {children}
    </TaskContext.Provider>
  );
};
export const useTaskContext = () => {
  return useContext(TaskContext);
};

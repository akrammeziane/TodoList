import { createContext, useReducer, useContext } from "react";

const TaskReducerContext = createContext({});
const TaskDispatchContext = createContext({});

export default function TaskReducer(currentTasks, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: Date.now(),
        title: action.payload.taskName,
        isComplete: false,
        buttonColor: "white",
      };
      const updatedTasks = [newTask, ...currentTasks];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "DELETE_TASK": {
      const updatedTasks = currentTasks.filter(
        (task) => task.id !== action.payload.id,
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "EDIT_TASK": {
      const updatedTasks = currentTasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, title: action.payload.newTitle };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "HANDLE_COMPLETED": {
      const updatedTasks = currentTasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            isComplete: action.payload.isCompleted,
            buttonColor: action.payload.isCompleted ? "green" : "white",
          };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    }
    case "SET_TASKS": {
      console.log("useEffect called");
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      return storedTasks;
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}
export const TaskReducerProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  return (
    <TaskReducerContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskReducerContext.Provider>
  );
};
export function useTaskReducerContext() {
  return useContext(TaskReducerContext);
}
export function useTaskDispatchContext() {
  return useContext(TaskDispatchContext);
}

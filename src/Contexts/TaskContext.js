import { createContext , useContext , useState , useEffect , useMemo} from "react";
let TaskContext = createContext({
  tasks: [],
  achievedTasks: [],
  notAchievedTasks: [],
  addTask: () => {},
  deleteTask: () => {},
  editTask: () => {},
  handleCompleted: () => {},
});
export const TaskProvider = ({children}) => {

  const [tasks, setTasks] = useState([]);
    useEffect(() => {
      console.log("useEffect called");
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
    }, []);
  
    function addTask(taskName) {
      const newTask = {
        id: Date.now(),
        title: taskName,
        isComplete: false,
        buttonColor: "white",
      };
      const updatedTasks = [newTask, ...tasks];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  
    function deleteTask(id) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    function editTask(id, newTitle) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, title: newTitle };
        }
        return task;
      });
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  
    function handleCompleted(id, isCompleted) {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isComplete: isCompleted,
            buttonColor: isCompleted ? "green" : "white",
          };
        }
        return task;
      });
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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


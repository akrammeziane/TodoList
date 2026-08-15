import TodoElement from "../TodoList/TodoElement";
import { useTaskContext } from "../Contexts/TaskContext";
import { useSelector } from "react-redux";
import { useMemo } from "react";
// import { useContext } from "react";
export default function AchievedTasks() {
  const tasks = useSelector((state) => state.todos.todos) || [];
  console.log("tasks in AchievedTasks:", tasks);
  const achievedTasks = useMemo(() => {
    console.log("calling achievedTasks filter");
    return tasks.filter((task) => task.isComplete);
  }, [tasks]);
  // console.log(useTaskContext());
  // const { achievedTasks = [] } = useTaskContext() || {};
  // console.log("achievedTasks", achievedTasks);
  const todoListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    marginTop: "20px",
  };

  const TaskList = achievedTasks.map((task) => {
    if (!task || task.title.trim() === "") return null;
    return (
      <TodoElement
        key={task.id}
        id={task.id}
        taskName={task.title}
        status={task.isComplete}
        buttonColor={task.buttonColor}
      />
    );
  });
  return (
    <div style={todoListStyle} dir="rtl">
      {TaskList.slice(0, 3)}
    </div>
  );
}
